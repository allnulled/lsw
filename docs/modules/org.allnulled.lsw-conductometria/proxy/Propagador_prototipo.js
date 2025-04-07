$proxifier.define("org.allnulled.lsw-conductometria.Propagador_prototipo", {
  Item: class extends $proxifier.AbstractItem {

  },
  List: class extends $proxifier.AbstractList {

  },
  SchemaEntity: class extends $proxifier.AbstractSchemaEntity {
    static getEntityId() {
      return "org.allnulled.lsw-conductometria.Propagador_prototipo@SchemaEntity";
    }
    static getName() {
      return "Propagador_prototipo";
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
          hasLabel: "Nombre único del propagador prototipo:",
          hasDescription: "Nombre del propagador prototipo en sí",
          hasPlaceholder: "Ej: al desayunar",
          hasExtraAttributes: {}
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
          hasDescription: "Código JavaScript asociado al propagador prototipo",
          hasPlaceholder: "...",
          hasExtraAttributes: {},
        }
      }
    }
    static getVirtualizerId() {
      return "org.allnulled.lsw-conductometria.Propagador_prototipo@Virtualizer";
    }
    static getFormSettings() {
      return {};
    }
    static getExtraAttributes() {
      return {
        readableName: "propagador prototipo"
      };
    }
  },
  Virtualizer: class extends $proxifier.AbstractVirtualizer {

  }
});