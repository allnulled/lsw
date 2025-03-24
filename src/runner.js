LswLifecycle.hooks.register("app:load_modules", "load_all_modules", async () => {
  try {
    Step_1_inject_modules: {
      // await LswLifecycle.loadModule("app");
      await importer.scriptSrc("assets/lib/jquery/jquery-v3.7.1.js");
      await LswLifecycle.loadModule("org.allnulled.lsw-agenda-ui");
      await LswLifecycle.loadModule("org.allnulled.lsw-conductometria");
      await LswLifecycle.loadModule("org.allnulled.lsw.db");
      await LswLifecycle.loadModule("org.allnulled.lsw.fs");
      await LswLifecycle.loadModule("org.allnulled.lsw.wiki");
    }
  } catch (error) {
    console.error(error);
  }
});

LswLifecycle.hooks.register("app:all_loaded", "inject_development_point", async () => {
  Step_2_inject_development_point: {
    try {
      console.log("[*] Application is ready here!");
      break Step_2_inject_development_point;
      // Vue.prototype.$consoleHooker.instance.restoreConsole();
      Fill_database: {
        await Vue.prototype.$lsw.database.insert("Accion", {
          en_concepto: "Desayunar",
          tiene_detalles: "ajo, cacao, leche, tostada, miel, mermelada",
          tiene_inicio: "2025/03/16 08:00",
          tiene_estado: "completada",
          tiene_duracion: "50min",
          tiene_descripcion: "",
          tiene_aprendizaje: "",
          tiene_aprendizajes: "",
        });
        await Vue.prototype.$lsw.database.insert("Accion", {
          en_concepto: "Comer",
          tiene_detalles: "comida en general",
          tiene_inicio: "2025/03/16 14:00",
          tiene_estado: "pendiente",
          tiene_duracion: "50min",
          tiene_descripcion: "",
          tiene_aprendizaje: "",
        });
        await Vue.prototype.$lsw.database.insert("Accion", {
          en_concepto: "Cenar",
          tiene_detalles: "sopa, tortilla",
          tiene_inicio: "2025/03/16 21:00",
          tiene_estado: "fallida",
          tiene_duracion: "50min",
          tiene_descripcion: "",
          tiene_aprendizaje: "",
        });
        await Vue.prototype.$lsw.database.insert("Accion", {
          en_concepto: "Cenar",
          tiene_detalles: "sopa, tortilla",
          tiene_inicio: "2025/03/16 14:00",
          tiene_estado: "pendiente",
          tiene_duracion: "50min",
          tiene_descripcion: "",
          tiene_aprendizaje: "",
          tiene_aprendizajes: "",
        });
        await Vue.prototype.$lsw.database.insert("Concepto", {
          tiene_nombre: "Desayunar",
          tiene_detalles: "No especificados",
          tiene_descripcion: "No especificada",
          tiene_aprendizaje: "No todavía",
          tiene_aprendizajes: "No todavía",
        });
        await Vue.prototype.$lsw.database.insert("Concepto", {
          tiene_nombre: "Comer",
          tiene_detalles: "No especificados",
          tiene_descripcion: "No especificada",
          tiene_aprendizaje: "No todavía",
          tiene_aprendizajes: "No todavía",
        });
        await Vue.prototype.$lsw.database.insert("Concepto", {
          tiene_nombre: "Cenar",
          tiene_detalles: "No especificados",
          tiene_descripcion: "No especificada",
          tiene_aprendizaje: "No todavía",
          tiene_aprendizajes: "No todavía",
        });
        await Vue.prototype.$lsw.database.insert("Concepto", {
          tiene_nombre: "Merendar",
          tiene_detalles: "No especificados",
          tiene_descripcion: "No especificada",
          tiene_aprendizaje: "No todavía",
          tiene_aprendizajes: "No todavía",
        });
        await Vue.prototype.$lsw.database.insert("Concepto", {
          tiene_nombre: "Almorzar",
          tiene_detalles: "No especificados",
          tiene_descripcion: "No especificada",
          tiene_aprendizaje: "No todavía",
          tiene_aprendizajes: "No todavía",
        });
        await Vue.prototype.$lsw.database.insert("Concepto", {
          tiene_nombre: "Tomar un tentempié",
          tiene_detalles: "No especificados",
          tiene_descripcion: "No especificada",
          tiene_aprendizaje: "No todavía",
          tiene_aprendizajes: "No todavía",
        });
        await Vue.prototype.$lsw.database.insert("Limitador", {
          en_concepto: "Dormir",
          tiene_funcion: "console.log('ok')",
        });
      }
      window.filterDomElements = function (selector, filterCallback, base = document) {
        return Array.from(base.querySelectorAll(selector)).filter(filterCallback);
      }
      window.getButtonFromLswTableCellText = function (text, buttonIndex = 0, context = undefined, selector = ".lsw_database_ui table td.data_cell") {
        return jQuery(selector, context).filter((i, cell) => {
          return cell.textContent.trim() === text
        }).eq(0).closest("tr").find("button").eq(buttonIndex);
      };

      // return;

      Working_on_database_ui: {
        break Working_on_database_ui;
        document.querySelector("#windows_pivot_button").click();
        await waitForMilliseconds(100);
        filterDomElements(".main_tab_topbar > button", button => button.textContent.trim() === "Data")[0].click();
        await waitForMilliseconds(100);
        Working_on_insert_task_form: {
          getButtonFromLswTableCellText("lsw_default_database", 1).click();
          await waitForMilliseconds(100);
          getButtonFromLswTableCellText("Concepto", 1).click();
          await waitForMilliseconds(100);
          getButtonFromLswTableCellText("Desayunar", 1).click();
          break Working_on_database_ui;
        }
        Working_on_insert_task_form: {
          break Working_on_database_ui;
          getButtonFromLswTableCellText("lsw_default_database", 1).click();
          await waitForMilliseconds(100);
          getButtonFromLswTableCellText("Accion", 1).click();
          await waitForMilliseconds(100);
          getButtonFromLswTableCellText("Desayunar", 1).click();
          break Working_on_database_ui;
          await waitForMilliseconds(100);
          getButtonFromLswTableCellText("Impresion_de_concepto", 1).click();
          await waitForMilliseconds(100);
          filterDomElements("button", button => button.textContent.trim() === "➕")[0].click();
          await waitForMilliseconds(100);
          
        }
      }
      Working_on_agenda: {
        // break Working_on_agenda;
        // document.querySelector("#windows_pivot_button").click();
        // await waitForMilliseconds(100);
        // filterDomElements(".main_tab_topbar > button", button => button.textContent.trim() === "Agenda")[0].click();
        // await waitForMilliseconds(100);
        Working_on_insert_task_form: {
          // break Working_on_insert_task_form;
          filterDomElements(".dia_de_calendario_texto", button => button.textContent.trim() === "16")[0].click();
          await waitForMilliseconds(100);
          break Working_on_insert_task_form;
          filterDomElements(".lsw_agenda", el => true)[0].__vue__.selectContext("accion.add");
          await waitForMilliseconds(100);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
});

LswLifecycle.hooks.register("app:load_application", "inject_vue_app_on_dom", async () => {
  Step_3_deploy_application: {
    const vueInstance = new Vue({
      render: h => h(Vue.options.components.App),
    }).$mount("#app");
  }
});

LswLifecycle.start();