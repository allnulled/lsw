// 1. Bundle components:
require(__dirname + "/../core/vuebundler.js").bundle({
  list: __dirname + "/../lsw-framework/bundlelist.components.js",
  module: true,
  id: "Lsw_framework_components",
  output: __dirname + "/../../../src/lsw-framework/src/lsw-components.js",
  ignore: [],
});

// 2. Bundle js:
require(__dirname + "/../core/htmlbundler.js").bundle({
  list: __dirname + "/../lsw-framework/bundlelist.js.js",
  module: true,
  id: "Lsw_framework_js",
  output: __dirname + "/../../../src/lsw-framework/lsw-framework.js",
  ignore: [],
  wrap: false,
});

// 3. Bundle css:
require(__dirname + "/../core/htmlbundler.js").bundle({
  list: __dirname + "/../lsw-framework/bundlelist.css.js",
  module: false,
  id: "Lsw_framework_css",
  output: __dirname + "/../../../src/lsw-framework/lsw-framework.css",
  ignore: [],
  wrap: false,
});