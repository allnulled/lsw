Start_environment: {
  window.process = Object.assign(window.process || {});
  window.process.env = Object.assign(window.process || {});
  // window.process.env.NODE_ENV = window.location.href.startsWith("https") ? "production" : "test";
  window.process.env.NODE_ENV = "test";
}

const boot = async function () {
  try {
    if (window.process.NODE_ENV === "production") {
      Download_sources_on_production: {
        importer.setTotal(2);
        await Promise.all([
          importer.scriptSrc("distribution.js"),
          importer.linkStylesheet("distribution.css"),
        ]);
      }
    } else if (window.process.NODE_ENV === "test") {
      Download_sources_on_test: {
        importer.setTotal(17);
        importer.setTimeout(1000 * 3);
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
          ]);
        }
        Second_wave: {
          await Promise.all([
            importer.scriptSrc("lsw-framework/src/directives/v-descriptor/v-descriptor.js"),
            importer.scriptSrc("lsw-framework/src/directives/v-focus/v-focus.js"),
            importer.scriptSrc("lsw-framework/src/lsw-components.js"),
          ]);
        }
        Third_wave: {
          await Promise.all([
            importer.scriptSrc("lsw-framework/src/lsw-api.js"),
          ]);
        }
      }
    }
  } catch (error) {
    console.error(error);
    console.log("[!] Boot failed");
  }
};

window.addEventListener("load", boot);