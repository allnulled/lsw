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
  <div class="visor_de_calendario">
    <table class="tabla_de_calendario" v-if="fecha_seleccionada">
      <tbody>
        <tr>
          <td>
            <button class="boton_de_mover_mes"
              v-on:click="ir_a_mes_anterior"> ◀ </button>
          </td>
          <td colspan="5"
            style="width:auto; vertical-align: top;">
            <div class="chivato_de_fecha">{{ obtener_fecha_formateada(fecha_seleccionada) }}</div>
            <div class="chivato_de_fecha"
              v-if="(!es_solo_fecha) && fecha_seleccionada">a las {{ obtener_expresion_de_hora(fecha_seleccionada) }}
            </div>
          </td>
          <td>
            <button class="boton_de_mover_mes"
              v-on:click="ir_a_mes_siguiente"> ▶ </button>
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr class="fila_de_dias_de_semana">
          <td><div class="">Lu</div></td>
          <td><div class="">Ma</div></td>
          <td><div class="">Mi</div></td>
          <td><div class="">Ju</div></td>
          <td><div class="">Vi</div></td>
          <td><div class="">Sá</div></td>
          <td><div class="">Do</div></td>
        </tr>
      </tbody>
      <tbody class="dias_de_calendario">
        <tr v-for="semana, semana_index in celdas_del_mes_actual"
          v-bind:key="'semana-' + semana_index">
          <td v-for="dia, dia_index in semana"
            v-bind:key="'dia-' + dia_index">
            <span v-if="dia && (dia instanceof Date)">
              <button class="boton_de_calendario boton_de_dia_de_calendario position_relative"
                :class="{
                  active: dia.getDate() === fecha_seleccionada.getDate(),
                  current: (dia_actual === dia.getDate())
                    && (mes_actual === dia.getMonth())
                    && (anio_actual === dia.getFullYear())
                }"
                v-on:click="() => seleccionar_dia(dia)">
                <div class="dia_de_calendario_texto">{{ dia.getDate() }}</div>
                <div v-if="dia.getDate() in marcadores_del_mes"
                  class="total_de_tareas_de_dia">
                  <div>
                    {{ marcadores_del_mes[dia.getDate()].length }}
                  </div>
                </div>
              </button>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="width_100 no_borders_table"
      v-if="modo === 'datetime' || modo === 'time'">
      <tbody>
        <tr class="fila_de_digito">
          <td v-on:click="agregar_digito_de_hora(1)"><button class="boton_de_ajuste_de_hora">▲</button></td>
          <td v-on:click="agregar_digito_de_hora(2)"><button class="boton_de_ajuste_de_hora">▲</button></td>
          <td></td>
          <td v-on:click="agregar_digito_de_hora(3)"><button class="boton_de_ajuste_de_hora">▲</button></td>
          <td v-on:click="agregar_digito_de_hora(4)"><button class="boton_de_ajuste_de_hora">▲</button></td>
          <td></td>
          <td v-on:click="\$noop"><button class="boton_de_ajuste_de_hora">▲</button></td>
          <td v-on:click="\$noop"><button class="boton_de_ajuste_de_hora">▲</button></td>
        </tr>
        <tr class="fila_de_digito"
          v-if="fecha_seleccionada">
          <td>{{ obtener_digito_de_hora(1) }}</td>
          <td>{{ obtener_digito_de_hora(2) }}</td>
          <td>:</td>
          <td>{{ obtener_digito_de_hora(3) }}</td>
          <td>{{ obtener_digito_de_hora(4) }}</td>
          <td>:</td>
          <td>{{ obtener_digito_de_hora(5) }}</td>
          <td>{{ obtener_digito_de_hora(6) }}</td>
        </tr>
        <tr class="fila_de_digito">
          <td v-on:click="quitar_digito_de_hora(1)"><button class="boton_de_ajuste_de_hora">▼</button></td>
          <td v-on:click="quitar_digito_de_hora(2)"><button class="boton_de_ajuste_de_hora">▼</button></td>
          <td></td>
          <td v-on:click="quitar_digito_de_hora(3)"><button class="boton_de_ajuste_de_hora">▼</button></td>
          <td v-on:click="quitar_digito_de_hora(4)"><button class="boton_de_ajuste_de_hora">▼</button></td>
          <td></td>
          <td v-on:click="\$noop"><button class="boton_de_ajuste_de_hora">▼</button></td>
          <td v-on:click="\$noop"><button class="boton_de_ajuste_de_hora">▼</button></td>
        </tr>
      </tbody>
    </table>
    <!--table class="tabla_para_horas"
      v-if="!es_solo_fecha">
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
    </table-->
  </div>
</div>`,
  props: {
    modo: {
      type: String,
      default: () => "datetime" // can be: date, time, datetime
    },
    valorInicial: {
      type: [String, Date],
      default: () => new Date()
    },
    alCambiarValor: {
      type: Function,
      default: () => { }
    },
  },
  data() {
    try {
      this.$trace("lsw-calendario.data");
      const hoy = new Date();
      return {
        es_carga_inicial: true,
        valor_inicial_adaptado: this.adaptar_valor_inicial(this.valorInicial),
        es_solo_fecha: this.modo === "date",
        es_solo_hora: this.modo === "time",
        es_fecha_y_hora: this.modo === "datetime",
        fecha_seleccionada: undefined,
        celdas_del_mes_actual: undefined,
        marcadores_del_mes: {},
        hoy: hoy,
        dia_actual: hoy.getDate(),
        mes_actual: hoy.getMonth(),
        anio_actual: hoy.getFullYear(),
        /*
        hora_seleccionada: "0",
        minuto_seleccionado: "0",
        segundo_seleccionado: "0",
        milisegundo_seleccionado: "0",
        //*/
      };
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  methods: {
    getValue() {
      this.$trace("lsw-calendario.methods.getValue");
      return this.fecha_seleccionada;
    },
    adaptar_valor_inicial(valor) {
      this.$trace("lsw-calendario.methods.adaptar_valor_inicial");
      if (typeof valor === "string") {
        try {
          const resultado = LswTimer.utils.getDateFromMomentoText(valor);
          console.log("FECHA ENTRADA:", resultado);
          return resultado;
        } catch (error) {
          console.error("Error parseando valor inicial de lsw-calendario:", error);
        }
      }
      return valor || new Date();
    },
    agregar_digito_de_hora(indice) {
      this.$trace("lsw-calendario.methods.agregar_digito_de_hora");
      const value = this.obtener_digito_de_hora(indice);
      const isInMaximum = ([3, 5].indexOf(indice) !== -1) ? value === 5 : ([1].indexOf(indice) !== -1) ? value === 2 : value === 9;
      if (!isInMaximum) {
        this.establecer_digito_de_hora(indice, value + 1);
      }
    },
    quitar_digito_de_hora(indice) {
      this.$trace("lsw-calendario.methods.quitar_digito_de_hora");
      const value = this.obtener_digito_de_hora(indice);
      const isInMinimum = value === 0;
      if (!isInMinimum) {
        this.establecer_digito_de_hora(indice, value - 1);
      }
    },
    obtener_digito_de_hora(indice, fecha = this.fecha_seleccionada) {
      this.$trace("lsw-calendario.methods.obtener_digito_de_hora");
      if (indice === 1) {
        return parseInt(this.espaciar_izquierda(fecha.getHours(), 2)[0]);
      } else if (indice === 2) {
        return parseInt(this.espaciar_izquierda(fecha.getHours(), 2)[1]);
      } else if (indice === 3) {
        return parseInt(this.espaciar_izquierda(fecha.getMinutes(), 2)[0]);
      } else if (indice === 4) {
        return parseInt(this.espaciar_izquierda(fecha.getMinutes(), 2)[1]);
      } else if (indice === 5) {
        return parseInt(this.espaciar_izquierda(fecha.getSeconds(), 2)[0]);
      } else if (indice === 6) {
        return parseInt(this.espaciar_izquierda(fecha.getSeconds(), 2)[1]);
      } else {
        throw new Error("No se reconoció el índice del dígito: " + indice);
      }
    },
    cambiar_posicion_en_texto(texto, posicion, valor) {
      this.$trace("lsw-calendario.methods.cambiar_posicion_en_texto");
      const arr = ("" + texto).split("");
      arr[posicion] = valor;
      return arr.join("");
    },
    establecer_digito_de_hora(indice, valor) {
      this.$trace("lsw-calendario.methods.establecer_digito_de_hora");
      console.log(indice, valor);
      const fecha_clonada = new Date(this.fecha_seleccionada);
      if (indice === 1) {
        let horas = this.espaciar_izquierda(this.fecha_seleccionada.getHours(), 2);
        horas = this.cambiar_posicion_en_texto(horas, 0, valor);
        const horasInt = parseInt(horas);
        if(horasInt > 23) return;
        fecha_clonada.setHours(horasInt);
      } else if (indice === 2) {
        let horas = this.espaciar_izquierda(this.fecha_seleccionada.getHours(), 2);
        horas = this.cambiar_posicion_en_texto(horas, 1, valor);
        const horasInt = parseInt(horas);
        if(horasInt > 23) return;
        fecha_clonada.setHours(horasInt);
      } else if (indice === 3) {
        let minutos = this.espaciar_izquierda(this.fecha_seleccionada.getMinutes(), 2);
        minutos = this.cambiar_posicion_en_texto(minutos, 0, valor);
        const minutosInt = parseInt(minutos);
        if(minutosInt > 59) return;
        fecha_clonada.setMinutes(minutosInt);
      } else if (indice === 4) {
        let minutos = this.espaciar_izquierda(this.fecha_seleccionada.getMinutes(), 2);
        minutos = this.cambiar_posicion_en_texto(minutos, 1, valor);
        const minutosInt = parseInt(minutos);
        if(minutosInt > 59) return;
        fecha_clonada.setMinutes(minutosInt);
      } else if (indice === 5) {
        // @OK
      } else if (indice === 6) {
        // @OK
      } else {
        throw new Error("No se reconoció el índice del dígito: " + indice);
      }
      console.log(fecha_clonada);
      this.fecha_seleccionada = fecha_clonada;
      this.actualizar_fecha_seleccionada(true);
    },
    ir_a_mes_anterior() {
      this.$trace("lsw-calendario.methods.ir_a_mes_anterior");
      try {
        const nueva_fecha = new Date(this.fecha_seleccionada);
        this.fecha_seleccionada = new Date(nueva_fecha.getFullYear(), nueva_fecha.getMonth()-1, 1);
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    ir_a_mes_siguiente() {
      this.$trace("lsw-calendario.methods.ir_a_mes_siguiente");
      try {
        const nueva_fecha = new Date(this.fecha_seleccionada);
        this.fecha_seleccionada = new Date(nueva_fecha.getFullYear(), nueva_fecha.getMonth()+1, 1);
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    seleccionar_dia(dia) {
      this.$trace("lsw-calendario.methods.seleccionar_dia");
      try {
        this.fecha_seleccionada = dia;
        this.actualizar_fecha_seleccionada(true);
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    espaciar_izquierda(texto,
      longitud,
      relleno = "0") {
      this.$trace("lsw-calendario.methods.espaciar_izquierda");
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
      this.$trace("lsw-calendario.methods.obtener_fecha_formateada");
      try {
        if (!(fecha instanceof Date)) {
          console.log(fecha);
          throw new Error("Required parameter «fecha» to be a Date on «LswCalendario.methods.obtener_fecha_formateada»");
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

    },
    actualizar_calendario(nuevo_valor = this.fecha_seleccionada) {
      this.$trace("lsw-calendario.methods.actualizar_calendario");
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
        let dia_final_del_mes = undefined;
        Logica_anterior: {
          dia_final_del_mes = new Date(nuevo_valor);
          dia_final_del_mes.setMonth(dia_final_del_mes.getMonth() + 1);
          dia_final_del_mes.setDate(1);
          dia_final_del_mes.setDate(dia_final_del_mes.getDate() - 1);
        }
        Logica_chatgpt: {
          dia_final_del_mes = new Date(nuevo_valor.getFullYear(), nuevo_valor.getMonth() + 1, 0);
        }
        const numero_final_de_mes = dia_final_del_mes.getDate();
        let fila_actual = celdas_vacias_anteriores;
        for (let index = 1; index <= numero_final_de_mes; index++) {
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
        this.propagar_cambio();
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    actualizar_fecha_seleccionada(con_propagacion = true, fecha_seleccionada = this.fecha_seleccionada) {
      this.$trace("lsw-calendario.methods.actualizar_fecha_seleccionada");
      if (con_propagacion) {
        const clon_fecha = new Date(fecha_seleccionada);
        this.fecha_seleccionada = clon_fecha;
      }
    },
    propagar_cambio() {
      this.$trace("lsw-calendario.methods.propagar_cambio");
      if (typeof this.alCambiarValor === "function") {
        this.alCambiarValor(this.fecha_seleccionada, this);
      }
    },
    obtener_expresion_de_hora(fecha = this.fecha_seleccionada) {
      let hours = fecha.getHours();
      let minutes = fecha.getMinutes();
      let seconds = fecha.getSeconds();
      hours = this.espaciar_izquierda(hours, 2, "0");
      minutes = this.espaciar_izquierda(minutes, 2, "0");
      seconds = this.espaciar_izquierda(seconds, 2, "0");
      return `${hours}:${minutes}:${seconds}`;
    },
    establecer_marcadores_del_mes(marcadores_del_mes) {
      this.marcadores_del_mes = marcadores_del_mes;
    }
  },
  watch: {
    fecha_seleccionada(nuevo_valor) {
      this.$trace("lsw-calendario.watch.fecha_seleccionada");
      this.actualizar_calendario(nuevo_valor);
    },
  },
  mounted() {
    this.$trace("lsw-calendario.mounted");
    try {
      this.fecha_seleccionada = this.valor_inicial_adaptado;
      this.es_carga_inicial = false;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
});
Vue.component("LswTable", {
  template: `<div class="lsw_table"
    style="padding-top: 4px;">
    <div>
        <div class="lsw_table_top_panel">
            <div class="flex_row centered">
                <div class="flex_1">
                    <button class="cursor_pointer"
                        v-on:click="digestOutput">🛜</button>
                </div>
                <div class="flex_100 title_box">{{ title }}</div>
                <div class="flex_1 lsw_table_top_button" v-for="topButton, topButtonIndex in attachedTopButtons" v-bind:key="'table-button-' + topButtonIndex">
                    <button class="" v-on:click="topButton.event">
                        {{ topButton.text }}
                    </button>
                </div>
                <div class="flex_1">
                    <button class="table_menu_div width_100"
                        v-on:click="toggleMenu"
                        :class="{activated: isShowingMenu === true}">
                        <span v-if="hasFiltersApplying">🟠</span>
                        <span v-else>▫️</span>
                    </button>
                </div>
            </div>
        </div>
        <div v-if="isShowingMenu">
            <div class="">
                <div class="table_navigation_menu_cell"
                    colspan="1000">
                    <div class="table_navigation_menu">
                        <div class="flex_row centered">
                            <div class="flex_1 nowrap">Estás en: </div>
                            <div class="flex_100 left_padded_1">
                                <select class="width_100 text_align_left"
                                    v-model="isShowingSubpanel">
                                    <option value="Extensor">Extensor ({{ extender.length }})</option>
                                    <option value="Filtro">Filtro ({{ filter.length }})</option>
                                    <option value="Ordenador">Ordenador ({{ sorter.length }})</option>
                                </select>
                            </div>
                        </div>
                        <div v-if="isShowingSubpanel === 'Extensor'">
                            <textarea spellcheck="false"
                                v-model="extender"
                                :placeholder="placeholderForExtensor"></textarea>
                        </div>
                        <div v-if="isShowingSubpanel === 'Filtro'">
                            <textarea spellcheck="false"
                                v-model="filter"
                                :placeholder="placeholderForFiltro"></textarea>
                        </div>
                        <div v-if="isShowingSubpanel === 'Ordenador'">
                            <textarea spellcheck="false"
                                v-model="sorter"
                                :placeholder="placeholderForOrdenador"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="paginator_widget this_code_is_duplicated_always">
        <div>
            <div>
                <div class="flex_row centered">
                    <div class="flex_1 pagination_button_box first_box">
                        <div class="pagination_button first_button"
                            v-on:click="goToFirstPage">⏪</div>
                    </div>
                    <div class="flex_1 pagination_button_box">
                        <div class="pagination_button"
                            v-on:click="decreasePage">◀️</div>
                    </div>
                    <div class="flex_100 text_align_center">{{ currentPage+1 }}</div>
                    <div class="flex_1 pagination_button_box">
                        <div class="pagination_button"
                            v-on:click="increasePage">▶️</div>
                    </div>
                    <div class="flex_1 pagination_button_box last_box">
                        <div class="pagination_button last_button"
                            v-on:click="goToLastPage">⏩</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="lsw_table_viewer">
        <table class="collapsed_table lsw_table_itself">
            <thead v-if="paginatedOutput && headers">
                <tr class="">
                    <!--Id cell:-->
                    <th>nº</th>
                    <!--Selectable buttons headers:-->
                    <th v-if="selectable === 'one'"></th>
                    <th v-else-if="selectable === 'many'"></th>
                    <!--Row buttons headers:-->
                    <th class="button_header"
                        v-for="attachedHeader, attachedHeaderIndex in attachedHeaders"
                        v-bind:key="'attached-header-' + attachedHeaderIndex">{{ attachedHeader.text }}</th>
                    <!--Object properties headers:-->
                    <th v-for="header, headerIndex in headers"
                        v-bind:key="'header-' + headerIndex">{{ header }}</th>
                    <th>*size</th>
                </tr>
            </thead>
            <template v-if="paginatedOutput && headers">
                <tbody v-if="!paginatedOutput.length">
                    <tr>
                        <td colspan="1000"
                            v-descriptor="'lsw_table.no_data_provided_message'">
                            No data provided.
                        </td>
                    </tr>
                </tbody>
                <template v-else>
                    <tbody>
                        <template v-for="row, rowIndex in paginatedOutput">
                            <tr class="row_for_table"
                                :class="{ odd: rowIndex === 0 ? true : (rowIndex % 2 === 0) ? true : false }"
                                v-bind:key="'row-for-table-' + rowIndex">
                                <!--Id cell:-->
                                <td class="index_cell">
                                    <button v-on:click="() => toggleRow(row.id)"
                                        :class="{activated: selectedRows.indexOf(row.id) !== -1}">
                                        {{ rowIndex + (currentPage * itemsPerPage) }}
                                    </button>
                                </td>
                                <!--Selectable cell:-->
                                <td class="index_cell" v-if="selectable === 'one'">
                                    <span v-on:click="() => toggleChoosenRow(row[choosableId])">
                                        <button class="activated" v-if="choosenRows === row[choosableId]">
                                            <!--input type="radio" :checked="true" /-->
                                            ☑️
                                        </button>
                                        <button v-else>
                                            🔘
                                            <!--input type="radio" :checked="false" /-->
                                        </button>
                                    </span>
                                </td>
                                <td class="index_cell" v-else-if="selectable === 'many'">
                                    <label>
                                        <input type="checkbox" v-model="choosenRows" :value="row[choosableId]" />
                                    </label>
                                </td>
                                <!--Row buttons cells:-->
                                <td class="button_cell" v-for="attachedColumn, attachedColumnIndex in attachedColumns"
                                    v-bind:key="'attached-column-' + attachedColumnIndex">
                                    <button v-on:click="() => rowButtons[attachedColumnIndex].event(row, rowIndex, attachedColumn)">{{ attachedColumn.text }}</button>
                                </td>
                                <!--Object properties cells:-->
                                <td class="data_cell" v-for="columnKey, columnIndex in headers"
                                    v-bind:key="'column-' + columnIndex"
                                    :title="JSON.stringify(row[columnKey])">
                                    <template v-if="columnsAsList.indexOf(columnKey) !== -1 && Array.isArray(row[columnKey])">
                                        <ul>
                                            <li v-for="item, itemIndex in row[columnKey]" v-bind:key="'column-' + columnIndex + '-item-' + itemIndex">
                                                {{ itemIndex + 1 }}. {{ item }}
                                            </li>
                                        </ul>
                                    </template>
                                    <template v-else>
                                        {{ row[columnKey] ?? "-" }}
                                    </template>
                                </td>
                                <td class="data_cell metadata_cell">
                                    {{ JSON.stringify(row).length }} bytes
                                </td>
                            </tr>
                            <tr class="row_for_details"
                                v-show="selectedRows.indexOf(row.id) !== -1"
                                v-bind:key="'row-for-cell-' + rowIndex">
                                <td class="data_cell details_cell"
                                    colspan="1000">
                                    <pre class="">{{ JSON.stringify(row, null, 2) }}</pre>
                                </td>
                            </tr>
                        </template>
                    </tbody>
                </template>
            </template>
            <tbody v-else>
                <tr>
                    <td colspan="1000">
                        Un momento, por favor, la tabla está cargando...
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="paginator_widget this_code_is_duplicated_always">
        <div>
            <div>
                <div class="flex_row centered">
                    <div class="flex_1 pagination_button_box first_box">
                        <div class="pagination_button first_button"
                            v-on:click="goToFirstPage">⏪</div>
                    </div>
                    <div class="flex_1 pagination_button_box">
                        <div class="pagination_button"
                            v-on:click="decreasePage">◀️</div>
                    </div>
                    <div class="flex_100 text_align_center">{{ currentPage+1 }}</div>
                    <div class="flex_1 pagination_button_box">
                        <div class="pagination_button"
                            v-on:click="increasePage">▶️</div>
                    </div>
                    <div class="flex_1 pagination_button_box last_box">
                        <div class="pagination_button last_button"
                            v-on:click="goToLastPage">⏩</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`,
  props: {
    initialInput: {
      type: Array,
      default: () => []
    },
    initialSettings: {
      type: Object,
      default: () => ({})
    },
    rowButtons: {
      type: Array,
      default: () => []
    },
    tableButtons: {
      type: Array,
      default: () => []
    },
    selectable: {
      type: String,
      default: () => "none"
    },
    onChooseRow: {
      type: Function,
      default: () => {}
    },
    choosableId: {
      type: String,
      default: () => "id"
    },
    initialChoosenValue: {
      type: [],
      default: () => []
    }
  },
  data() {
    this.$trace("lsw-table.data");
    const input = [].concat(this.initialInput);
    return {
      input,
      title: this.initialSettings?.title || "",
      isShowingMenu: this.initialSettings?.isShowingMenu || false,
      isShowingSubpanel: this.initialSettings?.isShowingSubpanel || "Extensor",
      selectedRows: [],
      choosenRows: this.initialChoosenValue || [],
      extender: this.initialSettings?.extender || "",
      filter: this.initialSettings?.filter || "",
      sorter: this.initialSettings?.sorter || "",
      itemsPerPage: this.initialSettings?.itemsPerPage || 10,
      currentPage: this.initialSettings?.currentPage || 0,
      columnsAsList: this.initialSettings?.columnsAsList || [],
      columnsOrder: this.initialSettings?.columnsOrder || [],
      output: [],
      paginatedOutput: [],
      headers: [],
      attachedHeaders: this._adaptRowButtonsToHeaders(this.rowButtons),
      attachedColumns: this._adaptRowButtonsToColumns(this.rowButtons),
      attachedTopButtons: this._adaptRowButtonsToColumns(this.tableButtons),
      placeholderForExtensor: "data.map(function(it, i) {\n  return /* you start here */ || {};\n});",
      placeholderForOrdenador: "data.sort(function(a, b) {\n  return /* you start here */;\n});",
      placeholderForFiltro: "data.filter(function(it, i) {\n  return /* you start here */;\n});",
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
    toggleChoosenRow(rowId) {
      this.$trace("lsw-table.methods.toggleChoosenRow");
      if(this.selectable === 'many') {
        const pos = this.choosenRows.indexOf(rowId);
        if (pos === -1) {
          this.choosenRows.push(rowId);
        } else {
          this.choosenRows.splice(pos, 1);
        }
      } else if(this.selectable === 'one') {
        const isSame = this.choosenRows === rowId;
        if(isSame) {
          this.choosenRows = undefined;
        } else {
          this.choosenRows = rowId;
        }
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
        Also_to_headers: {
          if(Array.isArray(this.columnsOrder) && this.columnsOrder.length) {
            tempHeaders = [...tempHeaders].sort((h1, h2) => {
              const pos1 = this.columnsOrder.indexOf(h1);
              const pos2 = this.columnsOrder.indexOf(h2);
              if(pos1 === -1 && pos2 === -1) {
                return -1;
              } else if(pos1 === -1) {
                return 1;
              } else if(pos2 === -1) {
                return -1;
              } else if(pos1 > pos2) {
                return 1;
              }
              return -1;
            });
          }
        }
      }
      this.headers = tempHeaders;
      this.output = temp;
      this.digestPagination();
    },
    digestPagination() {
      this.$trace("lsw-table.methods.digestPagination");
      console.log(1);
      const page = this.currentPage;
      console.log(2);
      const items = this.itemsPerPage;
      console.log(3);
      const firstPosition = items * (page);
      this.selectedRows = [];
      console.log(4);
      this.paginatedOutput = [].concat(this.output).splice(firstPosition, items);
      console.log(5);
    },
    saveCurrentTransformer() {
      this.$trace("lsw-table.methods.saveCurrentTransformer");
    },
    _adaptRowButtonsToHeaders(rowButtons) {
      const attachedHeaders = [];
      for(let index=0; index<rowButtons.length; index++) {
        const attachedButton = rowButtons[index];
        attachedHeaders.push({
          text: attachedButton.header || ""
        });
      }
      return attachedHeaders;
    },
    _adaptRowButtonsToColumns(rowButtons) {
      const attachedColumns = [];
      for(let index=0; index<rowButtons.length; index++) {
        const attachedButton = rowButtons[index];
        attachedColumns.push({
          text: attachedButton.text || "",
          event: attachedButton.event || this.$noop,
        });
      }
      return attachedColumns;
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
    },
    choosenRows(v) {
      this.$trace("lsw-table.watch.value");
      this.onChooseRow(v, this);
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
                                    v-on:click="minimize(dialog.id)">💡</button>
                                <button class="mini"
                                    v-on:click="close(dialog.id)">❌</button>
                            </div>
                        </div>
                        <div class="dialog_body">
                            <component :is="dialog.name" :ref="'currentDialogComponent_' + dialog_index" />
                        </div>
                        <div class="dialog_footer">
                            <button v-if="dialog && dialog.acceptButton"
                                class=""
                                v-on:click="() => dialog.acceptButton.callback ? dialog.acceptButton.callback(\$refs['currentDialogComponent_' + dialog_index][0], dialog, dialog.id, this) : resolve(dialog.id).close()">{{
                                dialog.acceptButton.text || "Accept" }}</button>
                            <button v-if="dialog && dialog.cancelButton"
                                class=""
                                v-on:click="() => dialog.cancelButton.callback ? dialog.cancelButton.callback(\$refs['currentDialogComponent_' + dialog_index][0], dialog, dialog.id, this) : close(dialog.id)">{{
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
      this.$trace("lsw-dialogs.data", []);
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
          return this.maximize(id);
          // throw new Error(`Cannot open dialog «${id}» because it is already opened on «LswDialogs.methods.open»`);
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
            // console.log("El data del nuevo componente dialog:", preData);
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
        // console.log("Definición final del dialogo", dialogInstance);
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
                    <button v-if="\$consoleHooker?.is_shown === false" class="mini" style="white-space: nowrap;flex: 1; margin-right: 4px;" v-on:click="() => \$consoleHooker?.show()">💻</button
                    ><button class="mini" v-on:click="viewer.toggleState">💡</button>
                </div>
            </div>
            <div class="dialog_body">
                <div class="main_tab_topbar">
                    <button class="main_tab_topbar_button" v-on:click="openAgenda">📓 Agenda</button>
                    <button class="main_tab_topbar_button" v-on:click="openWiki">🔬 Wiki</button>
                    <button class="main_tab_topbar_button" v-on:click="openRest">📦 Data</button>
                    <button class="main_tab_topbar_button" v-on:click="openFilesystem">📂 Files</button>
                </div>
                <div class="pad_normal" v-if="!Object.keys(\$lsw.dialogs.opened).length">
                    <span>No processes found right now.</span>
                </div>
                <div class="pad_normal" v-else>
                    <div v-for="dialog, dialogIndex, dialogCounter in \$lsw.dialogs.opened" v-bind:key="'dialog-' + dialogIndex">
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
    if(process.env.NODE_ENV !== "production") {
    }
    this.instance.restoreConsole();
    this.hide();
    this.$vue.prototype.$consoleHooker = this;
    this.$window.LswConsoleHooker = this;
  },
  unmounted() {

  }
});
Vue.component("LswDatabaseExplorer", {
  template: `<div class="lsw_database_ui database_explorer" :class="{hideBreadcrumb: !showBreadcrumb}">
    <template v-if="!isLoading">
        <component :is="selectedPage" :args="selectedArgs" :database-explorer="this" />
    </template>
</div>`,
  props: {
    showBreadcrumb: {
      type: Boolean,
      default: () => true
    },
    initialPage: {
      type: String,
      default: () => "lsw-page-tables"
    },
    initialArgs: {
      type: Object,
      default: () => ({ database: "lsw_default_database" })
    }
  },
  data() {
    this.$trace("lsw-database-explorer.data", arguments);
    return {
      isLoading: false,
      selectedPage: this.initialPage,
      selectedArgs: this.initialArgs,
    }
  },
  methods: {
    selectPage(page, args = {}) {
      try {
        this.$trace("lsw-database-explorer.methods.selectPage", arguments);
        $ensure({page}, 1).type("string");
        $ensure({args}, 1).type("object");
        this.isLoading = true;
        this.$nextTick(() => {
          this.selectedArgs = args;
          this.selectedPage = page;
          this.isLoading = false;
        });
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  },
  async mounted() {
    this.$trace("lsw-database-explorer.methods.mounted", arguments);
  },
  unmounted() {
    this.$trace("lsw-database-explorer.methods.unmounted", arguments);
  }
});
Vue.component("LswDatabaseBreadcrumb", {
  template: `<div class="database_breadcrumb">
    <span>Estás en: </span>
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
    <h3>Todas las bases de datos</h3>
    <lsw-database-breadcrumb :breadcrumb="breadcrumb"
        :database-explorer="databaseExplorer" />
    <lsw-table v-if="databases && databases.length"
        :initial-input="databases"
        :initial-settings="{title: 'Lista de todas las bases de datos:', itemsPerPage: 50 }"
        :row-buttons="[{ header: '', text: '↗️', event: (row) => openDatabase(row.name) }]"></lsw-table>
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
      databasesForTable: false,
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
  watch: {
    databases(value) {
      AdaptingForTable: {
        const databasesForTable = [];
        if (typeof value !== "object") {
          break AdaptingForTable;
        }
        const databaseIds = Object.keys(value);
        for(let indexDatabase=0; indexDatabase<databaseIds.length; indexDatabase++) {
          const databaseId = databaseIds[indexDatabase];
          const databaseObject = value[databaseId];
        }
        this.databasesForTable = databasesForTable;
      }
    }
  },
  async mounted() {
    this.databases = await LswDatabaseAdapter.listDatabases();
    Filter_by_entity_schema_matched_db_names: {
      $lswSchema
    }
  },
  unmounted() {

  }
});
Vue.component("LswPageRows", {
  template: `<div>
    <h3>
        <span>
            <button v-on:click="goBack">⬅️</button>
        </span>
        <span>{{ args.table }} [all]</span>
        <span>[{{ args.database }}]</span>
    </h3>
    <lsw-database-breadcrumb :breadcrumb="breadcrumb" :database-explorer="databaseExplorer" />
    <lsw-table
        :initial-input="rows" v-if="rows"
        :initial-settings="{
            title: 'Registros de ' + args.table,
            columnsOrder: ['id'],
        }"
        :row-buttons="[{ header: '', text: '↗️', event: (row) => openRow(row.id) }]"
        :table-buttons="[{ text: '#️⃣', event() { openRow(-1) }}]"></lsw-table>
    <!--table class="basic_table top_aligned">
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
    </table-->
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
    this.$trace("lsw-page-rows.data", arguments);
    $ensure(this.args).type("object");
    $ensure(this.args.database).type("string");
    $ensure(this.args.table).type("string");
    return {
      breadcrumb: [{
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
    goBack() {
      this.$trace("lsw-page-rows.methods.goBack", arguments);
      return this.databaseExplorer.selectPage("LswPageTables", {
        database: this.database,
      });
    },
    async loadRows() {
      this.$trace("lsw-page-rows.methods.loadRows", arguments);
      this.connection = this.connection ?? new LswDatabaseAdapter(this.database);
      await this.connection.open();
      const selection = await this.connection.select(this.table, it => true);
      this.rows = selection;
      return selection;
    },
    openRow(rowId) {
      this.$trace("lsw-page-rows.methods.openRow", arguments);
      return this.databaseExplorer.selectPage("LswPageRow", {
        database: this.database,
        table: this.table,
        rowId: rowId
      });
    }
  },
  mounted() {
    this.$trace("lsw-page-rows.mounted", arguments);
    this.loadRows();
  },
  unmounted() {
    this.$trace("lsw-page-rows.unmounted", arguments);
    this.connection.close();
  }
});
Vue.component("LswPageRow", {
  template: `<div>
    <h3>
        <span>
            <span>
                <button v-on:click="goBack">⬅️</button>
            </span>
            <span>{{ args.table }}</span>
        </span>
        <span v-if="(args.rowId && args.rowId !== -1)">
            [#{{ args.rowId }}]
        </span>
        <span v-else-if="args.row && args.row.id">
            [#{{ args.row.id }}]
        </span>
        <span v-else>
            [new]
        </span>
        <span>
            [{{ args.database }}]
        </span>
    </h3>
    <lsw-database-breadcrumb :breadcrumb="breadcrumb"
        :database-explorer="databaseExplorer" />
    <div v-if="!isLoaded">Un momento, por favor, está cargando...</div>
    <lsw-schema-based-form v-else
        :on-submit="upsertRow"
        :model="{
            connection: \$lsw.database,
            databaseId: args.database,
            tableId: args.table,
            rowId: args.rowId,
            row: row,
            databaseExplorer,
        }"
        />
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
    this.$trace("lsw-page-row.data", arguments);
    $ensure(this.args.database).type("string");
    $ensure(this.args.table).type("string");
    $ensure(this.args.rowId).type("number");
    return {
      isLoaded: false,
      breadcrumb: [{
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
        name: (this.args.rowId === -1) ? '#new' : ("#" + this.args.rowId),
        args: {
          database: this.args.database,
          table: this.args.table,
          rowId: this.args.rowId
        },
        current: true
      }],
      database: this.args.database,
      table: this.args.table,
      rowId: this.args.rowId,
      connection: undefined,
      row: false,
    }
  },
  methods: {
    goBack() {
      this.$trace("lsw-page-row.methods.goBack", arguments);
      return this.databaseExplorer.selectPage("LswPageRows", {
        database: this.database,
        table: this.table
      });
    },
    async loadRow() {
      this.$trace("lsw-page-row.methods.loadRow", arguments);
      try {
        if(this.rowId === -1) {
          return false;
        }
        this.connection = this.connection ?? new LswDatabaseAdapter(this.database);
        await this.connection.open();
        const matches = await this.connection.select(this.table, it => it.id === this.rowId);
        this.row = matches[0];
      } catch (error) {
        console.log("Error loading row:", error);
        throw error;
      } finally {
        this.row = false;
      }
    },
    async upsertRow(v) {
      this.$trace("lsw-page-row.methods.upsertRow", arguments);
      const existsRow = this.rowId || ((typeof (this.row) === "object") && (typeof (this.row.id) === "number") && (this.row.id !== -1));
      let id = this.rowId || this.row.id;
      const operation = (existsRow && (id !== -1)) ? "update" : "insert";
      if (operation === "insert") {
        id = await this.$lsw.database.insert(this.table, v);
      } else {
        await this.$lsw.database.update(this.table, id, v);
      }
      lsw.toasts.send({
        title: `Nueva ${operation === 'insert' ? 'inserción' : 'actualización'}`,
        text: `El registro #${id} de «${this.table}» fue ${operation === 'insert' ? 'insertado' : 'actualizado'} correctamente.`
      });
      if(operation === "insert") {
        this.databaseExplorer.selectPage("LswPageRow", {
          database: this.database,
          table: this.table,
          rowId: id
        });
      } else {
        // @OK.
      }
    }
  },
  async mounted() {
    this.$trace("lsw-page-row.mounted", arguments);
    try {
      await this.loadRow();
    } catch (error) {
      console.log("Error loading row:", error);
      throw error;
    } finally {
      this.isLoaded = true;
    }
  },
  unmounted() {
    this.$trace("lsw-page-row.unmounted", arguments);
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
  template: `<div class="page_tables page">
    <h3>Tablas de {{ args.database }}</h3>
    <lsw-database-breadcrumb :breadcrumb="breadcrumb"
        :database-explorer="databaseExplorer" />
    <lsw-table v-if="tablesAsList && tablesAsList.length"
        :initial-input="tablesAsList"
        :initial-settings="{
            title: 'Tablas de ' + args.database,
            itemsPerPage: 50,
            columnsAsList: ['indexes'],
            columnsOrder: ['name', 'indexes', 'keyPath']
        }"
        :row-buttons="[{
            header: '',
            text: '↗️',
            event: (row, i) => openTable(row.name)
        }]"></lsw-table>
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
    const ensureArgs = $ensure(this.args).type("object");
    ensureArgs.to.have.key("database").its("database").type("string");
    return {
      breadcrumb: [{
        page: "LswPageTables",
        name: this.args.database,
        args: {
          database: this.args.database
        },
        current: true
      }],
      database: this.args.database,
      tables: false,
      tablesAsList: false,
    }
  },
  methods: {
    async loadDatabase() {
      const db = await LswDatabaseAdapter.getSchema(this.database);
      this.tables = db;
      console.log(`[*] Tables of database ${this.args.database}:`, db);
    },
    openTable(table) {
      $ensure({ table }, 1).type("string");
      return this.databaseExplorer.selectPage("LswPageRows", {
        database: this.database,
        table: table
      });
    }
  },
  watch: {
    tables(value) {
      const tablesAsList = [];
      const tableIds = Object.keys(value);
      for(let index=0; index<tableIds.length; index++) {
        const tableId = tableIds[index];
        const tableData = value[tableId];
        tablesAsList.push({
          name: tableId,
          ...tableData,
          indexes: tableData.indexes ? tableData.indexes.map(ind => ind.name) : []
        });
      }
      this.tablesAsList = tablesAsList;
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
        <span class="previous_node_path" :class="current_node !== '/' ? '' : 'visibility_hidden'">
            <button class="mini previous_node_button" v-on:click="goUp"
            style="transform: rotate(180deg); margin: 1px;">➜</button>
        </span>
        <span class="current_node_path">{{ current_node_basedir }}</span>
        <span class="current_node_filename">{{ current_node_basename }}</span>
    </div>
    <div class="filesystem_ui">
        <div class="leftside">
            <lsw-filesystem-buttons-panel :explorer="this" ref="panelLeft" />
        </div>
        <div class="middleside">
            <div class="headerside">
                <lsw-filesystem-buttons-panel :explorer="this" ref="panelTop" />
            </div>
            <div class="bodyside" v-if="is_ready">
                <lsw-filesystem-treeviewer v-if="current_node_is_directory" :explorer="this" ref="treeviewer" />
                <lsw-filesystem-editor v-else-if="current_node_is_file" :explorer="this" ref="editor" :filecontents="current_node_contents" />
            </div>
            <div class="footerside">
                <lsw-filesystem-buttons-panel :explorer="this" ref="panelBottom" />
            </div>
        </div>
        <div class="rightside">
            <lsw-filesystem-buttons-panel :explorer="this" ref="panelRight" />
        </div>
    </div>
</div>`,
  props: {},
  data() {
    this.$trace("lsw-filesystem-explorer.data");
    return {
      is_ready: false,
      current_node: undefined,
      current_node_parts: undefined,
      current_node_basename: undefined,
      current_node_basedir: undefined,
      current_node_contents: undefined,
      current_node_subnodes: [],
      current_node_is_file: false,
      current_node_is_directory: false,
      STANDARIZED_REFRESH_DELAY: 100
    };
  },
  methods: {
    open(...args) {
      this.$trace("lsw-filesystem-explorer.methods.open");
      return this.open_node(...args);
    },
    goUp() {
      this.$trace("lsw-filesystem-explorer.methods.goUp");
      const parts = this.current_node.split("/");
      parts.pop();
      const dest = this.normalize_path("/" + parts.join("/"));
      return this.open(dest);
    },
    async refresh() {
      this.$trace("lsw-filesystem-explorer.methods.refresh");
      this.is_ready = false;
      try {
        await this.open(this.current_node);
      } catch (error) {
        throw error;
      } finally {
        this.$nextTick(() => {
          this.is_ready = true;
          this.$forceUpdate(true);
        });
      }
    },
    normalize_path(subpath) {
      this.$trace("lsw-filesystem-explorer.methods.normalize_path");
      return this.$lsw.fs.resolve_path(this.current_node, subpath);
    },
    async open_node(subpath = this.current_node) {
      this.$trace("lsw-filesystem-explorer.methods.open_node");
      try {
        if (["", "/"].indexOf(subpath) !== -1) {
          return await this._openDirectory("/");
        }
        const temporaryPath = this.normalize_path(subpath);
        const is_directory = await this.$lsw.fs.is_directory(temporaryPath);
        if (is_directory) {
          return await this._openDirectory(temporaryPath);
        }
        const is_file = await this.$lsw.fs.is_file(temporaryPath);
        if (is_file) {
          return await this._openFile(temporaryPath);
        }
        throw new Error(`Cannot open path because it does not exist: ${temporaryPath} on «LswFilesystemExplorer.methods.open_node»`);
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    async processToCreateFile() {
      this.$trace("lsw-filesystem-explorer.methods.processToCreateFile");
      const filename = await this.$lsw.dialogs.open({
        title: "Crear fichero",
        template: `<div>
          <div class="pad_1">
            <div>Estás en la carpeta:</div>
            <div class="pad_2">{{ current_directory }}</div>
            <div>Di el nombre del nuevo fichero:</div>
            <div class="pad_top_1">
              <input class="width_100" type="text" placeholder="myfile.txt" v-model="filename" v-focus v-on:keyup.enter="() => accept(filename)" />
            </div>
          </div>
          <hr />
          <div class="flex_row centered pad_1">
            <div class="flex_100"></div>
            <div class="flex_1 pad_right_1">
              <button class="nowrap danger_button" v-on:click="() => accept(filename)">Crear fichero</button>
            </div>
            <div class="flex_1">
              <button class="nowrap " v-on:click="() => accept(false)">Cancelar</button>
            </div>
          </div>
        </div>`,
        factory: {
          data() {
            return {
              current_directory: this.$lsw.fs.get_current_directory(),
              filename: "",
            };
          },
        },
      });
      if(!filename) return;
      const filepath = this.$lsw.fs.resolve_path(this.$lsw.fs.get_current_directory(), filename);
      await this.$lsw.fs.write_file(filepath, "");
      this.refresh();
    },
    async processToCreateDirectory() {
      this.$trace("lsw-filesystem-explorer.methods.processToCreateDirectory");
      const filename = await this.$lsw.dialogs.open({
        title: "Crear directorio",
        template: `<div>
          <div class="pad_1">
            <div>Estás en la carpeta:</div>
            <div class="pad_2">{{ current_directory }}</div>
            <div>Di el nombre del nuevo directorio:</div>
            <div class="pad_top_1">
              <input class="width_100" type="text" placeholder="myfolder" v-model="filename" v-focus v-on:keyup.enter="() => accept(filename)" />
            </div>
          </div>
          <hr />
          <div class="flex_row centered pad_1">
            <div class="flex_100"></div>
            <div class="flex_1 pad_right_1">
              <button class="nowrap danger_button" v-on:click="() => accept(filename)">Sí, seguro</button>
            </div>
            <div class="flex_1">
              <button class="nowrap " v-on:click="() => accept(false)">Cancelar</button>
            </div>
          </div>
        </div>`,
        factory: {
          data() {
            return {
              current_directory: this.$lsw.fs.get_current_directory(),
              filename: "",
            };
          },
        },
      });
      if(!filename) return;
      const filepath = this.$lsw.fs.resolve_path(this.$lsw.fs.get_current_directory(), filename);
      await this.$lsw.fs.make_directory(filepath);
      this.refresh();
    },
    async processToDeleteDirectory() {
      this.$trace("lsw-filesystem-explorer.methods.processToDeleteDirectory");
      const confirmation = await this.$lsw.dialogs.open({
        title: "Eliminar directorio",
        template: `<div>
          <div class="pad_1">
            <div>¿Seguro que quieres eliminar el directorio?</div>
            <div class="pad_2">{{ current_directory }}</div>
          </div>
          <hr />
          <div class="flex_row centered pad_1">
            <div class="flex_100"></div>
            <div class="flex_1 pad_right_1">
              <button class="nowrap danger_button" v-on:click="() => accept(true)">Sí, seguro</button>
            </div>
            <div class="flex_1">
              <button class="nowrap " v-on:click="() => accept(false)">Cancelar</button>
            </div>
          </div>
        </div>`,
        factory: {
          data: {
            current_directory: this.$lsw.fs.get_current_directory(),
          }
        }
      });
      if(!confirmation) return;
      await this.$lsw.fs.delete_directory(this.$lsw.fs.get_current_directory());
      this.refresh();
    },
    async processToDeleteFile() {
      this.$trace("lsw-filesystem-explorer.methods.processToDeleteFile");
      const confirmation = await this.$lsw.dialogs.open({
        title: "Eliminar fichero",
        template: `<div>
          <div class="pad_1">
            <div>¿Seguro que quieres eliminar el fichero?</div>
            <div class="pad_2">{{ current_file }}</div>
          </div>
          <hr />
          <div class="flex_row centered pad_1">
            <div class="flex_100"></div>
            <div class="flex_1 pad_right_1">
              <button class="nowrap danger_button" v-on:click="() => accept(true)">Sí, seguro</button>
            </div>
            <div class="flex_1">
              <button class="nowrap " v-on:click="() => accept(false)">Cancelar</button>
            </div>
          </div>
        </div>`,
        factory: {
          data: {
            current_file: this.current_node,
          }
        }
      });
      if(!confirmation) return;
      await this.$lsw.fs.delete_file(this.current_node);
      const upperDir = (() => {
        const parts = this.current_node.split("/");
        parts.pop();
        return parts.join("/");
      })();
      this.refresh();
    },
    async processToRenameFile() {
      this.$trace("lsw-filesystem-explorer.methods.processToRenameFile");
      const elementType = this.current_node_is_file ? "fichero" : "directorio";
      const newName = await this.$lsw.dialogs.open({
        title: "Renombrar " + elementType,
        template: `<div>
          <div class="pad_1">
            <div>Refiriéndose al {{ elementType }}:</div>
            <div class="pad_2">{{ filename }}</div>
          </div>
          <div class="pad_1">
            <div>Di el nuevo nombre del {{ elementType }}:</div>
            <div class="pad_top_1">
              <input v-focus class="width_100" type="text" placeholder="Nuevo nombre aquí" v-model="new_filename" v-on:keyup.enter="() => accept(new_filename)" />
            </div>
          </div>
          <hr />
          <div class="flex_row centered">
            <div class="flex_100"></div>
            <div class="flex_1 pad_right_1">
              <button class="nowrap danger_button" v-on:click="() => accept(new_filename)">Sí, seguro</button>
            </div>
            <div class="flex_1">
              <button class="nowrap " v-on:click="() => accept(false)">Cancelar</button>
            </div>
          </div>
        </div>`,
        factory: {
          data: {
            elementType,
            filename: this.current_node,
            new_filename: this.current_node.split("/").pop(),
          }
        }
      });
      if(newName === false) return;
      if(newName.trim() === "") return;
      const allParts = this.current_node.split("/");
      allParts.pop();
      const dirPath = "/" + allParts.join("/");
      const newFullpath = this.$lsw.fs.resolve_path(dirPath, newName);
      await this.$lsw.fs.rename(this.current_node, newName.replace(/^\/+/g, ""));
      await this.open(newFullpath);
    },
    async processToExecuteFile() {
      this.$trace("lsw-filesystem-explorer.methods.processToExecuteFile");
      const editorContents = this.$refs.editor.getContents();
      const AsyncFunction = (async function() {}).constructor;
      const asyncFunction = new AsyncFunction(editorContents);
      try {
        await asyncFunction.call(this);
      } catch (error) {
        this.$lsw.toasts.send({
          title: "Error arised when executing file",
          text: `File ${this.current_node} produced following error: ${error.name}: ${error.message}`
        });
      }
    },
    async processToLoadFile() {
      this.$trace("lsw-filesystem-explorer.methods.processToLoadFile");
      this.is_ready = false;
      const contents = await this.$lsw.fs.read_file(this.current_node);
      this.current_node_contents = contents;
      this.$nextTick(() => {
        this.is_ready = true;
      });
    },
    async processToSaveFile() {
      this.$trace("lsw-filesystem-explorer.methods.processToSaveFile");
      if(this.$refs.editor) {
        const editorContents = this.$refs.editor.getContents();
        console.log(this.current_node, editorContents);
        await this.$lsw.fs.write_file(this.current_node, editorContents);
      }
    },
    _setButtonsForFile() {
      this.$trace("lsw-filesystem-explorer.methods._setButtonsForFile");
      this.is_ready = false;
      this.current_node_is_file = true;
      this.current_node_is_directory = false;
      const allButtonsOnFile = [
        {
          text: "➜",
          classes: "reversed",
          click: () => this.goUp(),
        }, {
          text: "💾",
          click: () => this.processToSaveFile(),
        }, {
          text: "↔️",
          click: () => this.processToRenameFile(),
        }, {
          text: "🔄",
          click: () => this.processToLoadFile(),
        }, {
          text: "📄 ❌",
          classes: "danger_button",
          click: () => this.processToDeleteFile(),
        }
      ];
      if(this.current_node.endsWith(".js")) {
        allButtonsOnFile.push({
          text: "⚡️",
          classes: "danger_button",
          click: () => this.processToExecuteFile(),
        });
      }
      this.$refs.panelTop.setButtons(...allButtonsOnFile);
      this.$nextTick(() => {
        this.is_ready = true;
      });
    },
    _setButtonsForDirectory() {
      this.$trace("lsw-filesystem-explorer.methods._setButtonsForDirectory");
      this.is_ready = false;
      this.current_node_is_directory = true;
      this.current_node_is_file = false;
      this.$refs.panelTop.setButtons({
        text: "📄+",
        click: () => this.processToCreateFile(),
      }, {
        text: "📁+",
        click: () => this.processToCreateDirectory(),
      }, {
        text: "📁 ❌",
        classes: "danger_button",
        click: () => this.processToDeleteDirectory()
      });
      this.$nextTick(() => {
        this.is_ready = true;
      });
    },
    async _openFile(subpath) {
      this.$trace("lsw-filesystem-explorer.methods._openFile");
      this.current_node = subpath;
      const contents = await this.$lsw.fs.read_file(this.current_node);
      this.current_node_contents = contents;
      this._setButtonsForFile();
    },
    async _openDirectory(subpath) {
      this.$trace("lsw-filesystem-explorer.methods._openDirectory");
      this.current_node = subpath;
      const subnodes = await this.$lsw.fs.read_directory(this.current_node);
      const sortedSubnodes = {
        files: [],
        folders: []
      };
      Object.keys(subnodes).forEach(id => {
        const subnode = subnodes[id];
        const subnodeType = typeof subnode === "string" ? "files" : "folders";
        sortedSubnodes[subnodeType].push(id);
      });
      const formattedSubnodes = {};
      sortedSubnodes.folders.sort().forEach(folder => {
        formattedSubnodes[folder] = {};
      });
      sortedSubnodes.files.sort().forEach(file => {
        formattedSubnodes[file] = "...";
      });
      console.log(subnodes, formattedSubnodes);
      this.$lsw.fs.change_directory(subpath);
      this.current_node_subnodes = formattedSubnodes;
      this._setButtonsForDirectory();
    },
    __update_node_parts(newValue = this.current_node) {
      this.$trace("lsw-filesystem-explorer.methods.__update_node_parts");
      this.current_node_parts = newValue.split("/").filter(p => p !== "");
    },
    __update_current_node_basename(current_node_parts = this.current_node_parts) {
      this.$trace("lsw-filesystem-explorer.methods.__update_current_node_basename");
      if (current_node_parts.length) {
        this.current_node_basename = current_node_parts[current_node_parts.length - 1];
      } else {
        this.current_node_basename = "/";
      }
    },
    __update_current_node_basedir(current_node_parts = this.current_node_parts) {
      this.$trace("lsw-filesystem-explorer.methods.__update_current_node_basedir");
      if (current_node_parts.length > 1) {
        this.current_node_basedir = "/" + [].concat(current_node_parts).splice(0, current_node_parts.length - 1).join("/") + "/";
      } else {
        this.current_node_basedir = "/";
      }
    },
    _updateNodeSubdata(newValue = this.current_node) {
      this.$trace("lsw-filesystem-explorer.methods._updateNodeSubdata");
      this.__update_node_parts(newValue);
      this.__update_current_node_basename();
      this.__update_current_node_basedir();
    },
    setPanelButtons(panelOptions = {}) {
      this.$trace("lsw-filesystem-explorer.methods.setPanelButtons");
      Validation: {
        if (typeof panelOptions !== "object") {
          throw new Error("Required argument «panelOptions» to be an object on «LswFilesystemExplorer.methods.setPanelButtons»");
        }
        const keys = Object.keys(panelOptions);
        if (keys.length === 0) {
          throw new Error("Required argument «panelOptions» to be have 1 or more keys on «LswFilesystemExplorer.methods.setPanelButtons»");
        }
        const valid_keys = ["top", "bottom", "left", "right"];
        for (let index = 0; index < keys.length; index++) {
          const key = keys[index];
          if(valid_keys.indexOf(key) === -1) {
            throw new Error(`Required argument «panelOptions[${key}]» to be a valid key out of «${valid_keys.join(",")}», not «${key}» on «LswFilesystemExplorer.methods.setPanelButtons»`);
          }
          const value = panelOptions[key];
          if(typeof value !== "object") {
            throw new Error(`Required argument «panelOptions[${key}]» to be an object or array, not ${typeof value}» on «LswFilesystemExplorer.methods.setPanelButtons»`);
          }
        }
      }
    }
  },
  watch: {
    current_node(newValue) {
      this.$trace("lsw-filesystem-explorer.watch.current_node");
      this._updateNodeSubdata(newValue);
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
    <div class="buttons_panel centered" :class="'flex_' + orientation">
        <div class="flex_1 pad_right_1" v-for="button, buttonIndex in buttons" v-bind:key="'button_index_' + buttonIndex">
            <button class="nowrap" :class="button.classes || ''" v-on:click="button.click">{{ button.text }}</button>
        </div>
        <div class="flex_100"></div>
    </div>
</div>`,
  props: {
    explorer: {
      type: Object,
      required: true
    },
    orientation: {
      type: String,
      default: () => "row" // could be "column" too
    }
  },
  data() {
    return {
      buttons: []
    };
  },
  watch: {

  },
  methods: {
    setButtons(...buttons) {
      this.$trace("lsw-filesystem-buttons-panel.methods.prependButtons");
      this.buttons = buttons;
    },
    prependButtons(...buttons) {
      this.$trace("lsw-filesystem-buttons-panel.methods.prependButtons");
      this.buttons = buttons.concat(this.buttons);
    },
    appendButtons(...buttons) {
      this.$trace("lsw-filesystem-buttons-panel.methods.appendButtons");
      this.buttons = this.buttons.concat(buttons);
    },
  },
  mounted() {

  }
});
Vue.component("LswFilesystemEditor", {
  name: "LswFilesystemEditor",
  template: `<div class="lsw_filesystem_editor" style="padding-bottom:1px;">
    <div style="min-height:1px;"></div>
    <textarea class="editor" v-model="contents" spellcheck="false" />
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
      contents: this.filecontents
    };
  },
  watch: {

  },
  methods: {
    getContents() {
      return this.contents;
    },
    setContents(contents) {
      this.contents = contents;
    }
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
                class="treeviewer_row"
                v-on:click="() => goUp()">
                <td class="icon_cell">📁</td>
                <td>
                    <a class="filename_link" href="javascript:void(0)">..</a>
                </td>
                <td></td>
                <td>
                    <button style="visibility: hidden;" class="mini" v-on:click="() => deleteNode(subnodeIndex)">❌</button>
                </td>
            </tr>
            <template v-for="subnode, subnodeIndex, subnodeCounter in explorer.current_node_subnodes">
                <tr class="treeviewer_row"
                    v-bind:key="'subnode_obj_' + subnodeIndex">
                    <template v-if="typeof subnode === 'object'">
                        <td v-on:click="() => openSubnode(subnodeIndex)" class="icon_cell">📁</td>
                        <td v-on:click="() => openSubnode(subnodeIndex)">
                            <a class="filename_link" href="javascript:void(0)"><b>{{ subnodeIndex }}</b></a>
                        </td>
                        <td style="padding: 2px;">
                            <button class="mini nowrap" v-on:click="() => renameNode(subnodeIndex)">↔️</button>
                        </td>
                        <td style="padding: 2px;">
                            <button class="mini danger_button nowrap" v-on:click="() => deleteNode(subnodeIndex)">📁 ❌</button>
                        </td>
                    </template>
                    <template v-else-if="typeof subnode === 'string'">
                        <td v-on:click="() => openSubnode(subnodeIndex)" class="icon_cell">📄</td>
                        <td v-on:click="() => openSubnode(subnodeIndex)">
                            <a class="filename_link" href="javascript:void(0)">{{ subnodeIndex }}</a>
                        </td>
                        <td style="padding: 2px;">
                            <button class="mini nowrap" v-on:click="() => renameNode(subnodeIndex)">↔️</button>
                        </td>
                        <td style="padding: 2px;">
                            <button class="mini danger_button nowrap" v-on:click="() => deleteNode(subnodeIndex)">📄 ❌</button>
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
    this.$trace("lsw-filesystem-treeviewer.data");
    return {};
  },
  watch: {},
  methods: {
    goUp() {
      this.$trace("lsw-filesystem-treeviewer.methods.goUp");
      return this.explorer.goUp();
    },
    openSubnode(subnodeIndex) {
      this.$trace("lsw-filesystem-treeviewer.methods.openSubnode");
      return this.explorer.open(subnodeIndex);
    },
    async deleteNode(subnodeIndex) {
      this.$trace("lsw-filesystem-treeviewer.methods.deleteNode");
      const fullpath = this.$lsw.fs.resolve_path(subnodeIndex);
      const isDirectory = await this.$lsw.fs.is_directory(fullpath);
      const elementType = isDirectory ? 'directorio' : 'fichero';
      const confirmation = await this.$lsw.dialogs.open({
        title: `Proceder a eliminar ${elementType}`,
        template: `
          <div class="pad_1">
            <div>Seguro que quieres eliminar el {{ elementType }} «{{ fullpath }}»?</div>
            <hr />
            <div class="flex_row centered">
              <div class="flex_100"></div>
              <div class="flex_1 pad_right_1">
                <button class="danger_button nowrap" v-on:click="() => accept(true)">Sí, eliminar</button>
              </div>
              <div class="flex_1">
                <button class="" v-on:click="() => accept(false)">Salir</button>
              </div>
            </div>
          </div>
        `,
        factory: {
          data: {
            elementType,
            fullpath,
          }
        }
      });
      if(!confirmation) return;
      try {
        if(isDirectory) {
          await this.$lsw.fs.delete_directory(fullpath);
        } else {
          await this.$lsw.fs.delete_file(fullpath);
        }
        await this.explorer.refresh();
      } catch (error) {
        await this.$lsw.dialogs.open({
          title: `El fichero no se pudo eliminar`,
          template: `
            <div class="pad_1">
              <div>El fichero «{{ fullpath }}» no se pudo eliminar debido al siguiente error:</div>
              <hr />
              <div v-if="error">{{ error.name }}: {{ error.message }}</div>
            </div>
          `,
          factory: {
            data: {
              error,
              fullpath,
            }
          }
        });
      }
    },
    async renameNode(subnodeIndex) {
      this.$trace("lsw-filesystem-treeviewer.methods.renameNode");
      const fullpath = this.$lsw.fs.resolve_path(subnodeIndex);
      const isDirectory = await this.$lsw.fs.is_directory(fullpath);
      const elementType = isDirectory ? 'directorio' : 'fichero';
      const newName = await this.$lsw.dialogs.open({
        title: "Renombrar " + elementType,
        template: `<div>
          <div class="pad_1">
            <div>Refiriéndose al {{ elementType }}:</div>
            <div class="pad_2">{{ filename }}</div>
            <div>Di el nuevo nombre del {{ elementType }}:</div>
            <input v-focus class="width_100" type="text" v-model="newFilename" v-on:keyup.enter="() => accept(newFilename)" />
          </div>
          <hr />
          <div class="flex_row centered pad_1">
            <div class="flex_100"></div>
            <div class="flex_1 pad_right_1">
              <button class="" v-on:click="() => accept(newFilename)">Renombrar</button>
            </div>
            <div class="flex_1">
              <button class="" v-on:click="() => accept(false)">Cancelar</button>
            </div>
          </div>
        </div>`,
        factory: {
          data: {
            elementType,
            fullpath,
            filename: subnodeIndex,
            newFilename: subnodeIndex,
          }
        }
      });
      if(typeof newName !== "string") return;
      if(newName.trim() === "") return;
      await this.$lsw.fs.rename(subnodeIndex, newName.replace(/^\/+/g, ""));
      this.explorer.refresh();
    }
  },
  mounted() {
    this.$trace("lsw-filesystem-treeviewer.mounted");
    this.explorer.setPanelButtons({
      top: [],
      left: [],
      right: [],
      bottom: [],
    })
  },
  unmounted() {
    this.$trace("lsw-filesystem-treeviewer.unmounted");
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
  <div class="visor_de_calendario">
    <table class="tabla_de_calendario" v-if="fecha_seleccionada">
      <tbody>
        <tr>
          <td>
            <button class="boton_de_mover_mes"
              v-on:click="ir_a_mes_anterior"> ◀ </button>
          </td>
          <td colspan="5"
            style="width:auto; vertical-align: top;">
            <div class="chivato_de_fecha">{{ obtener_fecha_formateada(fecha_seleccionada) }}</div>
            <div class="chivato_de_fecha"
              v-if="(!es_solo_fecha) && fecha_seleccionada">a las {{ obtener_expresion_de_hora(fecha_seleccionada) }}
            </div>
          </td>
          <td>
            <button class="boton_de_mover_mes"
              v-on:click="ir_a_mes_siguiente"> ▶ </button>
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr class="fila_de_dias_de_semana">
          <td><div class="">Lu</div></td>
          <td><div class="">Ma</div></td>
          <td><div class="">Mi</div></td>
          <td><div class="">Ju</div></td>
          <td><div class="">Vi</div></td>
          <td><div class="">Sá</div></td>
          <td><div class="">Do</div></td>
        </tr>
      </tbody>
      <tbody class="dias_de_calendario">
        <tr v-for="semana, semana_index in celdas_del_mes_actual"
          v-bind:key="'semana-' + semana_index">
          <td v-for="dia, dia_index in semana"
            v-bind:key="'dia-' + dia_index">
            <span v-if="dia && (dia instanceof Date)">
              <button class="boton_de_calendario boton_de_dia_de_calendario position_relative"
                :class="{
                  active: dia.getDate() === fecha_seleccionada.getDate(),
                  current: (dia_actual === dia.getDate())
                    && (mes_actual === dia.getMonth())
                    && (anio_actual === dia.getFullYear())
                }"
                v-on:click="() => seleccionar_dia(dia)">
                <div class="dia_de_calendario_texto">{{ dia.getDate() }}</div>
                <div v-if="dia.getDate() in marcadores_del_mes"
                  class="total_de_tareas_de_dia">
                  <div>
                    {{ marcadores_del_mes[dia.getDate()].length }}
                  </div>
                </div>
              </button>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="width_100 no_borders_table"
      v-if="modo === 'datetime' || modo === 'time'">
      <tbody>
        <tr class="fila_de_digito">
          <td v-on:click="agregar_digito_de_hora(1)"><button class="boton_de_ajuste_de_hora">▲</button></td>
          <td v-on:click="agregar_digito_de_hora(2)"><button class="boton_de_ajuste_de_hora">▲</button></td>
          <td></td>
          <td v-on:click="agregar_digito_de_hora(3)"><button class="boton_de_ajuste_de_hora">▲</button></td>
          <td v-on:click="agregar_digito_de_hora(4)"><button class="boton_de_ajuste_de_hora">▲</button></td>
          <td></td>
          <td v-on:click="\$noop"><button class="boton_de_ajuste_de_hora">▲</button></td>
          <td v-on:click="\$noop"><button class="boton_de_ajuste_de_hora">▲</button></td>
        </tr>
        <tr class="fila_de_digito"
          v-if="fecha_seleccionada">
          <td>{{ obtener_digito_de_hora(1) }}</td>
          <td>{{ obtener_digito_de_hora(2) }}</td>
          <td>:</td>
          <td>{{ obtener_digito_de_hora(3) }}</td>
          <td>{{ obtener_digito_de_hora(4) }}</td>
          <td>:</td>
          <td>{{ obtener_digito_de_hora(5) }}</td>
          <td>{{ obtener_digito_de_hora(6) }}</td>
        </tr>
        <tr class="fila_de_digito">
          <td v-on:click="quitar_digito_de_hora(1)"><button class="boton_de_ajuste_de_hora">▼</button></td>
          <td v-on:click="quitar_digito_de_hora(2)"><button class="boton_de_ajuste_de_hora">▼</button></td>
          <td></td>
          <td v-on:click="quitar_digito_de_hora(3)"><button class="boton_de_ajuste_de_hora">▼</button></td>
          <td v-on:click="quitar_digito_de_hora(4)"><button class="boton_de_ajuste_de_hora">▼</button></td>
          <td></td>
          <td v-on:click="\$noop"><button class="boton_de_ajuste_de_hora">▼</button></td>
          <td v-on:click="\$noop"><button class="boton_de_ajuste_de_hora">▼</button></td>
        </tr>
      </tbody>
    </table>
    <!--table class="tabla_para_horas"
      v-if="!es_solo_fecha">
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
    </table-->
  </div>
</div>`,
  props: {
    modo: {
      type: String,
      default: () => "datetime" // can be: date, time, datetime
    },
    valorInicial: {
      type: [String, Date],
      default: () => new Date()
    },
    alCambiarValor: {
      type: Function,
      default: () => { }
    },
  },
  data() {
    try {
      this.$trace("lsw-calendario.data");
      const hoy = new Date();
      return {
        es_carga_inicial: true,
        valor_inicial_adaptado: this.adaptar_valor_inicial(this.valorInicial),
        es_solo_fecha: this.modo === "date",
        es_solo_hora: this.modo === "time",
        es_fecha_y_hora: this.modo === "datetime",
        fecha_seleccionada: undefined,
        celdas_del_mes_actual: undefined,
        marcadores_del_mes: {},
        hoy: hoy,
        dia_actual: hoy.getDate(),
        mes_actual: hoy.getMonth(),
        anio_actual: hoy.getFullYear(),
        /*
        hora_seleccionada: "0",
        minuto_seleccionado: "0",
        segundo_seleccionado: "0",
        milisegundo_seleccionado: "0",
        //*/
      };
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  methods: {
    getValue() {
      this.$trace("lsw-calendario.methods.getValue");
      return this.fecha_seleccionada;
    },
    adaptar_valor_inicial(valor) {
      this.$trace("lsw-calendario.methods.adaptar_valor_inicial");
      if (typeof valor === "string") {
        try {
          const resultado = LswTimer.utils.getDateFromMomentoText(valor);
          console.log("FECHA ENTRADA:", resultado);
          return resultado;
        } catch (error) {
          console.error("Error parseando valor inicial de lsw-calendario:", error);
        }
      }
      return valor || new Date();
    },
    agregar_digito_de_hora(indice) {
      this.$trace("lsw-calendario.methods.agregar_digito_de_hora");
      const value = this.obtener_digito_de_hora(indice);
      const isInMaximum = ([3, 5].indexOf(indice) !== -1) ? value === 5 : ([1].indexOf(indice) !== -1) ? value === 2 : value === 9;
      if (!isInMaximum) {
        this.establecer_digito_de_hora(indice, value + 1);
      }
    },
    quitar_digito_de_hora(indice) {
      this.$trace("lsw-calendario.methods.quitar_digito_de_hora");
      const value = this.obtener_digito_de_hora(indice);
      const isInMinimum = value === 0;
      if (!isInMinimum) {
        this.establecer_digito_de_hora(indice, value - 1);
      }
    },
    obtener_digito_de_hora(indice, fecha = this.fecha_seleccionada) {
      this.$trace("lsw-calendario.methods.obtener_digito_de_hora");
      if (indice === 1) {
        return parseInt(this.espaciar_izquierda(fecha.getHours(), 2)[0]);
      } else if (indice === 2) {
        return parseInt(this.espaciar_izquierda(fecha.getHours(), 2)[1]);
      } else if (indice === 3) {
        return parseInt(this.espaciar_izquierda(fecha.getMinutes(), 2)[0]);
      } else if (indice === 4) {
        return parseInt(this.espaciar_izquierda(fecha.getMinutes(), 2)[1]);
      } else if (indice === 5) {
        return parseInt(this.espaciar_izquierda(fecha.getSeconds(), 2)[0]);
      } else if (indice === 6) {
        return parseInt(this.espaciar_izquierda(fecha.getSeconds(), 2)[1]);
      } else {
        throw new Error("No se reconoció el índice del dígito: " + indice);
      }
    },
    cambiar_posicion_en_texto(texto, posicion, valor) {
      this.$trace("lsw-calendario.methods.cambiar_posicion_en_texto");
      const arr = ("" + texto).split("");
      arr[posicion] = valor;
      return arr.join("");
    },
    establecer_digito_de_hora(indice, valor) {
      this.$trace("lsw-calendario.methods.establecer_digito_de_hora");
      console.log(indice, valor);
      const fecha_clonada = new Date(this.fecha_seleccionada);
      if (indice === 1) {
        let horas = this.espaciar_izquierda(this.fecha_seleccionada.getHours(), 2);
        horas = this.cambiar_posicion_en_texto(horas, 0, valor);
        const horasInt = parseInt(horas);
        if(horasInt > 23) return;
        fecha_clonada.setHours(horasInt);
      } else if (indice === 2) {
        let horas = this.espaciar_izquierda(this.fecha_seleccionada.getHours(), 2);
        horas = this.cambiar_posicion_en_texto(horas, 1, valor);
        const horasInt = parseInt(horas);
        if(horasInt > 23) return;
        fecha_clonada.setHours(horasInt);
      } else if (indice === 3) {
        let minutos = this.espaciar_izquierda(this.fecha_seleccionada.getMinutes(), 2);
        minutos = this.cambiar_posicion_en_texto(minutos, 0, valor);
        const minutosInt = parseInt(minutos);
        if(minutosInt > 59) return;
        fecha_clonada.setMinutes(minutosInt);
      } else if (indice === 4) {
        let minutos = this.espaciar_izquierda(this.fecha_seleccionada.getMinutes(), 2);
        minutos = this.cambiar_posicion_en_texto(minutos, 1, valor);
        const minutosInt = parseInt(minutos);
        if(minutosInt > 59) return;
        fecha_clonada.setMinutes(minutosInt);
      } else if (indice === 5) {
        // @OK
      } else if (indice === 6) {
        // @OK
      } else {
        throw new Error("No se reconoció el índice del dígito: " + indice);
      }
      console.log(fecha_clonada);
      this.fecha_seleccionada = fecha_clonada;
      this.actualizar_fecha_seleccionada(true);
    },
    ir_a_mes_anterior() {
      this.$trace("lsw-calendario.methods.ir_a_mes_anterior");
      try {
        const nueva_fecha = new Date(this.fecha_seleccionada);
        this.fecha_seleccionada = new Date(nueva_fecha.getFullYear(), nueva_fecha.getMonth()-1, 1);
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    ir_a_mes_siguiente() {
      this.$trace("lsw-calendario.methods.ir_a_mes_siguiente");
      try {
        const nueva_fecha = new Date(this.fecha_seleccionada);
        this.fecha_seleccionada = new Date(nueva_fecha.getFullYear(), nueva_fecha.getMonth()+1, 1);
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    seleccionar_dia(dia) {
      this.$trace("lsw-calendario.methods.seleccionar_dia");
      try {
        this.fecha_seleccionada = dia;
        this.actualizar_fecha_seleccionada(true);
      } catch (error) {
        console.log(error);
        throw error;
      }

    },
    espaciar_izquierda(texto,
      longitud,
      relleno = "0") {
      this.$trace("lsw-calendario.methods.espaciar_izquierda");
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
      this.$trace("lsw-calendario.methods.obtener_fecha_formateada");
      try {
        if (!(fecha instanceof Date)) {
          console.log(fecha);
          throw new Error("Required parameter «fecha» to be a Date on «LswCalendario.methods.obtener_fecha_formateada»");
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

    },
    actualizar_calendario(nuevo_valor = this.fecha_seleccionada) {
      this.$trace("lsw-calendario.methods.actualizar_calendario");
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
        let dia_final_del_mes = undefined;
        Logica_anterior: {
          dia_final_del_mes = new Date(nuevo_valor);
          dia_final_del_mes.setMonth(dia_final_del_mes.getMonth() + 1);
          dia_final_del_mes.setDate(1);
          dia_final_del_mes.setDate(dia_final_del_mes.getDate() - 1);
        }
        Logica_chatgpt: {
          dia_final_del_mes = new Date(nuevo_valor.getFullYear(), nuevo_valor.getMonth() + 1, 0);
        }
        const numero_final_de_mes = dia_final_del_mes.getDate();
        let fila_actual = celdas_vacias_anteriores;
        for (let index = 1; index <= numero_final_de_mes; index++) {
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
        this.propagar_cambio();
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    actualizar_fecha_seleccionada(con_propagacion = true, fecha_seleccionada = this.fecha_seleccionada) {
      this.$trace("lsw-calendario.methods.actualizar_fecha_seleccionada");
      if (con_propagacion) {
        const clon_fecha = new Date(fecha_seleccionada);
        this.fecha_seleccionada = clon_fecha;
      }
    },
    propagar_cambio() {
      this.$trace("lsw-calendario.methods.propagar_cambio");
      if (typeof this.alCambiarValor === "function") {
        this.alCambiarValor(this.fecha_seleccionada, this);
      }
    },
    obtener_expresion_de_hora(fecha = this.fecha_seleccionada) {
      let hours = fecha.getHours();
      let minutes = fecha.getMinutes();
      let seconds = fecha.getSeconds();
      hours = this.espaciar_izquierda(hours, 2, "0");
      minutes = this.espaciar_izquierda(minutes, 2, "0");
      seconds = this.espaciar_izquierda(seconds, 2, "0");
      return `${hours}:${minutes}:${seconds}`;
    },
    establecer_marcadores_del_mes(marcadores_del_mes) {
      this.marcadores_del_mes = marcadores_del_mes;
    }
  },
  watch: {
    fecha_seleccionada(nuevo_valor) {
      this.$trace("lsw-calendario.watch.fecha_seleccionada");
      this.actualizar_calendario(nuevo_valor);
    },
  },
  mounted() {
    this.$trace("lsw-calendario.mounted");
    try {
      this.fecha_seleccionada = this.valor_inicial_adaptado;
      this.es_carga_inicial = false;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
});
Vue.component("LswAgenda", {
  name: "LswAgenda",
  template: `<div class="lsw_agenda">
    <div v-descriptor="'agenda.calendar.buttons_panel_1'"
        class="flex_1 flex_row"
        style="gap: 4px;">
        <div class="flex_1">
            <button class="width_100 nowrap"
                v-on:click="() => selectSubmenu1('add')"
                :class="{activated: selectedSubmenu1 === 'add'}">+</button>
            <div class="hidden_menu"
                v-if="selectedSubmenu1 === 'add'">
                <div class="hidden_menu_fixed_layer"
                    v-on:click="() => selectSubmenu1('none')"></div>
                <div class="hidden_menu_box"
                    style="min-width: 160px;">
                    <div class="hidden_menu_items">
                        <div class="title">
                            <div class="flex_100"
                                style="padding-left: 4px;">
                                Insertar info
                            </div>
                            <div class="flex_1">
                                <button v-on:click="() => selectSubmenu1('none')">❌</button>
                            </div>
                        </div>
                        <div class="button_cell">
                            <button v-on:click="() => selectContext('accion.add', { initialValues: { tiene_inicio: selectedDate } })">Crear
                                acción</button>
                        </div>
                        <div class="button_cell">
                            <button v-on:click="() => selectContext('concepto.add')">Crear concepto</button>
                        </div>
                        <div class="button_cell">
                            <button v-on:click="() => selectContext('limitador.add')">Crear limitador</button>
                        </div>
                        <div class="button_cell">
                            <button v-on:click="() => selectContext('impresion.add')">Crear impresión</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex_1">
            <button class="width_100 nowrap"
                v-on:click="() => selectSubmenu1('search')"
                :class="{activated: selectedSubmenu1 === 'search'}">🔎</button>
            <div class="hidden_menu"
                v-if="selectedSubmenu1 === 'search'">
                <div class="hidden_menu_fixed_layer"
                    v-on:click="() => selectSubmenu1('none')"></div>
                <div class="hidden_menu_box">
                    <div class="hidden_menu_items">
                        <div class="title">
                            <div class="flex_100"
                                style="padding-left: 4px;">
                                Buscar info
                            </div>
                            <div class="flex_1">
                                <button v-on:click="() => selectSubmenu1('none')">❌</button>
                            </div>
                        </div>
                        <div class="separator">
                            <div class="flex_100"
                                style="padding-left: 4px;">Tablas físicas:</div>
                        </div>
                        <div class="button_cell">
                            <button v-on:click="() => selectContext('accion.search')">Buscar por acción</button>
                        </div>
                        <div class="button_cell">
                            <button v-on:click="() => selectContext('concepto.search')">Buscar por concepto</button>
                        </div>
                        <div class="button_cell">
                            <button v-on:click="() => selectContext('propagador.search')">Buscar por propagador</button>
                        </div>
                        <div class="button_cell">
                            <button v-on:click="() => selectContext('limitador.search')">Buscar por límite</button>
                        </div>
                        <div class="button_cell">
                            <button v-on:click="() => selectContext('impresion.search')">Buscar por impresión</button>
                        </div>
                        <div class="separator">
                            <div class="flex_100"
                                style="padding-left: 4px;">Tablas virtuales:</div>
                        </div>
                        <div class="button_cell">
                            <button v-on:click="() => selectContext('propagacion.search')">Buscar por propagación</button>
                        </div>
                        <div class="button_cell">
                            <button v-on:click="() => selectContext('infraccion.search')">Buscar por infracción</button>
                        </div>
                        <div class="button_cell">
                            <button v-on:click="() => selectContext('postimpresion.search')">Buscar por postimpresión</button>
                        </div>
                        <div class="button_cell">
                            <button v-on:click="() => selectContext('evento.search')">Buscar por evento</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex_1">
            <button class="width_100 nowrap"
                v-on:click="() => selectSubmenu1('reports')">📊</button>
        </div>
        <div class="flex_1">
            <button class="width_100 nowrap"
                v-on:click="() => selectSubmenu1('settings')">⚙️</button>
        </div>
        <div class="flex_100"></div>
    </div>

    <div class="calendar_main_panel">
        <div v-if="selectedContext === 'accion.add'">
            <div class="breadcrumb_box">
                <lsw-agenda-breadcrumb :agenda="this"
                    :path-items="[{label:'Añadir acción'}]" />
            </div>
            <lsw-agenda-accion-add :initial-data="selectedContextParameters.values" />
        </div>
        <div v-else-if="selectedContext === 'accion.search'">
            <div class="breadcrumb_box">
                <lsw-agenda-breadcrumb :agenda="this"
                    :path-items="[{label:'Buscar acción'}]" />
            </div>
            <lsw-agenda-accion-search />
        </div>
        <div v-else-if="selectedContext === 'concepto.add'">
            <div class="breadcrumb_box">
                <lsw-agenda-breadcrumb :agenda="this"
                    :path-items="[{label:'Añadir concepto'}]" />
            </div>
            <lsw-agenda-concepto-add />
        </div>
        <div v-else-if="selectedContext === 'concepto.search'">
            <div class="breadcrumb_box">
                <lsw-agenda-breadcrumb :agenda="this"
                    :path-items="[{label:'Buscar concepto'}]" />
            </div>
            <lsw-agenda-concepto-search />
        </div>
        <div v-else-if="selectedContext === 'limitador.add'">
            <div class="breadcrumb_box">
                <lsw-agenda-breadcrumb :agenda="this"
                    :path-items="[{label:'Añadir límite'}]" />
            </div>
            <lsw-agenda-limitador-add />
        </div>
        <div v-else-if="selectedContext === 'limitador.search'">
            <div class="breadcrumb_box">
                <lsw-agenda-breadcrumb :agenda="this"
                    :path-items="[{label:'Buscar límite'}]" />
            </div>
            <lsw-agenda-limitador-search />
        </div>
        <div v-else-if="selectedContext === 'impresion.add'">
            <div class="breadcrumb_box">
                <lsw-agenda-breadcrumb :agenda="this"
                    :path-items="[{label:'Añadir impresión'}]" />
            </div>
            <lsw-agenda-impresion-add />
        </div>
        <div v-else-if="selectedContext === 'impresion.search'">
            <div class="breadcrumb_box">
                <lsw-agenda-breadcrumb :agenda="this"
                    :path-items="[{label:'Buscar impresión'}]" />
            </div>
            <lsw-agenda-impresion-search />
        </div>
        <div v-else-if="selectedContext === 'propagacion.search'">
            <div class="breadcrumb_box">
                <lsw-agenda-breadcrumb :agenda="this"
                    :path-items="[{label:'Buscar propagación'}]" />
            </div>
            <lsw-agenda-propagacion-search />
        </div>
        <div v-else-if="selectedContext === 'postimpresion.search'">
            <div class="breadcrumb_box">
                <lsw-agenda-breadcrumb :agenda="this"
                    :path-items="[{label:'Buscar postimpresión'}]" />
            </div>
            <lsw-agenda-postimpresion-search />
        </div>
        <div v-else-if="selectedContext === 'infraccion.search'">
            <div class="breadcrumb_box">
                <lsw-agenda-breadcrumb :agenda="this"
                    :path-items="[{label:'Buscar infracción'}]" />
            </div>
            <lsw-agenda-infraccion-search />
        </div>
        <div v-else-if="selectedContext === 'evento.search'">
            <div class="breadcrumb_box">
                <lsw-agenda-breadcrumb :agenda="this"
                    :path-items="[{label:'Buscar evento'}]" />
            </div>
            <lsw-agenda-evento-search />
        </div>
        <div v-else-if="selectedContext === 'propagador.search'">
            <div class="breadcrumb_box">
                <lsw-agenda-breadcrumb :agenda="this"
                    :path-items="[{label:'Buscar propagador'}]" />
            </div>
            <lsw-agenda-propagador-search />
        </div>
    </div>
    <div v-if="selectedContext === 'agenda'">
        <div class="breadcrumb_box"
            style="padding-left: 8px; padding-right: 8px;">
            <lsw-agenda-breadcrumb :agenda="this"
                :path-items="[{label:'Día ' + \$lsw.timer.utils.formatDatestringFromDate(selectedDate, true),noop:true}]" />
        </div>
        <div class="calendar_viewer">
            <lsw-calendario ref="calendario"
                modo="date"
                :al-cambiar-valor="(v, cal) => loadDateTasks(v, cal)" />
        </div>
        <div class="limitador_viewer">
            <lsw-agenda-limitador-viewer :agenda="this" />
        </div>
        <div class="tasks_viewer">
            <div class="selected_day_title"
                v-if="selectedDate">
                <div class="flex_row centered">
                    <div class="flex_1 margin_right_1"><button class="bright_border" v-on:click="() => selectHour('new')" :class="{activated: selectedForm === 'new'}">#️⃣</button></div>
                    <div class="flex_100">{{ \$lsw.timer.utils.formatDateToSpanish(selectedDate, true) }} {{ selectedDate.getMonth() }}</div>
                    <div class="flex_1 nowrap" :style="(!isLoading) && Array.isArray(selectedDateTasksFormattedPerHour) && selectedDateTasksFormattedPerHour.length ? '' : 'visibility: hidden'">
                        <button class="bright_border" v-on:click="togglePsicodelia" :class="{activated: hasPsicodelia}">❤️</button>
                        <button class="bright_border" v-on:click="showAllHours">🔓*</button>
                        <button class="bright_border" v-on:click="hideAllHours">🔒*</button>
                    </div>
                </div>
            </div>
            <div v-if="selectedForm === 'new'">
                <lsw-schema-based-form
                    :on-submit="v => onInsertTask(v)"
                    :on-delete-row="refreshTasks"
                    :overriden-values="{
                        tiene_inicio: \$lsw.timer.utils.formatDatestringFromDate(selectedDate, 1)
                        + ' '
                        + \$lsw.timer.utils.formatHour(0, 0)
                    }"
                    :model="{
                        connection: \$lsw.database,
                        databaseId: 'lsw_default_database',
                        rowId: -1,
                        tableId: 'Accion',
                    }" />
            </div>
            <div class="no_tasks_message"
                v-if="isLoading">
                Por favor, aguarde hasta recuperar los datos.
            </div>
            <div class="box_for_date_details"
                v-else-if="(!isLoading) && Array.isArray(selectedDateTasksFormattedPerHour) && selectedDateTasksFormattedPerHour.length">
                <div class="hour_table"
                    v-for="franja, franjaIndex in selectedDateTasksFormattedPerHour"
                    v-bind:key="'franja_horaria_' + franjaIndex">
                    <div class="hour_lapse_separator">
                        <div class="flex_row centered">
                            <div class="flex_1 pad_right_1">
                                <button class="bright_border nowrap"
                                    style="margin-right: 1px;"
                                    v-on:click="() => selectHour(franja.hora)"
                                    :class="{activated: selectedForm === franja.hora}">#️⃣</button>
                            </div>
                            <div class="flex_100">
                                <span>{{ \$lsw.timer.utils.formatHourFromMomento(franja) }}</span>
                                <span> · </span>
                                <span class="hour_compromises">{{ \$lsw.utils.pluralizar("compromiso", "compromisos", "%i %s", Object.keys(franja.tareas).length) }}</span>
                            </div>
                            <div class="flex_1">
                                <div class="flex_1 flex_row centered">
                                    <span v-on:click="() => toggleHour(franja.hora)">
                                        <button class="bright_border nowrap activated"
                                            v-if="hiddenDateHours.indexOf(franja.hora) === -1">🔓</button>
                                        <button class="bright_border nowrap"
                                            v-else>🔒</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <lsw-schema-based-form v-if="selectedForm === franja.hora"
                        :on-submit="v => \$lsw.database.insert('Accion', v).then(refreshTasks)"
                        :on-delete-row="refreshTasks"
                        :overriden-values="{
                            tiene_inicio: \$lsw.timer.utils.formatDatestringFromDate(selectedDate, 1)
                            + ' '
                            + \$lsw.timer.utils.formatHour(franja.hora, franja.minuto || 0)
                        }"
                        :model="{
                            connection: \$lsw.database,
                            databaseId: 'lsw_default_database',
                            rowId: -1,
                            tableId: 'Accion',
                        }" />
                    <div class="hour_lapse_list"
                        v-show="hiddenDateHours.indexOf(franja.hora) === -1">
                        <template v-for="tarea, tareaIndex in franja.tareas">
                            <div class="hour_task_block"
                                :class="{is_completed: tarea.tiene_estado === 'completada', is_failed: tarea.tiene_estado === 'fallida', is_pending: tarea.tiene_estado === 'pendiente'}"
                                v-bind:key="'franja_horaria_' + franjaIndex + '_tarea_' + tareaIndex">
                                <div class="hour_task_pill pill">
                                    <div class="flex_1 hour_task_dragger pill_start"
                                        style="padding-top: 4px;">
                                        <div class=""
                                            style="min-width: 20px;padding-left: 3px;padding-top: 2px;">❗️</div>
                                    </div>
                                    <div class="flex_1 hour_task_details_start pill_middle">
                                        <div class="lighted_cell" :class="{psicodelic_cell: hasPsicodelia}">{{ \$lsw.timer.utils.formatHourFromMomentoCode(tarea.tiene_inicio, true) ?? '💩' }}
                                        </div>
                                    </div>
                                    <div class="flex_1 hour_task_details_duration pill_middle">
                                        <div class="lighted_cell">{{ tarea.tiene_duracion || '🤔' }}</div>
                                    </div>
                                    <div class="flex_100 hour_task_name pill_middle" style="overflow: hidden;" v-on:click="() => advanceTaskState(tarea)">
                                        <div class="lighted_cell" style="text-overflow: ellipsis; overflow: clip; max-width: 100%;">{{ tarea.en_concepto || '🤔' }}</div>
                                    </div>
                                    <div class="flex_1 hour_task_editer pill_middle button_pill_cell">
                                        <button v-on:click="() => openUpdateTaskDialog(tarea)"
                                            :class="{activated: selectedForm === tarea.id}">#️⃣</button>
                                    </div>
                                    <div class="flex_1 hour_task_editer pill_end button_pill_cell">
                                        <button class="danger_button" v-on:click="(e) => openDeleteTaskDialog(tarea, e)">❌</button>
                                    </div>
                                </div>
                                <lsw-schema-based-form v-if="selectedForm === tarea.id"
                                    :on-submit="v => onUpdateTask(v, tarea)"
                                    :on-delete-row="refreshTasks"
                                    :overriden-values="{
                                        tiene_inicio: \$lsw.timer.utils.formatDatestringFromDate(selectedDate, 1)
                                        + ' '
                                        + \$lsw.timer.utils.formatHour(franja.hora, franja.minuto || 0)
                                    }"
                                    :model="{
                                        connection: \$lsw.database,
                                        databaseId: 'lsw_default_database',
                                        rowId: tarea.id,
                                        tableId: 'Accion',
                                    }" />
                            </div>
                        </template>
                    </div>
                </div>
            </div>
            <div class="no_tasks_message"
                v-else>
                No hay tareas asignadas para este día.
            </div>
        </div>
    </div>
</div>`,
  props: {},
  data() {
    this.$trace("lsw-agenda.data");
    return {
      counter: 0,
      isLoading: false,
      hasPsicodelia: true,
      selectedContext: "agenda",
      selectedSubmenu1: 'none',
      selectedDate: undefined,
      selectedDateTasks: undefined,
      selectedDateTasksFormattedPerHour: undefined,
      selectedForm: undefined,
      hiddenDateHours: [],
    };
  },
  methods: {
    showAllHours() {
      this.$trace("lsw-agenda.methods.showAllHours");
      this.hiddenDateHours = [];
    },
    hideAllHours() {
      this.$trace("lsw-agenda.methods.hideAllHours");
      this.hiddenDateHours = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23"];
    },
    selectContext(id, parameters = {}) {
      this.$trace("lsw-agenda.methods.selectContext");
      this.selectedSubmenu1 = "none";
      this.selectedContextParameters = parameters;
      this.selectedContext = id;
    },
    selectSubmenu1(id) {
      this.$trace("lsw-agenda.methods.selectSubmenu1");
      this.selectedSubmenu1 = id;
    },
    togglePsicodelia() {
      this.$trace("lsw-agenda.methods.togglePsicodelia");
      this.hasPsicodelia = !this.hasPsicodelia;
    },
    toggleHour(hourInt) {
      this.$trace("lsw-agenda.methods.toggleHour");
      const pos = this.hiddenDateHours.indexOf(hourInt);
      if (pos === -1) {
        this.hiddenDateHours.push(hourInt);
      } else {
        this.hiddenDateHours.splice(pos, 1);
      }
    },
    async loadDateTasks(newDate, calendario) {
      this.$trace("lsw-agenda.methods.loadDateTasks");
      this.isLoading = true;
      console.log("Loading date tasks of: " + newDate);
      try {
        this.selectedDate = newDate;
        const selectedDate = this.selectedDate;
        const selectedDateTasks = await this.$lsw.database.selectMany("Accion", valueBrute => {
          try {
            const valueList = Timeformat_parser.parse(valueBrute.tiene_inicio);
            const value = valueList[0];
            const isSameYear = value.anio === selectedDate.getFullYear();
            const isSameMonth = value.mes === (selectedDate.getMonth() + 1);
            const isSameDay = value.dia === selectedDate.getDate();
            const isAccepted = isSameYear && isSameMonth && isSameDay;
            return isAccepted;
          } catch (error) {
            return true;
          }
        });
        this.selectedDateTasks = selectedDateTasks;
        this.propagateDateTasks();
      } catch (error) {
        console.log("Error loading date taskes:", error);
      } finally {
        setTimeout(() => {this.isLoading = false}, 100);
      }
      if(calendario) {
        const selectedDate = this.selectedDate;
        const tasksOfMonth = await this.$lsw.database.selectMany("Accion", valueBrute => {
          const valueList = Timeformat_parser.parse(valueBrute.tiene_inicio);
          const value = valueList[0];
          const isSameYear = value.anio === selectedDate.getFullYear();
          const isSameMonth = value.mes === (selectedDate.getMonth() + 1);
          const isAccepted = isSameYear && isSameMonth;
          return isAccepted;
        });
        const tasksOfMonthByDay = tasksOfMonth.reduce((out, item) => {
          const valueList = Timeformat_parser.parse(item.tiene_inicio);
          const value = valueList[0];
          const day = value.dia;
          if(!(day in out)) {
            out[day] = [];
          }
          out[day].push(item);
          return out;
        }, {});
        calendario.establecer_marcadores_del_mes(tasksOfMonthByDay);
      }
    },
    groupTasksByHour(tareas = this.selectedDateTasks) {
      this.$trace("lsw-agenda.methods.groupTasksByHour");
      const mapaHoras = {};
      Agrupacion_inicial:
      for (let i = 0; i < tareas.length; i++) {
        const tarea = tareas[i];
        const { tiene_inicio } = tarea;
        const [inicioObject] = Timeformat_parser.parse(tiene_inicio);
        const { hora, minuto } = inicioObject;
        if(typeof hora !== "number") {
          continue Agrupacion_inicial;
        }
        if (!(hora in mapaHoras)) {
          mapaHoras[hora] = [];
        }
        mapaHoras[hora].push(tarea);
      }
      //return mapaHoras;
      const segunHoras = [];
      Formateo_final:
      for(let hora in mapaHoras) {
        const lista = mapaHoras[hora];
        segunHoras.push({
          hora,
          tareas: lista,
        });
      }
      return segunHoras;
    },
    propagateDateTasks() {
      this.$trace("lsw-agenda.methods.propagateDateTasks");
      this.selectedDateTasksFormattedPerHour = this.groupTasksByHour();
    },
    async openInsertTaskDialog() {
      this.$trace("lsw-agenda.methods.openInsertTaskDialog");
      // @TODO: 
    },
    async openUpdateTaskDialog(tarea) {
      this.$trace("lsw-agenda.methods.openUpdateTaskDialog");
      // @TODO: 
      this.selectHour(tarea.id);
    },
    async openDeleteTaskDialog(tarea, e) {
      this.$trace("lsw-agenda.methods.openDeleteTaskDialog");
      const confirmed = await Vue.prototype.$dialogs.open({
        title: "Eliminar registro",
        template: `
          <div>
            <div class="pad_2">¿Seguro que quieres eliminar el registro?</div>
            <hr class="margin_0" />
            <div class="pad_2 text_align_right">
              <button class="danger_button" v-on:click="() => accept(true)">Eliminar</button>
              <button class="" v-on:click="() => accept(false)">Cancelar</button>
            </div>
          </div>
        `,
      });
      console.log(confirmed);
      if(!confirmed) return false;
      await this.$lsw.database.delete("Accion", tarea.id);
      this.selectedForm = undefined;
      this.refreshTasks();
    },
    selectHour(hora) {
      this.$trace("lsw-agenda.methods.selectHour");
      if(this.selectedForm === hora) {
        this.selectedForm = undefined;
      } else {
        this.selectedForm = hora;
      }
    },
    async refreshTasks() {
      this.$trace("lsw-agenda.methods.refreshTasks");
      this.loadDateTasks(new Date(this.selectedDate));
    },
    async onUpdateTask(v, tarea) {
      this.$trace("lsw-agenda.methods.onUpdateTask");
      await this.$lsw.database.update('Accion', tarea.id, v);
      this.selectedForm = tarea.id;
      this.refreshTasks();
    },
    async onInsertTask(v, tarea) {
      this.$trace("lsw-agenda.methods.onInsertTask");
      const id = await this.$lsw.database.insert('Accion', v);
      this.selectedForm = id;
      this.refreshTasks();
    },
    async advanceTaskState(tarea) {
      this.$trace("lsw-agenda.methods.onInsertTask");
      const siguienteEstado = (() => {
        switch(tarea.tiene_estado) {
          case "pendiente": return "completada";
          case "completada": return "fallida";
          case "fallida": return "pendiente";
          default: return "pendiente";
        }
      })();
      await this.$lsw.database.overwrite('Accion', tarea.id, {
        tiene_estado: siguienteEstado
      });
      this.refreshTasks();
    }
  },
  watch: {
  },
  async mounted() {
    try {
      this.$trace("lsw-agenda.mounted");
      const selectedDate = this.$refs.calendario.getValue();
      this.loadDateTasks(selectedDate);
    } catch (error) {
      console.log(error);
    }
  }
});
Vue.component("LswAgendaAccionAdd", {
  template: `<div class="LswAgendaAccionAdd" style="padding-top: 4px;">
  <template>
    <lsw-schema-based-form
      :on-submit="insertAccion"
      :model="{
        databaseId: 'lsw_default_database',
        tableId: 'Accion',
        rowId: -1,
      }"
    />
  </template>
</div>`,
  props: {},
  data() {
    this.$trace("lsw-agenda-accion-add.data");
    return {
      // 
    };
  },
  methods: {
    async insertAccion(v) {
      this.$trace("lsw-agenda-accion-add.methods.insertAccion");
      await this.$lsw.database.insert("Accion", v);
      // @TODO: should redirect
    }
  },
  watch: {},
  mounted() {
    try {
      this.$trace("lsw-agenda-accion-add.mounted");
    } catch(error) {
      console.log(error);
    }
  }
});
Vue.component("LswAgendaAccionSearch", {
  template: `<div class="LswAgendaAccionSearch">
  <lsw-table v-if="isLoaded"
    :initial-input="rows"></lsw-table>
</div>`,
  props: {},
  data() {
    this.$trace("lsw-agenda-accion-search.data");
    return {
      isLoaded: false,
    };
  },
  methods: {
    async loadRows() {
      this.$trace("lsw-agenda-accion-search.methods.loadRows");
      this.rows = await this.$lsw.database.selectMany("Accion", it => true);
      this.isLoaded = true;
    }
  },
  watch: {},
  mounted() {
    try {
      this.$trace("lsw-agenda-accion-search.mounted");
      this.loadRows();
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
Vue.component("LswAgendaConceptoAdd", {
  template: `<div class="LswAgendaConceptoAdd">
  <template>
    <lsw-schema-based-form
      :on-submit="insertConcepto"
      :model="{
        databaseId: 'lsw_default_database',
        tableId: 'Concepto',
        rowId: -1,
      }"
    />
  </template>
</div>`,
  props: {},
  data() {
    this.$trace("lsw-agenda-concepto-add.data");
    return {
      // 
    };
  },
  methods: {
    async insertConcepto(v) {
      this.$trace("lsw-agenda-concepto-add.methods.insertConcepto");
      await this.$lsw.database.insert("Concepto", v);
      // @TODO: should redirect
    }
  },
  watch: {},
  mounted() {
    try {
      this.$trace("lsw-agenda-concepto-add.mounted");
    } catch(error) {
      console.log(error);
    }
  }
});
Vue.component("LswAgendaConceptoSearch", {
  template: `<div class="LswAgendaConceptoSearch">
  <lsw-table v-if="isLoaded"
    :initial-input="rows"></lsw-table>
</div>`,
  props: {},
  data() {
    this.$trace("lsw-agenda-concepto-search.data");
    return {
      isLoaded: false,
    };
  },
  methods: {
    async loadRows() {
      this.$trace("lsw-agenda-concepto-search.methods.loadRows");
      this.rows = await this.$lsw.database.selectMany("Concepto", it => true);
      this.isLoaded = true;
    }
  },
  watch: {},
  mounted() {
    try {
      this.$trace("lsw-agenda-concepto-search.mounted");
      this.loadRows();
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
  <template>
    <lsw-schema-based-form
      :on-submit="insertLimitador"
      :model="{
        databaseId: 'lsw_default_database',
        tableId: 'Limitador',
        rowId: -1,
      }"
    />
  </template>
</div>`,
  props: {},
  data() {
    this.$trace("lsw-agenda-limitador-add.data");
    return {
      // 
    };
  },
  methods: {
    async insertLimitador(v) {
      this.$trace("lsw-agenda-limitador-add.methods.insertLimitador");
      await this.$lsw.database.insert("Limitador", v);
      // @TODO: should redirect
    }
  },
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
  <lsw-table v-if="isLoaded"
    :initial-input="rows"></lsw-table>
</div>`,
  props: {},
  data() {
    this.$trace("lsw-agenda-limitador-search.data");
    return {
      isLoaded: false,
    };
  },
  methods: {
    async loadRows() {
      this.$trace("lsw-agenda-limitador-search.methods.loadRows");
      this.rows = await this.$lsw.database.selectMany("Limitador", it => true);
      this.isLoaded = true;
    }
  },
  watch: {},
  mounted() {
    try {
      this.$trace("lsw-agenda-limitador-search.mounted");
      this.loadRows();
    } catch(error) {
      console.log(error);
    }
  }
});
Vue.component("LswAgendaLimitadorViewer", {
  template: `<div class="LswAgendaLimitadorViewer">
    <div v-if="isLoaded">
      <div class="infracciones_list" v-if="infracciones.length">
        <template v-for="infraccion, infraccionIndex in infracciones">
          <div class="infraccion_item" v-bind:key="'infraccion_' + infraccionIndex">
            <div class="infraccion_text">⚠️ <b style="text-decoration: underline;">Infracción {{ infraccionIndex + 1 }}.</b> {{ infraccion.message }}</div>
          </div>
        </template>
      </div>
    </div>
  </div>`,
  props: {},
  data() {
    this.$trace("lsw-agenda-limitador-viewer.data");
    return {
      isLoaded: false,
      limitadores: undefined,
      infracciones: [],
    };
  },
  methods: {
    fixAsyncCode(asyncCode) {
      if(asyncCode.trim().startsWith("async ")) {
        return `return await (${asyncCode}).call(this)`
      }
      return asyncCode;
    },
    async executeLimitadores() {
      const lims = this.limitadores;
      for(let index=0; index<lims.length; index++) {
        const limitador = lims[index];
        const asyncCode = limitador.tiene_funcion;
        const AsyncFunc = (async function() {}).constructor;
        const fixedAsyncCode = this.fixAsyncCode(asyncCode);
        const asyncFunc = new AsyncFunc(fixedAsyncCode);
        console.log(asyncFunc);
        try {
          await asyncFunc.call(this);
        } catch (error) {
          this.infracciones.push(error);
        }
      }
    },
    async loadLimitadores() {
      this.$trace("lsw-agenda-limitador-viewer.methods.loadLimitadores");
      const limitadores = await this.$lsw.database.selectMany("Limitador");
      this.limitadores = limitadores;
      await this.executeLimitadores();
    }
  },
  watch: {},
  async mounted() {
    try {
      this.$trace("lsw-agenda-limitador-viewer.mounted");
      await this.loadLimitadores();
      this.isLoaded = true;
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
Vue.component("LswFormBuilder", {
  template: `<div class="lsw-form-builder">
    <div v-if="formMetadata">
        <div v-form.form="formMetadata.form.vForm"
            ref="currentFormElement"></div>
        <button v-if="validate?.text"
            v-on:click="() => \$refs.currentFormElement.\$lswFormMetadata.methods.validate()">{{ validate.text }}</button>
        <button v-if="submit?.text"
            v-on:click="() => \$refs.currentFormElement.\$lswFormMetadata.methods.submit()">{{ submit.text }}</button>
        <div v-form.error="{
            parentScope: formMetadata.form.scope,
            parentId: formMetadata.form.id + '.error'
        }"></div>
        <div :class="field?.css?.classes?.group || {}"
            v-for="field, fieldIndex in formMetadata.fields"
            v-bind:key="'list_of_fields_index_' + fieldIndex">
            <div class="form_field_label"
                v-if="field.label">
                {{ field.label }}
            </div>
            <div v-if="field.component">
                <component :is="field.component.id"
                    v-bind="field.component.props || {}"
                    v-on="field.component.events || {}"></component>
            </div>
            <template v-else-if="field.type">
                <lsw-formtype v-if="Vue.options.components.LswFormtype" :of="field" />
                <div v-if="field.type === 'text'">
                    <input type="text"
                        v-bind="field.input?.props || {}"
                        v-on="field.input?.events || {}"
                        v-form.input="field.vForm" />
                </div>
                <div v-else-if="field.type === 'longtext'">
                    <textarea v-bind="field.input?.props || {}"
                        v-on="field.input?.events || {}"
                        v-form.input="field.vForm"></textarea>
                </div>
                <div v-else-if="field.type === 'point'">
                    <div class="control_upper" v-form.control="field.vForm">
                        <div class="control_lower" v-form.control="field.vFormForPoint">
                            <div v-for="dimension, dimensionIndex in field.dimensions" v-bind:key="'list_' + fieldIndex + '_dimensions_index_' + dimensionIndex">
                                <div class="form_field_label" v-if="dimension.label">{{ dimension.label }}</div>
                                <input type="number"
                                    v-bind="dimension.input?.props || {}"
                                    v-on="dimension.input?.events || {}"
                                    v-form.input="dimension.vForm" />
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</div>`,
  props: {
    validate: {
      type: Object,
      default: () => ({})
    },
    submit: {
      type: Object,
      default: () => ({})
    },
    fields: {
      type: Array,
      required: true,
    }
  },
  data() {
    this.$trace("lsw-form-builder.data");
    this.formatFields();
    return {
      formMetadata: false,
    };
  },
  methods: {
    setError(error) {
      this.$trace("lsw-form-builder.setError");
      this.error = error;
    },
    formatFields(value = this.fields) {
      this.$trace("lsw-form-builder.formatFields");
      try {
        const $outterScope = {};
        if (value.length === 0) {
          throw new Error("Required property «prop.fields» to be an array on «LswFormBuilder.props.fields.validator»");
        }
        const fields = [];
        const form = {
          scope: $outterScope,
          id: "form.default"
        };
        const metadata = { fields, form, scope: $outterScope };
        form.vForm = {
          selfScope: $outterScope,
          selfId: form.id,
          onValidate: typeof this.validate.onClick === 'function' ? this.validate.onClick : this.$noop,
          onSubmit: typeof this.submit.onClick === 'function' ? this.submit.onClick : this.$noop,
        }
        for (let index = 0; index < value.length; index++) {
          const row = value[index];
          if (typeof row !== "object") {
            throw new Error(`Required all rows on «prop.fields» to be an object but row «${index}» does not on «LswFormBuilder.props.fields.validator»`)
          }
          if (!("type" in row)) {
            throw new Error(`Required all rows on «prop.fields» to have property «type» but row «${index}» does not on «LswFormBuilder.props.fields.validator»`)
          }
          if (typeof row.type !== "string") {
            throw new Error(`Required all rows on «prop.fields» to have property «type» as a string but row «${index}» does not on «LswFormBuilder.props.fields.validator»`)
          }
          if (!("name" in row)) {
            throw new Error(`Required all rows on «prop.fields» to have property «name» but row «${index}» does not on «LswFormBuilder.props.fields.validator»`)
          }
          if (typeof row.name !== "string") {
            throw new Error(`Required all rows on «prop.fields» to have property «name» as a string but row «${index}» does not on «LswFormBuilder.props.fields.validator»`)
          }
          const $innerScope = {};
          row.vForm = {
            parentScope: $outterScope,
            parentId: metadata.form.id,
            selfScope: $innerScope,
            selfId: row.name,
            name: row.name,
          };
          if (row.type === "point") {
            row.dimensions = [];
            row.vFormForPoint = {
              parentScope: $innerScope,
              parentId: row.name,
              selfScope: $innerScope,
              selfId: "point.control",
              name: null,
            };
            row.dimensions = [{
              label: "Axis 1:",
              vForm: {
                parentScope: $innerScope,
                parentId: "point.control",
                name: "axis_1"
              }
            }, {
              label: "Axis 2:",
              vForm: {
                parentScope: $innerScope,
                parentId: "point.control",
                name: "axis_2"
              }
            }];
            if (row.dimensions.length < 2) {
              throw new Error(`Required property «row.dimensions» to have more than 1 item on row «${index}» on «adaptRowToVForm»`);
            }
            for (let indexDimension = 0; indexDimension < row.dimensions.length; indexDimension++) {

            }
          }
          fields.push(row);
        }
        this.formMetadata = Object.freeze(metadata);
      } catch (error) {
        console.log(error);
        this.setError(error);
      }
    },
    adaptRowToVForm(row, metadata, indexRow) {
      this.$trace("lsw-form-builder.adaptRowToVForm");

    }
  },
  watch: {},
  mount() {
    try {
      this.$trace("lsw-form-builder.mount");
    } catch (error) {
      console.log(error);
    }
  },
  mounted() {
    try {
      this.$trace("lsw-form-builder.mounted");
      this.formatFields();
    } catch (error) {
      console.log(error);
    }
  }
});
Vue.component("LswFormtype", {
  template: `<div class="lsw-formtype">
    <component
        v-if="definition.name in Vue.options.components"
        :is="definition.name"
        v-on="definition.events"
        v-bind="definition.props"></component>
    <div v-else>No se encontró tipo {{ definition.name || "-" }}</div>
</div>`,
  props: {
    definition: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    this.$trace("lsw-formtype.data");
    this._validateDefinition(this.definition);
    return {

    };
  },
  methods: {
    _validateDefinition(definitionObject) {
      const ensureDefinition = $ensure(definitionObject);
      ensureDefinition.type("object");
      ensureDefinition.to.have.uniquelyKeys(["name", "props", "events"]);
      ensureDefinition.to.have.key("name");
      ensureDefinition.its("name").type("string");
      if ("props" in definitionObject) {
        ensureDefinition.its("props").type("object");
      }
      if ("events" in definitionObject) {
        ensureDefinition.its("events").type("object");
      }
    }
  },
  watch: {},
  mounted() {
    try {
      this.$trace("lsw-formtype.mounted");
    } catch (error) {
      console.log(error);
    }
  }
});
Vue.component("LswControlLabel", {
  template: `<div class="lsw_control_label">
    <div class="flex_row centered"
        style="margin-bottom:2px;">
        <div class="formtype_enunciate_block flex_100">
            <div class="formtype_label">
                <template v-if="typeof label === 'string'">
                    {{ label }}
                </template>
                <template v-else-if="label !== false">
                    Campo {{ name }}:
                </template>
            </div>
        </div>
        <div class="flex_1 pad_left_1 flex_row">
            <template v-if="parentFormtype && (parentFormtype.isEditable === true)">
                <button class="margin_left_1" v-on:click="() => parentFormtype.validate()" v-if="settings.column?.hasValidator || true">
                    ✅
                </button>
            </template>
            <button class="margin_left_1" :class="{activated: isShowingDescription}" v-on:click="() => toggleDescription()">ℹ️</button>
            <template v-if="parentFormtype && (parentFormtype.isEditable === true)">
                <button class="margin_left_1 button_to_uneditable activated" v-on:click="makeUneditable">🔓</button>
            </template>
            <template v-else>
                <button class="margin_left_1 button_to_editable" v-on:click="makeEditable">🔒</button>
            </template>
        </div>
    </div>
    <div class="formtype_enunciate_extra_info" v-if="isShowingDescription">
        ℹ️: {{ description }}
    </div>
</div>`,
  props: {
    parentFormtype: {
      type: Object,
      required: false,
    },
    settings: {
      type: Object,
      default: () => ({})
    },
  },
  data() {
    this.$trace("lsw-control-label-control.data");
    this.validateSettings();
    return {
      uuid: LswRandomizer.getRandomString(5),
      isShowingDescription: false,
      name: this.settings?.name,
      label: (typeof (this.settings?.label) !== "undefined") ? this.settings.label : this.settings?.column?.hasLabel,
      description: this.settings?.column?.hasDescription
    };
  },
  methods: {
    toggleDescription() {
      this.isShowingDescription = !this.isShowingDescription;
    },
    validateSettings() {
      this.$trace("lsw-control-label-control.methods.validateSettings");
      LswXForm.validateSettings(this.settings);
      const ensureSettings = $ensure(this.settings);
      const checkSettings = $check(this.settings);
      // @OK
    },
    makeEditable() {
      this.$trace("lsw-control-label-control.methods.makeEditable");
      Behaviour_for_controls: {
        const immediateControl = LswVue2.getClosestParent(this, component => {
          return component.$el.classList.contains("lsw_form_control");
        });
        if (immediateControl) {
          immediateControl.isEditable = true;
          // immediateControl.$forceUpdate(true);
        }
      }
      Behaviour_for_schema_forms: {
        
      }
    },
    makeUneditable() {
      this.$trace("lsw-control-label-control.methods.makeUneditable");
      Behaviour_for_controls: {
        const immediateControl = LswVue2.getClosestParent(this, component => {
          return component.$el.classList.contains("lsw_form_control");
        });
        if (immediateControl) {
          immediateControl.isEditable = false;
          // immediateControl.$forceUpdate(true);
        }

      }
      Behaviour_for_schema_forms: {
        
      }
    }
  },
  watch: {},
  mounted() {
    try {
      this.$trace("lsw-control-label-control.mounted");
    } catch (error) {
      console.log(error);
    }
  }
});
Vue.component("LswControlError", {
  template: `<div class="lsw_control_error">
    <div class="box_error_container position_relative"
        ref="errorBox"
        v-xform.error="{}">
        <div class="position_absolute top_0" style="right: 20px;">
            <div class="pad_1">
                <button v-on:click="removeError">❎</button>
            </div>
        </div>
        <div class="box_error_content">
            <div class="errorMessage"></div>
        </div>
    </div>
</div>`,
  props: {
    
  },
  data() {
    this.$trace("lsw-control-error-control.data");
    return {
      
    };
  },
  methods: {
    removeError() {
      this.$trace("lsw-control-error-control.methods.removeError");
      this.$refs.errorBox.$xform.$clearError();
    }
  },
  watch: {},
  mounted() {
    try {
      this.$trace("lsw-control-error-control.mounted");
    } catch (error) {
      console.log(error);
    }
  }
});
Vue.component("LswErrorViewer", {
  template: `<div class="lsw_error_viewer">
    <div class="box_error_container error_is_affecting_field position_relative" v-if="currentError">
        <div class="position_absolute top_0" style="right: 20px;">
            <div class="pad_1">
                <button v-on:click="() => setError()">❎</button>
            </div>
        </div>
        <div class="box_error_content">
            <div class="errorMessage">
                <template v-if="currentError.location">
                    <span>{{ currentError.name }}</span>
                    <span>{{ currentError.location.start.offset }}-{{ currentError.location.end.offset }}</span>
                    <span> | </span>
                    <span></span>
                    <span>{{ currentError.location.start.line }}:{{ currentError.location.start.column }}-{{ currentError.location.end.line }}:{{ currentError.location.end.column }}</span>
                    <span>{{ currentError.found }}</span>
                    <span>{{ currentError.message }}</span>
                    <pre style="font-size:10px;">  - {{ currentError.expected.map(it => JSON.stringify(it.text)).join("\n  - ") }}</pre>
                </template>
                <template v-else>
                    {{ currentError.name }}: {{ currentError.message }}
                </template>
            </div>
        </div>
    </div>
</div>`,
  props: {
    error: {
      type: [Object, Boolean],
      default: () => false
    },
    onClearError: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    this.$trace("lsw-error-viewer.data");
    return {
      currentError: this.error,
    };
  },
  methods: {
    setError(error = undefined) {
      this.$trace("lsw-error-viewer.methods.setError");
      this.currentError = error;
      if(typeof error === "undefined") {
        this.onClearError();
      }
    },
  },
  watch: {},
  mounted() {
    try {
      this.$trace("lsw-error-viewer.mounted");
    } catch (error) {
      console.log(error);
    }
  }
});
Vue.component("LswTextControl", {
  template: `<div class="lsw_text_control lsw_formtype lsw_form_control">
    <lsw-control-label :settings="settings" :parent-formtype="this" />
    <div v-show="isEditable">
        <div ref="controller" v-xform.control="{
            name: settings.name,
            onValidate: settings.column.hasValidator || \$noop,
            onSetError: () => {
                isEditable = true;
            }
        }">
            <div class="flex_row">
                <input class="flex_100"
                    type="text"
                    v-model="value"
                    v-on="settings.input?.events || {}"
                    v-bind="settings.input?.props || {}"
                    v-xform.input="{name: '*',onValidate: settings.input?.onValidate || \$noop}"
                    ref="textInput" />
            </div>
            <lsw-control-error />
        </div>
    </div>
</div>`,
  props: {
    settings: {
      type: Object,
      default: () => ({})
    },
  },
  data() {
    this.$trace("lsw-text-control.data");
    this.validateSettings();
    return {
      uuid: LswRandomizer.getRandomString(5),
      value: this.settings?.initialValue || "",
      isEditable: true,
    };
  },
  methods: {
    async submit() {
      this.$trace("lsw-text-control.methods.submit");
      return LswFormtypes.utils.submitControl.call(this);
      
    },
    validate() {
      this.$trace("lsw-text-control.methods.validateSettings");
      return LswFormtypes.utils.validateControl.call(this);
    },
    validateSettings() {
      this.$trace("lsw-text-control.methods.validateSettings");
      return LswFormtypes.utils.validateSettings.call(this);
    }
  },
  watch: {},
  mounted() {
    try {
      this.$trace("lsw-text-control.mounted");
    } catch (error) {
      console.log(error);
    }
  }
});
Vue.component("LswLongTextControl", {
  template: `<div class="lsw_long_text_control lsw_formtype lsw_form_control">
    <lsw-control-label :settings="settings"
        :parent-formtype="this" />
    <div v-show="isEditable">
        <div ref="controller" v-xform.control="{
            name: settings.name,
            onValidate: settings.column.hasValidator || \$noop,
            onSetError: () => {
                isEditable = true;
            }
        }">
            <div class="flex_row">
                <textarea class="flex_100 nowrap"
                    type="text"
                    v-model="value"
                    v-on="settings?.input?.events || {}"
                    v-bind="settings?.input?.props || {}"
                    v-xform.input="{name: '*'}"
                    spellcheck="false"
                    ref="textInput" />
            </div>
            <lsw-control-error />
        </div>
    </div>
</div>`,
  props: {
    settings: {
      type: Object,
      default: () => ({})
    },
  },
  data() {
    this.$trace("lsw-long-text-control.data");
    this.validateSettings();
    return {
      uuid: LswRandomizer.getRandomString(5),
      value: this.settings?.initialValue || "",
      isEditable: true,
    };
  },
  methods: {
    async submit() {
      this.$trace("lsw-text-control.methods.submit");
      return LswFormtypes.utils.submitControl.call(this);
      
    },
    validate() {
      this.$trace("lsw-text-control.methods.validateSettings");
      return LswFormtypes.utils.validateControl.call(this);
    },
    validateSettings() {
      this.$trace("lsw-text-control.methods.validateSettings");
      return LswFormtypes.utils.validateSettings.call(this);
    }
  },
  watch: {},
  mounted() {
    try {
      this.$trace("lsw-long-text-control.mounted");
    } catch (error) {
      console.log(error);
    }
  }
});
Vue.component("LswDateControl", {
  template: `<div class="lsw_date_control lsw_formtype lsw_form_control">
    <lsw-control-label :settings="settings"
        :parent-formtype="this" />
    <div v-show="isEditable">
        <div ref="controller" v-xform.control="{
            name: settings.name,
            onValidate: settings.column.hasValidator || \$noop,
            onSetError: () => {
                isEditable = true;
            }
        }">
            <div class="">
                <div class="flex_row">
                    <div class="flex_1 pad_right_1">
                        <button v-on:click="toggleCalendar" :class="{activated: isShowingCalendar}">📆</button>
                    </div>
                    <div class="flex_100">
                        <input class="width_100" type="text" v-model="value" :placeholder="respectivePlaceholder" v-xform.input="{name:'*'}"/>
                    </div>
                </div>
                <!--pre>{{ \$lsw.utils.stringify(settings) }}</pre-->
            </div>
            <div class="pad_top_1" v-if="isShowingCalendar">
                <lsw-calendario :modo="settings.column.isFormSubtype" :al-cambiar-valor="setValueFromCalendar" :valor-inicial="value" />
            </div>
            <lsw-control-error />
        </div>
    </div>
</div>`,
  props: {
    settings: {
      type: Object,
      default: () => ({})
    },
    mode: {
      type: String,
      default: () => "date" // can be: date, datetime, time
    }
  },
  data() {
    this.$trace("lsw-date-control.data");
    this.validateMode();
    this.validateSettings();
    const respectivePlaceholder = this.generatePlaceholder();
    return {
      uuid: LswRandomizer.getRandomString(5),
      value: this.settings?.initialValue || "",
      isEditable: true,
      isShowingCalendar: false,
      respectivePlaceholder,
      formMode: this.settings?.column?.isFormSubtype || this.mode || "datetime",
    };
  },
  methods: {
    toggleCalendar() {
      this.$trace("LswDateControl.methods.toggleCalendar", arguments);
      this.isShowingCalendar = !this.isShowingCalendar;
    },
    generatePlaceholder() {
      return this.settings.column.isFormSubtype === "date" ? 'Ej: 2025/01/01' :
        this.settings.column.isFormSubtype === "datetime" ? 'Ej: 2025/01/01 00:00' :
        this.settings.column.isFormSubtype === "time" ? 'Ej: 00:00' : ''
    },
    async submit() {
      this.$trace("lsw-text-control.methods.submit");
      return LswFormtypes.utils.submitControl.call(this);
    },
    validate() {
      this.$trace("lsw-text-control.methods.validateSettings");
      return LswFormtypes.utils.validateControl.call(this);
    },
    validateSettings() {
      this.$trace("lsw-text-control.methods.validateSettings");
      return LswFormtypes.utils.validateSettings.call(this);
    },
    validateMode() {
      this.$trace("lsw-date-control.methods.validateSettings");
      $ensure({mode: this.mode}, 1).to.be.oneOf(["date", "time", "datetime"]);
    },
    setValueFromCalendar(v) {
      this.$trace("lsw-date-control.methods.setValueFromCalendar");
      console.log("Valor:", v);
      const value = LswTimer.utils.formatDatestringFromDate(v);
      if(this.formMode === "datetime") {
        this.value = value;
      } else if(this.formMode === "date") {
        this.value = value.split(" ")[0];
      } else if(this.formMode === "time") {
        this.value = value.split(" ")[1];
      } else {
        this.value = value;
      }
    }
  },
  watch: {},
  mounted() {
    try {
      this.$trace("lsw-date-control.mounted");
    } catch (error) {
      console.log(error);
    }
  }
});
Vue.component("LswDurationControl", {
  template: `<div class="lsw_duration_control lsw_formtype lsw_form_control">
    <lsw-control-label :settings="settings"
        :parent-formtype="this" />
    <lsw-error-viewer v-if="validateError" :error="validateError" />
    <lsw-error-viewer v-if="submitError" :error="submitError" />
    <div v-show="isEditable" v-else>
        <div ref="controller"
            v-xform.control="{
            name: settings.name,
            onValidate: settings.column.hasValidator || \$noop,
            onSetError: () => {
                isEditable = true;
            }
        }">
            <div class="flex_row">
                <div class="pad_right_1">
                    <button v-on:click="toggleDetails"
                        disabled>⌛️</button>
                </div>
                <input class="flex_100"
                    type="text"
                    v-model="value"
                    v-on="settings?.input?.events || {}"
                    v-bind="settings?.input?.props || {}"
                    v-xform.input="{name: '*'}"
                    ref="textInput" />
            </div>
            <lsw-control-error />
        </div>
    </div>
</div>`,
  props: {
    settings: {
      type: Object,
      default: () => ({})
    },
  },
  data() {
    this.$trace("lsw-duration-control.data");
    this.validateSettings();
    return {
      uuid: LswRandomizer.getRandomString(5),
      value: this.settings?.initialValue || "",
      isEditable: true,
      isShowingDetails: false,
      submitError: false,
      validateError: false,
    };
  },
  methods: {
    async submit() {
      this.$trace("lsw-text-control.methods.submit");
      try {
        return LswFormtypes.utils.submitControl.call(this);
      } catch (error) {
        this.submitError = error;
        throw error;
      }
    },
    validate() {
      this.$trace("lsw-text-control.methods.validateSettings");
      try {
        return LswFormtypes.utils.validateControl.call(this);
      } catch (error) {
        this.validateError = error;
        throw error;
      }
    },
    validateSettings() {
      this.$trace("lsw-text-control.methods.validateSettings");
      return LswFormtypes.utils.validateSettings.call(this);
    },
    toggleDetails() {
      this.$trace("lsw-duration-control.methods.toggleDetails");
      this.isShowingDetails = !this.isShowingDetails;
    },
    increasePosition(pos) {
      this.$trace("lsw-duration-control.methods.increasePosition");

    },
    decreasePosition(pos) {
      this.$trace("lsw-duration-control.methods.decreasePosition");

    }
  },
  watch: {},
  mounted() {
    try {
      this.$trace("lsw-duration-control.mounted");
    } catch (error) {
      console.log(error);
    }
  }
});
Vue.component("LswNumberControl", {
  template: `<div class="lsw_number_control">
    number control
</div>`,
  props: {
    configurations: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    this.$trace("lsw-number-control.data");
    return {};
  },
  methods: {},
  watch: {},
  mounted() {
    try {
      this.$trace("lsw-number-control.mounted");
    } catch(error) {
      console.log(error);
    }
  }
});
Vue.component("LswOptionsControl", {
  template: `<div class="lsw_options_control lsw_formtype lsw_form_control" keep-alive="true">
    <lsw-control-label :settings="settings"
        :parent-formtype="this" />
    <div v-show="isEditable">
        <div
            v-show="settings.column.hasFormtypeParameters.type === 'selector'"
            ref="controller"
            v-xform.control="{
                name: settings.name,
                onValidate: settings.column.hasValidator || \$noop,
                onSetError: () => {
                    isEditable = true;
                }
            }">
            <select class="width_100" ref="inputter" v-xform.input="{name:'*'}" v-model="value">
                <option :value="opt"
                    v-for="opt, optIndex in settings.column.hasFormtypeParameters.available"
                    v-bind:key="'option-' + optIndex">
                    {{ opt }}
                </option>
            </select>
            <lsw-control-error />
        </div>
    </div>
</div>`,
  props: {
    settings: {
      type: Object,
      default: () => ({})
    },
  },
  data() {
    this.$trace("lsw-options-control.data");
    this.validateSettings();
    return {
      uuid: LswRandomizer.getRandomString(5),
      value: this.settings?.initialValue || "",
      isEditable: true,
      parameters: this.settings?.hasFormtypeParameters || {}
    };
  },
  methods: {
    async submit() {
      this.$trace("lsw-text-control.methods.submit");
      return LswFormtypes.utils.submitControl.call(this);
    },
    validate() {
      this.$trace("lsw-text-control.methods.validateSettings");
      return LswFormtypes.utils.validateControl.call(this);
    },
    validateSettings() {
      this.$trace("lsw-text-control.methods.validateSettings");
      return LswFormtypes.utils.validateSettings.call(this);
    }
  },
  watch: {},
  mounted() {
    try {
      this.$trace("lsw-options-control.mounted");
    } catch (error) {
      console.log(error);
    }
  }
});
Vue.component("LswSourceCodeControl", {
  template: `<div class="lsw_source_code_control">
    source code control
</div>`,
  props: {
    configurations: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    this.$trace("lsw-source-code.data");
    return {};
  },
  methods: {},
  watch: {},
  mounted() {
    try {
      this.$trace("lsw-source-code.mounted");
    } catch(error) {
      console.log(error);
    }
  }
});
Vue.component("LswRefObjectControl", {
  template: `<div class="lsw_ref_object_control lsw_formtype lsw_form_control">
    <lsw-control-label :settings="settings"
        :parent-formtype="this" />
    <div v-show="isEditable">
        <div ref="controller"
            v-xform.control="{
                name: settings.name,
                onValidate: settings.column.hasValidator || \$noop,
                onSetError: () => {
                    isEditable = true;
                }
            }">
            <div class="flex_row">
                <div class="flex_1 pad_right_1">
                    <button :class="{activated: isShownSelector}"
                        v-on:click="toggleSelector">🔎</button>
                </div>
                <input class="flex_100"
                    type="text"
                    v-model="value"
                    v-xform.input="{name: '*',onValidate: settings.input?.onValidate || \$noop}"
                    :disabled="settings.column.refersTo.constraint"
                    ref="textInput" />
                <div class="flex_1 pad_left_1" v-if="\$window.process.env.NODE_ENV === 'test' && false">
                    <button :class="{activated: isShownInfo}"
                        v-on:click="toggleInfo">ℹ️</button>
                </div>
            </div>
            <div class="pad_top_1" v-if="isShownInfo">
                <div class="" style="white-space: pre; font-size:12px; border: 1px solid white; background-color: white; color: black;">{{ \$lsw.utils.stringify(settings) }}</div>
            </div>
            <div class=""
                v-if="isShownSelector">
                <lsw-table
                    :initial-input="rows"
                    :initial-settings="{title: \`Un ítem de «\${settings.column.refersTo.table}.\${settings.column.refersTo.property}»:\`, itemsPerPage: 50 }"
                    selectable="one"
                    :on-choose-row="v => value = \$window.console.log('valueee', v) || v"
                    :initial-choosen-value="value"
                    choosable-id="tiene_nombre"></lsw-table>
            </div>
            <lsw-control-error />
        </div>
    </div>
</div>`,
  props: {
    settings: {
      type: Object,
      default: () => ({})
    },
  },
  data() {
    this.$trace("lsw-ref-object-control.data");
    this.validateSettings();
    return {
      uuid: LswRandomizer.getRandomString(5),
      value: this.settings.initialValue || [],
      isValueLoaded: false,
      isEditable: true,
      isShownSelector: false,
      isShownInfo: false,
      rows: []
    };
  },
  methods: {
    toggleSelector() {
      this.$trace("lsw-ref-object-control.methods.toggleSelector");
      this.isShownSelector = !this.isShownSelector;
    },
    toggleInfo() {
      this.$trace("lsw-ref-object-control.methods.toggleInfo");
      this.isShownInfo = !this.isShownInfo;
    },
    async submit() {
      this.$trace("lsw-ref-object-control.methods.submit");
      return LswFormtypes.utils.submitControl.call(this);
      
    },
    validate() {
      this.$trace("lsw-ref-object-control.methods.validateSettings");
      return LswFormtypes.utils.validateControl.call(this);
    },
    validateSettings() {
      this.$trace("lsw-ref-object-control.methods.validateSettings");
      return LswFormtypes.utils.validateSettings.call(this);
    },
    async loadRows() {
      this.$trace("lsw-page-rows.methods.loadRows", arguments);
      const selection = await this.$lsw.database.select(this.settings.column.refersTo.table, it => true);
      this.rows = selection;
      return selection;
    },
    async loadValue() {
      this.$trace("lsw-ref-object-control.methods.loadValue");
      const selection = await this.$lsw.database.select(this.settings.tableId, it => true);
    },
  },
  watch: {},
  async mounted() {
    try {
      this.$trace("lsw-ref-object-control.mounted");
      await this.loadRows();
    } catch (error) {
      console.log(error);
    }
  }
});
Vue.component("LswRefListControl", {
  template: `<div class="lsw_ref_list_control lsw_formtype lsw_form_control">
    <lsw-control-label :settings="settings"
        :parent-formtype="this" />
    <div v-show="isEditable">
        <div ref="controller"
            v-zzzform.control="{
                name: settings.name,
                onValidate: settings.column.hasValidator || \$noop,
                onSetError: () => {
                    isEditable = true;
                }
            }">
            <div class="flex_row">
                <div class="flex_1 pad_right_1">
                    <button :class="{activated: isShownSelector}"
                        v-on:click="toggleSelector">🔎</button>
                </div>
                <input class="flex_100"
                    type="text"
                    v-model="value"
                    v-zzzform.input="{name: '*',onValidate: settings.input?.onValidate || \$noop}"
                    disabled="true"
                    ref="textInput" />
                <div class="flex_1 pad_left_1" v-if="\$window.process.env.NODE_ENV === 'test' && false">
                    <button :class="{activated: isShownInfo}"
                        v-on:click="toggleInfo">ℹ️</button>
                </div>
            </div>
            <div class="pad_top_1" v-if="isShownInfo">
                <div class="" style="white-space: pre; font-size:12px; border: 1px solid white; background-color: white; color: black;">{{ \$lsw.utils.stringify(settings) }}</div>
            </div>
            <div class=""
                v-if="isShownSelector">
                <lsw-table
                    :initial-input="rows"
                    :initial-settings="{title: \`Un ítem de «\${settings.column.refersTo.table}.\${settings.column.refersTo.property}»:\`, itemsPerPage: 50 }"
                    selectable="many"
                    :on-choose-row="v => value = \$window.console.log('valueee', v) || v"
                    :initial-choosen-value="value"
                    :columns-order="['id']"
                    choosable-id="id"></lsw-table>
            </div>
            <lsw-control-error />
        </div>
    </div>
</div>`,
  props: {
    settings: {
      type: Object,
      default: () => ({})
    },
  },
  data() {
    this.$trace("lsw-ref-list-control.data");
    this.validateSettings();
    return {
      uuid: LswRandomizer.getRandomString(5),
      value: this.settings.initialValue || [],
      isValueLoaded: false,
      isEditable: true,
      isShownSelector: false,
      isShownInfo: false,
      rows: []
    };
  },
  methods: {
    toggleSelector() {
      this.$trace("lsw-ref-list-control.methods.toggleSelector");
      this.isShownSelector = !this.isShownSelector;
    },
    toggleInfo() {
      this.$trace("lsw-ref-list-control.methods.toggleInfo");
      this.isShownInfo = !this.isShownInfo;
    },
    async submit() {
      this.$trace("lsw-ref-list-control.methods.submit");
      return LswFormtypes.utils.submitControl.call(this);
      
    },
    validate() {
      this.$trace("lsw-ref-list-control.methods.validateSettings");
      return LswFormtypes.utils.validateControl.call(this);
    },
    validateSettings() {
      this.$trace("lsw-ref-list-control.methods.validateSettings");
      return LswFormtypes.utils.validateSettings.call(this);
    },
    async loadRows() {
      this.$trace("lsw-page-rows.methods.loadRows", arguments);
      const selection = await this.$lsw.database.select(this.settings.column.refersTo.table, it => true);
      this.rows = selection;
      return selection;
    },
    async loadValue() {
      this.$trace("lsw-ref-list-control.methods.loadValue");
      const selection = await this.$lsw.database.select(this.settings.tableId, it => true);
    },
  },
  watch: {},
  async mounted() {
    try {
      this.$trace("lsw-ref-list-control.mounted");
      await this.loadRows();
    } catch (error) {
      console.log(error);
    }
  }
});
Vue.component("LswRefRelationControl", {
  template: `<div class="lsw_ref_relation_control">
    Ref relation control
</div>`,
  props: {
    settings: {
      type: Object,
      default: () => ({})
    },
  },
  data() {
    this.$trace("lsw-ref-relation-control.data");
    this.validateSettings();
    return {
      uuid: LswRandomizer.getRandomString(5),
      value: this.settings?.initialValue || "",
      isEditable: true,
    };
  },
  methods: {
    async submit() {
      this.$trace("lsw-ref-relation-control.methods.submit");
      return LswFormtypes.utils.submitControl.call(this);
      
    },
    validate() {
      this.$trace("lsw-ref-relation-control.methods.validateSettings");
      return LswFormtypes.utils.validateControl.call(this);
    },
    validateSettings() {
      this.$trace("lsw-ref-relation-control.methods.validateSettings");
      return LswFormtypes.utils.validateSettings.call(this);
    }
  },
  watch: {},
  mounted() {
    try {
      this.$trace("lsw-ref-relation-control.mounted");
    } catch (error) {
      console.log(error);
    }
  }
});
Vue.component("LswNotes", {
  template: `<div class="lsw_notes">
    <div class="pad_1 float_right">
        <div class="flex_row">
            <div class="flex_100"></div>
            <div class="flex_1 pad_right_1">
                <button class="danger_button"
                    v-on:click="loadNotes">♻️</button>
            </div>
            <div class="flex_1">
                <button class="danger_button"
                    v-on:click="openAddNoteDialog">+</button>
            </div>
        </div>
    </div>
    <div class="pad_1" v-if="isLoaded">
        <lsw-database-explorer :show-breadcrumb="false" initial-page="lsw-page-rows" :initial-args="{database:'lsw_default_database',table:'Nota'}" />
    </div>
</div>`,
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
Vue.component("LswSchemaBasedForm", {
  template: `<div class="lsw_schema_form">
    <div class="lsw_schema_form_container">
        <div class="lsw_schema_form_content">
            <div class="pad_1"
                ref="schemaForm0"
                v-xform.form="{ onSubmit, onValidate }"
                v-if="isLoaded">
                <div class="">
                    <div class="position_relative">
                        <div class="pad_left_1 schema_form_title_box nowrap schema_form_title_text">
                            <div class="flex_row">
                                <div class="flex_100">
                                    <div class="title_box_one_line">
                                        <div class="title_text_cell">
                                            {{ tableDefinition?.hasExtraAttributes?.readableName ?
                                            \$lsw.utils.capitalize(tableDefinition.hasExtraAttributes.readableName) : model.tableId }}
                                            <span v-if="isUpdateOperation">[#{{ model.rowId }}]</span>
                                            <span v-else>[new]</span>
                                        </div>
                                        <div class="title_database_id_cell" style="font-size: 10px;">[{{model.databaseId}}]</div>
                                    </div>
                                </div>
                                <div class="flex_1 flex_row centered pad_left_1 pad_right_1">
                                    <button class="bright_border margin_right_1 nowrap" v-on:click="submitForm">⚡️</button>
                                    <button class="danger_button nowrap"
                                        v-if="isUpdateOperation"
                                        v-on:click="deleteRow">❌ #{{model.rowId}}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex_row centered schema_form_top_panel"
                        style="min-height: 30px;border-top: 4px double #210e64; padding: 6px;">
                        <div class="flex_1 flex_row centered">
                            <button class="bright_border margin_left_1 nowrap"
                                :class="{activated: section === 'campos propios'}"
                                v-on:click="() => selectSection('campos propios')">🧱</button>
                            <button class="bright_border margin_left_1 nowrap"
                                :class="{activated: section === 'campos reflejos'}"
                                v-on:click="() => selectSection('campos reflejos')">↔️</button>
                        </div>
                        <div class="flex_100"></div>
                        <div class="flex_1 flex_row centered">
                            <button class="bright_border margin_right_1 nowrap"
                                v-on:click="validateForm">✅</button>
                            <button class="bright_border margin_right_1 nowrap"
                                :class="{activated: isShowingFormInfo}"
                                v-on:click="toggleFormInfo">ℹ️</button>
                            <button class="bright_border margin_right_1 nowrap"
                                v-on:click="openEditables">🔓*</button>
                            <button class="bright_border margin_right_1 nowrap"
                                v-on:click="closeEditables">🔒*</button>
                        </div>
                    </div>
                </div>
                <div v-if="isShowingFormInfo"
                    class="scrollable_text_area">
                    <pre style="background-color: white; color: black; font-family: Arial; font-size: 11px; padding: 4px; margin: 0px; border-top: 1px solid white;">ℹ️: {{ tableDefinition }}</pre>
                </div>
                <div class="lsw_table_viewer" style="padding: 0px; min-height: 0%;">
                    <div class="pestania"
                        v-if="section === 'campos propios'">
                        <div class="subtitle_box">Campos propios:</div>
                        <table class="collapsed_table lsw_table_itself width_100">
                            <tbody>
                                <tr v-for="column, columnId, columnCounter in columnDefinitions"
                                    v-bind:key="'schema-column-' + columnCounter"
                                    class="row_for_table"
                                    :class="((columnCounter === 0) || (columnCounter % 2 === 0)) ? 'odd' : ''">
                                    <td class="pad_1">
                                        <!--This will load component [typically] placed on:-->
                                        <!--src/lsw-framework/components/lsw-formtype/type/lsw-*-control/lsw-*-control.{html,css,js}-->
                                        <component :is="column.hasFormtypeSettings.id"
                                            v-bind="{}"
                                            :settings="{
                                                name: columnId,
                                                database: model.databaseId,
                                                table: model.tableId,
                                                entity: model.entityId,
                                                column: column,
                                                parentSchemaForm: own,
                                                label: (columnCounter+1) + '. ' + (column.hasLabel || ('Campo «' + columnId + '»')),
                                                extraAttributes: column.hasExtraAttributes,
                                                initialValue: ((typeof value !== 'undefined') && (columnId in value)) ? value[columnId] : '',
                                                input: {
                                                    props: {
                                                        ...column.hasFormtypeSettings.input.props,
                                                    },
                                                    events: {
                                                        ...column.hasFormtypeSettings.input.events
                                                    }
                                                },
                                                formtypeParameters: column.hasFormtypeParameters || {},
                                                formtypeSettings: column.hasFormtypeSettings
                                            }" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="flex_100">
                            <div class="flex_row centered schema_form_title_box bottom_title_box"
                                style="background-color: #333333; padding-top: 6px; padding-bottom: 4px;">
                                <div class="flex_1 flex_row centered"
                                    v-if="isUpdateOperation">
                                    <button class="margin_left_1 nowrap danger_button"
                                        v-on:click="deleteRow">❌ #{{model.rowId}}</button>
                                </div>
                                <div class="flex_100"></div>
                                <div class="flex_1 flex_row centered pad_right_1">
                                    <button class="bright_border margin_left_1 nowrap"
                                        v-on:click="submitForm">⚡️ Enviar</button>
                                    <button class="bright_border margin_left_1 nowrap"
                                        v-on:click="validateForm">✅ Validar</button>
                                    <button class="bright_border margin_left_1 nowrap"
                                        v-on:click="openEditables">🔓*</button>
                                    <button class="bright_border margin_left_1 nowrap"
                                        v-on:click="closeEditables">🔒*</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pestania"
                        v-if="section === 'campos reflejos'">
                        <div class="subtitle_box">Campos reflejos:</div>
                        <table class="collapsed_table lsw_table_itself width_100">
                            <tbody>
                                <tr v-for="externalColumn, externalColumnId, externalColumnCounter in tableDefinition.externalProperties"
                                    v-bind:key="'schema-external-column-' + externalColumnCounter"
                                    class="row_for_table"
                                    :class="((externalColumnCounter === 0) || (externalColumnCounter % 2 === 0)) ? 'odd' : ''">
                                    <td class="pad_1">
                                        <!--This will load component [typically] placed on:-->
                                        <!--src/lsw-framework/components/lsw-formtype/type/lsw-*-control/lsw-*-control.{html,css,js}-->
                                        <template v-if="externalColumn.isType === 'ref-list'">
                                            <lsw-ref-list-control :settings="{
                                            name: externalColumnId,
                                            database: model.databaseId,
                                            table: model.tableId,
                                            entity: model.entityId,
                                            column: externalColumn,
                                            parentSchemaForm: own,
                                            label: (externalColumnCounter+1) + '. ' + (externalColumn.hasLabel || ('Campo «' + externalColumnId + '»')),
                                        }" />
                                        </template>
                                        <!--component :is="column.hasFormtypeSettings.id"
                                        v-bind="{}"
                                        :settings="{
                                            name: columnId,
                                            database: model.databaseId,
                                            table: model.tableId,
                                            entity: model.entityId,
                                            column: column,
                                            parentSchemaForm: own,
                                            label: (externalColumnCounter+1) + '. ' + (column.hasLabel || ('Campo «' + columnId + '»')),
                                            extraAttributes: column.hasExtraAttributes,
                                            initialValue: ((typeof value !== 'undefined') && (columnId in value)) ? value[columnId] : '',
                                            input: {
                                                props: {
                                                    ...column.hasFormtypeSettings.input.props,
                                                },
                                                events: {
                                                    ...column.hasFormtypeSettings.input.events
                                                }
                                            },
                                            formtypeParameters: column.hasFormtypeParameters || {},
                                            formtypeSettings: column.hasFormtypeSettings
                                        }" /-->
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`,
  props: {
    model: {
      type: Object,
      required: true,
    },
    onSubmit: {
      type: Function,
      default: () => this.$noop,
    },
    onValidate: {
      type: Function,
      default: () => this.$noop,
    },
    onDeleteRow: {
      type: Function,
      default: () => this.$noop,
    },
    overridenValues: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    this.$trace("lsw-schema-based-form.data");
    this.validateModel(this.model);
    const isOperation = (this.model.row && this.model.row.id) || (this.model.rowId && (this.model.rowId !== -1)) ? "update" : "insert";
    return {
      own: this,
      validFormtypes: [
        "text",
        "long-text",
        "options",
        "boolean",
        "date",
        "duration",
        "ref-object",
        "ref-list",
        "ref-relation",
        "source-code",
      ],
      section: 'campos propios', // 'campos reflejos'
      isShowingFormInfo: false,
      isLoaded: false,
      tableDefinition: false,
      columnDefinitions: false,
      value: this.model.row ?? false,
      editableFields: [],
      minimizedFields: [],
      isOperation,
      isUpdateOperation: isOperation === "update",
      isInsertOperation: isOperation === "insert",
    };
  },
  methods: {
    selectSection(section) {
      this.section = section;
    },
    toggleMinimizedField(field) {
      this.$trace("lsw-schema-based-form.methods.toggleMinimizedField");
      const fieldPos = this.minimizedFields.indexOf(field);
      if (fieldPos === -1) {
        this.minimizedFields.push(field);
      } else {
        this.minimizedFields.splice(fieldPos, 1);
      }
      this.$forceUpdate(true);
    },
    hideMinimizedField(field) {
      this.$trace("lsw-schema-based-form.methods.hideMinimizedField");
      const fieldPos = this.minimizedFields.indexOf(field);
      if (fieldPos === -1) {
        this.minimizedFields.push(field);
      }
      this.$forceUpdate(true);
    },
    showMinimizedField(field) {
      this.$trace("lsw-schema-based-form.methods.showMinimizedField");
      const fieldPos = this.minimizedFields.indexOf(field);
      if (fieldPos !== -1) {
        this.minimizedFields.splice(fieldPos, 1);
      }
      this.$forceUpdate(true);
    },
    toggleEditableField(field) {
      this.$trace("lsw-schema-based-form.methods.toggleEditableField");
      const fieldPos = this.editableFields.indexOf(field);
      if (fieldPos === -1) {
        this.editableFields.push(field);
      } else {
        this.editableFields.splice(fieldPos, 1);
      }
    },
    saveField(field, value) {
      this.$trace("lsw-schema-based-form.methods.saveField");
      console.log("Should save field:", field, value);
      // @TODO: use $lsw.database.overwrite to send the field only

    },
    validateModel(model) {
      this.$trace("lsw-schema-based-form.methods.validateModel");
      try {
        const ensureModel = $ensure({ model }, 1);
        const checkModel = $check(model);
        Basic_type_and_signature: {
          ensureModel.type("object");
          ensureModel.to.have.uniquelyKeys(["connection", "databaseId", "tableId", "rowId", "row", "databaseExplorer"]);
          ensureModel.to.have.keys(["databaseId", "tableId"]);
          const correctOption = $ensure.$or({
            "has connection and rowId": () => ensureModel.to.have.key("rowId"),
            "has row": () => ensureModel.to.have.key("row"),
          });
          if (!checkModel.to.have.key("rowId")) {
            ensureModel.to.have.key("row");
          }
        }
        Component_types_and_signatures: {
          if (checkModel.to.have.key("connection")) {
            ensureModel.its("connection").type("object");
          }
          if (checkModel.to.have.key("databaseId")) {
            ensureModel.its("databaseId").type("string");
          }
          if (checkModel.to.have.key("tableId")) {
            ensureModel.its("tableId").type("string");
          }
          if (checkModel.to.have.key("rowId")) {
            ensureModel.its("rowId").type("number");
          }
          if (checkModel.to.have.key("row")) {
            $ensure.$or({
              "row is object": () => ensureModel.its("row").type("object"),
              "row is false": () => ensureModel.its("row").type("boolean").is(false),
            });
          }
          if(checkModel.to.have.key("databaseExplorer")) {
            ensureModel.its("databaseExplorer").type("object");
          }
        }
      } catch (error) {
        console.error("Failed validating «model» property on «lsw-schema-based-form.validateModel»");
        console.error(error);
      }
    },
    async loadValue() {
      this.$trace("lsw-schema-based-form.methods.loadValue");
      if (this.model.rowId) {
        const originalValues = await LswDatabase.pickRow(this.model.databaseId, this.model.tableId, this.model.rowId);
        this.value = Object.assign({}, originalValues, this.overridenValues);
      }
    },
    onlyKnownTypes(formtype) {
      if(this.validFormtypes.indexOf(formtype) !== -1) {
        return formtype;
      }
      return "long-text";
    },
    async loadSchema() {
      this.$trace("lsw-schema-based-form.methods.loadSchema");
      const columnIds = Object.keys($lswSchema.$schema.hasTables[this.model.tableId].hasColumns);
      for(let columnId of columnIds) {
        const columnData = $lswSchema.$schema.hasTables[this.model.tableId].hasColumns[columnId];
        Object.assign(columnData, {
          belongsToDatabase: this.model.databaseId,
          belongsToTable: this.model.tableId,
          hasFormtypeSettings: {
            id: 'lsw-' + this.onlyKnownTypes(columnData.isFormType) + '-control',
            name: columnId,
            input: {
              props: {
                placeholder: columnData.hasPlaceholder,
              },
              events: {
                
              }
            },
          }
        })
      }
      this.tableDefinition = $lswSchema.$schema.hasTables[this.model.tableId];
      this.columnDefinitions = this.tableDefinition.hasColumns;
    },
    toggleFormInfo() {
      this.$trace("lsw-schema-based-form.methods.toggleFormInfo");
      this.isShowingFormInfo = !this.isShowingFormInfo;
    },
    closeEditables() {
      this.$trace("lsw-schema-based-form.methods.closeEditables");
      const uneditables = this.$el.querySelectorAll(".lsw_form_control .lsw_control_label .button_to_uneditable");
      for(let index=0; index<uneditables.length; index++) {
        const uneditable = uneditables[index];
        uneditable.click();
      }
    },
    openEditables() {
      this.$trace("lsw-schema-based-form.methods.openEditables");
      const editables = this.$el.querySelectorAll(".lsw_form_control .lsw_control_label .button_to_editable");
      for(let index=0; index<editables.length; index++) {
        const editable = editables[index];
        editable.click();
      }
    },
    validateForm() {
      this.$trace("lsw-schema-based-form.methods.validateForm");
      return this.$refs.schemaForm0.$xform.validate();
    },
    async submitForm(v) {
      this.$trace("lsw-schema-based-form.methods.submitForm");
      return await this.$refs.schemaForm0.$xform.submit();
    },
    async deleteRow() {
      this.$trace("lsw-schema-based-form.methods.submitForm");
      const confirmed = await Vue.prototype.$dialogs.open({
        title: "Eliminar registro",
        template: `
          <div>
            <div class="pad_2">¿Seguro que quieres eliminar el registro?</div>
            <hr class="margin_0" />
            <div class="pad_2 text_align_right">
              <button class="danger_button" v-on:click="() => accept(true)">Eliminar</button>
              <button class="" v-on:click="() => accept(false)">Cancelar</button>
            </div>
          </div>
        `,
      });
      if(!confirmed) return false;
      await this.$lsw.database.delete(this.model.tableId, this.model.rowId || this.model.row.id);
      if(this.onDeleteRow) {
        this.onDeleteRow(this.model.rowId, this.model.tableId, true);
      }
      if(this.model.databaseExplorer) {
        this.model.databaseExplorer.selectPage("LswPageRows", {
          database: this.model.databaseId,
          table: this.model.tableId,
        });
      }
    }
  },
  watch: {
    
  },
  async mounted() {
    try {
      this.$trace("lsw-schema-based-form.mounted");
      await this.loadSchema();
      await this.loadValue();
      this.isLoaded = true;
      this.$nextTick(() => {
        window.sf0 = this.$refs.schemaForm0;
      });
    } catch (error) {
      console.log(error);
    }
  }
});
});
