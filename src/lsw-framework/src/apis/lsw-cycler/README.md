# lsw-cycler

Cycler tool for LSW.

## Installation

```sh
npm i -s @allnulled/lsw-cycler
```

## Importation

From node.js:

```js
require("@allnulled/lsw-cycler");
```

From html:

```js
<script src="node_modules/@allnulled/lsw-cycler/lsw-cycler.js"></script>
```

## API

You can find now on `window.LswCycler` or `global.LswCycler`:

```js
LswCycler.return(value:any);
LswCycler.returner(callback:Function); // Receives: output:Array|any, original:Array
LswCycler.set(value:any);
const cycler = LswCycler.from(object:Object);
await cycler.run(steps:Array<String>, parameters:any);
```

## Usage

This is the test:

```js
require(__dirname + "/lsw-cycler.js");

describe("LSW Cycler API Test", function (it) {

  it("can do cycles through objects", async function () {
    const result = await LswCycler.from({
      stepZero(firstValue) {
        return firstValue; // 1000, on run, down.
      },
      stepOne() {
        return 1; // 1
      },
      async stepTwo() {
        return await new Promise((resolve, reject) => {
          setTimeout(() => {
            return resolve(10); // 10
          }, 200);
        })
      },
      stepThree() {
        return 100; // 100
      },
      sum() {
        return LswCycler.returner((output) => {
          return output.reduce((out, item) => {
            return out += item; // We sum all of them
          }, 0);
        });
      }
    }).run(["stepZero", "stepOne", "stepTwo", "stepThree", "sum"], 1000);
    ensure({ result }).is(1111); // And expect 1111
  });

  it("can use return", async function () {
    const result = await LswCycler.from({
      useReturn() {
        return LswCycler.return("ok");
      },
      noReached() {
        throw new Error("This should not be reached by design");
      }
    }).run(["useReturn", "noReached"]);
    ensure({ result }).is("ok");
  });

  it("can use set", async function () {
    const result = await LswCycler.from({
      useSet() {
        return LswCycler.set(10);
      },
      noUseSet() {
        return 1000;
      },
    }).run(["useSet", "noUseSet"], 0);
    ensure({ result }).is(10);
  });

  it("can use returner", async function () {
    const result = await LswCycler.from({
      nothing() {
        return 1000;
      },
      useSet() {
        return LswCycler.set(10);
      },
      useReturner(init) {
        return LswCycler.returner(function(output) {
          return output + init + 1; // 10 (=output) + 100 + 1 === 111
        });
      },
    }).run(["nothing", "useSet", "useReturner"], 100);
    ensure({ result }).is(111);
  });

});
```

## Usage

Use `LswCycler.from(object).run(steps, parameter)` to run sequences.

Use in any `step` method defined on `object` object:

  - `return LswCycler.return(value:any)` to return a value from the cycle.
  - `return LswCycler.returner(callback:Function)` to return a value from the cycle using a function that receives: `output` and `original`.
  - `return LswCycler.set(value:any)` to change the value of `output`, which by default is `original`, which is an array that accumulates the results of the methods of the sequence (or cycle), but they are defined on `run`, so they cannot be reached from these methods.



## Teoría

Esto es para:

- **Cerrar algoritmos en objetos.** Cualquier variable o método intermedio puede vivir en la clase.
- **Reproducir secuencias.** Crear formas de llamar a los métodos propios en cadena de forma estandarizada y reusable.
- **Permitir interrupción de secuencias.** La **interrupción de secuencia** se refiere a que cualquier método de la secuencia puede hacer que la secuencia se rompa.

