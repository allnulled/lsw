LswLifecycle.hooks.register("app:install_modules", "install_module:org.allnulled.lsw-conductometria", async function () {
  console.log("[*] Installing conductometria");
  await LswLifecycle.loadSubmodule("org.allnulled.lsw-conductometria", "proxy/Accion.js");
  await LswLifecycle.loadSubmodule("org.allnulled.lsw-conductometria", "proxy/Concepto.js");
  await LswLifecycle.loadSubmodule("org.allnulled.lsw-conductometria", "proxy/Categoria_de_concepto.js");
  await LswLifecycle.loadSubmodule("org.allnulled.lsw-conductometria", "proxy/Propagador.js");
  await LswLifecycle.loadSubmodule("org.allnulled.lsw-conductometria", "proxy/Limitador.js");
  await LswLifecycle.loadSubmodule("org.allnulled.lsw-conductometria", "proxy/Impresion.js");
  return LswUtils.waitForMilliseconds(1);
});