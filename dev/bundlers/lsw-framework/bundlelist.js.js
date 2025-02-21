const basepath = require("path").resolve(__dirname + "/../../../src/lsw-framework");

module.exports = [
  `${basepath}/src/others/vue/vue2.min.js`,
  `${basepath}/src/apis/lsw-ensurer/ensure.js`,
  `${basepath}/src/apis/lsw-tester/universal-tester.js`,
  `${basepath}/src/apis/lsw-circuiter/async-circuit.js`,
  `${basepath}/src/apis/lsw-commander/url-command.js`,
  `${basepath}/src/apis/lsw-trigger/triggers-class.js`,
  `${basepath}/src/apis/lsw-database/browsie.unbundled.js`,
  `${basepath}/src/apis/lsw-importer/importer.js`,
  `${basepath}/src/apis/lsw-logger/superlogger.unbundled.js`,
  `${basepath}/src/apis/lsw-returner/controlled-function.js`,
  `${basepath}/src/apis/lsw-store/dist/store.unbundled.js`,
  `${basepath}/src/apis/lsw-timer/timeformat.bundled.js`,
  `${basepath}/src/apis/lsw-cycler/lsw-cycler.js`,
  `${basepath}/src/apis/lsw-compromiser/lsw-compromiser.js`,
  `${basepath}/src/apis/lsw-utils/lsw-utils.js`,
  `${basepath}/src/apis/lsw-filesystem/ufs-v1.0.2.js`,
  `${basepath}/src/others/socket.io-client/socket.io-client.js`,
  `${basepath}/src/components/lsw-console-hooker/console-hooker-api.js`,
  `${basepath}/src/components/lsw-database-ui/database-adapter/LswDatabaseAdapter.js`,
  `${basepath}/src/components/lsw-form-controls/api/api.js`,
  `${basepath}/src/directives/v-descriptor/v-descriptor.js`,
  `${basepath}/src/directives/v-focus/v-focus.js`,
  `${basepath}/src/others/vue.draggable/sortable.js`,
  `${basepath}/src/others/vue.draggable/vue.draggable.js`,
  `${basepath}/src/apis/lsw-filesystem/lsw-filesystem.unbundled.js`,
  `${basepath}/src/apis/lsw-reloader/reloadable.js`,
  `${basepath}/src/lsw-components.js`,
  `${basepath}/src/lsw-api.js`,
];