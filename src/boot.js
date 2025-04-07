Start_environment: {
  window.process = Object.assign(window.process || {});
  window.process.env = Object.assign(window.process || {});
  window.process.env.NODE_ENV = window.location.href.startsWith("https") ? "production" : "test";
  window.process.env.NODE_ENV = "test";
  window.process.env.NODE_ENV = "production";
}

Set_global_configurations: {
  // Cambiar cuando se quiera resetear el esquema:
  process.env.LSW_RESET_DATABASE = 1;
  process.env.LSW_RESET_DATABASE = 0;
}

const boot = async function () {
  try {
    Step_1_import_logic: {
      if (window.process.NODE_ENV === "production") {
        Download_sources_on_production: {
          importer.setTotal(16);
          importer.setTimeout(1000 * 3);
          await Promise.all([
            importer.scriptSrc("assets/distribution.js"),
            importer.linkStylesheet("assets/distribution.css"),
          ]);
        }
      } else if (window.process.NODE_ENV === "test") {
        Download_sources_on_test: {
          importer.setTotal(252);
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
              // Vue@2:
              importer.scriptSrc(`lsw-framework/src/others/vue/vue2.${process.env.NODE_ENV === 'test' ? 'dev' : 'min'}.js`),
              // Socket.io:
              importer.scriptSrc("lsw-framework/src/others/socket.io-client/socket.io-client.js"),
              // LSW Error Manager:
              importer.scriptSrc("lsw-framework/src/apis/lsw-error-manager/lsw-error-manager.js"),
            ]);
          }
          First_wave: {
            // Low-level APIs:
            await Promise.all([
              // Importer is already imported:
              // importer.scriptSrc("lsw-framework/src/apis/lsw-importer/importer.js"),
              // LSW Reloadable script:
              importer.scriptSrc("lsw-framework/src/apis/lsw-reloader/reloadable.js"),
              // LSW Asserter:
              importer.scriptSrc("lsw-framework/src/apis/lsw-ensurer/ensure.js"),
              // LSW Tester:
              importer.scriptSrc("lsw-framework/src/apis/lsw-tester/universal-tester.js"),
              // LSW DOM:
              importer.scriptSrc("lsw-framework/src/apis/lsw-dom/lsw-dom.js"),
              importer.scriptSrc("lsw-framework/src/apis/lsw-dom/lsw-vue2.js"),
              // LSW Proxifier:
              importer.scriptSrc("lsw-framework/src/apis/lsw-proxifier/proxifier.unbundled.js"),
              // LSW Randomizer:
              importer.scriptSrc("lsw-framework/src/apis/lsw-randomizer/lsw-randomizer.js"),
              // LSW Circuiter:
              importer.scriptSrc("lsw-framework/src/apis/lsw-circuiter/async-circuit.js"),
              // LSW Commander:
              importer.scriptSrc("lsw-framework/src/apis/lsw-commander/url-command.js"),
              // LSW Trigger:
              importer.scriptSrc("lsw-framework/src/apis/lsw-trigger/triggers-class.js").then(() => {
                // LSW Database:
                return importer.scriptSrc("lsw-framework/src/apis/lsw-database/browsie.unbundled.js");
              }),
              // LSW Logger:
              importer.scriptSrc("lsw-framework/src/apis/lsw-logger/superlogger.unbundled.js"),
              // LSW Returner:
              importer.scriptSrc("lsw-framework/src/apis/lsw-returner/controlled-function.js"),
              // LSW Store:
              importer.scriptSrc("lsw-framework/src/apis/lsw-store/dist/store.unbundled.js"),
              // LSW Timer Parser (not API):
              importer.scriptSrc("lsw-framework/src/apis/lsw-timer/timeformat.js"),
              // LSW Cycler:
              importer.scriptSrc("lsw-framework/src/apis/lsw-cycler/lsw-cycler.js").then(() => {
                // LSW App Lifecycle:
                return importer.scriptSrc("lsw-framework/src/apis/lsw-lifecycle/lsw-lifecycle.js");
              }),
              // LSW Compromiser:
              importer.scriptSrc("lsw-framework/src/apis/lsw-compromiser/lsw-compromiser.js"),
              // LSW Utilities:
              importer.scriptSrc("lsw-framework/src/apis/lsw-utils/lsw-utils.js"),
              // UFS:
              importer.scriptSrc("lsw-framework/src/apis/lsw-filesystem/ufs-v1.0.2.js"),
              // JSON typer:
              importer.scriptSrc("lsw-framework/src/apis/lsw-typer/lsw-typer.js").then(() => {
                // JSON typer API:
                return importer.scriptSrc("lsw-framework/src/apis/lsw-typer/lsw-typer.api.js");
              }).then(() => {
                // JSON typer default types:
                return Promise.all([
                  importer.scriptSrc("lsw-framework/src/apis/lsw-typer/default/org.allnulled.lsw/type/duration.js"),
                  importer.scriptSrc("lsw-framework/src/apis/lsw-typer/default/org.allnulled.lsw/type/day.js"),
                  importer.scriptSrc("lsw-framework/src/apis/lsw-typer/default/org.allnulled.lsw/type/moment.js"),
                ]).then(() => Promise.all([
                  importer.scriptSrc("lsw-framework/src/apis/lsw-typer/default/duration.js"),
                  importer.scriptSrc("lsw-framework/src/apis/lsw-typer/default/day.js"),
                  importer.scriptSrc("lsw-framework/src/apis/lsw-typer/default/moment.js"),
                ]));
              }),
              // LSW ConsoleHooker API (not component):
              importer.scriptSrc("lsw-framework/src/components/lsw-console-hooker/console-hooker-api.js"),
              // LSW Formtypes:
              importer.scriptSrc("lsw-framework/src/components/lsw-formtypes/api/api.js"),
              importer.linkStylesheet("lsw-framework/src/components/lsw-formtypes/api/api.css"),
            ]);
          }
          Interlude_for_dependencies_to_load_1: {
            await waitForConditions({
              timeout: 1000 * 3,
              timeoutError: new Error("[!] Could not load all dependencies on «boot.js» (interlude 1)"),
              intervalsOf: 10,
              conditions: [
                ["Vue is loaded", () => typeof Vue !== "undefined"],
                ["LswDatabase is loaded", () => typeof LswDatabase !== "undefined"],
                ["LswCycler is loaded", () => typeof LswCycler !== "undefined"],
              ]
            });
          }
          Second_wave: {
            await Promise.all([
              // LSW SchemaBuilder:
              importer.scriptSrc("lsw-framework/src/apis/lsw-schema/lsw-schema.js"),
              // LSW Class Register & Registry:
              importer.scriptSrc("lsw-framework/src/apis/lsw-class-register/lsw-class-register.js"),
              // LSW Formtypes » FormBuilder:
              importer.importVueComponent("lsw-framework/src/components/lsw-formtypes/components/lsw-form-builder/lsw-form-builder"),
              importer.importVueComponent("lsw-framework/src/components/lsw-formtypes/components/lsw-formtype/lsw-formtype"),
              importer.importVueComponent("lsw-framework/src/components/lsw-formtypes/components/lsw-formtype/partials/lsw-control-label/lsw-control-label"),
              importer.importVueComponent("lsw-framework/src/components/lsw-formtypes/components/lsw-formtype/partials/lsw-control-error/lsw-control-error"),
              importer.importVueComponent("lsw-framework/src/components/lsw-formtypes/components/lsw-formtype/partials/lsw-error-viewer/lsw-error-viewer"),
              importer.importVueComponent("lsw-framework/src/components/lsw-formtypes/components/lsw-formtype/type/lsw-text-control/lsw-text-control"),
              importer.importVueComponent("lsw-framework/src/components/lsw-formtypes/components/lsw-formtype/type/lsw-long-text-control/lsw-long-text-control"),
              importer.importVueComponent("lsw-framework/src/components/lsw-formtypes/components/lsw-formtype/type/lsw-date-control/lsw-date-control"),
              importer.importVueComponent("lsw-framework/src/components/lsw-formtypes/components/lsw-formtype/type/lsw-duration-control/lsw-duration-control"),
              importer.importVueComponent("lsw-framework/src/components/lsw-formtypes/components/lsw-formtype/type/lsw-number-control/lsw-number-control"),
              importer.importVueComponent("lsw-framework/src/components/lsw-formtypes/components/lsw-formtype/type/lsw-options-control/lsw-options-control"),
              importer.importVueComponent("lsw-framework/src/components/lsw-formtypes/components/lsw-formtype/type/lsw-source-code-control/lsw-source-code-control"),
              importer.importVueComponent("lsw-framework/src/components/lsw-formtypes/components/lsw-formtype/type/lsw-ref-object-control/lsw-ref-object-control"),
              importer.importVueComponent("lsw-framework/src/components/lsw-formtypes/components/lsw-formtype/type/lsw-ref-list-control/lsw-ref-list-control"),
              importer.importVueComponent("lsw-framework/src/components/lsw-formtypes/components/lsw-formtype/type/lsw-ref-relation-control/lsw-ref-relation-control"),
              // LSW Database Virtualizer:
              importer.scriptSrc("lsw-framework/src/apis/lsw-database-virtualizer/lsw-database-virtualizer.js"),
              // LSW Database Adapter:
              importer.scriptSrc("lsw-framework/src/components/lsw-database-ui/database-adapter/LswDatabaseAdapter.js"),
              // LSW Directives for Vue.js:
              importer.scriptSrc("lsw-framework/src/directives/v-descriptor/v-descriptor.js"),
              importer.scriptSrc("lsw-framework/src/directives/v-focus/v-focus.js"),
              importer.scriptSrc("lsw-framework/src/directives/v-xform/v-xform.js"),
              // LSW Timeformat API (not Parser):
              importer.scriptSrc("lsw-framework/src/apis/lsw-timer/timeformat.api.js"),
              // LSW Depender:
              importer.scriptSrc("lsw-framework/src/apis/lsw-depender/lsw-depender.js"),
              // LSW Schema Form Vue component:
              importer.importVueComponent("lsw-framework/src/components/lsw-schema-based-form/lsw-schema-based-form"),
              // LSW Sortable and draggable 3rd parties:
              importer.scriptSrc("lsw-framework/src/others/vue.draggable/sortable.js"),
              importer.scriptSrc("lsw-framework/src/others/vue.draggable/vue.draggable.js"),
              // LSW Filesystem Vue component:
              importer.scriptSrc("lsw-framework/src/apis/lsw-filesystem/lsw-filesystem.unbundled.js"),
              /////////////////////////////////////////////////////////////////////
              // COMPONENTS::START ////////////////////////////////////////////////
              /////////////////////////////////////////////////////////////////////
              // LSW Form controls API & components:
              // Ahora:
              importer.scriptSrc("lsw-framework/src/directives/v-form/v-form.js"),
              // LSW Table component:
              importer.scriptSrc("lsw-framework/src/components/lsw-table/lsw-table/lsw-table-interface.js")
                .then(() => Promise.all([
                  importer.importVueComponent("lsw-framework/src/components/lsw-table/lsw-table/lsw-table"),
                  importer.importVueComponent("lsw-framework/src/components/lsw-table/lsw-database-table/lsw-database-table")
                ])),
              // LSW Dialogs API & components:
              importer.importVueComponent("lsw-framework/src/components/lsw-dialogs/lsw-dialogs"),
              importer.importVueComponent("lsw-framework/src/components/lsw-windows/lsw-windows-main-tab/lsw-windows-main-tab"),
              importer.importVueComponent("lsw-framework/src/components/lsw-windows/lsw-windows-viewer/lsw-windows-viewer"),
              importer.importVueComponent("lsw-framework/src/components/lsw-windows/lsw-windows-pivot-button/lsw-windows-pivot-button"),
              // LSW Toast components:
              importer.importVueComponent("lsw-framework/src/components/lsw-toasts/lsw-toasts"),
              // LSW ConsoleHooker Component (not API):
              importer.importVueComponent("lsw-framework/src/components/lsw-console-hooker/console-hooker"),
              // LSW Database adapter API & components:
              importer.importVueComponent("lsw-framework/src/components/lsw-database-ui/database-explorer/database-explorer"),
              importer.importVueComponent("lsw-framework/src/components/lsw-database-ui/database-breadcrumb/database-breadcrumb"),
              importer.importVueComponent("lsw-framework/src/components/lsw-database-ui/page-databases/page-databases"),
              importer.importVueComponent("lsw-framework/src/components/lsw-database-ui/page-rows/page-rows"),
              importer.importVueComponent("lsw-framework/src/components/lsw-database-ui/page-row/page-row"),
              importer.importVueComponent("lsw-framework/src/components/lsw-database-ui/page-schema/page-schema"),
              importer.importVueComponent("lsw-framework/src/components/lsw-database-ui/page-tables/page-tables"),
              /////////////////////////////////////////////////////////////////////
              // COMPONENTS::END //////////////////////////////////////////////////
              /////////////////////////////////////////////////////////////////////
            ]);

          }
          Third_wave: {
            // Specific styles of the UI toolkit of the framework:
            await importer.linkStylesheet("lsw-framework/src/styles/lsw-styling-structure.css");
            await importer.linkStylesheet("lsw-framework/src/styles/lsw-styling-theme.css");
            await importer.linkStylesheet("lsw-framework/src/styles/lsw-styling-framework.css");
          }
          Fourth_wave_for_extra_apis: {
            // XLSX for external Excel loads: (most of the time unneeded)
            // await importer.scriptSrc("assets/lib/sheetjs/xlsx.full.min.js");
          }
          Domain_specific_wave: {
            await Promise.all([
              // LSW Filesystem explorer components:
              importer.importVueComponent("lsw-framework/src/components/lsw-filesystem-explorer/lsw-filesystem-explorer/lsw-filesystem-explorer"),
              importer.importVueComponent("lsw-framework/src/components/lsw-filesystem-explorer/lsw-filesystem-buttons-panel/lsw-filesystem-buttons-panel"),
              importer.importVueComponent("lsw-framework/src/components/lsw-filesystem-explorer/lsw-filesystem-editor/lsw-filesystem-editor"),
              importer.importVueComponent("lsw-framework/src/components/lsw-filesystem-explorer/lsw-filesystem-treeviewer/lsw-filesystem-treeviewer"),
              // LSW Wiki components:
              importer.importVueComponent("lsw-framework/src/components/lsw-wiki/lsw-wiki/lsw-wiki"),
              // LSW Notes component:
              importer.importVueComponent("lsw-framework/src/components/lsw-notes/lsw-notes"),
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
              importer.importVueComponent("lsw-framework/src/components/lsw-agenda/components/lsw-agenda-limitador-viewer/lsw-agenda-limitador-viewer"),
              importer.importVueComponent("lsw-framework/src/components/lsw-agenda/components/lsw-agenda-postimpresion-search/lsw-agenda-postimpresion-search"),
              importer.importVueComponent("lsw-framework/src/components/lsw-agenda/components/lsw-agenda-propagacion-search/lsw-agenda-propagacion-search"),
              importer.importVueComponent("lsw-framework/src/components/lsw-agenda/components/lsw-agenda-propagador-search/lsw-agenda-propagador-search"),
            ]);
          }
        }
      }
    } // End of Step 1: import logic
    Import_application_now: {
      await Promise.all([
        // LSW Application component:
        importer.importVueComponent("modules/app/app"),
      ]);
    }
    Step_2_wait_for_dependencies_to_be_loaded_or_fail: {
      await waitForConditions({
        timeout: 1000 * 3,
        timeoutError: new Error("[!] Could not load all dependencies on «boot.js»"),
        intervalsOf: 10,
        conditions: [
          ["Superlogger is loaded", () => typeof Superlogger !== "undefined"],
          ["Browsie is loaded", () => typeof Browsie !== "undefined"],
          ["LswDatabase is loaded", () => typeof LswDatabase !== "undefined"],
          ["LswCycler is loaded", () => typeof LswCycler !== "undefined"],
        ]
      });
    }
    Step_3_organize_api: {
      Vue.prototype.$noop = () => { };
      Vue.prototype.$window = window;
      Vue.prototype.$console = console;
      Vue.prototype.$vue = Vue;
      Vue.prototype.$lsw = {};
      Inject_global_api: {
        Vue.prototype.$lsw.importer = importer;
        Vue.prototype.$lsw.logger = Superlogger.create("lsw");
        Vue.prototype.$trace = (...args) => Vue.prototype.$lsw.logger.trace(...args);
        Vue.prototype.$lsw.utils = LswUtils;
        Vue.prototype.$lsw.timer = LswTimer;
        Vue.prototype.$lsw.windows = null;
        Vue.prototype.$lsw.dialogs = null;
        Vue.prototype.$lsw.toasts = null;
        Vue.prototype.$lsw.proxifier = $proxifier;
        Vue.prototype.$lsw.fs = null;
        Vue.prototype.$lsw.wiki = null;
        Vue.prototype.$lsw.agenda = null;
      }
      Vue.prototype.$lsw.classes = {};
      Inject_classes_api: {
        Vue.prototype.$lsw.classes.Logger = Superlogger;
        Vue.prototype.$lsw.classes.Proxifier = LswProxifier;
        Vue.prototype.$lsw.classes.Ensurer = LswEnsurer;
        Vue.prototype.$lsw.classes.Randomizer = LswRandomizer;
        Vue.prototype.$lsw.classes.Proxifier = LswProxifier;
        Vue.prototype.$lsw.classes.DatabaseMigration = LswDatabaseMigration;
        Vue.prototype.$lsw.classes.Database = LswDatabase;
        Vue.prototype.$lsw.classes.Cycler = LswCycler;
        Vue.prototype.$lsw.classes.Compromiser = LswCompromiser;
        Vue.prototype.$lsw.classes.Utils = LswUtils;
        Vue.prototype.$lsw.classes.Formtypes = LswFormtypes;
        Vue.prototype.$lsw.classes.Schema = LswSchema;
        Vue.prototype.$lsw.classes.Lifecycle = LswLifecycle;
        Vue.prototype.$lsw.classes.DatabaseVirtualizer = LswDatabaseVirtualizer;
        // Vue.prototype.$lsw.classes.DatabaseAdapter = LswDatabaseAdapter;
        Vue.prototype.$lsw.classes.Timer = LswTimer;
        Vue.prototype.$lsw.classes.Depender = LswDepender;
        Vue.prototype.$lsw.classes.Filesystem = LswFilesystem;
        Vue.prototype.$lsw.classes.ConsoleHooker = ConsoleHooker;
        Vue.prototype.$lsw.classes.ClassRegister = LswClassRegister;
        // Vue.prototype.$lsw.classes.Dialogs = LswDialogs;
        // Vue.prototype.$lsw.classes.Windows = LswWindows;
        // Vue.prototype.$lsw.classes.Toasts = LswToasts;
      }
    }
    Step_4_export_framework: {
      window.lsw = Vue.prototype.$lsw;
    }
    Step_5_import_modules_runner: {
      await importer.scriptSrc("runner.js");
    }

  } catch (error) {
    console.error(error);
    console.log("[!] Boot failed");
  }
};

window.addEventListener("load", boot);