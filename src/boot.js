const boot = async function () {
  try {
    Set_environment: {
      if (typeof window.process === "undefined") {
        window.process = {};
      }
      if (typeof window.process.env === "undefined") {
        window.process.env = {};
      }
      window.process.env.NODE_ENV = window.location.href.startsWith("https") ? "production" : "test";
      window.process.env.BROWSER_ENV = window.process.env.NODE_ENV;
    }
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
        importer.setTotal(2);
        First_wave: {
          await Promise.all([
            importer.scriptSrc("distribution.js"),
            importer.linkStylesheet("distribution.css"),
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