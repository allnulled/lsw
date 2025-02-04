Start_environment: {
  window.process = Object.assign(window.process || {});
  window.process.env = Object.assign(window.process || {});
  // window.process.env.NODE_ENV = window.location.href.startsWith("https") ? "production" : "test";
  window.process.env.NODE_ENV = "test";
}

const boot = async function () {
  try {
    Step_1_import_logic: {
      if (window.process.NODE_ENV === "production") {
        Download_sources_on_production: {
          importer.setTotal(2);
          importer.setTimeout(1000 * 3);
          await Promise.all([
            importer.scriptSrc("distribution.js"),
            importer.linkStylesheet("distribution.css"),
          ]);
        }
      } else if (window.process.NODE_ENV === "test") {
        Download_sources_on_test: {
          importer.setTotal(25);
          importer.setTimeout(100 * 1);
          Preset_wave: {
            await Promise.all([
              importer.scriptSrc("lsw-framework/src/others/vue/vue2.min.js"),
            ]);
          }
          First_wave: {
            await Promise.all([
              importer.scriptSrc("lsw-framework/src/apis/lsw-ensurer/ensure.js"),
              importer.scriptSrc("lsw-framework/src/apis/lsw-tester/universal-tester.js"),
              importer.scriptSrc("lsw-framework/src/apis/lsw-circuiter/async-circuit.js"),
              importer.scriptSrc("lsw-framework/src/apis/lsw-commander/url-command.js"),
              importer.scriptSrc("lsw-framework/src/apis/lsw-trigger/triggers-class.js"),
              importer.scriptSrc("lsw-framework/src/apis/lsw-database/browsie.unbundled.js"),
              // importer.scriptSrc("lsw-framework/src/apis/lsw-importer/importer.js"),
              importer.scriptSrc("lsw-framework/src/apis/lsw-logger/superlogger.unbundled.js"),
              importer.scriptSrc("lsw-framework/src/apis/lsw-returner/controlled-function.js"),
              importer.scriptSrc("lsw-framework/src/apis/lsw-store/dist/store.unbundled.js"),
              importer.scriptSrc("lsw-framework/src/apis/lsw-timer/timeformat.js"),
              importer.scriptSrc("lsw-framework/src/apis/lsw-cycler/lsw-cycler.js"),
              importer.scriptSrc("lsw-framework/src/apis/lsw-compromiser/lsw-compromiser.js"),
              importer.scriptSrc("lsw-framework/src/apis/lsw-utils/lsw-utils.js"),
              importer.scriptSrc("lsw-framework/src/apis/lsw-filesystem/lsw-filesystem.js"),
              importer.scriptSrc("lsw-framework/src/components/lsw-console-hooker/console-hooker-api.js"),
              importer.scriptSrc("lsw-framework/src/others/socket.io-client/socket.io-client.js"),
            ]);
          }
          Second_wave: {
            await Promise.all([
              importer.scriptSrc("lsw-framework/src/directives/v-descriptor/v-descriptor.js"),
              importer.scriptSrc("lsw-framework/src/directives/v-focus/v-focus.js"),
              Promise.all([
                importer.importVueComponent("lsw-framework/src/components/lsw-dialogs/lsw-dialogs"),
                importer.importVueComponent("lsw-framework/src/components/lsw-windows/lsw-windows-main-tab/lsw-windows-main-tab"),
                importer.importVueComponent("lsw-framework/src/components/lsw-windows/lsw-windows-viewer/lsw-windows-viewer"),
                importer.importVueComponent("lsw-framework/src/components/lsw-windows/lsw-windows-pivot-button/lsw-windows-pivot-button"),
              ]),
              importer.importVueComponent("lsw-framework/src/components/lsw-toasts/lsw-toasts"),
              importer.importVueComponent("lsw-framework/src/components/lsw-console-hooker/console-hooker"),
              importer.importVueComponent("lsw-framework/src/components/lsw-filesystem-explorer/lsw-filesystem-explorer"),
              importer.importVueComponent("lsw-framework/src/components/app/app"),
              Promise.all([
                importer.scriptSrc("lsw-framework/src/components/lsw-database-ui/database-adapter/LswDatabaseAdapter.js"),
                importer.importVueComponent("lsw-framework/src/components/lsw-database-ui/database-explorer/database-explorer"),
                importer.importVueComponent("lsw-framework/src/components/lsw-database-ui/database-breadcrumb/database-breadcrumb"),
                importer.importVueComponent("lsw-framework/src/components/lsw-database-ui/page-databases/page-databases"),
                importer.importVueComponent("lsw-framework/src/components/lsw-database-ui/page-rows/page-rows"),
                importer.importVueComponent("lsw-framework/src/components/lsw-database-ui/page-row/page-row"),
                importer.importVueComponent("lsw-framework/src/components/lsw-database-ui/page-schema/page-schema"),
                importer.importVueComponent("lsw-framework/src/components/lsw-database-ui/page-tables/page-tables"),
              ]),
              importer.scriptSrc("lsw-framework/src/apis/lsw-reloader/reloadable.js"),
            ]);
          }
          Third_wave: {
            await Promise.all([
              // importer.scriptSrc("lsw-framework/src/lsw-apis"),
              importer.scriptSrc("lib/sheetjs/xlsx.full.min.js"),
            ]);
          }
          Fourth_wave: {
            await importer.linkStylesheet("lsw-framework/src/styles/lsw-styling-structure.css");
            await importer.linkStylesheet("lsw-framework/src/styles/lsw-styling-theme.css");
            await importer.linkStylesheet("lsw-framework/src/styles/lsw-styling-framework.css");
          }
        }
      }
    } // End of Step 1: import logic
    Step_2_organize_api: {
      Vue.prototype.$window = window;
      Vue.prototype.$vue = Vue;
      Vue.prototype.$lsw = {};
      Vue.prototype.$lsw.utils = LswUtils;
      Vue.prototype.$lsw.windows = null;
      Vue.prototype.$lsw.dialogs = null;
      Vue.prototype.$lsw.toasts = null;

    } // End of Step 2: organize api
    Step_3_deploy_app: {
      const app = new Vue({
        render: h => h(Vue.options.components.App),
      }).$mount("#app");
    }
  } catch (error) {
    console.error(error);
    console.log("[!] Boot failed");
  }
};

window.addEventListener("load", boot);