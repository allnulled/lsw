LswLifecycle.hooks.register("app:load_modules", "load_all_modules", async () => {
  try {
    Step_1_inject_modules: {
      // await LswLifecycle.loadModule("app");
      await importer.scriptSrc("assets/lib/jquery/jquery-v3.7.1.js");
      await importer.scriptSrc("assets/lib/marked/marked.js");
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
      // @TOUNCOMMENT:
      // return;
      Load_e2e_utils: {
        window.filterDomElements = function (selector, filterCallback, base = document) {
          return Array.from(base.querySelectorAll(selector)).filter(filterCallback);
        };
        window.getButtonFromLswTableCellText = function (text, buttonIndex = 0, context = undefined, selector = ".lsw_database_ui table td.data_cell") {
          return jQuery(selector, context).filter((i, cell) => {
            return cell.textContent.trim() === text
          }).eq(0).closest("tr").find("button").eq(buttonIndex);
        };
      }

      Working_on_filesystem: {
        break Working_on_filesystem;
        document.querySelector("#windows_pivot_button").click();
        await waitForMilliseconds(100);
        filterDomElements(".main_tab_topbar > button", button => button.textContent.trim() === "📂 Files")[0].click();
        await waitForMilliseconds(100);
      }

      Fill_database_with_limitadores_fake: {
        if(process.env.NODE_ENV === "production") {
          break Fill_database_with_limitadores_fake
        };
        await Vue.prototype.$lsw.database.deleteMany("Limitador", it => true);
        await Vue.prototype.$lsw.database.insertMany("Limitador", [{
          en_concepto: "Ejercicio físico * 1 al día",
          tiene_funcion: (async function() {
            const hoy = new Date();
            const fechaDeHoy = `${hoy.getFullYear()}/${((hoy.getMonth() +1) + "").padStart(2, "0")}/${(hoy.getDate() + "").padStart(2, "0")}`;
            const acciones = await this.$lsw.database.selectMany("Accion", accion => {
              return accion.tiene_inicio.startsWith(fechaDeHoy);
            });
            const ejerciciosFisicos = [];
            for(let index=0; index<acciones.length; index++) {
              const accion = acciones[index];
              const isAccepted = accion.en_concepto === "Ejercicio físico";
              if(isAccepted) {
                ejerciciosFisicos.push(accion);
              }
            }
            if(!ejerciciosFisicos.length) {
              throw new Error("Debes hacer ejercicio físico 1 vez al día");
            }
          }).toString()
        }]);
      }

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