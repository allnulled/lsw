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
              importer.importVueComponent("lsw-framework/src/components/lsw-form-controls/control-box/control-box"),
              importer.importVueComponent("lsw-framework/src/components/lsw-form-controls/control-error/control-error"),
              importer.importVueComponent("lsw-framework/src/components/lsw-form-controls/control-types/hidden-control/hidden-control"),
              importer.importVueComponent("lsw-framework/src/components/lsw-form-controls/control-types/string-control/string-control"),
              importer.importVueComponent("lsw-framework/src/components/lsw-form-controls/control-types/array-control/array-control"),
              importer.importVueComponent("lsw-framework/src/components/lsw-form-controls/control-types/boolean-control/boolean-control"),
              importer.importVueComponent("lsw-framework/src/components/lsw-form-controls/control-types/number-control/number-control"),
              importer.importVueComponent("lsw-framework/src/components/lsw-form-controls/control-types/date-control/date-control"),
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
              importer.importVueComponent("lsw-framework/src/components/lsw-agenda/lsw-agenda-task-form/lsw-agenda-task-form"),
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
    Step_1a_setup_databases: {
      if (process.env.NODE_ENV === "test") {
        await LswDatabase.deleteDatabase("lsw_default_database");
      }
      await LswDatabase.createDatabase("lsw_default_database", Object.assign({}, {
        // Tablas de agenda:
        concepto: "nombre,categorias,sinonimos,antonimos,similares,relacionados".split(","),
        propagacion: "concepto_origen,concepto_destino,formula,descripcion".split(","),
        procedimiento: "nombre,anio,mes,dia,hora,minuto,resumen,conclusion,relato,matices".split(","),
        actitud: "nombre,anio,mes,dia,hora,minuto,resumen,conclusion,relato,matices".split(","),
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
      Vue.prototype.$lsw.timer = LswTimer;
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
      window.on_application_mounted.promise.then(async () => {
        try {
          console.log("Application is ready here!");
          Vue.prototype.$consoleHooker.instance.restoreConsole();
          Fill_database: {
            await Vue.prototype.$lsw.database.insert("procedimiento", {
              nombre: "Desayunar",
              subconceptos: "ajo, cacao, leche, tostada, miel, mermelada",
              anio: 2025,
              mes: 2,
              dia: 19,
              hora: 8,
              minuto: 0,
              estado: "done",
              duracion: "50min",
              resumen: "",
              conclusion: "",
              relato: "",
              matices: "",
            });
            await Vue.prototype.$lsw.database.insert("procedimiento", {
              nombre: "Comer",
              subconceptos: "comida en general",
              anio: 2025,
              mes: 2,
              dia: 19,
              hora: 14,
              minuto: 0,
              estado: "pending",
              duracion: "50min",
              resumen: "",
              conclusion: "",
              relato: "",
              matices: "",
            });
            await Vue.prototype.$lsw.database.insert("procedimiento", {
              nombre: "Cenar",
              subconceptos: "sopa, tortilla",
              anio: 2025,
              mes: 2,
              dia: 19,
              hora: 21,
              minuto: 0,
              estado: "failed",
              duracion: "50min",
              resumen: "",
              conclusion: "",
              relato: "",
              matices: "",
            });
            await Vue.prototype.$lsw.database.insert("procedimiento", {
              nombre: "Cenar",
              subconceptos: "sopa, tortilla",
              anio: 2025,
              mes: 2,
              dia: 19,
              hora: 21,
              minuto: 0,
              estado: "pending",
              duracion: "50min",
              resumen: "",
              conclusion: "",
              relato: "",
              matices: "",
            });
          }
          const waitFor = function(ms) {
            return new Promise((resolve, reject) => {
              setTimeout(() => resolve(), ms);
            });
          };
          const filterDomElements = function(selector, filterCallback, base = document) {
            return Array.from(base.querySelectorAll(selector)).filter(filterCallback);
          }
          Working_on_agenda: {
            document.querySelector("#windows_pivot_button").click();
            await waitFor(100);
            filterDomElements(".main_tab_topbar > button", button => button.textContent.trim() === "Agenda")[0].click();
            await waitFor(100);
            Working_on_update_task_form: {
              filterDomElements(".lsw_agenda .dias_de_calendario td button", button => button.textContent.trim() === "19")[0].click();
              await waitFor(100);
              filterDomElements(".hour_task_editer", el => true)[0].click();
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