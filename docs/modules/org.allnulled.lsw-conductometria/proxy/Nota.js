$proxifier.define("org.allnulled.lsw-conductometria.Nota", {
  Item: class extends $proxifier.AbstractItem {

  },
  List: class extends $proxifier.AbstractList {

  },
  SchemaEntity: class extends $proxifier.AbstractSchemaEntity {
    static getEntityId() {
      return "org.allnulled.lsw-conductometria.Nota@SchemaEntity";
    }
    static getName() {
      return "Nota";
    }
    static getVersion() {
      return "1.0.0";
    }
    static getMethods() {
      return {};
    }
    static getProperties() {
      return {
        tiene_titulo: {
          isType: "text",
          isFormType: "text",
          isIndexed: true,
          hasValidator(v) {
            // Ok.
          },
          hasFormatter: false,
          hasLabel: "Tiene título:",
          hasDescription: "El título que se asociará a la nota",
          hasPlaceholder: "Título de la nota",
          hasExtraAttributes: {},
        },
        tiene_fecha: {
          isType: "text",
          isFormType: "date",
          isFormSubtype: "datetime",
          isIndexed: true,
          hasFormtypeParameters: {},
          hasValidator: function (v) {
            LswTimer.utils.isDatetimeOrThrow(v);
          },
          hasFormatter: function (v) {
            return LswTimer.utlis.getDateFromMomentoText(v);
          },
          hasLabel: "Tiene fecha:",
          hasDescription: "Momento en que se creó la nota",
          hasPlaceholder: false,
          hasExtraAttributes: {},
        },
        tiene_categorias: {
          isType: "text",
          isFormType: "text",
          isIndexed: true,
          hasFormtypeParameters: {},
          hasValidator(v) {
            // Ok.
          },
          hasFormatter: false,
          hasLabel: "Tiene categorias:",
          hasDescription: "El categorías de esta nota, separadas por «;» entre sí.",
          hasPlaceholder: "Categoría 1; categoría 2; categoría 3",
          hasExtraAttributes: {},
        },
        tiene_estado: {
          isType: "text",
          isFormType: "options",
          isIndexed: true,
          hasFormtypeParameters: {
            type: "selector",
            available: ["creada", "procesada", "dudosa", "desestimada"],
            selectable: 1, // could be: number or "*" to all options
            defaultValue: "creada",
          },
          hasValidator(v) {
            
          },
          hasFormatter: false,
          hasLabel: "Tiene estado:",
          hasDescription: "Estado de la nota. Puede ser «creada», «procesada», «dudosa» o «desestimada»",
          hasPlaceholder: false,
          hasExtraAttributes: {},
        },
        tiene_contenido: {
          isType: "text",
          isFormType: "long-text",
          isIndexed: false,
          hasFormtypeParameters: {},
          hasValidator(v) {
            // Ok.
          },
          hasFormatter: false,
          hasLabel: "Tiene contenido:",
          hasDescription: "El contenido de esta nota. Permite markdown.",
          hasPlaceholder: "El **contenido** de tu nota o artículo.",
          hasExtraAttributes: {},
        }
      }
    }
    static getVirtualizerId() {
      return "org.allnulled.lsw-conductometria.Nota@Virtualizer";
    }
    static getFormSettings() {
      return {};
    }
    static getExtraAttributes() {
      return {
        readableName: "nota"
      };
    }
  },
  Virtualizer: class extends $proxifier.AbstractVirtualizer {

  }
});