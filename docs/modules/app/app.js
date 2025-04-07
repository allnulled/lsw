(() => {
  let isFirstTime = true;
  const initialCode = `
inc /wherever/you/choose.proto

def correr {
  "definicion": @definicion "Correr es tal"
}

add 2025/01/01
  00:00 correr * 1h
  00:00 saltar * 5min
  00:00 comer * @alimentos [["leche","0.3L"],["cacao","2g"]]

fun yo.correr {
  // Nolose, aquí JS.
}

rel correr
  > cardio * 2
  >> yo.correr

`.trim();
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
        initialContents: initialCode
      };
    },
    methods: {

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