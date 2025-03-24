const fs = require("fs");
const path = require("path");
const child_process = require("child_process");
const chai_promise = import("chai");
let expect = undefined;
let documentator_api = undefined;

describe("Documentator Test", function() {

  before(async function() {
    chai = await chai_promise;
    expect = chai.expect;
  })

  it("can rebuild the parser", async function() {
    child_process.execSync("npm run build", {
      cwd: __dirname + "/..",
      stdio: [process.stdin, process.stdout, process.stderr]
    });
  });

  it("can load the api", async function() {
    documentator_api = require(__dirname + "/../src/documentator.api.js");
  });

  it("can parse directory recursively", async function() {
    const comments = documentator_api.parse_directory(__dirname + "/examples", {
      pipes: ["generate_html"],
      output_dir_html: __dirname + "/output-html",
      scripts: []
    });
  });

});