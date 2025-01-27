(function (factory) {
  const mod = factory();
  if (typeof window !== 'undefined') {
    window['ControlledFunction'] = mod;
  }
  if (typeof global !== 'undefined') {
    global['ControlledFunction'] = mod;
  }
  if (typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function () {

  const ReturnControl = class {
    constructor(value) {
      this.value = value;
    }
  };

  const MutateControl = class {
    constructor(mutator = {}) {
      this.mutator = mutator;
    }
  };

  const ReturnController = class {
    static create(...args) {
      return new this(...args);
    }

    constructor() {
      this.results = new Map();
      this.functions = new Map();
      this.middlewares = [];
      this.properties = new Map();
    }

    prehook(middleware) {
      this.middlewares.unshift(middleware);
      return this;
    }

    hook(middleware) {
      this.middlewares.push(middleware);
      return this;
    }

    unhook(middleware) {
      this.middlewares = this.middlewares.filter(m => m !== middleware);
      return this;
    }

    prop(properties = {}) {
      Object.assign(this.properties, properties);
      return this;
    }

    hasProp(id) {
      return this.properties.has(id);
    }

    getProp(id, defaultValue = undefined) {
      if (!this.properties.has(id)) {
        return defaultValue;
      }
      return this.properties.get(id);
    }

    setProp(id, value) {
      this.properties.set(id, value);
      return this;
    }

    load(functions) {
      this.functions = new Map(Object.entries(functions));
      return this;
    }

    solved(name) {
      return this.results.get(name);
    }

    pipe(outputName, functionNames, parameters = []) {
      for (let fnName of functionNames) {
        const fnCallback = this.functions.get(fnName);
        if (fnCallback) {
          const result = fnCallback(...parameters);
          if (this.processResult(result, outputName)) {
            return this.solved(outputName);
          }
        }
        for (const middleware of this.middlewares) {
          const result = middleware(this);
          if (this.processResult(result, outputName)) {
            return this.solved(outputName);
          }
        }
      }
      return null;
    }

    processResult(result, outputName) {
      if (result instanceof ReturnControl) {
        this.results.set(outputName, result.value);
        return true;
      } else if (result instanceof MutateControl) {
        const mutator = result.mutator;
        if (typeof mutator === "function") {
          const mutatorResult = mutator(this);
          if (typeof mutatorResult === "object") {
            Object.assign(this.properties, mutatorResult);
          } else if (mutatorResult !== undefined) {
            throw new Error(
              `MutateControl's function mutator must return an object or undefined, found: ${typeof mutatorResult}`
            );
          }
        } else if (typeof mutator === "object") {
          Object.assign(this, mutator);
        } else {
          throw new Error(
            `MutateControl's mutator must be a function or object, found: ${typeof mutator}`
          );
        }
      }
      return false;
    }

    reset() {
      this.results.clear();
      this.properties.clear();
      return this;
    }
  };

  const ControlledFunction = {
    MutateControl,
    ReturnControl,
    ReturnController,
  };

  ControlledFunction.default = ControlledFunction;

  return ControlledFunction;
});
