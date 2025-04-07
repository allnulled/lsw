LswLifecycle.hooks.register("app:install_modules", "install_module:org.allnulled.lsw-conductometria", async function () {
  console.log("[*] Installing conductometria");
  await importer.importVueComponent("modules/org.allnulled.lsw-conductometria/components/lsw-protolang-editor/lsw-protolang-editor");
  await LswLifecycle.loadSubmodule("org.allnulled.lsw-conductometria", "proxy/Accion.js");
  await LswLifecycle.loadSubmodule("org.allnulled.lsw-conductometria", "proxy/Concepto.js");
  await LswLifecycle.loadSubmodule("org.allnulled.lsw-conductometria", "proxy/Categoria_de_concepto.js");
  await LswLifecycle.loadSubmodule("org.allnulled.lsw-conductometria", "proxy/Propagador_prototipo.js");
  await LswLifecycle.loadSubmodule("org.allnulled.lsw-conductometria", "proxy/Propagador_de_concepto.js");
  await LswLifecycle.loadSubmodule("org.allnulled.lsw-conductometria", "proxy/Limitador.js");
  await LswLifecycle.loadSubmodule("org.allnulled.lsw-conductometria", "proxy/Impresion.js");
  await LswLifecycle.loadSubmodule("org.allnulled.lsw-conductometria", "proxy/Nota.js");
  await LswLifecycle.loadSubmodule("org.allnulled.lsw-conductometria", "lang/protolang/protolang.js");
  await LswLifecycle.loadSubmodule("org.allnulled.lsw-conductometria", "lang/protolang/protolang.api.js");
  return LswUtils.waitForMilliseconds(1);
});

Database_seeding: {

  const all = {};

  all.conceptos = [{
    tiene_nombre: "dejar en paz",
  }, {
    tiene_nombre: "okok",
  }, {
    tiene_nombre: "ok"
  }, {
    tiene_nombre: "ok1"
  }, {
    tiene_nombre: "ok2"
  }, {
    tiene_nombre: "ok3"
  }];

  all.acciones = [];

  all.propagadores_prototipo = [];
  
  all.propagadores_de_concepto = [];

  all.notas = [{
    tiene_titulo: "Nota 1",
    tiene_contenido: "Esto es la **nota 1**. A ver si podemos meterle marked.js.",
    tiene_categorias: "cat 1; cat 2; cat 3",
    tiene_estado: "creada",
    tiene_fecha: LswTimer.utils.formatDatestringFromDate(new Date())
  }];

  LswLifecycle.hooks.register("app:seed_database", "seed_database:org.allnulled.lsw-conductometria", async function () {
    console.log("[*] Seeding conductometria database");
    await lsw.database.insertMany("Concepto", all.conceptos);
    await lsw.database.insertMany("Accion", all.acciones);
    await lsw.database.insertMany("Propagador_prototipo", all.propagadores_prototipo);
    await lsw.database.insertMany("Propagador_de_concepto", all.propagadores_de_concepto);
    await lsw.database.insertMany("Nota", all.notas);
    return LswUtils.waitForMilliseconds(1);
  });

}