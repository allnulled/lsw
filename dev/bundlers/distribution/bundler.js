// 1. Bundle js:
require(__dirname + "/../core/htmlbundler.js").bundle({
  list: __dirname + "/../distribution/bundlelist.js.js",
  module: true,
  id: "Litestarter_app",
  output: __dirname + "/../../../src/distribution.js",
  ignore: [],
  wrap: false,
});

// 2. Bundle css:
require(__dirname + "/../core/htmlbundler.js").bundle({
  list: __dirname + "/../distribution/bundlelist.css.js",
  module: false,
  id: "Litestarter_app",
  output: __dirname + "/../../../src/distribution.css",
  ignore: [],
  wrap: false,
});