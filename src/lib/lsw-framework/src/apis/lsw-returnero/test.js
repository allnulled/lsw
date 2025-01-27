require(__dirname + "/controlled-function.js");

describe("ControlledFunction API Test", function () {

  it("can work as expected with ReturnControl class", async function () {
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
      const output1 = (function () {
        console.log("Happens 1!");
        if (control.pipe("output", ["step1", "step2", "step3"])) {
          return control.solved("output");
        }
        console.log("No happens!");
      })();

      if (output1 === "step 2 Resolved") {
        console.log("Happens 3!");
      }

      const output2 = (function () {
        console.log("Happens 4!");
        if (control.pipe("output2", ["stepA", "stepB", "stepC"])) {
          return control.solved("output2");
        }
        console.log("No happens!");
      })();

      if (output2 === "step B Resolved") {
        console.log("Happens 6!");
      }
    };
    controlledFunction();
  });

  it("can work as expected with MutateControl class", async function () {
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
        if (c.properties.cicles === 0) {
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
        while (!control.pipe("output", ["step1"])) {
          // @TOINJECT: intercycle code
          console.log("Round: " + (++index));
        }
      }
      console.log("Finished cicles");
    };
    console.log(controlledFunction());
  });

});
