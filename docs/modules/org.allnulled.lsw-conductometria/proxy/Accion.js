$proxifier.define("org.allnulled.lsw-conductometria.Accion", {
  Item: class extends $proxifier.AbstractItem {

  },
  List: class extends $proxifier.AbstractList {

  },
  SchemaEntity: class extends $proxifier.AbstractSchemaEntity {
    static getEntityId() {
      return "org.allnulled.lsw-conductometria.Accion@SchemaEntity";
    }
    static getName() {
      return "Accion";
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
        tiene_estado: {
          isType: "text",
          isFormType: "options",
          isIndexed: true,
          hasFormtypeParameters: {
            type: "selector",
            available: ["pendiente", "completada", "fallida"],
            selectable: 1, // could be: number or "*" to all options
            defaultValue: "pendiente",
          },
          hasValidator(v) {
            if(v === "fallida") {
              throw new Error("No losers, por favor");
            }
          },
          hasFormatter: false,
          hasLabel: "Tiene estado:",
          hasDescription: "Estado en el que se encuentra la acción. Puede ser «pendiente», «completada» o «fallida»",
          hasPlaceholder: false,
          hasExtraAttributes: {},
        },
        tiene_inicio: {
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
          hasLabel: "Tiene inicio:",
          hasDescription: "Momento en que empieza la acción",
          hasPlaceholder: false,
          hasExtraAttributes: {},
        },
        tiene_duracion: {
          isType: "text",
          isFormType: "duration",
          isIndexed: false,
          hasFormtypeParameters: {},
          hasValidator(v) {
            LswTimer.utils.isDurationOrThrow(v);
          },
          hasFormatter(v) {
            return LswTimer.parser.parse(v)[0];
          },
          hasLabel: "Tiene duración:",
          hasDescription: "Cantidad de tiempo que dura la acción",
          hasPlaceholder: "Ej: 1h 20min",
          hasExtraAttributes: {},
        },
        tiene_parametros: {
          isType: "text",
          isFormType: "long-text",
          isIndexed: false,
          hasFormtypeParameters: {},
          hasValidator(v) {
            // Ok.
          },
          hasFormatter: false,
          hasLabel: "Tiene parámetros:",
          hasDescription: "",
          hasPlaceholder: "Ej: leche, trigo, arroz",
          hasExtraAttributes: {},
        },
        tiene_resultados: {
          isType: "text",
          isFormType: "long-text",
          isIndexed: false,
          hasFormtypeParameters: {},
          hasValidator(v) {
            // Ok.
          },
          hasFormatter: false,
          hasLabel: "Tiene resultados:",
          hasDescription: "Resultados notorios asociados a esta acción",
          hasPlaceholder: "Ej:\n- Cogí fuerzas hasta el almuerzo\n- Disfruté de un buen desayuno",
          hasExtraAttributes: {},
        },
        tiene_comentarios: {
          isType: "text",
          isFormType: "long-text",
          isIndexed: false,
          hasFormtypeParameters: {},
          hasValidator(v) {
            // Ok.
          },
          hasFormatter: false,
          hasLabel: "Tiene comentarios:",
          hasDescription: "Comentarios asociados a esta acción",
          hasPlaceholder: "Esta acción me tomó varios intentos porque...",
          hasExtraAttributes: {},
        }
      }
    }
    static getVirtualizerId() {
      return "org.allnulled.lsw-conductometria.Accion@Virtualizer";
    }
    static getFormSettings() {
      return {};
    }
    static getExtraAttributes() {
      return {
        readableName: "acción"
      };
    }
  },
  Virtualizer: class extends $proxifier.AbstractVirtualizer {

  }
});