Vue.component("LswNotes", {
  template: $template,
  props: {
    
  },
  data() {
    this.$trace("lsw-notes.data");
    return {
      isLoaded: false,
      allNotes: false,
      currentError: this.error,
    };
  },
  methods: {
    setError(error = undefined) {
      this.$trace("lsw-notes.methods.setError");
      this.currentError = error;
    },
    async loadNotes() {
      this.$trace("lsw-notes.methods.loadNotes");
      // @TODO: seleccionar e importar notes.
      this.isLoaded = false;
      const notes = await this.$lsw.database.selectMany("Nota");
      this.allNotes = notes;
      this.isLoaded = true;
    },
    async openAddNoteDialog() {
      this.$trace("lsw-notes.methods.openAddNoteDialog");
      const response = await this.$lsw.dialogs.open({
        title: "Nueva nota",
        template: `<div class="pad_1 position_absolute top_0 right_0 left_0 bottom_0 flex_column">
          <div class="flex_1">
            <input class="width_100" type="text" v-model="value.tiene_fecha" placeholder="Fecha de la nota" />
          </div>
          <div class="flex_1" style="padding-top: 1px;">
            <input class="width_100" type="text" v-model="value.tiene_titulo" placeholder="Título de la nota" />
          </div>
          <div class="flex_1 flex_row centered" style="padding-top: 1px;">
            <div class="flex_1">Estado: </div>
            <select class="flex_100" v-model="value.tiene_estado">
              <option value="creada">Creada</option>
              <option value="procesada">Procesada</option>
              <option value="dudosa">Dudosa</option>
              <option value="desestimada">Desestimada</option>
            </select>
          </div>
          <div class="flex_1" style="padding-top: 2px;">
            <input class="width_100" type="text" v-model="value.tiene_categorias" placeholder="categoría 1; categoria 2; categoria 3" />
          </div>
          <div class="flex_100" style="padding-top: 1px;">
            <textarea v-focus v-model="value.tiene_contenido" spellcheck="false" style="height: 100%;" placeholder="Contenido de la nota. Acepta **markdown**, recuerda." />
          </div>
          <div class="flex_row pad_top_1">
            <div class="flex_100"></div>
            <div class="flex_1 flex_row">
              <div class="pad_right_1">
                <button v-on:click="accept">Añadir</button>
              </div>
              <div>
                <button v-on:click="cancel">Cancelar</button>
              </div>
            </div>
          </div>
        </div>`,
        factory: {
          data: {
            value: {
              tiene_fecha: LswTimer.utils.formatDatestringFromDate(new Date()),
              tiene_titulo: "",
              tiene_categorias: "",
              tiene_contenido: "",
              tiene_estado: "creada", // "procesada"
            }
          }
        }
      });
      if(typeof response !== "object") return;
      await this.$lsw.database.insert("Nota", response);
      await this.loadNotes();
    }
  },
  watch: {},
  async mounted() {
    try {
      this.$trace("lsw-notes.mounted");
      await this.loadNotes();
    } catch (error) {
      console.log(error);
    }
  }
});