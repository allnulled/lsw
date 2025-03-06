Start_environment: {
  window.process = Object.assign(window.process || {});
  window.process.env = Object.assign(window.process || {});
  window.process.env.NODE_ENV = window.location.href.startsWith("https") ? "production" : "test";
}

window.on_application_mounted = Promise.withResolvers();

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
          importer.setTimeout(500 * 1);
          /*BUILDER DE DISTRIBUTION:////
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
            `${basepath}/src/apis/lsw-cycler/lsw-cycler.js`,
            `${basepath}/src/apis/lsw-compromiser/lsw-compromiser.js`,
            `${basepath}/src/apis/lsw-utils/lsw-utils.js`,
            `${basepath}/src/apis/lsw-filesystem/ufs-v1.0.2.js`,
            `${basepath}/src/others/socket.io-client/socket.io-client.js`,
            `${basepath}/src/directives/v-descriptor/v-descriptor.js`,
            `${basepath}/src/directives/v-focus/v-focus.js`,
            `${basepath}/src/components/lsw-form-controls/api/api.js`,
            `${basepath}/src/others/vue.draggable/sortable.js`,
            `${basepath}/src/others/vue.draggable/vue.draggable.js`,
            `${basepath}/src/apis/lsw-filesystem/lsw-filesystem.unbundled.js`,
            `${basepath}/src/apis/lsw-reloader/reloadable.js`,
            `${basepath}/src/lsw-components.js`,
            `${basepath}/src/lsw-api.js`,
          ];
          ////////////////////////////*/
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
              // LSW Timer Parser (not API):
              importer.scriptSrc("lsw-framework/src/apis/lsw-timer/timeformat.js"),
              // LSW Cycler:
              importer.scriptSrc("lsw-framework/src/apis/lsw-cycler/lsw-cycler.js"),
              // LSW Compromiser:
              importer.scriptSrc("lsw-framework/src/apis/lsw-compromiser/lsw-compromiser.js"),
              // LSW Utilities:
              importer.scriptSrc("lsw-framework/src/apis/lsw-utils/lsw-utils.js"),
              // UFS:
              importer.scriptSrc("lsw-framework/src/apis/lsw-filesystem/ufs-v1.0.2.js"),
              // LSW ConsoleHooker API (not component):
              importer.scriptSrc("lsw-framework/src/components/lsw-console-hooker/console-hooker-api.js"),
              // Socket.io:
              importer.scriptSrc("lsw-framework/src/others/socket.io-client/socket.io-client.js"),
            ]);
          }
          Second_wave: {
            await Promise.all([
              // LSW Database Adapter:
              importer.scriptSrc("lsw-framework/src/components/lsw-database-ui/database-adapter/LswDatabaseAdapter.js"),
              // LSW Directives for Vue.js:
              importer.scriptSrc("lsw-framework/src/directives/v-descriptor/v-descriptor.js"),
              importer.scriptSrc("lsw-framework/src/directives/v-focus/v-focus.js"),
              // LSW Timeformat API (not Parser):
              importer.scriptSrc("lsw-framework/src/apis/lsw-timer/timeformat.api.js"),
              // LSW FormControls API (part 1):
              importer.linkStylesheet("lsw-framework/src/components/lsw-form-controls/api/api.css"),
              importer.scriptSrc("lsw-framework/src/components/lsw-form-controls/api/api.js"),
              // LSW Sortable and draggable 3rd parties:
              importer.scriptSrc("lsw-framework/src/others/vue.draggable/sortable.js"),
              importer.scriptSrc("lsw-framework/src/others/vue.draggable/vue.draggable.js"),
              // LSW Filesystem Vue component:
              importer.scriptSrc("lsw-framework/src/apis/lsw-filesystem/lsw-filesystem.unbundled.js"),
              /////////////////////////////////////////////////////////////////////
              // COMPONENTS::START ////////////////////////////////////////////////
              /////////////////////////////////////////////////////////////////////
              // LSW Form controls API & components:
              /*
              // Antes:
              importer.importVueComponent("lsw-framework/src/components/lsw-form-controls/control-box/control-box"),
              importer.importVueComponent("lsw-framework/src/components/lsw-form-controls/control-error/control-error"),
              importer.importVueComponent("lsw-framework/src/components/lsw-form-controls/control-types/hidden-control/hidden-control"),
              importer.importVueComponent("lsw-framework/src/components/lsw-form-controls/control-types/string-control/string-control"),
              importer.importVueComponent("lsw-framework/src/components/lsw-form-controls/control-types/array-control/array-control"),
              importer.importVueComponent("lsw-framework/src/components/lsw-form-controls/control-types/boolean-control/boolean-control"),
              importer.importVueComponent("lsw-framework/src/components/lsw-form-controls/control-types/number-control/number-control"),
              importer.importVueComponent("lsw-framework/src/components/lsw-form-controls/control-types/date-control/date-control"),
              //*/
              // Ahora:
              importer.scriptSrc("lsw-framework/src/directives/v-form/v-form.js"),
              /*
              importer.scriptSrc("lsw-framework/src/components/lsw-form-controls/directives/v-form-point/v-form-point.js"),
              importer.scriptSrc("lsw-framework/src/components/lsw-form-controls/directives/v-form-control/v-form-control.js"),
              importer.scriptSrc("lsw-framework/src/components/lsw-form-controls/directives/v-form-input/v-form-input.js"),
              importer.scriptSrc("lsw-framework/src/components/lsw-form-controls/directives/v-form-error/v-form-error.js"),
              //*/
              // LSW Table component:
              importer.importVueComponent("lsw-framework/src/components/lsw-table/lsw-table/lsw-table"),
              importer.importVueComponent("lsw-framework/src/components/lsw-table/lsw-table-transformers/lsw-table-transformers"),
              // LSW Data explorer component:
              importer.importVueComponent("lsw-framework/src/components/lsw-data-explorer/lsw-data-explorer/lsw-data-explorer"),
              importer.importVueComponent("lsw-framework/src/components/lsw-data-explorer/lsw-data-implorer/lsw-data-implorer"),
              // LSW Dialogs API & components:
              importer.importVueComponent("lsw-framework/src/components/lsw-dialogs/lsw-dialogs"),
              importer.importVueComponent("lsw-framework/src/components/lsw-windows/lsw-windows-main-tab/lsw-windows-main-tab"),
              importer.importVueComponent("lsw-framework/src/components/lsw-windows/lsw-windows-viewer/lsw-windows-viewer"),
              importer.importVueComponent("lsw-framework/src/components/lsw-windows/lsw-windows-pivot-button/lsw-windows-pivot-button"),
              // LSW Toast components:
              importer.importVueComponent("lsw-framework/src/components/lsw-toasts/lsw-toasts"),
              // LSW ConsoleHooker Component (not API):
              importer.importVueComponent("lsw-framework/src/components/lsw-console-hooker/console-hooker"),
              // LSW Application component:
              importer.importVueComponent("lsw-framework/src/components/app/app"),
              // LSW Database adapter API & components:
              importer.importVueComponent("lsw-framework/src/components/lsw-database-ui/database-explorer/database-explorer"),
              importer.importVueComponent("lsw-framework/src/components/lsw-database-ui/database-breadcrumb/database-breadcrumb"),
              importer.importVueComponent("lsw-framework/src/components/lsw-database-ui/page-databases/page-databases"),
              importer.importVueComponent("lsw-framework/src/components/lsw-database-ui/page-rows/page-rows"),
              importer.importVueComponent("lsw-framework/src/components/lsw-database-ui/page-row/page-row"),
              importer.importVueComponent("lsw-framework/src/components/lsw-database-ui/page-schema/page-schema"),
              importer.importVueComponent("lsw-framework/src/components/lsw-database-ui/page-tables/page-tables"),
              // LSW Filesystem explorer components:
              importer.importVueComponent("lsw-framework/src/components/lsw-filesystem-explorer/lsw-filesystem-explorer/lsw-filesystem-explorer"),
              importer.importVueComponent("lsw-framework/src/components/lsw-filesystem-explorer/lsw-filesystem-buttons-panel/lsw-filesystem-buttons-panel"),
              importer.importVueComponent("lsw-framework/src/components/lsw-filesystem-explorer/lsw-filesystem-editor/lsw-filesystem-editor"),
              importer.importVueComponent("lsw-framework/src/components/lsw-filesystem-explorer/lsw-filesystem-treeviewer/lsw-filesystem-treeviewer"),
              // LSW Wiki components:
              importer.importVueComponent("lsw-framework/src/components/lsw-wiki/lsw-wiki/lsw-wiki"),
              // LSW Agenda components:
              importer.importVueComponent("lsw-framework/src/components/lsw-calendario/lsw-calendario"),
              importer.importVueComponent("lsw-framework/src/components/lsw-agenda/lsw-agenda/lsw-agenda"),
              importer.importVueComponent("lsw-framework/src/components/lsw-agenda/components/lsw-agenda-breadcrumb/lsw-agenda-breadcrumb"),
              importer.importVueComponent("lsw-framework/src/components/lsw-agenda/components/lsw-agenda-form/lsw-agenda-form"),
              importer.importVueComponent("lsw-framework/src/components/lsw-agenda/components/lsw-agenda-accion-add/lsw-agenda-accion-add"),
              importer.importVueComponent("lsw-framework/src/components/lsw-agenda/components/lsw-agenda-accion-search/lsw-agenda-accion-search"),
              importer.importVueComponent("lsw-framework/src/components/lsw-agenda/components/lsw-agenda-concepto-add/lsw-agenda-concepto-add"),
              importer.importVueComponent("lsw-framework/src/components/lsw-agenda/components/lsw-agenda-concepto-search/lsw-agenda-concepto-search"),
              importer.importVueComponent("lsw-framework/src/components/lsw-agenda/components/lsw-agenda-evento-search/lsw-agenda-evento-search"),
              importer.importVueComponent("lsw-framework/src/components/lsw-agenda/components/lsw-agenda-impresion-add/lsw-agenda-impresion-add"),
              importer.importVueComponent("lsw-framework/src/components/lsw-agenda/components/lsw-agenda-impresion-search/lsw-agenda-impresion-search"),
              importer.importVueComponent("lsw-framework/src/components/lsw-agenda/components/lsw-agenda-infraccion-search/lsw-agenda-infraccion-search"),
              importer.importVueComponent("lsw-framework/src/components/lsw-agenda/components/lsw-agenda-limitador-add/lsw-agenda-limitador-add"),
              importer.importVueComponent("lsw-framework/src/components/lsw-agenda/components/lsw-agenda-limitador-search/lsw-agenda-limitador-search"),
              importer.importVueComponent("lsw-framework/src/components/lsw-agenda/components/lsw-agenda-postimpresion-search/lsw-agenda-postimpresion-search"),
              importer.importVueComponent("lsw-framework/src/components/lsw-agenda/components/lsw-agenda-propagacion-search/lsw-agenda-propagacion-search"),
              importer.importVueComponent("lsw-framework/src/components/lsw-agenda/components/lsw-agenda-propagador-search/lsw-agenda-propagador-search"),
              /////////////////////////////////////////////////////////////////////
              // COMPONENTS::END //////////////////////////////////////////////////
              /////////////////////////////////////////////////////////////////////
              // LSW Reloadable script:
              importer.scriptSrc("lsw-framework/src/apis/lsw-reloader/reloadable.js"),
            ]);

          }
          Third_wave: {
            await importer.linkStylesheet("lsw-framework/src/styles/lsw-styling-structure.css");
            await importer.linkStylesheet("lsw-framework/src/styles/lsw-styling-theme.css");
            await importer.linkStylesheet("lsw-framework/src/styles/lsw-styling-framework.css");
          }
          Fourth_wave_for_extra_apis: {
            await importer.scriptSrc("assets/lib/sheetjs/xlsx.full.min.js");
          }
        }
      }
    } // End of Step 1: import logic
    Step_2_wait_for_dependencies_to_be_loaded_or_fail: {
      let intervalId = undefined;
      await new Promise((resolve, reject) => {
        intervalId = setInterval(() => {
          const hasBrowsie = typeof Browsie !== "undefined";
          const hasDatabase = typeof LswDatabase !== "undefined";
          const isCompleted = hasBrowsie && hasDatabase;
          if(isCompleted) {
            return resolve();
          }
        }, 10);
        setTimeout(() => {
          clearInterval(intervalId);
          return reject(new Error("Could not load all dependencies on «boot.js»"));
        }, 1000 * 3000);
      });
    }
    Step_3_setup_databases: {
      break Step_3_setup_databases;
      if (process.env.NODE_ENV === "test") {
        await LswDatabase.deleteDatabase("lsw_default_database");
      }
      await LswDatabase.createDatabase("lsw_default_database", Object.assign({}, {
        // Tablas de agenda:
        accion: "refers_to_concept,has_duration,starts_at,has_emotions,has_details,has_description,has_steps,has_reasoning,has_expectations,has_moraline,has_intention,has_result,has_history,has_consequences".split(","),
        concepto: "has_name".split(","),
        limitador: "nombre,contenido".split(","),
        propagacion: "concepto_origen,concepto_destino,formula,descripcion".split(","),
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
    Step_4_organize_api: {
      Vue.prototype.$window = window;
      Vue.prototype.$console = console;
      Vue.prototype.$vue = Vue;
      Vue.prototype.$lsw = {};
      Vue.prototype.$lsw.logger = Superlogger.create("lsw");
      Vue.prototype.$trace = (...args) => Vue.prototype.$lsw.logger.trace(...args);
      Vue.prototype.$lsw.utils = LswUtils;
      Vue.prototype.$lsw.timer = LswTimer;
      Vue.prototype.$lsw.database = await LswDatabase.open("lsw_default_database");
      Vue.prototype.$lsw.windows = null;
      Vue.prototype.$lsw.dialogs = null;
      Vue.prototype.$lsw.toasts = null;
      Vue.prototype.$lsw.fs = null;
      Vue.prototype.$lsw.wiki = null;
      Vue.prototype.$lsw.agenda = null;
    } // End of Step 2: organize api
    Step_5_deploy_app: {
      const vueInstance = new Vue({
        render: h => h(Vue.options.components.App),
      }).$mount("#app");
    }
    Step_6_inject_development_point: {
      window.on_application_mounted.promise.then(async () => {
        try {
          console.log("Application is ready here!");
          Vue.prototype.$consoleHooker.instance.restoreConsole();
          Fill_database: {
            await Vue.prototype.$lsw.database.insert("accion", {
              refers_to_concept: "Desayunar",
              has_details: "ajo, cacao, leche, tostada, miel, mermelada",
              starts_at: "2025/02/19 08:00",
              has_state: "done",
              has_duration: "50min",
              has_description: "",
              has_moraline: "",
            });
            await Vue.prototype.$lsw.database.insert("accion", {
              refers_to_concept: "Comer",
              has_details: "comida en general",
              starts_at: "2025/02/19 14:00",
              has_state: "pending",
              has_duration: "50min",
              has_description: "",
              has_moraline: "",
            });
            await Vue.prototype.$lsw.database.insert("accion", {
              refers_to_concept: "Cenar",
              has_details: "sopa, tortilla",
              starts_at: "2025/02/19 21:00",
              has_state: "failed",
              has_duration: "50min",
              has_description: "",
              has_moraline: "",
            });
            await Vue.prototype.$lsw.database.insert("accion", {
              refers_to_concept: "Cenar",
              has_details: "sopa, tortilla",
              starts_at: "2025/02/19 14:00",
              has_state: "pending",
              has_duration: "50min",
              has_description: "",
              has_moraline: "",
            });
          }
          const waitFor = function (ms) {
            return new Promise((resolve, reject) => {
              setTimeout(() => resolve(), ms);
            });
          };
          const filterDomElements = function (selector, filterCallback, base = document) {
            return Array.from(base.querySelectorAll(selector)).filter(filterCallback);
          }
          Working_on_agenda: {
            document.querySelector("#windows_pivot_button").click();
            await waitFor(100);
            filterDomElements(".main_tab_topbar > button", button => button.textContent.trim() === "Agenda")[0].click();
            await waitFor(100);
            Working_on_insert_task_form: {
              filterDomElements(".lsw_agenda .dias_de_calendario td button", button => button.textContent.trim() === "19")[0].click();
              await waitFor(100);
              filterDomElements(".lsw_agenda", el => true)[0].__vue__.selectContext("accion.add");
              await waitFor(100);
            }
          }
        } catch (error) {
          console.log(error);
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