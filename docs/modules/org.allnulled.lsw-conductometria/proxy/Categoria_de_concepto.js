$proxifier.define("org.allnulled.lsw-conductometria.Categoria_de_concepto", {
  Item: class extends $proxifier.AbstractItem {

  },
  List: class extends $proxifier.AbstractList {

  },
  SchemaEntity: class extends $proxifier.AbstractSchemaEntity {
    static getEntityId() {
      return "org.allnulled.lsw-conductometria.Categoria_de_concepto@SchemaEntity";
    }
    static getName() {
      return "Categoria_de_concepto";
    }
    static getVersion() {
      return "1.0.0";
    }
    static getMethods() {
      return {};
    }
    static getProperties() {
      return {
        tiene_nombre: {
          refersTo: false,
          isType: "text",
          isFormType: "text",
          isIndexed: true,
          isUnique: true,
          hasValidator(v) {
            if(v.trim() === '') throw new Error("Cannot be empty");
          },
          hasFormatter: false,
          hasLabel: "Nombre de la categoría de concepto:",
          hasDescription: "Una categoría es una agrupación de conceptos desde una perspectiva de área o campo de conocimiento.",
          hasPlaceholder: "Ej: Programación",
          hasExtraAttributes: {}
        },
        tiene_descripcion: {
          isType: "text",
          isFormType: "long-text",
          isIndexed: false,
          hasValidator(v) {
            // Ok.
          },
          hasFormatter: false,
          hasLabel: "Tiene descripción:",
          hasDescription: "Descripción de la categoría de conceptos con más detalle.",
          hasPlaceholder: "La programación es el campo de...",
          hasExtraAttributes: {},
        }
      }
    }
    static getVirtualizerId() {
      return "org.allnulled.lsw-conductometria.Categoria_de_concepto@Virtualizer";
    }
    static getFormSettings() {
      return {};
    }
    static getExtraAttributes() {
      return {
        readableName: "concepto"
      };
    }
  },
  Virtualizer: class extends $proxifier.AbstractVirtualizer {

  }
});