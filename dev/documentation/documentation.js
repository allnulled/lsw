const main = async function () {
  try {
    const documentator_api = require(__dirname + "/documentator/src/documentator.api.js");
    documentator_api.parse_directory(__dirname + "/../../src", {
      pipes: [
        "generate_html",
      ],
      ignored: [
        ".git",
        "assets",
        "importer.js",
        "lsw-framework/src/apis/lsw-circuiter/beautifier.js",
        "lsw-framework/src/apis/lsw-circuiter/beautifier.min.js",
        "lsw-framework/src/apis/lsw-database/browsie.bundled.js",
        "lsw-framework/src/apis/lsw-filesystem/lsw-filesystem.bundled.js",
        "lsw-framework/src/apis/lsw-logger/superlogger.bundled.js",
        "lsw-framework/src/apis/lsw-reloader/node_modules",
        "lsw-framework/src/apis/lsw-store/dist",
        "lsw-framework/src/apis/lsw-tester/universal-tester.bundled.js",
        "lsw-framework/src/apis/lsw-timer/timeformat.bundled.js",
        "lsw-framework/src/apis/lsw-timer/timeformat.js",
        "lsw-framework/src/others",
        "lsw-framework/lsw-framework.js",
        "lsw-framework/lsw-framework.css",
      ],
      output_dir_html: require("path").resolve(__dirname + "/../../docs/reference"),
      scripts: []
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = main();