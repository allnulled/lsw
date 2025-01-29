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