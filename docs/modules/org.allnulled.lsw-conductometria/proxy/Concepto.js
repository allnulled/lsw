$proxifier.define("org.allnulled.lsw-conductometria.Concepto", {
  Item: class extends $proxifier.AbstractItem {

  },
  List: class extends $proxifier.AbstractList {

  },
  SchemaEntity: class extends $proxifier.AbstractSchemaEntity {
    static getEntityId() {
      return "org.allnulled.lsw-conductometria.Concepto@SchemaEntity";
    }
    static getName() {
      return "Concepto";
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
          hasLabel: "Nombre único del concepto:",
          hasDescription: "Nombre del concepto en sí",
          hasPlaceholder: "Ej: Desayunar",
          hasExtraAttributes: {}
        },
        tiene_comentarios: {
          isType: "text",
          isFormType: "long-text",
          isIndexed: false,
          hasValidator(v) {
            // Ok.
          },
          hasFormatter: false,
          hasLabel: "Tiene comentarios:",
          hasDescription: "Comentarios asociados a este concepto",
          hasPlaceholder: "Ej: este concepto puede ser ambiguo porque...",
          hasExtraAttributes: {},
        }
      }
    }
    static getExternalProperties() {
      return {
        tiene_limitadores: {
          isType: "ref-list",
          refersTo: {
            entity: "org.allnulled.lsw-conductometria.Limitador@SchemaEntity",
            table: "Limitador",
            property: "id",
          },
          hasLabel: "Tiene limitadores",
          hasDescription: "Limitadores asociados a este concepto",
          hasPlaceholder: ""
        }
      };
    }
    static getVirtualizerId() {
      return "org.allnulled.lsw-conductometria.Concepto@Virtualizer";
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