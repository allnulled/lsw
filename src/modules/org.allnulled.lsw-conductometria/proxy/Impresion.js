$proxifier.define("org.allnulled.lsw-conductometria.Impresion_de_concepto", {
  Item: class extends $proxifier.AbstractItem {

  },
  List: class extends $proxifier.AbstractList {

  },
  SchemaEntity: class extends $proxifier.AbstractSchemaEntity {
    static getEntityId() {
      return "org.allnulled.lsw-conductometria.Impresion_de_concepto@SchemaEntity";
    }
    static getName() {
      return "Impresion_de_concepto";
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
          hasDescription: "Nombre del concepto al que se atribuye la impresión",
          hasPlaceholder: "Ej: Correr",
          hasExtraAttributes: {},
        },
        tiene_valores: {
          isType: "text",
          isFormType: "long-text",
          isIndexed: false,
          hasValidator(v) {
            // Ok.
          },
          hasFormatter: false,
          hasLabel: "Tiene valores:",
          hasDescription: "Valores asociados a esta impresión",
          hasPlaceholder: "Ej: 1000p, 50h",
          hasExtraAttributes: {},
        },
      }
    }
    static getVirtualizerId() {
      return "org.allnulled.lsw-conductometria.Impresion_de_concepto@Virtualizer";
    }
    static getFormSettings() {
      return {};
    }
    static getExtraAttributes() {
      return {
        readableName: "impresión de concepto"
      };
    }
  },
  Virtualizer: class extends $proxifier.AbstractVirtualizer {

  }
});