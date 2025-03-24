(() => {
  let isFirstTime = true;
// Change this component at your convenience:
Vue.component("App", {
  template: $template,
  props: {
    uuid: {
      type: String,
      default: () => {
        return Vue.prototype.$lsw.utils.getRandomString(10);
      }
    }
  },
  data() {
    return {
      formScope: {},
      userScope: {},
      conductometria: [],
      conductometria_minified_days: [],
    };
  },
  methods: {

    async uploadConductometria() {
      try {
        if (localStorage.__conductometria_file_1__) {
          this.conductometria = JSON.parse(localStorage.__conductometria_file_1__);
          return 1;
        }
        const excelData2 = await this.$lsw.utils.loadConductometriaByExcelFile();
        if (excelData2) {
          this.conductometria = excelData2;
          localStorage.__conductometria_file_1__ = JSON.stringify(excelData2);
          return 2;
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.$forceUpdate(true);
      }
    },

    clearConductometria() {
      try {
        this.conductometria = [];
        this.conductometria_minified_days = [];
        delete localStorage.__conductometria_file_1__;
      } catch (error) {
        console.log(error);
      } finally {
        this.$forceUpdate(true);
      }
    },

    toggleDay(dia_index) {
      const pos = this.conductometria_minified_days.indexOf(dia_index);
      if (pos === -1) {
        this.conductometria_minified_days.push(dia_index);
      } else {
        this.conductometria_minified_days.splice(pos, 1);
      }
      this.$forceUpdate(true);
    },

    async openDialog() {
      const name = await this.$dialogs.open({
        template: `
          <div>
            <div style="display: flex; flex-direction: row; align-items: center;">
              <div style="flex:100; padding-right: 4px;">
                <input type="text" v-model="value" style="width:100%;" placeholder="Pon tu nombre aquí" v-focus v-on:keydown.enter="accept" />
              </div>
              <div style="flex:1;">
                <button v-on:click="accept">Aceptar</button>
              </div>
            </div>
          </div>
        `
      });
      console.log("Name:", name);
    },

    async openDialogSequence() {
      const userData = await this.$dialogs.open({
        id: "dialog-step-1",
        title: "Paso 1",
        template: `
          <div>
              <div>
                <div>Nombre:</div>
                <input type="text" ref="nameInput" v-model="value.name" style="width:100%;" placeholder="Pon tu nombre aquí" v-focus v-on:keydown.enter="() => $refs.ageInput.focus()" />
                <div>Edad:</div>
                <input type="number" ref="ageInput" v-model="value.age" style="width:100%;" placeholder="Pon tu edad aquí" v-on:keydown.enter="() => $refs.cityInput.focus()" />
                <div>Ciudad:</div>
                <input type="text" ref="cityInput" v-model="value.city" style="width:100%;" placeholder="Pon tu ciudad aquí" v-on:keydown.enter="accept" />
              </div>
              <div>
                <button v-on:click="accept">Aceptar</button>
              </div>
          </div>
        `,
        factory: {
          data: {
            value: {
              tpl1: [["name, nombre"], ["age", "edad"], ["city", "ciudad"]],
              name: "Guybrush Threepwood",
              age: 0,
              city: "Los Angeles"
            }
          }
        }
      });
      console.log("UserData:", userData);
      const response = await this.$dialogs.open({
        id: "dialog-step-2",
        title: "Paso 2",
        template: `
          <div>
              <div>
                <div>¿Cómo estás, ${userData.name}?</div>
                <div>Cuéntame, ¿qué tal todo por ${userData.city}?</div>
                <div>¿Cómo van esos ${userData.age} años?</div>
                <input type="text" v-model="value" style="width:100%;" placeholder="Cuéntame aquí, que quiero saber" v-on:keydown.enter="accept" />
              </div>
              <div>
                <button v-on:click="accept">Aceptar</button>
              </div>
          </div>
        `
      });
      console.log("Response:", response);
    }

  },
  mounted() {
    console.log("[*] Application mounted.");
    if (isFirstTime) {
      Vue.prototype.$app = this;
      isFirstTime = false;
      window.dispatchEvent(new CustomEvent("lsw_app_mounted", {
        applicationUuid: this.uuid,
        $lsw: this.$lsw,
        appComponent: this,
      }));
    }
  }
});
})();