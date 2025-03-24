$proxifier.define("org.allnulled.lsw-conductometria.Limitador", {
  Item: class extends $proxifier.AbstractItem {

  },
  List: class extends $proxifier.AbstractList {

  },
  SchemaEntity: class extends $proxifier.AbstractSchemaEntity {
    static getEntityId() {
      return "org.allnulled.lsw-conductometria.Limitador@SchemaEntity";
    }
    static getName() {
      return "Limitador";
    }
    static getVersion() {
      return "1.0.0";
    }
    static getMethods() {
      return {};
    }
    static getProperties() {
      return {
        en_concepto: {
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
          hasLabel: "En concepto de:",
          hasDescription: "Nombre del concepto al que se atribuye el limitador",
          hasPlaceholder: "Ej: Dormir",
          hasExtraAttributes: {},
        },
        tiene_funcion: {
          isType: "text",
          isFormType: "code",
          isIndexed: false,
          hasValidator(v) {
            // Ok.
          },
          hasFormatter: false,
          hasLabel: "Tiene función:",
          hasDescription: "Código JavaScript asociado al limitador",
          hasPlaceholder: "...",
          hasExtraAttributes: {},
        },
      }
    }
    static getVirtualizerId() {
      return "org.allnulled.lsw-conductometria.Limitador@Virtualizer";
    }
    static getFormSettings() {
      return {};
    }
    static getExtraAttributes() {
      return {
        readableName: "limitador"
      };
    }
  },
  Virtualizer: class extends $proxifier.AbstractVirtualizer {

  }
});