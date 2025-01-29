(function (factory) {
  const mod = factory();
  if (typeof window !== 'undefined') {
    window['LswCycler'] = mod;
  }
  if (typeof global !== 'undefined') {
    global['LswCycler'] = mod;
  }
  if (typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function () {

  const noop = () => { };

  class LswCyclerSet {
    constructor(value) {
      this.value = value;
    }
  }

  class LswCyclerReturn {
    constructor(value) {
      this.value = value;
    }
  }

  class LswCyclerReturner {
    constructor(value) {
      if(typeof value !== "function") {
        throw new Error("Required argument «value» to be a function on «LswCyclerReturner.constructor»");
      }
      this.value = value;
    }
  }

  class LswCycler {

    static Return = LswCyclerReturn;
    static Returner = LswCyclerReturner;
    static Set = LswCyclerSet;

    static returner(value) {
      return new this.Returner(value);
    }

    static return(value) {
      return new this.Return(value);
    }

    static set(value) {
      return new this.Set(value);
    }

    constructor(obj) {
      this.obj = obj;
    }

    static from(obj) {
      return new LswCycler(obj);
    }

    async run(steps, parameters) {
      let original = [];
      let output = original;
      Iterate_cycle:
      for (let j = 0; j < steps.length; j++) {
        let step = steps[j];
        let fn = this.obj[step];
        if (typeof fn !== "function") {
          throw new Error("Required step «" + step + "» to be a function on round " + j + " on «LswCycler.run»");
        }
        const result = await fn.call(this.obj, parameters);
        Apply_intercycle_signals: {
          if (result instanceof this.constructor.Set) {
            output = await result.value;
          } else if (result instanceof this.constructor.Return) {
            return result.value;
          } else if (result instanceof this.constructor.Returner) {
            return result.value(output, original);
          }
        }
        Append_result_if_not_changed_output: {
          original.push(result);
        }
      }
      return output;
    }

  }

  return LswCycler;

});