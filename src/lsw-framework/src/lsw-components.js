(function(factory) {
  const mod = factory();
  if(typeof window !== 'undefined') {
    window["Lsw_framework_components"] = mod;
  }
  if(typeof global !== 'undefined') {
    global["Lsw_framework_components"] = mod;
  }
  if(typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function() {
Vue.component("LswCalendario", {
  template: `<div class="Component LswCalendario">
  <div style="max-width: 260px;">
    <div class="like_table" style="border-collapse: collapse; border: none; border-bottom: 1px solid white;">
      <div class="like_row">
        <div class="like_cell">
          <button class="boton_de_mover_mes"
            v-on:click="ir_a_mes_anterior"> ◀ </button>
        </div>
        <div class="like_cell" style="width:100%;" :style="!soloFecha ? 'vertical-align: top;' : ''">
          <div class="chivato_de_fecha">{{ obtener_fecha_formateada(fecha_seleccionada) }}</div>
          <div class="chivato_de_fecha" v-if="!soloFecha">a las {{ espaciar_izquierda(hora_seleccionada, 2) }}:{{ espaciar_izquierda(minuto_seleccionado, 2)
            }}:{{
            espaciar_izquierda(segundo_seleccionado, 2) }}.{{ espaciar_izquierda(milisegundo_seleccionado, 3) }}
          </div>
        </div>
        <div class="like_cell">
          <button class="boton_de_mover_mes"
            v-on:click="ir_a_mes_siguiente"> ▶ </button>
        </div>
      </div>
    </div>
    <table class="tabla_de_calendario">
      <tbody>
        <tr class="fila_de_dias_de_semana">
          <td>Lu</td>
          <td>Ma</td>
          <td>Mi</td>
          <td>Ju</td>
          <td>Vi</td>
          <td>Sá</td>
          <td>Do</td>
        </tr>
      </tbody>
      <tbody class="dias_de_calendario">
        <tr v-for="semana, semana_index in celdas_del_mes_actual"
          v-bind:key="'semana-' + semana_index">
          <td v-for="dia, dia_index in semana"
            v-bind:key="'dia-' + dia_index">
            <span v-if="dia">
              <button class="boton_de_calendario boton_de_dia_de_calendario"
                :class="{active: dia.getDate() === fecha_seleccionada.getDate()}"
                v-on:click="() => seleccionar_dia(dia)">{{ dia.getDate() }}</button>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="tabla_para_horas"
      v-if="!soloFecha">
      <tr>
        <td>
          <button style="display: table-cell;"
            class="boton_de_calendario"
            v-on:click="agregar_hora"> ▲ </button>
        </td>
        <td>
          <button style="display: table-cell;"
            class="boton_de_calendario"
            v-on:click="agregar_minuto"> ▲ </button>
        </td>
        <td>
          <button style="display: table-cell;"
            class="boton_de_calendario"
            v-on:click="agregar_segundo"> ▲ </button>
        </td>
      </tr>
      <tr>
        <td>
          <input style="display: table-cell;"
            class="entrada_de_calendario"
            type="text"
            v-model="hora_seleccionada" />
        </td>
        <td>
          <input style="display: table-cell;"
            class="entrada_de_calendario"
            type="text"
            v-model="minuto_seleccionado" />
        </td>
        <td>
          <input style="display: table-cell;"
            class="entrada_de_calendario"
            type="text"
            v-model="segundo_seleccionado" />
        </td>
      </tr>
      <tr>
        <td>
          <button style="display: table-cell;"
            class="boton_de_calendario"
            v-on:click="quitar_hora"> ▼ </button>
        </td>
        <td>
          <button style="display: table-cell;"
            class="boton_de_calendario"
            v-on:click="quitar_minuto"> ▼ </button>
        </td>
        <td>
          <button style="display: table-cell;"
            class="boton_de_calendario"
            v-on:click="quitar_segundo"> ▼ </button>
        </td>
      </tr>
    </table>
  </div>
</div>`,
  props: {
    soloFecha: {
      type: Boolean,
      default: false
    },
    alCambiarValor: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    try {
      return {
        fecha_seleccionada: undefined,
        celdas_del_mes_actual: undefined,
        hora_seleccionada: "0",
        minuto_seleccionado: "0",
        segundo_seleccionado: "0",
        milisegundo_seleccionado: "0"
      };
    } catch (error) {
      console.log(error);
      throw error;
    }

  },
  methods: {
    getValue() {
      return this.fecha_seleccionada;
    },
    ir_a_mes_anterior() {
      try {
        const nueva_fecha = new Date(this.fecha_seleccionada);
        nueva_fecha.setMonth(nueva_fecha.getMonth() - 1);
        this.fecha_seleccionada = nueva_fecha;
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    ir_a_mes_siguiente() {
      try {
        const nueva_fecha = new Date(this.fecha_seleccionada);
        nueva_fecha.setMonth(nueva_fecha.getMonth() + 1);
        this.fecha_seleccionada = nueva_fecha;
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    agregar_hora() {
      try {
        let hora = parseInt(this.hora_seleccionada);
        hora += 1;
        this.hora_seleccionada = hora;
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    agregar_minuto() {
      try {
        let minuto = parseInt(this.minuto_seleccionado);
        minuto += 1;
        this.minuto_seleccionado = minuto;
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    agregar_segundo() {
      try {
        let segundo = parseInt(this.segundo_seleccionado);
        segundo += 1;
        this.segundo_seleccionado = segundo;
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    quitar_hora() {
      try {
        let hora = parseInt(this.hora_seleccionada);
        hora -= 1;
        this.hora_seleccionada = hora;
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    quitar_minuto() {
      try {
        let minuto = parseInt(this.minuto_seleccionado);
        minuto -= 1;
        this.minuto_seleccionado = minuto;
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    quitar_segundo() {
      try {
        let segundo = parseInt(this.segundo_seleccionado);
        segundo -= 1;
        this.segundo_seleccionado = segundo;
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    seleccionar_dia(dia) {
      try {
        this.fecha_seleccionada = dia;
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    espaciar_izquierda(texto,
      longitud,
      relleno = "0") {
      try {
        let salida = "" + texto;
        while (salida.length < longitud) {
          salida = relleno + salida;
        }
        return salida;
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    obtener_fecha_formateada(fecha) {
      try {
        if (typeof fecha === 'undefined') {
          return;
        }
        let formato = "";
        formato += (() => {
          try {
            if (fecha.getDay() === 0) {
              return "Domingo";
            }
            if (fecha.getDay() === 1) {
              return "Lunes";
            }
            if (fecha.getDay() === 2) {
              return "Martes";
            }
            if (fecha.getDay() === 3) {
              return "Miércoles";
            }
            if (fecha.getDay() === 4) {
              return "Jueves";
            }
            if (fecha.getDay() === 5) {
              return "Viernes";
            }
            if (fecha.getDay() === 6) {
              return "Sábado";
            }
          } catch (error) {
            console.log(error);
            throw error;
          }
        })();
        formato += ", ";
        formato += fecha.getDate();
        formato += " de ";
        formato += (() => {
          try {
            if (fecha.getMonth() === 0) {
              return "Enero";
            }
            if (fecha.getMonth() === 1) {
              return "Febrero";
            }
            if (fecha.getMonth() === 2) {
              return "Marzo";
            }
            if (fecha.getMonth() === 3) {
              return "Abril";
            }
            if (fecha.getMonth() === 4) {
              return "Mayo";
            }
            if (fecha.getMonth() === 5) {
              return "Junio";
            }
            if (fecha.getMonth() === 6) {
              return "Julio";
            }
            if (fecha.getMonth() === 7) {
              return "Agosto";
            }
            if (fecha.getMonth() === 8) {
              return "Septiembre";
            }
            if (fecha.getMonth() === 9) {
              return "Octubre";
            }
            if (fecha.getMonth() === 10) {
              return "Noviembre";
            }
            if (fecha.getMonth() === 11) {
              return "Diciembre";
            }
          } catch (error) {
            console.log(error);
            throw error;
          }
        })();
        formato += " de ";
        formato += fecha.getFullYear();
        return formato;
      } catch (error) {
        console.log(error);
        throw error;
      }

    }
  },
  watch: {
    fecha_seleccionada(nuevo_valor) {
      try {
        const dias = [];
        const dia_1_del_mes = new Date(nuevo_valor);
        dia_1_del_mes.setDate(1);
        dia_1_del_mes.setHours(0);
        dia_1_del_mes.setMinutes(0);
        dia_1_del_mes.setSeconds(0);
        dia_1_del_mes.setMilliseconds(0);
        const dias_antes_de_entrar_en_el_mes = (() => {
          try {
            const dia_de_semana = dia_1_del_mes.getDay();
            if (dia_de_semana === 0) {
              return 6;
            }
            if (dia_de_semana === 1) {
              return 0;
            }
            if (dia_de_semana === 2) {
              return 1;
            }
            if (dia_de_semana === 3) {
              return 2;
            }
            if (dia_de_semana === 4) {
              return 3;
            }
            if (dia_de_semana === 5) {
              return 4;
            }
            if (dia_de_semana === 6) {
              return 5;
            }
          } catch (error) {
            console.log(error);
            throw error;
          }
        })();
        const celdas_vacias_anteriores = new Array(dias_antes_de_entrar_en_el_mes);
        const dia_final_del_mes = new Date(nuevo_valor);
        dia_final_del_mes.setMonth(dia_final_del_mes.getMonth() + 1);
        dia_final_del_mes.setDate(1);
        dia_final_del_mes.setDate(dia_final_del_mes.getDate() - 1);
        const numero_final_de_mes = dia_final_del_mes.getDate();
        let fila_actual = celdas_vacias_anteriores;
        for (let index = 1; index < numero_final_de_mes + 1; index++) {
          const nueva_fecha = new Date(dia_1_del_mes);
          nueva_fecha.setDate(index);
          fila_actual.push(nueva_fecha);
          if (nueva_fecha.getDay() === 0) {
            dias.push(fila_actual);
            fila_actual = [];
          }
        }
        if (fila_actual.length) {
          dias.push(fila_actual);
        }
        this.celdas_del_mes_actual = dias;
        if(typeof this.alCambiarValor === "function") {
          this.alCambiarValor(nuevo_valor, this);
        }
      } catch (error) {
        console.log(error);
        throw error;
      }

    }
  },
  mounted() {
    try {
      this.fecha_seleccionada = new Date();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
});
Vue.component("LswTable", {
  template: `<div class="lsw_table"
    style="padding-top: 4px;">
    <div class="position_relative">
        <div class="position_absolute top_0 right_0"
            style="font-size: 16px; padding: 3px;">
            <span class="bordered_1 cursor_pointer"
                v-on:click="digestOutput">🛜</span>
        </div>
    </div>
    <table class="collapsed_table lsw_table_itself">
        <thead>
            <tr>
                <th style="width: 1%; padding: 0px;">
                    <button class="table_menu_div width_100"
                        v-on:click="toggleMenu"
                        :class="{activated: isShowingMenu === true}">
                        <span v-if="hasFiltersApplying">🟡</span>
                        <span v-else>⚪️</span>
                    </button>
                </th>
                <th class="table_header"
                    v-for="header, headerIndex in headers"
                    v-bind:key="'header-' + headerIndex">
                    <div>{{ header }}</div>
                </th>
                <th style="width: 100%; padding-right: 0px;">
                    <div class="flex_row centered">
                        <div class="flex_100">size of row</div>
                    </div>
                </th>
            </tr>
        </thead>
        <tbody v-if="isShowingMenu">
            <tr>
                <td class="table_navigation_menu_cell"
                    colspan="1000">
                    <div class="table_navigation_menu">
                        <div class="flex_row centered">
                            <div class="flex_1 nowrap">Estás en: </div>
                            <div class="flex_100 left_padded_1">
                                <select class="width_100 text_align_center"
                                    v-model="isShowingSubpanel">
                                    <option value="Extensor">Extensor ({{ extender.length }})</option>
                                    <option value="Filtro">Filtro ({{ filter.length }})</option>
                                    <option value="Ordenador">Ordenador ({{ sorter.length }})</option>
                                </select>
                            </div>
                        </div>
                        <div v-if="isShowingSubpanel === 'Extensor'">
                            <textarea spellcheck="false"
                                v-model="extender"></textarea>
                        </div>
                        <div v-if="isShowingSubpanel === 'Filtro'">
                            <textarea spellcheck="false"
                                v-model="filter"></textarea>
                        </div>
                        <div v-if="isShowingSubpanel === 'Ordenador'">
                            <textarea spellcheck="false"
                                v-model="sorter"></textarea>
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
        <template v-if="paginatedOutput && headers">
            <tbody class="this_code_is_duplicated_always">
                <tr>
                    <td colspan="1000">
                        <div class="flex_row centered">
                            <div class="flex_1 pagination_button_box first_box">
                                <div class="pagination_button first_button"
                                    v-on:click="goToFirstPage">⏪</div>
                            </div>
                            <div class="flex_1 pagination_button_box">
                                <div class="pagination_button"
                                    v-on:click="decreasePage">◀️</div>
                            </div>
                            <div class="flex_100 text_align_center">Page {{ currentPage+1 }} out of {{ Math.ceil(output.length /
                                itemsPerPage) }}</div>
                            <div class="flex_1 pagination_button_box">
                                <div class="pagination_button"
                                    v-on:click="increasePage">▶️</div>
                            </div>
                            <div class="flex_1 pagination_button_box last_box">
                                <div class="pagination_button last_button"
                                    v-on:click="goToLastPage">⏩</div>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <template v-for="row, rowIndex in paginatedOutput">
                    <tr class="row_for_table"
                        :class="{ odd: rowIndex === 0 ? true : (rowIndex % 2 === 0) ? true : false }"
                        v-bind:key="'row-for-table-' + rowIndex">
                        <td class="index_cell">
                            <button v-on:click="() => toggleRow(rowIndex)"
                                :class="{activated: selectedRows.indexOf(rowIndex) !== -1}">
                                {{ rowIndex + (currentPage * itemsPerPage) }}
                            </button>
                        </td>
                        <td v-for="columnKey, columnIndex in headers"
                            v-bind:key="'column-' + columnIndex">
                            {{ row[columnKey] ?? "-" }}
                        </td>
                        <td>
                            {{ JSON.stringify(row).length }} bytes
                        </td>
                    </tr>
                    <tr class="row_for_details"
                        v-show="selectedRows.indexOf(rowIndex) !== -1"
                        v-bind:key="'row-for-cell-' + rowIndex">
                        <td class="data_cell"
                            colspan="1000">
                            <pre class="">{{ JSON.stringify(row, null, 2) }}</pre>
                        </td>
                    </tr>
                </template>
            </tbody>
            <tbody class="this_code_is_duplicated_always">
                <tr>
                    <td colspan="1000">
                        <div class="flex_row centered">
                            <div class="flex_1 pagination_button_box first_box">
                                <div class="pagination_button first_button"
                                    v-on:click="goToFirstPage">⏪</div>
                            </div>
                            <div class="flex_1 pagination_button_box">
                                <div class="pagination_button"
                                    v-on:click="decreasePage">◀️</div>
                            </div>
                            <div class="flex_100 text_align_center">Page {{ currentPage+1 }} out of {{ Math.ceil(output.length /
                                itemsPerPage) }}</div>
                            <div class="flex_1 pagination_button_box">
                                <div class="pagination_button"
                                    v-on:click="increasePage">▶️</div>
                            </div>
                            <div class="flex_1 pagination_button_box last_box">
                                <div class="pagination_button last_button"
                                    v-on:click="goToLastPage">⏩</div>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </template>
        <tbody v-else>
            <tr>
                <td colspan="1000">
                    Aguarde: la tabla está cargando...
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
  props: {
    initialInput: {
      type: Array,
      default: () => []
    }
  },
  data() {
    this.$trace("lsw-table.data");
    const input = [].concat(this.initialInput);
    return {
      input,
      isShowingMenu: false,
      isShowingSubpanel: "none",
      selectedRows: [],
      extender: "",
      filter: "",
      sorter: "",
      itemsPerPage: 10,
      currentPage: 0,
      output: [],
      paginatedOutput: [],
      headers: [],
    };
  },
  methods: {
    goToFirstPage() {
      this.$trace("lsw-table.methods.goToFirstPage");
      this.currentPage = 0;
    },
    decreasePage() {
      this.$trace("lsw-table.methods.decreasePage");
      if (this.currentPage > 0) {
        this.currentPage--;
      }
    },
    increasePage() {
      this.$trace("lsw-table.methods.increasePage");
      const lastPage = Math.floor(this.output.length / this.itemsPerPage);
      if (this.currentPage < lastPage) {
        this.currentPage++;
      }
    },
    goToLastPage() {
      this.$trace("lsw-table.methods.goToLastPage");
      const lastPage = Math.floor(this.output.length / this.itemsPerPage);
      if (this.currentPage !== lastPage) {
        this.currentPage = lastPage;
      }
    },
    toggleRow(rowIndex) {
      this.$trace("lsw-table.methods.toggleRow");
      const pos = this.selectedRows.indexOf(rowIndex);
      if (pos === -1) {
        this.selectedRows.push(rowIndex);
      } else {
        this.selectedRows.splice(pos, 1);
      }
    },
    toggleMenu() {
      this.$trace("lsw-table.methods.toggleMenu");
      this.isShowingMenu = !this.isShowingMenu;
    },
    digestOutput() {
      this.$trace("lsw-table.methods.digestOutput");
      const input = this.input;
      let temp = [];
      const extenderExpression = this.extender.trim() || "{}";
      const extenderFunction = new Function("it", "i", `return ${extenderExpression}`);
      const filterExpression = this.filter.trim() || "true";
      const filterFunction = new Function("it", "i", `return ${filterExpression}`);
      const sorterExpression = this.sorter.trim() || "0";
      const sorterFunction = new Function("a", "b", `return ${sorterExpression}`);
      let tempHeaders = new Set();
      for (let index = 0; index < input.length; index++) {
        const row = input[index];
        let extendedRow = undefined;
        Apply_extender: {
          try {
            const extenderProduct = extenderFunction(row, index) || {};
            extendedRow = Object.assign({}, row, extenderProduct);
          } catch (error) {
            extendedRow = Object.assign({}, row);
          }
        }
        Apply_filter: {
          try {
            const filterProduct = filterFunction(extendedRow, index);
            if (filterProduct === true) {
              temp.push(extendedRow);
            }
          } catch (error) {
            // @OK.
          }
        }
        Extract_headers: {
          try {
            Object.keys(extendedRow).forEach(key => {
              tempHeaders.add(key);
            });
          } catch (error) {
            // @OK.
          }
        }
      }
      Apply_sorter: {
        try {
          temp = temp.sort(sorterFunction);
        } catch (error) {
          // @OK.
        }
      }
      this.headers = tempHeaders;
      this.output = temp;
      this.digestPagination();
    },
    digestPagination() {
      this.$trace("lsw-table.methods.digestPagination");
      const page = this.currentPage;
      const items = this.itemsPerPage;
      const firstPosition = items * (page);
      this.selectedRows = [];
      this.paginatedOutput = [].concat(this.output).splice(firstPosition, items);
    },
    saveCurrentTransformer() {
      this.$trace("lsw-table.methods.saveCurrentTransformer");
    }
  },
  watch: {
    itemsPerPage(value) {
      this.$trace("lsw-table.watch.itemsPerPage");
      this.digestPagination();
    },
    currentPage(value) {
      this.$trace("lsw-table.watch.currentPage");
      this.digestPagination();
    }
  },
  computed: {
    hasFiltersApplying() {
      this.$trace("lsw-table.computed.hasFiltersApplying");
      if (this.extender.length) {
        return true;
      }
      if (this.filter.length) {
        return true;
      }
      if (this.sorter.length) {
        return true;
      };
      return false;
    }
  },
  mounted() {
    this.$trace("lsw-table.mounted");
    this.digestOutput();
  }
});
Vue.component("LswTableTransformers", {
  template: `<div class="lsw_table_transformers">
    Transformers here.
    {{ table.transformers }}
    <div class="flex_row">
        <button class="button_separation" v-on:click="table.showTransformers">All: {{ table.transformers.length }}</button>
        <button class="button_separation" v-on:click="table.askForFilter">+Filter</button>
        <button class="button_separation" v-on:click="table.askForMapper">+Mapper</button>
        <button class="button_separation" v-on:click="table.askForReducer">+Reducer</button>
        <button class="button_separation" v-on:click="table.askForSorter">+Sorter</button>
        <button class="button_separation" v-on:click="table.askForGrouper">+Grouper</button>
        <div style="flex: 100;"></div>
    </div>
</div>`,
  props: {
    table: {
      type: Object,
      required: true
    }
  },
  data() {
    return {

    };
  },
  methods: {

  },
  watch: {

  },
  mounted() {

  }
});
Vue.component('LswDataExplorer', {
  template: `<div class="data-explorer">
    <div class="top_panel flex_row centered" style="padding: 1px;">
        <div class="top_button_cell" v-on:click="toggleTopPanel">
            <button v-if="!isShowingTopPanel">📝</button>
            <button v-else>❌</button>
        </div>
        <div class="top_button_cell" style="padding-left: 1px;">
            <button v-on:click="applyFastFilter">
                <span v-if="isLoadingInnerValue">⌛️</span>
                <span v-else>🔎</span>
            </button>
        </div>
        <div class="top_search_bar_cell flex_cell expanded" style="padding-left: 1px; padding-right: 1px;">
            <input type="text" class="width_100" v-model="textFilter" v-keydown.enter="applyFastFilter" />
        </div>
    </div>
    <div class="top_panel_showable" v-if="isShowingTopPanel">
        <div class="content">
            <div class="flex_row centered">
                <div style="padding-right: 1px;">
                    <button v-on:click="saveRelatedDocument">☑️</button>
                </div>
                <div style="padding-right: 1px;">
                    <button v-on:click="toggleRelatedDocuments">
                        <span v-if="isShowingRelatedDocuments">📂</span>
                        <span v-else>📁</span>
                    </button>
                </div>
                <input v-if="!isShowingRelatedDocuments" class="width_100" type="text" placeholder="Document title here" v-model="documentTitle" />
                <div v-else class="width_100">Related documents: </div>
                <div style="padding-left: 1px;">
                    <button v-on:click="toggleTopPanel">❌</button>
                </div>
            </div>
            <div v-if="isShowingRelatedDocuments" style="padding-top: 1px;">
                <div v-for="doc, docIndex in relatedDocuments">
                    <button v-on:click="() => openDocument(docIndex)">{{ doc.title }}</button>
                </div>
            </div>
            <div class="width_100" v-show="!isShowingRelatedDocuments">
                <textarea v-model="documentContent" placeholder="// Document content here" />
            </div>
        </div>
    </div>
    <template v-if="hasLoadedInnerValue">
        <LswDataImplorer :value="innerValue" v-bind:key="'data-implorer-' + getRandomId()" />
    </template>
</div>`,
  props: {
    value: {
      required: true
    },
    pageSize: {
      type: Number,
      default: 10
    },
    level: {
      type: Number,
      default: 0
    },
    pointer: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      hasLoadedInnerValue: true,
      isLoadingInnerValue: false,
      originalValue: this.value,
      innerValue: this.value,
      textFilter: "",
      isShowingTopPanel: false,
      isShowingRelatedDocuments: false,
      documentTitle: "",
      documentContent: "",
      expanded: {},
      relatedDocuments: [{
        title: "Document 1",
        text: "console.log('hi!');",
      }],
      propagateFastFilterTimeoutId: undefined,
      propagateFastFilterTimeoutMs: 1500
    };
  },
  methods: {
    getRandomId() {
      return this.$lsw.toasts.getRandomString();
    },
    toggleTopPanel() {
      this.isShowingTopPanel = !this.isShowingTopPanel;
    },
    toggleExpand(key) {
      this.$set(this.expanded, key, !this.expanded[key]);
    },
    toggleRelatedDocuments() {
      this.isShowingRelatedDocuments = !this.isShowingRelatedDocuments;
    },
    openDocument(docIndex) {
      // @TODO:
      const doc = this.relatedDocuments[docIndex];
      this.documentTitle = doc.title;
      this.documentContent = doc.text;
      this.isShowingRelatedDocuments = false;
    },
    saveRelatedDocument() {

    },
    async applyFastFilter(textFilter = this.textFilter) {
      // @TODO:
      try {
        this.hasLoadedInnerValue = false;
        this.$forceUpdate(true);
        if(textFilter.trim() === "") {
          this.innerValue = this.originalValue;
          return;
        }
        const textFilterFunction = new Function("it,key,i", "try {\n  return " + textFilter + ";\n} catch(e) {\n  return false;\n}");
        console.log("User-built filter function:");
        console.log(textFilterFunction.toString());
        if(typeof this.originalValue !== "object") {
          this.innerValue = this.originalValue;
          return;
        } else if(Array.isArray(this.originalValue)) {
          this.innerValue = [].concat(this.originalValue).filter(textFilterFunction);
        } else {
          Object.keys(this.originalValue).reduce((out, key, i) => {
            const value = this.originalValue[key];
            const passesFilter = textFilterFunction(value, key, i);
            if(passesFilter) {
              out[key] = value;
            }
            return out;
          }, {});
          this.innerValue = out;
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoadingInnerValue = false;
        this.hasLoadedInnerValue = true;
        this.$forceUpdate(true);
      }
    },
    propagateFastFilter(textFilter = this.textFilter) {
      this.isLoadingInnerValue = true;
      clearTimeout(this.propagateFastFilterTimeoutId);
      this.propagateFastFilterTimeoutId = setTimeout(() => {
        this.applyFastFilter(textFilter);
      }, this.propagateFastFilterTimeoutMs);
    }
  },
  watch: {
    textFilter(newValue) {
      this.propagateFastFilter(newValue);
    }
  }
});

Vue.component('LswDataImplorer', {
  template: `<div class="lsw_data_implorer" :class="{ paginated: isPaginated || isRoot }">
    <div class="paginator flex_row centered" v-if="isPaginated" style="padding-left: 1px; padding-top: 1px;">
        <div>
            <button v-on:click="goToPage(1)">««</button>
        </div>
        <div>
            <button v-on:click="goToPreviousPage()">«</button>
        </div>
        <div>
            <button v-on:click="goToNextPage()">»</button>
        </div>
        <div>
            <button v-on:click="goToLastPage()">»»</button>
        </div>
        <div style=" font-size: 10px;">
            Page {{ currentPage }} out of {{ Math.ceil(entries.length / pageSize) }} in packs of {{ pageSize }}
        </div>
    </div>
    <div class="paginated_entry"
        v-for="(entry, index) in paginatedEntries"
        :key="index">
        <div class="entry flex_row">
            <button
                v-if="typeof entry.value === 'object' && entry.value !== null"
                style="margin: 1px; min-width: 20px;"
                @click="toggleExpand(entry.key)">
                {{ expanded[entry.key] ? '🔶' : '🔸' }}
            </button>
            <button
                v-else
                style="margin: 1px; min-width: 20px; background-color: transparent; color: black; border: 1px solid transparent; cursor: default;">
                🔷
            </button>
            <div class="prop_row">
                <span class="level_cell"
                    :title="'value[' + pointer.concat([entry.key]).map(v => JSON.stringify(v)).join('][') + ']'">L{{ level + 1 }} ·
                </span><span class="prop_cell">
                    <span class="prop_id">{{ entry.key }}</span>
                    <span class="prop_type">[{{ typeof entry.value }}]</span>
                </span>
            </div>
            <div class="val_cell"
                v-if="typeof entry.value !== 'object' || entry.value === null"> = {{ entry.value }}</div>
        </div>
        <div class="inner_sight_row" v-if="expanded[entry.key]">
            <div class="path_row flex_row">
                <span class="type_cell">{{ typeof entry.value }} · </span>
                <span class="path_cell_container">
                    <span class="path_cell">{{
                        ["#"].concat(pointer).concat([entry.key]).reverse().join(' « ') }}
                    </span>
                </span>
            </div>
            <LswDataImplorer :value="entry.value"
                :pageSize="pageSize"
                :level="level + 1"
                :pointer="pointer.concat([entry.key])" />
        </div>
    </div>
</div>`,
  props: {
    value: {
      required: true
    },
    pageSize: {
      type: Number,
      default: () => 10
    },
    level: {
      type: Number,
      default: () => 0
    },
    pointer: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      expanded: {},
      isRoot: this.pointer.length === 0,
      currentPageSize: this.pageSize,
      currentPage: 1,
      page: {},
      entries: [],
      paginatedEntries: [],
      isPaginated: false,
    };
  },
  methods: {
    loadEntries() {
      if (typeof this.value !== 'object' || this.value === null) {
        return [{ key: 'value', value: this.value }];
      }
      this.entries = Object.entries(this.value).map(([key, value]) => ({ key, value }));
    },
    toggleExpand(key) {
      this.$set(this.expanded, key, !this.expanded[key]);
    },
    goToPage(page) {
      this.currentPage = page;
      this.loadPaginatedEntries();
    },
    goToPreviousPage() {
      if(this.currentPage <= 1) {
        return;
      }
      this.currentPage--;
      this.loadPaginatedEntries();
    },
    goToNextPage() {
      if(this.currentPage >= Math.ceil(this.entries.length / this.pageSize)) {
        return;
      }
      this.currentPage++;
      this.loadPaginatedEntries();
    },
    goToLastPage() {
      this.currentPage = Math.ceil(this.entries.length / this.pageSize);
      this.loadPaginatedEntries();
    },
    paginateArray(array, pageSize = this.currentPageSize, currentPage = this.currentPage) {
      const start = (currentPage - 1) * pageSize;
      const end = start + pageSize;
      return array.slice(start, end);
    },
    loadPaginatedEntries(entries = this.entries) {
      this.paginatedEntries = this.paginateArray(entries);
      this.isPaginated = this.paginatedEntries.length !== this.entries.length;
    },
  },
  watch: {
    entries(newValue) {
      if(this.pageSize <= 0) {
        return newValue;
      }
      this.loadPaginatedEntries(newValue);
    }
  },
  mounted() {
    this.loadEntries();
  }
});

(function () {

  const defaultDialogFactory = () => {
    return {
      props: {},
      data() {
        return {};
      },
      methods: {},
      mounted() { },
    };
  };

  class Dialog {
    static fromIdToComponentName(id) {
      return "lsw-dialog-" + id;
    }
    constructor(info = {}) {
      Object.assign(this, info);
      Validations: {
        if (typeof this.id !== "string") {
          throw new Error(`Required parameter «dialog.id» to be a string on «Dialog.constructor»`);
        }
        if (typeof this.name !== "string") {
          throw new Error(`Required parameter «dialog.name» to be a string on «Dialog.constructor»`);
        }
        if (typeof this.priority !== "number") {
          throw new Error(`Required parameter «dialog.priority» to be a number on «Dialog.constructor»`);
        }
        if (typeof this.component !== "object") {
          throw new Error(`Required parameter «dialog.component» to be an object on «Dialog.constructor»`);
        }
        if (typeof this.promiser !== "object") {
          throw new Error(`Required parameter «dialog.promiser» to be an object on «Dialog.constructor»`);
        }
        if (!(this.promiser.promise instanceof Promise)) {
          throw new Error(`Required parameter «dialog.promiser.promise» to be an instance of Promise on «Dialog.constructor»`);
        }
        if (typeof this.promiser.resolve !== "function") {
          throw new Error(`Required parameter «dialog.promiser.resolve» to be an function on «Dialog.constructor»`);
        }
        if (typeof this.promiser.reject !== "function") {
          throw new Error(`Required parameter «dialog.promiser.reject» to be an function on «Dialog.constructor»`);
        }
        if (typeof this.acceptButton !== "object") {
          this.acceptButton = false;
        }
        if (typeof this.cancelButton !== "object") {
          this.cancelButton = false;
        }
      }
    }
  }

  const closeSubdialogsHook = function (id, lswDialogs) {
    const ids = Object.keys(lswDialogs.opened);
    for (let index_dialog = 0; index_dialog < ids.length; index_dialog++) {
      const idOpened = ids[index_dialog];
      const idParent = lswDialogs.opened[idOpened].parentId;
      if (idParent === id) {
        lswDialogs.close(idOpened);
      }
    }
  };

  Vue.component("LswDialogs", {
    name: "LswDialogs",
    template: `<div class="lws_dialogs_root">
    <div class="lsw_dialogs"
        v-if="openedLength && notMinimizedLength">
        <div class="lsw_dialogs_box">
            <template v-for="dialog, dialog_index in opened">
                <template v-if="!dialog.minimized">
                    <div class="dialog_window"
                        v-bind:key="'dialog_' + dialog_index"
                        :style="{ zIndex: dialog.priority }">
                        <div class="dialog_topbar">
                            <div class="dialog_title">
                                {{ dialog.title }}
                            </div>
                            <div class="dialog_topbar_buttons">
                                <button class="mini"
                                    v-if="enabledWindowsSystem"
                                    v-on:click="goHome">☰</button>
                                <button class="mini"
                                    v-on:click="minimize(dialog.id)">-</button>
                                <button class="mini"
                                    v-on:click="close(dialog.id)">X</button>
                            </div>
                        </div>
                        <div class="dialog_body">
                            <component :is="dialog.name" :ref="'currentDialogComponent_' + dialog_index" />
                        </div>
                        <div class="dialog_footer">
                            <button v-if="dialog && dialog.acceptButton"
                                class=""
                                v-on:click="() => dialog.acceptButton.callback ? dialog.acceptButton.callback($refs['currentDialogComponent_' + dialog_index][0], dialog, dialog.id, this) : resolve(dialog.id).close()">{{
                                dialog.acceptButton.text || "Accept" }}</button>
                            <button v-if="dialog && dialog.cancelButton"
                                class=""
                                v-on:click="() => dialog.cancelButton.callback ? dialog.cancelButton.callback($refs['currentDialogComponent_' + dialog_index][0], dialog, dialog.id, this) : close(dialog.id)">{{
                                dialog.cancelButton.text || "Cancel" }}</button>
                            <button v-else
                                class=""
                                v-on:click="() => close(dialog.id)">{{ dialog?.cancelButton?.text || "Cancel" }}</button>
                        </div>
                    </div>
                </template>
            </template>
        </div>
    </div>
</div>`,
    props: {
      asWindows: {
        type: Boolean,
        default: () => false
      }
    },
    data() {
      this.$trace("lsw-dialogs.data", arguments);
      return {
        enabledWindowsSystem: this.asWindows,
        opened: {},
        openedLength: 0,
        notMinimizedLength: 0,
        hookOnOpen: undefined,
        hookOnClose: closeSubdialogsHook,
      };
    },
    watch: {
      opened(newValue) {
        this.$trace("lsw-dialogs.watch.opened", ["too long object"]);
        this.openedLength = (typeof newValue !== "object") ? 0 : Object.keys(newValue).length;
        this._refreshMinimizedLength(newValue);
      }
    },
    methods: {
      open(parametricObject = {}) {
        this.$trace("lsw-dialogs.methods.open", arguments);
        if (typeof parametricObject !== "object") {
          throw new Error(`Required argument «parametricObject» to be an object on «LswDialogs.methods.open»`);
        }
        const {
          template,
          title = "",
          id = "default",
          priority = 500,
          factory = defaultDialogFactory,
          parentId = undefined,
          created_at = new Date()
        } = parametricObject;
        const componentInfo = {};
        if (typeof id !== "string") {
          throw new Error(`Required parameter «id» to be a string on «LswDialogs.methods.open»`);
        }
        if (id in this.opened) {
          throw new Error(`Cannot open dialog «${id}» because it is already opened on «LswDialogs.methods.open»`);
        }
        if (typeof template !== "string") {
          throw new Error(`Required parameter «template» to be a string on «LswDialogs.methods.open»`);
        }
        if (typeof factory === "object") {
          // @OK
        } else if (typeof factory !== "function") {
          throw new Error(`Required parameter «factory» to be an object or a function on «LswDialogs.methods.open»`);
        }
        if (typeof priority !== "number") {
          throw new Error(`Required parameter «priority» to be a number on «LswDialogs.methods.open»`);
        }
        const dialogComponentInput = typeof factory === "function" ? factory() : factory;
        const dialogComponentData = (() => {
          if (typeof dialogComponentInput.data === "undefined") {
            return function () { return {}; };
          } else if (typeof dialogComponentInput.data === "object") {
            return function () { return dialogComponentInput.data };
          } else if (typeof dialogComponentInput.data === "function") {
            return dialogComponentInput.data;
          } else {
            console.log(dialogComponentInput.data);
            throw new Error("Required parameter «data» returned by «factory» to be an object, a function or empty on «LswDialogs.methods.open»");
          }
        })();
        const scopifyMethods = function(obj, scope) {
          return Object.keys(obj).reduce((out, k) => {
            const v = obj[k];
            if(typeof v !== "function") {
              out[k] = v;
            } else {
              out[k] = v.bind(scope);
            }
            return out;
          }, {});
        };
        // 1) Este es para el Vue.component:
        const componentId = Dialog.fromIdToComponentName(id);
        const dialogComponent = Object.assign({}, dialogComponentInput, {
          name: componentId,
          template,
          data(component, ...args) {
            this.$trace(`lsw-dialogs.[${componentId}].data`, ["too long object"]);
            const preData = dialogComponentData.call(this);
            if (typeof preData.value === "undefined") {
              preData.value = "";
            };
            console.log("El data del nuevo componente dialog:", preData);
            dialogComponentInput.watch = scopifyMethods(dialogComponentInput.watch || {}, component);
            dialogComponentInput.computed = scopifyMethods(dialogComponentInput.computed || {}, component);
            dialogComponentInput.methods = scopifyMethods(dialogComponentInput.methods || {}, component);
            return preData;
          },
          watch: (dialogComponentInput.watch || {}),
          computed: (dialogComponentInput.computed || {}),
          methods: {
            getValue() {
              this.$trace(`lsw-dialogs.[${componentId}].methods.getValue`, []);
              return JSON.parse(JSON.stringify(this.value));
            },
            accept(solution = undefined, ...args) {
              this.$trace(`lsw-dialogs.[${componentId}].methods.accept`, [solution, ...args]);
              if (solution instanceof Event) {
                return this.$dialogs.resolve(id, this.getValue()).close(id);
              }
              return this.$dialogs.resolve(id, typeof solution !== "undefined" ? solution : this.getValue()).close(id);
            },
            cancel(...args) {
              this.$trace("lsw-dialogs.[${componentId}].methods.cancel", args);
              return this.$dialogs.resolve(id, -1).close(id);
            },
            abort(error = undefined, ...args) {
              this.$trace(`lsw-dialogs.[${componentId}].methods.abort`, [error, ...args]);
              if (solution instanceof Event) {
                return this.$dialogs.reject(id, new Error("Aborted dialog error")).close(id);
              }
              return this.$dialogs.reject(id, error).close(id);
            },
            close(...args) {
              this.$trace(`lsw-dialogs.[${componentId}].methods.close`, args);
              return this.$dialogs.resolve(id, -2).close(id);
            },
            ...(dialogComponentInput.methods || {})
          }
        });
        Define_component: {
          Vue.component(dialogComponent.name, dialogComponent);
        }
        // 1) Este es para el this.$dialogs:
        const dialogDefinition = Object.assign({}, {
          ...parametricObject,
          id,
          title,
          name: dialogComponent.name,
          component: dialogComponent,
          priority,
          minimized: false,
          parentId,
          created_at,
          promiser: Promise.withResolvers(),
        });
        const dialogInstance = new Dialog(dialogDefinition);
        console.log("Definición final del dialogo", dialogInstance);
        Define_dialog: {
          this.opened = Object.assign({}, this.opened, {
            [id]: dialogInstance
          });
        }
        if (typeof this.hookOnOpen === "function") {
          this.hookOnOpen(this.opened[id], id, this);
        }
        return this.opened[id].promiser.promise;
      },
      resolve(id, solution, ...args) {
        this.$trace("lsw-dialogs.methods.resolve", [id, solution, ...args]);
        if (typeof id !== "string") {
          throw new Error("Required parameter «id» (argument:1) to be a string on «LswDialogs.resolve»");
        }
        if (!(id in this.opened)) {
          throw new Error(`Cannot resolve dialog «${id}» because it is not opened on «LswDialogs.resolve»`);
        }
        this.opened[id].promiser.resolve(solution);
        return {
          close: () => this.close(id)
        };
      },
      reject(id, error, ...args) {
        this.$trace("lsw-dialogs.methods.reject", [id, error, ...args]);
        if (typeof id !== "string") {
          throw new Error("Required parameter «id» (argument:1) to be a string on «LswDialogs.reject»");
        }
        if (!(id in this.opened)) {
          throw new Error(`Cannot reject dialog «${id}» because it is not opened on «LswDialogs.reject»`);
        }
        this.opened[id].promiser.reject(error);
        return {
          close: () => this.close(id)
        };
      },
      close(id, ...args) {
        this.$trace("lsw-dialogs.methods.close", [id, ...args]);
        if (typeof id !== "string") {
          throw new Error("Required parameter «id» (argument:1) to be a string on «LswDialogs.close»");
        }
        if (!(id in this.opened)) {
          throw new Error(`Cannot close dialog «${id}» because it is not opened on «LswDialogs.close»`);
        }
        let promiseOfDialog = undefined;
        Undefine_component: {
          const dialogName = Dialog.fromIdToComponentName(id);
          delete Vue.options.components[dialogName];
        }
        Undefine_dialog: {
          Solve_promise_if_not_already: {
            if (this.opened[id].promiser.promise.state === "pending") {
              this.opened[id].promiser.resolve(-3);
            }
          }
          promiseOfDialog = this.opened[id].promiser.promise;
          delete this.opened[id];
          this.opened = Object.assign({}, this.opened);
        }
        if (typeof this.hookOnClose === "function") {
          this.hookOnClose(id, this);
        }
        return promiseOfDialog;
        // this.$forceUpdate(true);
      },
      minimize(id, ...args) {
        this.$trace("lsw-dialogs.methods.minimize", [id, ...args]);
        if (typeof id !== "string") {
          throw new Error("Required parameter «id» (argument:1) to be a string on «LswDialogs.minimize»");
        }
        if (!(id in this.opened)) {
          throw new Error(`Cannot minimize dialog «${id}» because it is not opened on «LswDialogs.minimize»`);
        }
        this.opened[id].minimized = true;
        this._refreshMinimizedLength(this.opened);
      },
      maximize(id, ...args) {
        this.$trace("lsw-dialogs.methods.maximize", [id, ...args]);
        if (typeof id !== "string") {
          throw new Error("Required parameter «id» (argument:1) to be a string on «LswDialogs.maximize»");
        }
        if (!(id in this.opened)) {
          throw new Error(`Cannot minimize dialog «${id}» because it is not opened on «LswDialogs.maximize»`);
        }
        Iterating_dialogs:
        for (let dialogId in this.opened) {
          if (id === dialogId) {
            continue Iterating_dialogs;
          }
          const dialogData = this.opened[dialogId];
          const currentPriority = parseInt(dialogData.priority);
          this.opened[dialogId].priority = currentPriority - 1;

        }
        this.opened[id].priority = 500;
        this.opened[id].minimized = false;
        this._refreshMinimizedLength();
      },
      _refreshMinimizedLength(newValue = this.opened, ...args) {
        this.$trace("lsw-dialogs.methods._refreshMinimizedLength", ["too long object", ...args]);
        this.notMinimizedLength = Object.keys(newValue).reduce((out, k) => {
          const v = newValue[k];
          if (v.minimized === false) {
            out++;
          }
          return out;
        }, 0);
        this.$forceUpdate(true);
      },
      goHome(...args) {
        this.$trace("lsw-dialogs.methods.goHome", [...args]);
        this.$window.LswWindows.show();
      },
      onOpen(callback, ...args) {
        this.$trace("lsw-dialogs.methods.onOpen", [callback, ...args]);
        this.hookOnOpen = callback;
      },
      onClose(callback, ...args) {
        this.$trace("lsw-dialogs.methods.onClose", [callback, ...args]);
        this.hookOnClose = callback;
      }
    },
    mounted(...args) {
      this.$trace("lsw-dialogs.mounted", [...args]);
      Vue.prototype.$dialogs = this;
      if (Vue.prototype.$lsw) {
        Vue.prototype.$lsw.dialogs = this;
      }
      window.LswDialogs = this;
      console.log("[*] LswDialogs mounted.");
    }
  });

})();
// Change this component at your convenience:
Vue.component("LswWindowsMainTab", {
  template: `<div class="lsw_windows_main_tab">
        <div class="dialog_window" v-bind:key="'main_dialog'" :style="{ zIndex: 501 }">
            <div class="dialog_topbar">
                <div class="dialog_title">
                    <div>Process manager</div>
                </div>
                <div class="dialog_topbar_buttons">
                    <button v-if="$consoleHooker?.is_shown === false" class="mini" style="white-space: nowrap;flex: 1; margin-right: 4px;" v-on:click="() => $consoleHooker.show()">💻</button><button class="mini" v-on:click="viewer.toggleState">-</button>
                </div>
            </div>
            <div class="dialog_body">
                <div class="main_tab_topbar">
                    <button class="main_tab_topbar_button" v-on:click="openAgenda">Agenda</button>
                    <button class="main_tab_topbar_button" v-on:click="openWiki">Wiki</button>
                    <button class="main_tab_topbar_button" v-on:click="openRest">Data</button>
                    <button class="main_tab_topbar_button" v-on:click="openFilesystem">Files</button>
                </div>
                <div class="pad_normal" v-if="!Object.keys($lsw.dialogs.opened).length">
                    <span>No processes found right now.</span>
                </div>
                <div class="pad_normal" v-else>
                    <div v-for="dialog, dialogIndex, dialogCounter in $lsw.dialogs.opened" v-bind:key="'dialog-' + dialogIndex">
                        <a href="javascript:void(0)" v-on:click="() => viewer.selectDialog(dialogIndex)">{{ dialogCounter + 1 }}. {{ dialog.title }} [{{ dialog.id }}]</a>
                    </div>
                </div>
            </div>
            <div class="dialog_footer">
                <button class="" v-on:click="viewer.toggleState">Minimize</button>
            </div>
        </div>
</div>`,
  props: {
    viewer: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      
    };
  },
  methods: {
    getRandomString(len = 10) {
      const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
      let out = "";
      while(out.length < len) {
        out += alphabet[Math.floor(Math.random() * alphabet.length)];
      }
      return out;
    },
    openRest() {
      this.viewer.hide();
      this.$dialogs.open({
        id: "database-explorer-" + this.getRandomString(5),
        title: "Database explorer",
        template: `<lsw-database-explorer />`,
      });
    },
    openFilesystem() {
      this.viewer.hide();
      this.$dialogs.open({
        id: "filesystem-explorer-" + this.getRandomString(5),
        title: "Filesystem explorer",
        template: `<lsw-filesystem-explorer />`,
      });
    },
    openWiki() {
      this.viewer.hide();
      this.$dialogs.open({
        id: "wiki-explorer-" + this.getRandomString(5),
        title: "Wiki explorer",
        template: `<lsw-wiki />`,
      });
    },
    openAgenda() {
      this.viewer.hide();
      this.$dialogs.open({
        id: "agenda-viewer-" + this.getRandomString(5),
        title: "Agenda viewer",
        template: `<lsw-agenda />`,
      });
    },
  },
  mounted() {
    
  }
});
// Change this component at your convenience:
Vue.component("LswWindowsViewer", {
  template: `<div class="lsw-windows-viewer">
    <lsw-dialogs ref="dialogs" :as-windows="true"></lsw-dialogs>
    <lsw-windows-pivot-button :viewer="this" />
    <template v-if="isShowing">
        <lsw-windows-main-tab :viewer="this" />
    </template>
</div>`,
  props: {},
  data() {
    return {
      isShowing: false
    };
  },
  methods: {
    hide() {
      this.isShowing = false;
    },
    show() {
      this.isShowing = true;
    },
    toggleState() {
      this.isShowing = !this.isShowing;
      this.$forceUpdate(true);
    },
    selectDialog(id) {
      this.hide();
      this.$refs.dialogs.maximize(id);
    }
  },
  mounted() {
    this.$window.LswWindows = this;
    this.$lsw.windows = this;
  }
});
// Change this component at your convenience:
Vue.component("LswWindowsPivotButton", {
  template: `<div class="lsw_windows_pivot_button" v-on:click="onClick">
    <button id="windows_pivot_button" class="">🔴</button>
</div>`,
  props: {
    viewer: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      
    };
  },
  methods: {
    onClick(event) {
      this.viewer.toggleState();
    }
  },
  mounted() {
    
  }
});
Vue.component("LswToasts", {
  template: `<div class="lsw_toasts">
    <div class="toasts_box">
        <div class="toast_list">
            <template v-for="toast, toastIndex in sent">
                <div class="toast_box">
                    <div class="toast_item">
                        <div class="toast"
                            v-bind:key="'toast-number-' + toast.id"
                            :style="{ color: toast.foreground, backgroundColor: toast.background }"
                            v-on:click="() => close(toast.id)">
                            <div class="toast_title"
                                style="font-size: 13px;" v-if="toast.title">
                                {{ toast.title }}
                            </div>
                            <div class="toast_text"
                                style="font-size: 10px;">
                                {{ toast.text }}
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</div>`,
  props: {},
  data() {
    return {
      sent: {}
    };
  },
  methods: {
    getRandomString(len = 10) {
      const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
      let out = "";
      while(out.length < len) {
        out += alphabet[Math.floor(Math.random() * alphabet.length)];
      }
      return out;
    },
    send(toastsInput = {}) {
      const toastData = Object.assign({
        id: this.getRandomString(),
        title: "",
        text: "",
        timeout: 3000,
        orientation: "bottom",
        background: "rgba(255,255,255,0.5)",
        foreground: "#000",
        started_at: new Date()
      }, toastsInput);
      if(typeof toastData.timeout !== "number") {
        throw new Error("Required parameter «timeout» to be a number or empty on «LswToasts.methods.send»");
      }
      if(isNaN(toastData.timeout)) {
        throw new Error("Required parameter «timeout» to be a (non-NaN) number or empty on «LswToasts.methods.send»");
      }
      if(["top", "bottom", "center"].indexOf(toastData.orientation) === -1) {
        throw new Error("Required parameter «orientation» to be a string (top, center, bottom) or empty on «LswToasts.methods.send»");
      }
      if(toastData.id in this.sent) {
        throw new Error("Required parameter «id» to not be repeated on «LswToasts.methods.send»");
      }
      this.sent = Object.assign({}, this.sent, {
        [toastData.id]: toastData
      });
      setTimeout(() => {
        this.close(toastData.id);
      }, toastData.timeout);
    },
    close(id) {
      delete this.sent[id];
      this.$forceUpdate(true);
    }
  },
  watch: {},
  mounted() {
    this.$toasts = this;
    this.$window.LswToasts = this;
    if(this.$lsw) {
      this.$lsw.toasts = this;
    }
  }
});
Vue.component("LswConsoleHooker", {
  template: `<div class="console-hooker" :class="{hide:!is_shown}">
    <div class="console_viewer">
        <div class="console_box">
            <div class="console_box_title" style="display: flex; flex-direction: row; width: 100%; align-items: center;">
                <span style="flex: 100;">console hooker</span>
                <span style="flex: 1;">
                    <button class="mini" v-on:click="hide">X</button>
                </span>
            </div>
            <div class="console_box_output_container">
                <div class="console_box_output" id="lsw-console-hooker-output"></div>
            </div>
        </div>
    </div>
</div>`,
  props: {},
  data() {
    return {
      is_shown: true,
      instance: undefined
    }
  },
  methods: {
    show() {
      this.is_shown = true;
    },
    hide() {
      this.is_shown = false;
    }
  },
  mounted() {
    this.instance = new ConsoleHooker("lsw-console-hooker-output");
    this.$vue.prototype.$consoleHooker = this;
    this.$window.LswConsoleHooker = this;
  },
  unmounted() {

  }
});
// Change this component at your convenience:
Vue.component("App", {
  template: `<div>
    <button v-on:click="uploadConductometria" v-if="!conductometria.registros">Abrir conductometría</button>
    <button v-on:click="clearConductometria" v-else>Cerrar</button>
    <button v-on:click="openDialog">Abrir diálogo</button>
    <button v-on:click="openDialogSequence">Abrir secuencia de diálogos</button>
    <div style="height: 4px;"></div>
    <pre class="conductometria_viewer_1" style="display: none;">{{ conductometria }}</pre>
    <table class="tabla_de_conductometria">
        <template v-for="dia, dia_index in conductometria.registros">
            <tbody v-bind:key="'conductometria_registro_dia_' + dia.day ">
                <tr v-on:click="() => toggleDay(dia.day)">
                    <td colspan="1000" class="celda_fecha" :class="{ activated: conductometria_minified_days.indexOf(dia.day) === -1 }">
                        {{ dia.day }}
                    </td>
                </tr>
                <template v-if="conductometria_minified_days.indexOf(dia.day) === -1">
                    <template v-for="hora, hora_index in dia.hours">
                        <tr v-bind:key="'conductometria_registro_dia_' + dia.day + '_celda_hora'" :class="{ passed: hora.passed, current: hora.current }">
                            <td class="celda_hora">
                                {{ hora.hour }}
                            </td>
                            <td class="celda_contenido">
                                <button class="minibutton">+</button>
                                <span class="pill_group" v-for="event, event_index in hora.events" v-bind:key="'conductometria_registro_dia_' + dia.day + '_celda_hora_event_' + event_index" style="margin-right: 2px;">
                                    <span style="padding-left: 2px; padding-right: 2px; border: 1px solid #000; border-right: 0px solid #000; background-color: #FFFFFF;">
                                        <template v-if="event.details">
                                            <span>{{ event.name }} <span>({{ event.details }})</span></span>
                                        </template>
                                        <template v-else>
                                            <span>{{ event.name }}</span>
                                        </template>
                                    </span><span class="like_button minibutton display_inline_block text_align_center" style="border: 1px solid #000; border-left: 0px solid #000; min-width:15px;"> - </span>
                                </span>
                            </td>
                        </tr>
                    </template>
                </template>
            </tbody>
        </template>
    </table>




    <lsw-console-hooker />
    <lsw-windows-viewer />
    <lsw-toasts />
</div>`,
  props: {},
  data() {
    return {
      conductometria: [],
      conductometria_minified_days: [],
    };
  },
  methods: {

    async uploadConductometria() {
      try {
        if (localStorage.__conductometria_file_1__) {
          this.conductometria = JSON.parse(localStorage.__conductometria_file_1__);
          return 1;
        }
        const excelData2 = await this.$lsw.utils.loadConductometriaByExcelFile();
        if (excelData2) {
          this.conductometria = excelData2;
          localStorage.__conductometria_file_1__ = JSON.stringify(excelData2);
          return 2;
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.$forceUpdate(true);
      }
    },

    clearConductometria() {
      try {
        this.conductometria = [];
        this.conductometria_minified_days = [];
        delete localStorage.__conductometria_file_1__;
      } catch (error) {
        console.log(error);
      } finally {
        this.$forceUpdate(true);
      }
    },

    toggleDay(dia_index) {
      const pos = this.conductometria_minified_days.indexOf(dia_index);
      if (pos === -1) {
        this.conductometria_minified_days.push(dia_index);
      } else {
        this.conductometria_minified_days.splice(pos, 1);
      }
      this.$forceUpdate(true);
    },

    async openDialog() {
      const name = await this.$dialogs.open({
        template: `
          <div>
            <div style="display: flex; flex-direction: row; align-items: center;">
              <div style="flex:100; padding-right: 4px;">
                <input type="text" v-model="value" style="width:100%;" placeholder="Pon tu nombre aquí" v-focus v-on:keydown.enter="accept" />
              </div>
              <div style="flex:1;">
                <button v-on:click="accept">Aceptar</button>
              </div>
            </div>
          </div>
        `
      });
      console.log("Name:", name);
    },

    async openDialogSequence() {
      const userData = await this.$dialogs.open({
        id: "dialog-step-1",
        title: "Paso 1",
        template: `
          <div>
              <div>
                <div>Nombre:</div>
                <input type="text" ref="nameInput" v-model="value.name" style="width:100%;" placeholder="Pon tu nombre aquí" v-focus v-on:keydown.enter="() => $refs.ageInput.focus()" />
                <div>Edad:</div>
                <input type="number" ref="ageInput" v-model="value.age" style="width:100%;" placeholder="Pon tu edad aquí" v-on:keydown.enter="() => $refs.cityInput.focus()" />
                <div>Ciudad:</div>
                <input type="text" ref="cityInput" v-model="value.city" style="width:100%;" placeholder="Pon tu ciudad aquí" v-on:keydown.enter="accept" />
              </div>
              <div>
                <button v-on:click="accept">Aceptar</button>
              </div>
          </div>
        `,
        factory: {
          data: {
            value: {
              tpl1: [["name, nombre"], ["age", "edad"], ["city", "ciudad"]],
              name: "Guybrush Threepwood",
              age: 0,
              city: "Los Angeles"
            }
          }
        }
      });
      console.log("UserData:", userData);
      const response = await this.$dialogs.open({
        id: "dialog-step-2",
        title: "Paso 2",
        template: `
          <div>
              <div>
                <div>¿Cómo estás, ${userData.name}?</div>
                <div>Cuéntame, ¿qué tal todo por ${userData.city}?</div>
                <div>¿Cómo van esos ${userData.age} años?</div>
                <input type="text" v-model="value" style="width:100%;" placeholder="Cuéntame aquí, que quiero saber" v-on:keydown.enter="accept" />
              </div>
              <div>
                <button v-on:click="accept">Aceptar</button>
              </div>
          </div>
        `
      });
      console.log("Response:", response);
    }

  },
  mounted() {
    console.log("[*] Application mounted.");
    window.on_application_mounted.resolve(true);
  }
});
Vue.component("LswDatabaseExplorer", {
  template: `<div>
    <component :is="selectedPage" :args="selectedArgs" :database-explorer="this" />
</div>`,
  props: {},
  data() {
    return {
      selectedPage: "lsw-page-databases",
      selectedArgs: [],
    }
  },
  methods: {
    selectPage(page, args = []) {
      try {
        this.selectedArgs = args;
        this.selectedPage = page;
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  },
  async mounted() {
    
  },
  unmounted() {

  }
});
Vue.component("LswDatabaseBreadcrumb", {
  template: `<div class="database_breadcrumb">
    <span>Return to:</span>
    <template v-for="item, itemIndex in breadcrumb">
        <span v-bind:key="'breadcrumb_item_' + itemIndex">
            <span v-if="itemIndex !== 0"> » </span>
            <a v-if="!item.current" href="javascript:void(0)" v-on:click="() => selectPage(item.page, item.args)">
                {{ item.name }}
            </a>
            <span v-else>{{ item.name }}</span>
        </span>
    </template>
</div>`,
  props: {
    databaseExplorer: {
      type: Object,
      required: true
    },
    breadcrumb: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    selectPage(page, args = {}) {
      return this.databaseExplorer.selectPage(page, args);
    }
  },
  async mounted() {
    
  },
  unmounted() {

  }
});
Vue.component("LswPageDatabases", {
  template: `<div>
    <h3>All databases</h3>
    <lsw-table :initial-input="databases" v-if="databases"></lsw-table>
    <table class="basic_table top_aligned">
        <thead>
            <tr>
                <th>Nº</th>
                <th>Database</th>
                <th class="width_100">Version</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="database, databaseIndex in databases" v-bind:key="'database_id_' + database.name">
                <td>
                    {{ databaseIndex + 1 }}
                </td>
                <td>
                    <a href="javascript:void(0)" v-on:click="() => openDatabase(database.name)">{{ database.name }}</a>
                </td>
                <td>
                    {{ database.version }}
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
  props: {
    databaseExplorer: {
      type: Object,
      required: true
    },
    args: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      databases: [],
      breadcrumb: [{
        page: "LswPageDatabases",
        name: "Databases",
        args: {},
        current: true
      }],
    }
  },
  methods: {
    openDatabase(name) {
      this.databaseExplorer.selectPage("LswPageTables", { database: name });
    }
  },
  async mounted() {
    this.databases = await LswDatabaseAdapter.listDatabases();
  },
  unmounted() {

  }
});
Vue.component("LswPageRows", {
  template: `<div>
    <h3>Rows of {{ args.database }}.{{ args.table }}</h3>
    <lsw-database-breadcrumb :breadcrumb="breadcrumb" :database-explorer="databaseExplorer" />
    <lsw-table :initial-input="rows" v-if="rows"></lsw-table>
    <table class="basic_table top_aligned">
        <thead>
            <tr>
                <th>Nº</th>
                <th>ID</th>
                <th class="width_100">Item</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row, rowIndex in rows" v-bind:key="'row_index_' + rowIndex">
                <td>{{ rowIndex + 1 }}</td>
                <td>
                    <a href="javascript:void(0)" v-on:click="() => openRow(row.id)">
                        #{{ row.id }}
                    </a>
                </td>
                <td>
                    <div v-for="prop, propIndex, propCounter in row" v-bind:key="'row_index_' + rowIndex + '_prop_' + propIndex">
                        {{ propCounter + 1 }}. {{ propIndex }}: {{ prop }}
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
  props: {
    databaseExplorer: {
      type: Object,
      required: true
    },
    args: {
      type: Object,
      required: true
    },
  },
  data() {
    if(typeof this.args.database !== "string") {
      throw new Error("Required parameter «args.database» to be a string on «LswPageRows.data»");
    }
    if(typeof this.args.table !== "string") {
      throw new Error("Required parameter «args.table» to be a string on «LswPageRows.data»");
    }
    return {
      breadcrumb: [{
        page: "LswPageDatabases",
        name: "Databases",
        args: {}
      }, {
        page: "LswPageTables",
        name: this.args.database,
        args: {
          database: this.args.database
        }
      }, {
        page: "LswPageRows",
        name: this.args.table,
        args: {
          database: this.args.database,
          table: this.args.table
        },
        current: true
      }],
      database: this.args.database,
      table: this.args.table,
      rows: undefined,
      connection: undefined,
    }
  },
  methods: {
    async loadRows() {
      this.connection = new LswDatabaseAdapter(this.database);
      await this.connection.open();
      this.rows = await this.connection.select(this.table, it => true);
    },
    openRow(rowid) {
      return this.databaseExplorer.selectPage("LswPageRow", {
        database: this.database,
        table: this.table,
        rowid: rowid
      });
    }
  },
  mounted() {
    this.loadRows();
  },
  unmounted() {
    this.connection.close();
  }
});
Vue.component("LswPageRow", {
  template: `<div>
    <h3>Row on {{ args.database }}.{{ args.table }}#{{ args.rowid }}</h3>
    <lsw-database-breadcrumb :breadcrumb="breadcrumb" :database-explorer="databaseExplorer" />
    <table class="basic_table top_aligned" v-if="row">
        <thead>
            <tr>
                <th>Nº</th>
                <th>Property</th>
                <th class="width_100">Value</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="prop, propName, propCounter in row" v-bind:key="'prop_index_' + propName">
                <td>{{ propCounter + 1 }}</td>
                <td>
                    {{ propName }}
                </td>
                <td>
                    {{ prop }}
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
  props: {
    databaseExplorer: {
      type: Object,
      required: true
    },
    args: {
      type: Object,
      required: true
    },
  },
  data() {
    if(typeof this.args.database !== "string") {
      throw new Error("Required parameter «args.database» to be a string on «LswPageRow.data»");
    }
    if(typeof this.args.table !== "string") {
      throw new Error("Required parameter «args.table» to be a string on «LswPageRow.data»");
    }
    if(typeof this.args.rowid === "undefined") {
      throw new Error("Required parameter «args.rowid» to be a string or a number on «LswPageRow.data»");
    }
    return {
      breadcrumb: [{
        page: "LswPageDatabases",
        name: "Databases",
        args: {}
      }, {
        page: "LswPageTables",
        name: this.args.database,
        args: {
          database: this.args.database
        }
      }, {
        page: "LswPageRows",
        name: this.args.table,
        args: {
          database: this.args.database,
          table: this.args.table
        },
      }, {
        page: "LswPageRow",
        name: "#" + this.args.rowid,
        args: {
          database: this.args.database,
          table: this.args.table,
          rowid: this.args.rowid
        },
        current: true
      }],
      database: this.args.database,
      table: this.args.table,
      rowid: this.args.rowid,
      connection: undefined,
      row: false,
    }
  },
  methods: {
    async loadRow() {
      this.connection = new LswDatabaseAdapter(this.database);
      await this.connection.open();
      const matches = await this.connection.select(this.table, it => it.id === this.rowid);
      this.row = matches[0];
    }
  },
  mounted() {
    this.loadRow();
  },
  unmounted() {
    this.connection.close();
  }
});
Vue.component("LswPageSchema", {
  template: `<div></div>`,
  props: {},
  data() {
    return {
      
    }
  },
  methods: {
    
  },
  mounted() {
    
  },
  unmounted() {

  }
});
Vue.component("LswPageTables", {
  template: `<div>
    <h3>Tables of {{ args.database }}</h3>
    <lsw-database-breadcrumb :breadcrumb="breadcrumb"
        :database-explorer="databaseExplorer" />
    <lsw-table :initial-input="tables" v-if="tables"></lsw-table>
    <div style="padding: 4px;">
        <table class="basic_table top_aligned">
            <thead>
                <tr>
                    <th>Nº</th>
                    <th>Table</th>
                    <th class="width_100">Columns</th>
                </tr>
            </thead>
            <tbody v-if="tables">
                <tr v-for="table, tableIndex, tableCounter in tables"
                    v-bind:key="'table_id_' + table.name">
                    <td>
                        {{ tableCounter + 1 }}
                    </td>
                    <td>
                        <a href="javascript:void(0)"
                            v-on:click="() => openTable(tableIndex)">{{ tableIndex }}</a>
                    </td>
                    <td>
                        <!--div>- keyPath: {{ table.keyPath }}</div-->
                        <div v-if="table.autoIncrement">Is autoincrement</div>
                        <div v-for="subprop, subpropIndex in table.indexes"
                            v-bind:key="'table_' + table.name + '_index_' + subpropIndex">
                            <div>
                                {{ subpropIndex + 1 }}. {{ subprop.name }} 
                                <span v-if="subprop.unique || subprop.multientry">
                                    [{{ [subprop.unique ? "unique" : false, subprop.multiEntry ?
                                "multientry" : false].filter(it => !!it).join(", ") }}]
                                </span>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>`,
  props: {
    databaseExplorer: {
      type: Object,
      required: true
    },
    args: {
      type: Object,
      required: true
    },
  },
  data() {
    if(!("database" in this.args)) {
      throw new Error("Required parameter «args.database» on «LswPageTables.data»");
    }
    if(typeof this.args.database !== "string") {
      throw new Error("Required parameter «args.database» to be a string on «LswPageTables.data»");
    }
    return {
      breadcrumb: [{
        page: "LswPageDatabases",
        name: "Databases",
        args: {}
      }, {
        page: "LswPageTables",
        name: this.args.database,
        args: {
          database: this.args.database
        },
        current: true
      }],
      database: this.args.database,
      tables: false
    }
  },
  methods: {
    async loadDatabase() {
      const db = await LswDatabaseAdapter.getSchema(this.database);
      this.tables = db;
      console.log(db);
    },
    openTable(table) {
      return this.databaseExplorer.selectPage("LswPageRows", {
        database: this.database,
        table: table
      });
    }
  },
  mounted() {
    this.loadDatabase();
  },
  unmounted() {

  }
});
Vue.component("LswFilesystemExplorer", {
  name: "LswFilesystemExplorer",
  template: `<div class="lsw_filesystem_explorer">
    <div class="current_node_box">
        <span class="previous_node_path" v-if="current_node !== '/'">
            <button class="mini previous_node_button" v-on:click="go_up">◀</button>
        </span>
        <span class="current_node_path">{{ current_node_basedir }}</span>
        <span class="current_node_filename">{{ current_node_basename }}</span>
    </div>
    <div class="filesystem_ui">
        <div class="leftside">
            <lsw-filesystem-buttons-panel :explorer="this" />
        </div>
        <div class="middleside">
            <div class="headerside">
                <lsw-filesystem-buttons-panel :explorer="this" />
            </div>
            <div class="bodyside">
                <lsw-filesystem-treeviewer v-if="current_node_is_directory" :explorer="this" ref="treeviewer" />
                <lsw-filesystem-editor v-else-if="current_node_is_file" :explorer="this" ref="editor" :filecontents="current_node_contents" />
            </div>
            <div class="footerside">
                <lsw-filesystem-buttons-panel :explorer="this" />
            </div>
        </div>
        <div class="rightside">
            <lsw-filesystem-buttons-panel :explorer="this" />
        </div>
    </div>
</div>`,
  props: {},
  data() {
    this.$trace("lsw-filesystem-explorer.data");
    return {
      current_node: undefined,
      current_node_parts: undefined,
      current_node_basename: undefined,
      current_node_basedir: undefined,
      current_node_contents: undefined,
      current_node_subnodes: [],
      current_node_is_file: false,
      current_node_is_directory: false,
    };
  },
  methods: {
    open(...args) {
      this.$trace("lsw-filesystem-explorer.methods.open");
      return this.open_node(...args);
    },
    go_up() {
      const parts = this.current_node.split("/");
      parts.pop();
      const dest = this.normalize_path("/" + parts.join("/"));
      return this.open(dest);
    },
    normalize_path(subpath) {
      this.$trace("lsw-filesystem-explorer.methods.normalize_path");
      return this.$lsw.fs.resolve_path(this.current_node, subpath);
    },
    async open_node(subpath) {
      this.$trace("lsw-filesystem-explorer.methods.open_node");
      try {
        if (["", "/"].indexOf(subpath) !== -1) {
          return await this._open_directory("/");
        }
        const temporaryPath = this.normalize_path(subpath);
        const is_directory = await this.$lsw.fs.is_directory(temporaryPath);
        if (is_directory) {
          return await this._open_directory(temporaryPath);
        }
        const is_file = await this.$lsw.fs.is_file(temporaryPath);
        if (is_file) {
          return await this._open_file(temporaryPath);
        }
        throw new Error(`Cannot open path because it does not exist: ${temporaryPath} on «LswFilesystemExplorer.methods.open_node»`);
      } catch (error) {
        console.log(error);
      }
    },
    _set_as_file() {
      this.current_node_is_file = true;
      this.current_node_is_directory = false;
    },
    _set_as_directory() {
      this.current_node_is_directory = true;
      this.current_node_is_file = false;
    },
    async _open_file(subpath) {
      this.$trace("lsw-filesystem-explorer.methods._open_file");
      this.current_node = subpath;
      const contents = await this.$lsw.fs.read_file(this.current_node);
      this.current_node_contents = contents;
      this._set_as_file();
    },
    async _open_directory(subpath) {
      this.$trace("lsw-filesystem-explorer.methods._open_directory");
      this.current_node = subpath;
      const subnodes = await this.$lsw.fs.read_directory(this.current_node);
      this.current_node_subnodes = subnodes;
      this._set_as_directory();
    },
    _update_node_parts(newValue = this.current_node) {
      this.$trace("lsw-filesystem-explorer.methods._update_node_parts");
      this.current_node_parts = newValue.split("/").filter(p => p !== "");
    },
    _update_current_node_basename(current_node_parts = this.current_node_parts) {
      this.$trace("lsw-filesystem-explorer.methods._update_current_node_basename");
      if (current_node_parts.length) {
        this.current_node_basename = current_node_parts[current_node_parts.length - 1];
      } else {
        this.current_node_basename = "/";
      }
    },
    _update_current_node_basedir(current_node_parts = this.current_node_parts) {
      this.$trace("lsw-filesystem-explorer.methods._update_current_node_basedir");
      if (current_node_parts.length > 1) {
        this.current_node_basedir = "/" + [].concat(current_node_parts).splice(0, current_node_parts.length - 1).join("/") + "/";
      } else {
        this.current_node_basedir = "/";
      }
    },
    _update_node_subdata(newValue = this.current_node) {
      this.$trace("lsw-filesystem-explorer.methods._update_node_subdata");
      this._update_node_parts(newValue);
      this._update_current_node_basename();
      this._update_current_node_basedir();
    },
    set_panel_buttons(panelOptions = {}) {
      Validation: {
        if (typeof panelOptions !== "object") {
          throw new Error("Required argument «panelOptions» to be an object on «LswFilesystemExplorer.methods.set_panel_buttons»");
        }
        const keys = Object.keys(panelOptions);
        if (keys.length === 0) {
          throw new Error("Required argument «panelOptions» to be have 1 or more keys on «LswFilesystemExplorer.methods.set_panel_buttons»");
        }
        const valid_keys = ["top", "bottom", "left", "right"];
        for (let index = 0; index < keys.length; index++) {
          const key = keys[index];
          if(valid_keys.indexOf(key) === -1) {
            throw new Error(`Required argument «panelOptions[${key}]» to be a valid key out of «${valid_keys.join(",")}», not «${key}» on «LswFilesystemExplorer.methods.set_panel_buttons»`);
          }
          const value = panelOptions[key];
          if(typeof value !== "object") {
            throw new Error(`Required argument «panelOptions[${key}]» to be an object or array, not ${typeof value}» on «LswFilesystemExplorer.methods.set_panel_buttons»`);
          }
        }
      }
    }
  },
  watch: {
    current_node(newValue) {
      this.$trace("lsw-filesystem-explorer.watch.current_node");
      this._update_node_subdata(newValue);
    }
  },
  async mounted() {
    try {
      this.$trace("lsw-filesystem-explorer.mounted");
      this.$lsw.fs = new LswFilesystem();
      this.$lsw.fsExplorer = this;
      await this.$lsw.fs.init();
      await this.open("/");
    } catch (error) {
      console.log(error);
    }
  }
});
Vue.component("LswFilesystemButtonsPanel", {
  name: "LswFilesystemButtonsPanel",
  template: `<div class="lsw_filesystem_buttons_panel">
    
</div>`,
  props: {
    explorer: {
      type: Object,
      required: true
    }
  },
  data() {
    return {

    };
  },
  watch: {

  },
  methods: {

  },
  mounted() {

  }
});
Vue.component("LswFilesystemEditor", {
  name: "LswFilesystemEditor",
  template: `<div class="lsw_filesystem_editor">
    <textarea class="editor" v-model="filecontents" />
</div>`,
  props: {
    explorer: {
      type: Object,
      required: true
    },
    filecontents: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      
    };
  },
  watch: {

  },
  methods: {

  },
  mounted() {

  }
});
Vue.component("LswFilesystemTreeviewer", {
  name: "LswFilesystemTreeviewer",
  template: `<div class="lsw_filesystem_treeviewer">
    <table class="filesystem_treeviewer_table width_100">
        <thead style="display: none;"></thead>
        <tbody>
            <tr v-if="explorer.current_node !== '/'"
                class="treeviewer_row">
                <td>📁</td>
                <td v-on:click="() => go_up()">
                    <a href="javascript:void(0)">..</a>
                </td>
                <td></td>
            </tr>
            <template v-for="subnode, subnodeIndex, subnodeCounter in explorer.current_node_subnodes">
                <tr class="treeviewer_row"
                    v-bind:key="'subnode_obj_' + subnodeIndex">
                    <template v-if="typeof subnode === 'object'">
                        <td v-on:click="() => open_subnode(subnodeIndex)">📁</td>
                        <td v-on:click="() => open_subnode(subnodeIndex)">
                            <a href="javascript:void(0)"><b>{{ subnodeIndex }}</b></a>
                        </td>
                        <td>
                            <button class="mini">X</button>
                        </td>
                    </template>
                    <template v-else-if="typeof subnode === 'string'">
                        <td v-on:click="() => open_subnode(subnodeIndex)"> </td>
                        <td v-on:click="() => open_subnode(subnodeIndex)">
                            <a href="javascript:void(0)">{{ subnodeIndex }}</a>
                        </td>
                        <td>
                            <button class="mini">X</button>
                        </td>
                    </template>
                </tr>
            </template>
        </tbody>
    </table>

</div>`,
  props: {
    explorer: {
      type: Object,
      required: true
    }
  },
  data() {
    return {

    };
  },
  watch: {

  },
  methods: {
    go_up() {
      return this.explorer.go_up();
    },
    open_subnode(subnodeIndex) {
      return this.explorer.open(subnodeIndex);
    }
  },
  mounted() {
    this.explorer.set_panel_buttons({
      top: [],
      left: [],
      right: [],
      bottom: [],
    })
  },
  unmounted() {

  }
});
Vue.component("LswWiki", {
  name: "LswWiki",
  template: `<div class="lsw_wiki">
    <h3>Welcome to wiki</h3>
    <div class="wiki_searcher_1_box">
        <div class="wiki_searcher_1_input_cell">
            <input class="wiki_searcher_1_input" v-model="search_text_1" type="text" placeholder="Fast search" v-on:key-down.enter="search" />
        </div>
        <div class="wiki_searcher_1_button_cell">
            <button class="wiki_searcher_1_button" v-on:click="search">🔎</button>
        </div>
    </div>
</div>`,
  props: {},
  data() {
    this.$trace("lsw-wiki.data");
    return {
      search_text_1: "",
    };
  },
  methods: {
    search() {
      this.$trace("lsw-wiki.methods.search");
      console.log("Search");
    }
  },
  watch: {
    
  },
  async mounted() {
    try {
      this.$trace("lsw-wiki.mounted");
    } catch (error) {
      console.log(error);
    }
  }
});
Vue.component("LswCalendario", {
  template: `<div class="Component LswCalendario">
  <div style="max-width: 260px;">
    <div class="like_table" style="border-collapse: collapse; border: none; border-bottom: 1px solid white;">
      <div class="like_row">
        <div class="like_cell">
          <button class="boton_de_mover_mes"
            v-on:click="ir_a_mes_anterior"> ◀ </button>
        </div>
        <div class="like_cell" style="width:100%;" :style="!soloFecha ? 'vertical-align: top;' : ''">
          <div class="chivato_de_fecha">{{ obtener_fecha_formateada(fecha_seleccionada) }}</div>
          <div class="chivato_de_fecha" v-if="!soloFecha">a las {{ espaciar_izquierda(hora_seleccionada, 2) }}:{{ espaciar_izquierda(minuto_seleccionado, 2)
            }}:{{
            espaciar_izquierda(segundo_seleccionado, 2) }}.{{ espaciar_izquierda(milisegundo_seleccionado, 3) }}
          </div>
        </div>
        <div class="like_cell">
          <button class="boton_de_mover_mes"
            v-on:click="ir_a_mes_siguiente"> ▶ </button>
        </div>
      </div>
    </div>
    <table class="tabla_de_calendario">
      <tbody>
        <tr class="fila_de_dias_de_semana">
          <td>Lu</td>
          <td>Ma</td>
          <td>Mi</td>
          <td>Ju</td>
          <td>Vi</td>
          <td>Sá</td>
          <td>Do</td>
        </tr>
      </tbody>
      <tbody class="dias_de_calendario">
        <tr v-for="semana, semana_index in celdas_del_mes_actual"
          v-bind:key="'semana-' + semana_index">
          <td v-for="dia, dia_index in semana"
            v-bind:key="'dia-' + dia_index">
            <span v-if="dia">
              <button class="boton_de_calendario boton_de_dia_de_calendario"
                :class="{active: dia.getDate() === fecha_seleccionada.getDate()}"
                v-on:click="() => seleccionar_dia(dia)">{{ dia.getDate() }}</button>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="tabla_para_horas"
      v-if="!soloFecha">
      <tr>
        <td>
          <button style="display: table-cell;"
            class="boton_de_calendario"
            v-on:click="agregar_hora"> ▲ </button>
        </td>
        <td>
          <button style="display: table-cell;"
            class="boton_de_calendario"
            v-on:click="agregar_minuto"> ▲ </button>
        </td>
        <td>
          <button style="display: table-cell;"
            class="boton_de_calendario"
            v-on:click="agregar_segundo"> ▲ </button>
        </td>
      </tr>
      <tr>
        <td>
          <input style="display: table-cell;"
            class="entrada_de_calendario"
            type="text"
            v-model="hora_seleccionada" />
        </td>
        <td>
          <input style="display: table-cell;"
            class="entrada_de_calendario"
            type="text"
            v-model="minuto_seleccionado" />
        </td>
        <td>
          <input style="display: table-cell;"
            class="entrada_de_calendario"
            type="text"
            v-model="segundo_seleccionado" />
        </td>
      </tr>
      <tr>
        <td>
          <button style="display: table-cell;"
            class="boton_de_calendario"
            v-on:click="quitar_hora"> ▼ </button>
        </td>
        <td>
          <button style="display: table-cell;"
            class="boton_de_calendario"
            v-on:click="quitar_minuto"> ▼ </button>
        </td>
        <td>
          <button style="display: table-cell;"
            class="boton_de_calendario"
            v-on:click="quitar_segundo"> ▼ </button>
        </td>
      </tr>
    </table>
  </div>
</div>`,
  props: {
    soloFecha: {
      type: Boolean,
      default: false
    },
    alCambiarValor: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    try {
      return {
        fecha_seleccionada: undefined,
        celdas_del_mes_actual: undefined,
        hora_seleccionada: "0",
        minuto_seleccionado: "0",
        segundo_seleccionado: "0",
        milisegundo_seleccionado: "0"
      };
    } catch (error) {
      console.log(error);
      throw error;
    }

  },
  methods: {
    getValue() {
      return this.fecha_seleccionada;
    },
    ir_a_mes_anterior() {
      try {
        const nueva_fecha = new Date(this.fecha_seleccionada);
        nueva_fecha.setMonth(nueva_fecha.getMonth() - 1);
        this.fecha_seleccionada = nueva_fecha;
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    ir_a_mes_siguiente() {
      try {
        const nueva_fecha = new Date(this.fecha_seleccionada);
        nueva_fecha.setMonth(nueva_fecha.getMonth() + 1);
        this.fecha_seleccionada = nueva_fecha;
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    agregar_hora() {
      try {
        let hora = parseInt(this.hora_seleccionada);
        hora += 1;
        this.hora_seleccionada = hora;
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    agregar_minuto() {
      try {
        let minuto = parseInt(this.minuto_seleccionado);
        minuto += 1;
        this.minuto_seleccionado = minuto;
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    agregar_segundo() {
      try {
        let segundo = parseInt(this.segundo_seleccionado);
        segundo += 1;
        this.segundo_seleccionado = segundo;
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    quitar_hora() {
      try {
        let hora = parseInt(this.hora_seleccionada);
        hora -= 1;
        this.hora_seleccionada = hora;
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    quitar_minuto() {
      try {
        let minuto = parseInt(this.minuto_seleccionado);
        minuto -= 1;
        this.minuto_seleccionado = minuto;
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    quitar_segundo() {
      try {
        let segundo = parseInt(this.segundo_seleccionado);
        segundo -= 1;
        this.segundo_seleccionado = segundo;
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    seleccionar_dia(dia) {
      try {
        this.fecha_seleccionada = dia;
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    espaciar_izquierda(texto,
      longitud,
      relleno = "0") {
      try {
        let salida = "" + texto;
        while (salida.length < longitud) {
          salida = relleno + salida;
        }
        return salida;
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    obtener_fecha_formateada(fecha) {
      try {
        if (typeof fecha === 'undefined') {
          return;
        }
        let formato = "";
        formato += (() => {
          try {
            if (fecha.getDay() === 0) {
              return "Domingo";
            }
            if (fecha.getDay() === 1) {
              return "Lunes";
            }
            if (fecha.getDay() === 2) {
              return "Martes";
            }
            if (fecha.getDay() === 3) {
              return "Miércoles";
            }
            if (fecha.getDay() === 4) {
              return "Jueves";
            }
            if (fecha.getDay() === 5) {
              return "Viernes";
            }
            if (fecha.getDay() === 6) {
              return "Sábado";
            }
          } catch (error) {
            console.log(error);
            throw error;
          }
        })();
        formato += ", ";
        formato += fecha.getDate();
        formato += " de ";
        formato += (() => {
          try {
            if (fecha.getMonth() === 0) {
              return "Enero";
            }
            if (fecha.getMonth() === 1) {
              return "Febrero";
            }
            if (fecha.getMonth() === 2) {
              return "Marzo";
            }
            if (fecha.getMonth() === 3) {
              return "Abril";
            }
            if (fecha.getMonth() === 4) {
              return "Mayo";
            }
            if (fecha.getMonth() === 5) {
              return "Junio";
            }
            if (fecha.getMonth() === 6) {
              return "Julio";
            }
            if (fecha.getMonth() === 7) {
              return "Agosto";
            }
            if (fecha.getMonth() === 8) {
              return "Septiembre";
            }
            if (fecha.getMonth() === 9) {
              return "Octubre";
            }
            if (fecha.getMonth() === 10) {
              return "Noviembre";
            }
            if (fecha.getMonth() === 11) {
              return "Diciembre";
            }
          } catch (error) {
            console.log(error);
            throw error;
          }
        })();
        formato += " de ";
        formato += fecha.getFullYear();
        return formato;
      } catch (error) {
        console.log(error);
        throw error;
      }

    }
  },
  watch: {
    fecha_seleccionada(nuevo_valor) {
      try {
        const dias = [];
        const dia_1_del_mes = new Date(nuevo_valor);
        dia_1_del_mes.setDate(1);
        dia_1_del_mes.setHours(0);
        dia_1_del_mes.setMinutes(0);
        dia_1_del_mes.setSeconds(0);
        dia_1_del_mes.setMilliseconds(0);
        const dias_antes_de_entrar_en_el_mes = (() => {
          try {
            const dia_de_semana = dia_1_del_mes.getDay();
            if (dia_de_semana === 0) {
              return 6;
            }
            if (dia_de_semana === 1) {
              return 0;
            }
            if (dia_de_semana === 2) {
              return 1;
            }
            if (dia_de_semana === 3) {
              return 2;
            }
            if (dia_de_semana === 4) {
              return 3;
            }
            if (dia_de_semana === 5) {
              return 4;
            }
            if (dia_de_semana === 6) {
              return 5;
            }
          } catch (error) {
            console.log(error);
            throw error;
          }
        })();
        const celdas_vacias_anteriores = new Array(dias_antes_de_entrar_en_el_mes);
        const dia_final_del_mes = new Date(nuevo_valor);
        dia_final_del_mes.setMonth(dia_final_del_mes.getMonth() + 1);
        dia_final_del_mes.setDate(1);
        dia_final_del_mes.setDate(dia_final_del_mes.getDate() - 1);
        const numero_final_de_mes = dia_final_del_mes.getDate();
        let fila_actual = celdas_vacias_anteriores;
        for (let index = 1; index < numero_final_de_mes + 1; index++) {
          const nueva_fecha = new Date(dia_1_del_mes);
          nueva_fecha.setDate(index);
          fila_actual.push(nueva_fecha);
          if (nueva_fecha.getDay() === 0) {
            dias.push(fila_actual);
            fila_actual = [];
          }
        }
        if (fila_actual.length) {
          dias.push(fila_actual);
        }
        this.celdas_del_mes_actual = dias;
        if(typeof this.alCambiarValor === "function") {
          this.alCambiarValor(nuevo_valor, this);
        }
      } catch (error) {
        console.log(error);
        throw error;
      }

    }
  },
  mounted() {
    try {
      this.fecha_seleccionada = new Date();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
});
Vue.component("LswAgendaAccionAdd", {
  template: `<div class="LswAgendaAccionAdd" style="padding-top: 4px;">
  <template v-if="formMetadata">
    <lsw-agenda-form :form-metadata="formMetadata"></lsw-agenda-form>
  </template>
</div>`,
  props: {},
  data() {
    this.$trace("lsw-agenda-accion-add.data");
    return {
      refers_to_concept: "",
      has_duration: "",
      starts_at: "",
      has_emotions: "",
      has_details: "",
      has_description: "",
      has_steps: "",
      has_reasoning: "",
      has_expectations: "",
      has_learning: "",
      has_intention: "",
      has_result: "",
      has_history: "",
      has_consequences: "",
      // Campos para el formulario:
      formScope: Object.freeze({}), // El scope que usará el formulario que queremos.
      formMetadata: false, // Los metadatos, que incluyen fields y form.
    };
  },
  methods: {
    loadFormMetadata() {
      const outterFormScope = {};
      const fields = [{
        type: "input",
        enunciate: "Concepto al que se refiere:",
        code1: "it.refers_to_concept",
        code2: "refers_to_concept",
        code3: "string",
        explanation: "tiene que coincidir con el «has_name» del concepto para que funcionen los propagadores correspondientes.",
        placeholder: "Ej: Desayunar",
        errorConfig: {
          parentId: "refers_to_concept",
          parentScope: outterFormScope,
        },
        inputConfig: {
          parentId: "formularioInicial",
          parentScope: outterFormScope,
          selfId: "refers_to_concept",
          selfScope: outterFormScope,
          name: "refers_to_concept"
        }
      }, {
        type: "input",
        enunciate: "Duración:",
        code1: "it.has_duration",
        code2: "has_duration",
        code3: "string",
        explanation: "tiene que cumplir con el formato «0y 0mon 0d 0h 0min 0s» para referir a una duración.",
        placeholder: "Ej: 0y 0mon 0d 0h 0min",
        errorConfig: {
          parentId: "has_duration",
          parentScope: outterFormScope,
          onSuccessStatus: {
            name: "OK",
            message: "El campo cumple con un formato válido."
          }
        },
        inputConfig: {
          parentId: "formularioInicial",
          parentScope: outterFormScope,
          selfId: "has_duration",
          selfScope: outterFormScope,
          name: "has_duration",
          onValidate: function(value) {
            const result = Timeformat_parser.parse(value);
            if(result.length !== 1) {
              throw new Error("Only 1 expression allowed");
            }
            if(result[0].tipo !== "Duracion") {
              throw new Error("Only 1 expression of type «Duración» allowed");
            }
          }
        }
      }, {
        type: "input",
        enunciate: "Inicio:",
        code1: "it.starts_at",
        code2: "starts_at",
        code3: "string",
        explanation: "tiene que cumplir con el formato «2025/01/01 23:59» para ser válido.",
        placeholder: "2025/01/01 00:00",
        errorConfig: {
          parentId: "starts_at",
          parentScope: outterFormScope,
          onSuccessStatus: {
            name: "OK",
            message: "El campo cumple con un formato válido."
          }
        },
        inputConfig: {
          parentId: "formularioInicial",
          parentScope: outterFormScope,
          selfId: "starts_at",
          selfScope: outterFormScope,
          name: "starts_at",
          onValidate: function(value) {
            const result = Timeformat_parser.parse(value);
            if(result.length !== 1) {
              throw new Error("Only 1 expression allowed");
            }
            if(result[0].tipo !== "FechaHora") {
              throw new Error("Only 1 expression of type «FechaHora» allowed");
            }
          }
        }
      }, {
        type: "select",
        enunciate: "Estado:",
        code1: "it.has_state",
        code2: "has_state",
        code3: "string",
        explanation: "tiene que ser uno entre «pendiente», «fallido» y «completo»",
        options: [{
          value: "pendiente",
          text: "Pendiente"
        }, {
          value: "fallido",
          text: "Fallido"
        }, {
          value: "completo",
          text: "Completo"
        }],
        errorConfig: {
          parentId: "has_state",
          parentScope: outterFormScope,
        },
        inputConfig: {
          parentId: "formularioInicial",
          parentScope: outterFormScope,
          selfId: "has_state",
          selfScope: outterFormScope,
          name: "has_state"
        }
      }, {
        type: "input",
        enunciate: "Emociones asociadas:",
        code1: "it.has_emotions",
        code2: "has_emotions",
        code3: "string",
        explanation: "blablabla.",
        placeholder: "blabla",
        errorConfig: {
          parentId: "has_emotions",
          parentScope: outterFormScope,
        },
        inputConfig: {
          parentId: "formularioInicial",
          parentScope: outterFormScope,
          selfId: "has_emotions",
          selfScope: outterFormScope,
          name: "has_emotions"
        }
      }, {
        type: "input",
        enunciate: "Detalles:",
        code1: "it.has_details",
        code2: "has_details",
        code3: "string",
        explanation: "blablabla.",
        placeholder: "blabla",
        errorConfig: {
          parentId: "has_details",
          parentScope: outterFormScope,
        },
        inputConfig: {
          parentId: "formularioInicial",
          parentScope: outterFormScope,
          selfId: "has_details",
          selfScope: outterFormScope,
          name: "has_details"
        }
      }, {
        type: "input",
        enunciate: "Descripción:",
        code1: "it.has_description",
        code2: "has_description",
        code3: "string",
        explanation: "blablabla.",
        placeholder: "blabla",
        errorConfig: {
          parentId: "has_description",
          parentScope: outterFormScope,
        },
        inputConfig: {
          parentId: "formularioInicial",
          parentScope: outterFormScope,
          selfId: "has_description",
          selfScope: outterFormScope,
          name: "has_description"
        }
      }, {
        type: "input",
        enunciate: "Pasos:",
        code1: "it.has_steps",
        code2: "has_steps",
        code3: "string",
        explanation: "blablabla.",
        placeholder: "blabla",
        errorConfig: {
          parentId: "has_steps",
          parentScope: outterFormScope,
        },
        inputConfig: {
          parentId: "formularioInicial",
          parentScope: outterFormScope,
          selfId: "has_steps",
          selfScope: outterFormScope,
          name: "has_steps"
        }
      }, {
        type: "input",
        enunciate: "Razonamiento:",
        code1: "it.has_reasoning",
        code2: "has_reasoning",
        code3: "string",
        explanation: "blablabla.",
        placeholder: "blabla",
        errorConfig: {
          parentId: "has_reasoning",
          parentScope: outterFormScope,
        },
        inputConfig: {
          parentId: "formularioInicial",
          parentScope: outterFormScope,
          selfId: "has_reasoning",
          selfScope: outterFormScope,
          name: "has_reasoning"
        }
      }, {
        type: "input",
        enunciate: "Expectativas:",
        code1: "it.has_expectations",
        code2: "has_expectations",
        code3: "string",
        explanation: "blablabla.",
        placeholder: "blabla",
        errorConfig: {
          parentId: "has_expectations",
          parentScope: outterFormScope,
        },
        inputConfig: {
          parentId: "formularioInicial",
          parentScope: outterFormScope,
          selfId: "has_expectations",
          selfScope: outterFormScope,
          name: "has_expectations"
        }
      }, {
        type: "input",
        enunciate: "Aprendizaje:",
        code1: "it.has_learning",
        code2: "has_learning",
        code3: "string",
        explanation: "blablabla.",
        placeholder: "blabla",
        errorConfig: {
          parentId: "has_learning",
          parentScope: outterFormScope,
        },
        inputConfig: {
          parentId: "formularioInicial",
          parentScope: outterFormScope,
          selfId: "has_learning",
          selfScope: outterFormScope,
          name: "has_learning"
        }
      }, {
        type: "input",
        enunciate: "Intención:",
        code1: "it.has_intention",
        code2: "has_intention",
        code3: "string",
        explanation: "blablabla.",
        placeholder: "blabla",
        errorConfig: {
          parentId: "has_intention",
          parentScope: outterFormScope,
        },
        inputConfig: {
          parentId: "formularioInicial",
          parentScope: outterFormScope,
          selfId: "has_intention",
          selfScope: outterFormScope,
          name: "has_intention"
        }
      }, {
        type: "input",
        enunciate: "Resultado:",
        code1: "it.has_result",
        code2: "has_result",
        code3: "string",
        explanation: "blablabla.",
        placeholder: "blabla",
        errorConfig: {
          parentId: "has_result",
          parentScope: outterFormScope,
        },
        inputConfig: {
          parentId: "formularioInicial",
          parentScope: outterFormScope,
          selfId: "has_result",
          selfScope: outterFormScope,
          name: "has_result"
        }
      }, {
        type: "input",
        enunciate: "Historia:",
        code1: "it.has_history",
        code2: "has_history",
        code3: "string",
        explanation: "blablabla.",
        placeholder: "blabla",
        errorConfig: {
          parentId: "has_history",
          parentScope: outterFormScope,
        },
        inputConfig: {
          parentId: "formularioInicial",
          parentScope: outterFormScope,
          selfId: "has_history",
          selfScope: outterFormScope,
          name: "has_history"
        }
      }, {
        type: "input",
        enunciate: "Consequencias:",
        code1: "it.has_consequences",
        code2: "has_consequences",
        code3: "string",
        explanation: "blablabla.",
        placeholder: "blabla",
        errorConfig: {
          parentId: "has_consequences",
          parentScope: outterFormScope,
        },
        inputConfig: {
          parentId: "formularioInicial",
          parentScope: outterFormScope,
          selfId: "has_consequences",
          selfScope: outterFormScope,
          name: "has_consequences"
        }
      }, ];
      this.formMetadata = Object.freeze({
        form: {
          selfScope: outterFormScope,
          selfId: "formularioInicial",
          onSubmit: async (value) => {
            const id = await this.$lsw.database.insert("accion", value);
            console.log("ID:", id);
            this.$parent.selectContext("agenda");
          }
        },
        fields: fields,
      });
    }
  },
  watch: {},
  mounted() {
    try {
      this.$trace("lsw-agenda-accion-add.mounted");
      this.loadFormMetadata();
    } catch(error) {
      console.log(error);
    }
  }
});
Vue.component("LswAgendaAccionSearch", {
  template: `<div class="LswAgendaAccionSearch">
  <lsw-table :initial-input="[{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)},{nombre:$lsw.utils.getRandomString(5)}]"></lsw-table>
</div>`,
  props: {},
  data() {
    this.$trace("lsw-agenda-accion-search.data");
    return {};
  },
  methods: {},
  watch: {},
  mounted() {
    try {
      this.$trace("lsw-agenda-accion-search.mounted");
    } catch(error) {
      console.log(error);
    }
  }
});
Vue.component("LswAgendaBreadcrumb", {
  name: "LswAgendaBreadcrumb",
  template: `<div class="lsw_agenda_breadcrumb">
    <div class="flex_row centered">
        <div class="right_padded_1">
            <button v-on:click="() => goToSection('agenda')">📆</button>
        </div>
        <div class="agenda_breadcrumb flex_100">
            <div class="agenda_bradcrumb_item"
                v-for="pathItem, pathIndex in pathItems"
                v-bind:key="'agenda-breadcrumb-path-item-' + pathIndex">
                <span v-if="pathIndex !== 0"> » </span>
                <span class="agenda_breadcrumb_link"
                    v-if="pathItem.link">
                    <a :href="pathItem.link">{{ pathItem.label }}</a>
                </span>
                <span class="agenda_breadcrumb_link"
                    v-else-if="pathItem.section">
                    <span v-on:click="() => goToSection(pathItem.section)">{{ pathItem.label }}</span>
                </span>
                <span class="agenda_breadcrumb_link"
                    v-else-if="pathItem.event">
                    <span v-on:click="pathItem.event">{{ pathItem.label }}</span>
                </span>
                <span class="agenda_breadcrumb_link only_label"
                    v-else-if="pathItem.label">
                    <span>{{ pathItem.label }}</span>
                </span>
            </div>
        </div>
    </div>
</div>`,
  props: {
    agenda: {
      type: Object,
      default: () => null
    },
    pathItems: {
      type: Array,
      required: true
    }
  },
  data() {
    this.$trace("lsw-agenda-breadcrumb.data");
    return {
      
    };
  },
  methods: {
    goToSection(section) {
      this.$trace("lsw-agenda-breadcrumb.methods.goToSection");
      if(this.agenda) {
        this.agenda.selectContext(section);
      }
    }
  },
  watch: {

  },
  async mounted() {
    try {
      this.$trace("lsw-agenda-breadcrumb.mounted");
    } catch (error) {
      console.log(error);
    }
  }
});
const outterFormScope = {};

Vue.component("LswAgendaConceptoAdd", {
  template: `<div class="LswAgendaConceptoAdd">
  <template v-if="formMetadata">
    <lsw-agenda-form :form-metadata="formMetadata"></lsw-agenda-form>
  </template>
</div>`,
  props: {},
  data() {
    this.$trace("lsw-agenda-concepto-add.data");
    return {
      formMetadata: false
    };
  },
  methods: {
    sendForm(v) {
      this.$trace("lsw-agenda-concepto-add.methods.sendForm");
      console.log("Sedingin form...", v);
    },
    loadFormMetadata() {
      this.$trace("lsw-agenda-concepto-add.methods.loadFormMetadata");
      this.formMetadata = {
        form: {
          selfScope: outterFormScope,
          selfId: "formularioInicial",
          expectedChildren: 1,
          onSubmit: (v) => {
            this.sendForm(v);
          }
        },
        fields: [{
          type: "input",
          enunciate: "Consequencias:",
          code1: "it.has_consequences",
          code2: "has_consequences",
          code3: "string",
          explanation: "blablabla.",
          placeholder: "blabla",
          errorConfig: {
            parentId: "has_consequences",
            parentScope: outterFormScope,
          },
          inputConfig: {
            parentId: "formularioInicial",
            parentScope: outterFormScope,
            selfId: "has_consequences",
            selfScope: outterFormScope,
            name: "has_consequences"
          }
        }]
      }
    }
  },
  watch: {},
  mounted() {
    try {
      this.$trace("lsw-agenda-concepto-add.mounted");
      this.loadFormMetadata();
    } catch (error) {
      console.log(error);
    }
  }
});
Vue.component("LswAgendaConceptoSearch", {
  template: `<div class="LswAgendaConceptoSearch">
  LswAgendaConceptoSearch
</div>`,
  props: {},
  data() {
    this.$trace("lsw-agenda-concepto-search.data");
    return {};
  },
  methods: {},
  watch: {},
  mounted() {
    try {
      this.$trace("lsw-agenda-concepto-search.mounted");
    } catch(error) {
      console.log(error);
    }
  }
});
Vue.component("LswAgendaEventoSearch", {
  template: `<div class="LswAgendaEventoSearch">
  LswAgendaEventoSearch
</div>`,
  props: {},
  data() {
    this.$trace("lsw-agenda-evento-search.data");
    return {};
  },
  methods: {},
  watch: {},
  mounted() {
    try {
      this.$trace("lsw-agenda-evento-search.mounted");
    } catch(error) {
      console.log(error);
    }
  }
});

Vue.component("LswAgendaForm", {
  template: `<div>
    <div class="form_structure"
        v-form.form="formMetadata.form"
        ref="agenda_form">
        <div class="form_item text_align_right">
            <button v-on:click="() => $refs.agenda_form.$lswFormMetadata.methods.submit()">Submit</button>
        </div>
        <div class="form_item"
            v-for="field, fieldIndex in formMetadata.fields"
            v-bind:key="'form_field_' + fieldIndex">
            <div class="form_label">
                <div class="enunciate_box2">
                    <div class="enunciate">
                        <span class="enunciate_text">{{ fieldIndex + 1 }}. {{ field.enunciate }}</span>
                        <span class="coderef">
                            <span class="codenote as_note">como</span>
                            <span class="codetext codetype">{{ field.code3 }}</span>
                            <span class="codenote as_note">en</span>
                            <span class="codetext codetype">{{ field.code1 }}</span>
                        </span>
                        <span class="explanation_block">
                            <span class="iconref"
                                style="flex:100;">
                                <span class="info_icon"
                                    v-on:click="() => toggleExplanation(field.code2)">ℹ️</span>
                            </span>
                            <span class="explanation"
                                v-if="expandedExplanations.indexOf(field.code2) !== -1">{{ field.explanation }}</span>
                        </span>
                    </div>
                </div>
            </div>
            <template v-if="field.type === 'input'">
                <input class="form_control"
                    type="text"
                    :placeholder="field.placeholder"
                    v-form.input="field.inputConfig" />
                <div class="validationBox"
                    v-form.error="field.errorConfig"></div>
            </template>
            <template v-else-if="field.type === 'textarea'">
                <textarea class="form_control"
                    :placeholder="field.placeholder"
                    v-form.input="field.inputConfig" />
                <div class="validationBox"
                    v-form.error="field.errorConfig"></div>
            </template>
            <template v-else-if="field.type === 'select'">
                <select class="form_control" v-form.input="field.inputConfig">
                    <option :value="option.value" v-for="option, optionIndex in field.options" v-bind:key="'field_' + fieldIndex + '_selector_option_' + optionIndex">
                        {{ option.text }}
                    </option>
                </select>
                <div class="validationBox"
                    v-form.error="field.errorConfig"></div>
            </template>
        </div>
        <div class="form_item text_align_right">
            <button v-on:click="() => $refs.agenda_form.$lswFormMetadata.methods.submit()">Submit</button>
        </div>
    </div>
</div>`,
  props: {
    formMetadata: {
      type: Object,
      required: true,
    }
  },
  data() {
    this.$trace("lsw-agenda-form.data");
    this.validateFormMetadata(this.formMetadata);
    return {
      expandedExplanations: [],
      formScope: {},
      formState: {}
    };
  },
  methods: {
    validateFormMetadata(v) {
      const isObject = typeof v === "object";
      const hasFormAsObject = typeof v.form === "object";
      const hasFieldsAsArray = Array.isArray(v.fields);
      if(!isObject) {
        throw new Error("Required parameter «formMetadata» to be an object on «LswAgendaForm.methods.validateFormMetadata»");
      }
      if(!hasFormAsObject) {
        throw new Error("Required parameter «formMetadata.form» to be an object on «LswAgendaForm.methods.validateFormMetadata»");
      }
      if(!hasFieldsAsArray) {
        throw new Error("Required parameter «formMetadata.fields» to be an array on «LswAgendaForm.methods.validateFormMetadata»");
      }
    },
    toggleExplanation(id) {
      const pos = this.expandedExplanations.indexOf(id);
      if(pos === -1) {
        this.expandedExplanations.push(id);
      } else {
        this.expandedExplanations.splice(pos, 1);
      }
    },
    loadFields() {
      this.$window.F = this.$refs.agenda_form;
    }
  },
  watch: {},
  mounted() {
    try {
      this.$trace("lsw-agenda-form.mounted");
      this.loadFields();
    } catch(error) {
      console.log(error);
    }
  }
});
Vue.component("LswAgendaImpresionAdd", {
  template: `<div class="LswAgendaImpresionAdd">
  LswAgendaImpresionAdd
</div>`,
  props: {},
  data() {
    this.$trace("lsw-agenda-impresion-add.data");
    return {};
  },
  methods: {},
  watch: {},
  mounted() {
    try {
      this.$trace("lsw-agenda-impresion-add.mounted");
    } catch(error) {
      console.log(error);
    }
  }
});
Vue.component("LswAgendaImpresionSearch", {
  template: `<div class="LswAgendaImpresionSearch">
  LswAgendaImpresionSearch
</div>`,
  props: {},
  data() {
    this.$trace("lsw-agenda-impresion-search.data");
    return {};
  },
  methods: {},
  watch: {},
  mounted() {
    try {
      this.$trace("lsw-agenda-impresion-search.mounted");
    } catch(error) {
      console.log(error);
    }
  }
});
Vue.component("LswAgendaInfraccionSearch", {
  template: `<div class="LswAgendaInfraccionSearch">
  LswAgendaInfraccionSearch
</div>`,
  props: {},
  data() {
    this.$trace("lsw-agenda-infraccion-search.data");
    return {};
  },
  methods: {},
  watch: {},
  mounted() {
    try {
      this.$trace("lsw-agenda-infraccion-search.mounted");
    } catch(error) {
      console.log(error);
    }
  }
});
Vue.component("LswAgendaLimitadorAdd", {
  template: `<div class="LswAgendaLimitadorAdd">
  LswAgendaLimitadorAdd
</div>`,
  props: {},
  data() {
    this.$trace("lsw-agenda-limitador-add.data");
    return {};
  },
  methods: {},
  watch: {},
  mounted() {
    try {
      this.$trace("lsw-agenda-limitador-add.mounted");
    } catch(error) {
      console.log(error);
    }
  }
});
Vue.component("LswAgendaLimitadorSearch", {
  template: `<div class="LswAgendaLimitadorSearch">
  LswAgendaLimitadorSearch
</div>`,
  props: {},
  data() {
    this.$trace("lsw-agenda-limitador-search.data");
    return {};
  },
  methods: {},
  watch: {},
  mounted() {
    try {
      this.$trace("lsw-agenda-limitador-search.mounted");
    } catch(error) {
      console.log(error);
    }
  }
});
Vue.component("LswAgendaPostimpresionSearch", {
  template: `<div class="LswAgendaPostimpresionSearch">
  LswAgendaPostimpresionSearch
</div>`,
  props: {},
  data() {
    this.$trace("lsw-agenda-postimpresion-search.data");
    return {};
  },
  methods: {},
  watch: {},
  mounted() {
    try {
      this.$trace("lsw-agenda-postimpresion-search.mounted");
    } catch(error) {
      console.log(error);
    }
  }
});
Vue.component("LswAgendaPropagacionSearch", {
  template: `<div class="LswAgendaPropagacionSearch">
  LswAgendaPropagacionSearch
</div>`,
  props: {},
  data() {
    this.$trace("lsw-agenda-propagacion-search.data");
    return {};
  },
  methods: {},
  watch: {},
  mounted() {
    try {
      this.$trace("lsw-agenda-propagacion-search.mounted");
    } catch(error) {
      console.log(error);
    }
  }
});
Vue.component("LswAgendaPropagadorSearch", {
  template: `<div class="LswAgendaPropagadorSearch">
  LswAgendaPropagadorSearch
</div>`,
  props: {},
  data() {
    this.$trace("lsw-agenda-propagador-search.data");
    return {};
  },
  methods: {},
  watch: {},
  mounted() {
    try {
      this.$trace("lsw-agenda-propagador-search.mounted");
    } catch(error) {
      console.log(error);
    }
  }
});
});
