$proxifier.define("org.allnulled.lsw-conductometria.Propagador_de_concepto", {
  Item: class extends $proxifier.AbstractItem {

  },
  List: class extends $proxifier.AbstractList {

  },
  SchemaEntity: class extends $proxifier.AbstractSchemaEntity {
    static getEntityId() {
      return "org.allnulled.lsw-conductometria.Propagador_de_concepto@SchemaEntity";
    }
    static getName() {
      return "Propagador_de_concepto";
    }
    static getVersion() {
      return "1.0.0";
    }
    static getMethods() {
      return {};
    }
    static getProperties() {
      return {
        tiene_propagador_prototipo: {
          refersTo: {
            entity: "org.allnulled.lsw-conductometria.Propagador_prototipo@SchemaEntity",
            table: "Propagador_prototipo",
            property: "tiene_nombre",
            constraint: false,
          },
          isType: "ref-object",
          isFormType: "ref-object",
          isIndexed: true,
          hasFormtypeParameters: {},
          hasValidator(v) {
            if(v.trim() === '') throw new Error("Cannot be empty");
          },
          hasFormatter: false,
          hasLabel: "Propagador prototipo:",
          hasDescription: "Nombre del propagador prototipo que tiene la función propagativa correspondiente a esta propagación de concepto concreta",
          hasPlaceholder: "Ej: al desayunar",
          hasExtraAttributes: {},
        },
        tiene_concepto_origen: {
          refersTo: {
            entity: "org.allnulled.lsw-conductometria.Concepto@SchemaEntity",
            table: "Concepto",
            property: "tiene_nombre",
            constraint: false,
          },
          isType: "ref-object",
          isFormType: "ref-object",
          isIndexed: true,
          hasFormtypeParameters: {},
          hasValidator(v) {
            if(v.trim() === '') throw new Error("Cannot be empty");
          },
          hasFormatter: false,
          hasLabel: "Tiene concepto origen:",
          hasDescription: "Nombre del concepto origen en esta relación propagativa",
          hasPlaceholder: "Ej: Desayunar",
          hasExtraAttributes: {},
        },
        tiene_concepto_destino: {
          refersTo: {
            entity: "org.allnulled.lsw-conductometria.Concepto@SchemaEntity",
            table: "Concepto",
            property: "tiene_nombre",
            constraint: false,
          },
          isType: "ref-object",
          isFormType: "ref-object",
          isIndexed: true,
          hasFormtypeParameters: {},
          hasValidator(v) {
            if(v.trim() === '') throw new Error("Cannot be empty");
          },
          hasFormatter: false,
          hasLabel: "Tiene concepto destino:",
          hasDescription: "Nombre del concepto destino en esta relación propagativa",
          hasPlaceholder: "Ej: Recuperar energía",
          hasExtraAttributes: {},
        },
        tiene_parametros_extra: {
          isType: "text",
          isFormType: "code",
          isIndexed: false,
          hasValidator(v) {
            // Ok.
          },
          hasFormatter: false,
          hasLabel: "Tiene parámetros extra:",
          hasDescription: "JSON con los parámetros extra",
          hasPlaceholder: "{}",
          hasExtraAttributes: {},
        }
      }
    }
    static getVirtualizerId() {
      return "org.allnulled.lsw-conductometria.Propagador_de_concepto@Virtualizer";
    }
    static getFormSettings() {
      return {};
    }
    static getExtraAttributes() {
      return {
        readableName: "Propagador de concepto"
      };
    }
  },
  Virtualizer: class extends $proxifier.AbstractVirtualizer {

  }
});