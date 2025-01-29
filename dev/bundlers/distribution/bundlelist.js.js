const basepath = require("path").resolve(__dirname + "/../../../src/lsw-framework");

module.exports = [
  `${basepath}/src/others/vue/vue2.min.js`,
  `${basepath}/src/apis/lsw-ensurer/ensure.js`,
  `${basepath}/src/apis/lsw-tester/universal-tester.js`,
  `${basepath}/src/apis/lsw-circuiter/async-circuit.js`,
  `${basepath}/src/apis/lsw-commander/url-command.js`,
  `${basepath}/src/apis/lsw-trigger/triggers-class.js`,
  `${basepath}/src/apis/lsw-database/browsie.unbundled.js`,
  // `${basepath}/src/apis/lsw-importer/importer.js`,
  `${basepath}/src/apis/lsw-logger/superlogger.unbundled.js`,
  `${basepath}/src/apis/lsw-returner/controlled-function.js`,
  `${basepath}/src/apis/lsw-store/dist/store.unbundled.js`,
  `${basepath}/src/apis/lsw-timer/timeformat.js`,
  `${basepath}/src/apis/lsw-utils/lsw-utils.js`,
  `${basepath}/src/directives/v-descriptor/v-descriptor.js`,
  `${basepath}/src/directives/v-focus/v-focus.js`,
  `${basepath}/src/lsw-components.js`,
  `${basepath}/src/lsw-api.js`,
];