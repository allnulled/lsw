// 1. Bundle js:
require(__dirname + "/../core/htmlbundler.js").bundle({
  list: __dirname + "/../distribution/bundlelist.js.js",
  module: true,
  id: "Litestarter_app",
  output: __dirname + "/../../../src/assets/distribution.js",
  ignore: [],
  wrap: false,
});

// 2. Bundle css:
require(__dirname + "/../core/htmlbundler.js").bundle({
  list: __dirname + "/../distribution/bundlelist.css.js",
  module: false,
  id: "Litestarter_app",
  output: __dirname + "/../../../src/assets/distribution.css",
  ignore: [],
  wrap: false,
});

// 3. Export assets, index and dist files to dist folder:
const utils = require(__dirname + "/../../utils/utils.js");
utils.copyDirectorySync(__dirname + "/../../../src/assets", __dirname + "/../../../docs/assets");
utils.copyDirectorySync(__dirname + "/../../../src/modules", __dirname + "/../../../docs/modules");
utils.copyFilesOnlySync(__dirname + "/../../../src", __dirname + "/../../../docs");