# lsw-returner

API to return values through 1 outter function scope.

Branch of [@allnulled/controlled-function](https://github.com/allnulled/controlled-function).

Allows both:

  - The **trascendent condition/if** pattern
  - The **stuck loop/while** pattern, easying the **coliving combination** of others like:
     - The **energetical while** pattern, like a being.
     - The **timed-out while** pattern, like a shortcircuit.
     - Probably others.

## Installation

```sh
npm i -s @allnulled/lsw-returner
```

## Importation

In node.js:

```js
require("@allnulled/lsw-returner");
```

In browser:

```html
<script src="node_modules/@allnulled/lsw-returner/controlled-function.js"></script>
```

## Why interests?

The thing is to be able to create **trascendent conditions** and **energetical loops**.

## How?

El `ReturnControl` permite emitir un (signo de) `return` al controlador desde dentro del pipeo.

El `MutateControl` permite cambiar el estado del controlador (`ReturnController`) desde dentro del pipeo.

El `controller.hook(fn)` permite apendizar un middleware que el controlador (`ReturnController`) procesará después de cada step del pipeo.

El `controller.pipe(outputId, pipeNames)` lo que hace es:

 - Si algún step de la tubería returna un `MutateControl`, altera su propio `controller.properties` consecuentemente.
 - Si algún step de la tubería retorna un `ReturnControl`: devuelve `true`.
    - Establece el valor del `ReturnControl` en la `controller.results[outputId]`. Para recuperarlo, `controller.solved(outputId)`.
    - Devuelve `true`
 - Si no, devuelve `false`.

### The TRASCENDENT-IF pattern

Esto nos permite patrones como:


```js
const id = "output";
const functions = {
    stepOne() {
        console.log("step 1");
    },
    stepTwo() {
        console.log("step 2");
        return new ReturnControl("Broken in step 2");
    },
    stepThree() {
        console.log("this is not gonna happen");
    }
};
const names = ["stepOne", "stepTwo", "stepThree];
control.reset().load(functions);
// This sentence gives the functions to emit TRASCENDENT RETURNS in TRASCENDENT CONDITIONS:
if(control.pipe(id, names)) return control.solved(id);
```

De esta forma podemos rápidamente traspasar un `return` de una subllamada a la función que la llama.

Podemos crear **condiciones supertrascendentes** con **retornos trascendentes**. Porque trascienden la función de arriba.

### The STUCK-WHILE pattern

```js
control.reset();
// Iniciamos en 100 punto de energía:
control.prop({ cycles: 100 });
control.hook(c => {
    if(c.properties.cycles === 0) {
        // Implementamos la ley de no-energía:
        return new ReturnControl("No more cycles");
    }
});
control.load({
    step1(c) {
        return new MutateControl(c => {
            return {
                // Restamos 1 punto de energía en el step1:
                cycles: c.properties.cicles - 1
            };
        });
    }
});
while(!control.pipe("output", ["step1"])) {
    // @Intercycle code.
}
```

De esta forma, podemos crear **bucles energéticos**. Energéticos porque funcionan con energía, si la energía se agota, y tiene una ley implementada (que tienes que implementar, pueden ser energéticos o de otros tipos) para ello, el controlador mismo dejará de retornar `false` porque no ha habido **retornos trascendentes**, y retornará `true`, lo que rompería los bucles o desencadenaría los condicionales



**NOTA:** Cuidado, en el ejemplo llamamos `control` al `controller` porque es más lógico desde fuera de ámbito.

```js
const { ReturnController, ReturnControl, MutateControl } = ControlledFunction;
const controlledFunction = function () {

  // Creando instancia:
  const control = new ReturnController();

  // Inicializando el estado:
  control.reset();
  
  // Inicializando las propiedades:
  control.prop({
    cicles: 100
  });
  
  // Inicializando el middleware de energía:
  control.hook(c => {
    if(c.properties.cicles === 0) {
      return new ReturnControl("No more cicles");
    }
  });
  
  // Inicializando funciones:
  control.load({
    step1() {
      return new MutateControl(c => {
        return {
          cicles: c.properties.cicles - 1
        };
      });
    },
  });
  
  // Y luego puedes hacer así para crear artefactos con alcance limitado de vida:
  let index = 0;
  Ciclo_de_vida_en_repeticiones: {
    while(!control.pipe("output", ["step1"])) {
      // @TOINJECT: intercycle code
      console.log("Round: " + (++index));
    }
  }

  console.log("Finished cicles");
};
console.log(controlledFunction());
```

What is happening here?

1. `new ReturnController`. We create the basic instance of the API.
2. `reset`. We unnecessarily reset `properties` and `results` of the instance.
3. `prop`. We overwrite the `control.properties` object with new data.
4. `hook`. This is a law. We push a function in `control.middlewares` so every time a pipe step is finished, this function is going to be called (unless a previous hook returns a `new ReturnControl` instance). You are also provided with `prehook` to prepend a middleware.
5. `load`. This is the knowledge. Map of known functions. This way, we ensure *modularity* and *functional flatening*.
6. `while + !control.pipe`. This expression is key. We say `until no energy` or `while energy`, then `keep steping` + `in loop`. This is the definition of life, more or less. That is why that expression is the key.




## Usage

This is the test provided in source:

```js
require(__dirname + "/controlled-function.js");

describe("ControlledFunction API Test", function() {
  
  it("can work as expected with ReturnControl class", async function() {
    const { ReturnController, ReturnControl } = ControlledFunction;
    const controlledFunction = function () {
      const control = new ReturnController();
      // Reseteando y cargando un nuevo conjunto de funciones
      const knowledge = {
        step1() {
          return console.log("Happens 2!");
        },
        step2() {
          return new ReturnControl('step 2 Resolved');
        },
        step3() {
          return console.log("No happens!");
        },
        stepA() {
          return console.log("Happens 5!");
        },
        stepB() {
          return new ReturnControl('step B Resolved');
        },
        stepC() {
          return console.log("No happens!");
        }
      };
      control.reset().load(knowledge);
      // Pasareleamos por los pipes usando la misma instancia para invocar y para acceder:
      const output1 = (function() {
        console.log("Happens 1!");
        if (control.pipe("output", ["step1", "step2", "step3"])) {
          return control.solved("output");
        }
        console.log("No happens!");
      })();

      if(output1 === "step 2 Resolved") {
        console.log("Happens 3!");
      }

      const output2 = (function() {
        console.log("Happens 4!");
        if(control.pipe("output2", ["stepA", "stepB", "stepC"])) {
          return control.solved("output2");
        }
        console.log("No happens!");
      })();

      if(output2 === "step B Resolved") {
        console.log("Happens 6!");
      }
    };
    controlledFunction();
  });
  
  it("can work as expected with MutateControl class", async function() {
    const { ReturnController, ReturnControl, MutateControl } = ControlledFunction;
    const controlledFunction = function () {
      const control = new ReturnController();
      // Inicializando el estado:
      control.reset();
      // Inicializando las propiedades:
      control.prop({
        cicles: 100
      });
      // Inicializando el middleware de energía:
      control.hook(c => {
        if(c.properties.cicles === 0) {
          return new ReturnControl("No more cicles");
        }
      });
      // Inicializando funciones:
      control.load({
        step1() {
          return new MutateControl(c => {
            return {
              cicles: c.properties.cicles - 1
            };
          });
        },
      });
      let index = 0;
      Ciclo_de_vida_en_repeticiones: {
        while(!control.pipe("output", ["step1"])) {
          // @TOINJECT: intercycle code
          console.log("Round: " + (++index));
        }
      }
      console.log("Finished cicles");
    };
    console.log(controlledFunction());
  });

});
```


## Conclusion

Let's see in the future. But I found this pattern useful because combining only 2 middlewares, I can get these 2 artifacts, from the basic `ReturnControl` API + the `MutateControl` API. The `MutateControl` API can be powerfull with `controller.hooks`, I think.