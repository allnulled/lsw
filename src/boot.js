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
            // Low-level APIs:
            await Promise.all([
              // Importer is already imported:
              // importer.scriptSrc("lsw-framework/src/apis/lsw-importer/importer.js"),
              importer.scriptSrc("lsw-framework/src/apis/lsw-ensurer/ensure.js"),
              // LSW Tester:
              importer.scriptSrc("lsw-framework/src/apis/lsw-tester/universal-tester.js"),
              // LSW Circuiter:
              importer.scriptSrc("lsw-framework/src/apis/lsw-circuiter/async-circuit.js"),
              // LSW Commander:
              importer.scriptSrc("lsw-framework/src/apis/lsw-commander/url-command.js"),
              // LSW Trigger:
              importer.scriptSrc("lsw-framework/src/apis/lsw-trigger/triggers-class.js"),
              // LSW Database:
              importer.scriptSrc("lsw-framework/src/apis/lsw-database/browsie.unbundled.js"),
              // LSW Logger:
              importer.scriptSrc("lsw-framework/src/apis/lsw-logger/superlogger.unbundled.js"),
              // LSW Returner:
              importer.scriptSrc("lsw-framework/src/apis/lsw-returner/controlled-function.js"),
              // LSW Store:
              importer.scriptSrc("lsw-framework/src/apis/lsw-store/dist/store.unbundled.js"),
              // LSW Timer:
              importer.scriptSrc("lsw-framework/src/apis/lsw-timer/timeformat.js"),
              // LSW Cycler:
              importer.scriptSrc("lsw-framework/src/apis/lsw-cycler/lsw-cycler.js"),
              // LSW Compromiser:
              importer.scriptSrc("lsw-framework/src/apis/lsw-compromiser/lsw-compromiser.js"),
              // LSW Utilities:
              importer.scriptSrc("lsw-framework/src/apis/lsw-utils/lsw-utils.js"),
              // UFS:
              importer.scriptSrc("lsw-framework/src/apis/lsw-filesystem/ufs-v1.0.2.js"),
              // Socket.io:
              importer.scriptSrc("lsw-framework/src/others/socket.io-client/socket.io-client.js"),
              // Directives for Vue.js:
              Promise.all([
                importer.scriptSrc("lsw-framework/src/directives/v-descriptor/v-descriptor.js"),
                importer.scriptSrc("lsw-framework/src/directives/v-focus/v-focus.js"),
              ]),
              // API for FormControls (part 1):
              importer.linkStylesheet("lsw-framework/src/components/lsw-form-controls/api/api.css"),
              importer.scriptSrc("lsw-framework/src/components/lsw-form-controls/api/api.js"),
            ]);
          }
          Second_wave: {
            importer.scriptSrc("lsw-framework/src/apis/lsw-filesystem/lsw-filesystem.unbundled.js"); // depends on ufs
            // API for FormControls (part 1):
            await Promise.all([
              importer.importVueComponent("lsw-framework/src/components/lsw-form-controls/control-box/control-box"),
              importer.importVueComponent("lsw-framework/src/components/lsw-form-controls/control-error/control-error"),
              importer.importVueComponent("lsw-framework/src/components/lsw-form-controls/control-types/hidden-control/hidden-control"),
              importer.importVueComponent("lsw-framework/src/components/lsw-form-controls/control-types/string-control/string-control"),
              importer.importVueComponent("lsw-framework/src/components/lsw-form-controls/control-types/array-control/array-control"),
              importer.importVueComponent("lsw-framework/src/components/lsw-form-controls/control-types/boolean-control/boolean-control"),
              importer.importVueComponent("lsw-framework/src/components/lsw-form-controls/control-types/number-control/number-control"),
            ]);
            // Application component:
            await importer.importVueComponent("lsw-framework/src/components/lsw-table/lsw-table");
            await Promise.all([
              // Dialogs API & components:
              Promise.all([
                importer.importVueComponent("lsw-framework/src/components/lsw-dialogs/lsw-dialogs"),
                importer.importVueComponent("lsw-framework/src/components/lsw-windows/lsw-windows-main-tab/lsw-windows-main-tab"),
                importer.importVueComponent("lsw-framework/src/components/lsw-windows/lsw-windows-viewer/lsw-windows-viewer"),
                importer.importVueComponent("lsw-framework/src/components/lsw-windows/lsw-windows-pivot-button/lsw-windows-pivot-button"),
              ]),
              // Toast components:
              importer.importVueComponent("lsw-framework/src/components/lsw-toasts/lsw-toasts"),
              // Console hooker API & components:
              Promise.all([
                importer.scriptSrc("lsw-framework/src/components/lsw-console-hooker/console-hooker-api.js"),
                importer.importVueComponent("lsw-framework/src/components/lsw-console-hooker/console-hooker"),
              ]),
              // Application component:
              importer.importVueComponent("lsw-framework/src/components/app/app"),
              // Database adapter API & components:
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
              // Filesystem explorer components:
              Promise.all([
                importer.importVueComponent("lsw-framework/src/components/lsw-filesystem-explorer/lsw-filesystem-explorer/lsw-filesystem-explorer"),
                importer.importVueComponent("lsw-framework/src/components/lsw-filesystem-explorer/lsw-filesystem-buttons-panel/lsw-filesystem-buttons-panel"),
                importer.importVueComponent("lsw-framework/src/components/lsw-filesystem-explorer/lsw-filesystem-editor/lsw-filesystem-editor"),
                importer.importVueComponent("lsw-framework/src/components/lsw-filesystem-explorer/lsw-filesystem-treeviewer/lsw-filesystem-treeviewer"),
              ]),
              // Wiki components:
              Promise.all([
                importer.importVueComponent("lsw-framework/src/components/lsw-wiki/lsw-wiki/lsw-wiki"),
              ]),
              // Agenda components:
              Promise.all([
                importer.importVueComponent("lsw-framework/src/components/lsw-calendario/lsw-calendario"),
                importer.importVueComponent("lsw-framework/src/components/lsw-agenda/lsw-agenda/lsw-agenda"),
              ]),
              // Reloadable script:
              importer.scriptSrc("lsw-framework/src/apis/lsw-reloader/reloadable.js"),
            ]);
          }
          Third_wave: {
            await Promise.all([
              // LSW APIs Unification: (but this script replaces it)
              // importer.scriptSrc("lsw-framework/src/lsw-apis"),
              // API for SheetJS:
              importer.scriptSrc("lib/sheetjs/xlsx.full.min.js"),
            ]);
          }
          Fourth_wave: {
            // Styles for the application:
            await importer.linkStylesheet("lsw-framework/src/styles/lsw-styling-structure.css");
            await importer.linkStylesheet("lsw-framework/src/styles/lsw-styling-theme.css");
            await importer.linkStylesheet("lsw-framework/src/styles/lsw-styling-framework.css");
          }
        }
      }
    } // End of Step 1: import logic
    Step_1a_setup_databases: {
      if(process.env.NODE_ENV === "test") {
        await LswDatabase.deleteDatabase("lsw_default_database");
      }
      await LswDatabase.createDatabase("lsw_default_database", Object.assign({}, {
        // Tablas de agenda:
        conceptos: "nombre,categorias".split(","),
        propagaciones: "concepto_origen,concepto_destino,formula,descripcion".split(","),
        procedimientos: "nombre,anio,mes,dia,hora,minuto,resumen,conclusion,relato,matices".split(","),
      }, {
        // Tablas de wiki:
        articulos: "titulo,referencias,contenido,categorias".split(","),
        categorias: "nombre,descripcion".split(","),
      }, {
        // Tablas de fs no hay porque se llevan por cuenta aparte
      }, {
        // Tablas de rest no hay porque son todas
      }, 1, {
        /*
        // Para una modificación, inyectar aquí especificaciones tal que:
        2: function() {
          if (!db.objectStoreNames.contains("orders")) {
            const ordersStore = db.createObjectStore("orders", {
              keyPath: "id",
              autoIncrement: true,
            });
            ordersStore.createIndex("orderDate", "orderDate", { unique: false });
            ordersStore.createIndex("userId", "userId", { unique: false });
          }
        }
        // */
      }));
    }
    Step_2_organize_api: {
      Vue.prototype.$window = window;
      Vue.prototype.$console = console;
      Vue.prototype.$vue = Vue;
      Vue.prototype.$lsw = {};
      Vue.prototype.$lsw.logger = Superlogger.create("lsw");
      Vue.prototype.$trace = (...args) => Vue.prototype.$lsw.logger.trace(...args);
      Vue.prototype.$lsw.utils = LswUtils;
      Vue.prototype.$lsw.database = await LswDatabase.open("lsw_default_database");
      Vue.prototype.$lsw.windows = null;
      Vue.prototype.$lsw.dialogs = null;
      Vue.prototype.$lsw.toasts = null;
      Vue.prototype.$lsw.fs = null;
      Vue.prototype.$lsw.wiki = null;
      Vue.prototype.$lsw.agenda = null;
    } // End of Step 2: organize api
    Step_3_deploy_app: {
      const vueInstance = new Vue({
        render: h => h(Vue.options.components.App),
      }).$mount("#app");
    }
    Step_4_inject_development_point: {
      window.on_application_mounted.promise.then(() => {
        console.log("Application is ready here!");
        Working_on_filesystem_explorer_ui: {
          document.querySelector("#windows_pivot_button").click();
          setTimeout(() => {
            Array.from(document.querySelectorAll(".main_tab_topbar > button")).filter(button => {
              return button.textContent.trim() === "AGENDA";
            })[0].click();
          }, 100);
        }
      });
      window.lsw = Vue.prototype.$lsw;
    }
  } catch (error) {
    console.error(error);
    console.log("[!] Boot failed");
  }
};

window.addEventListener("load", boot);