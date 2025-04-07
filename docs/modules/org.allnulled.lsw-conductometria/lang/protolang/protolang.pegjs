{
  const fromHourToString = it => {
    return `${("" + it.hora).padStart(2, '0')}:${("" + it.minuto).padStart(2, '0')}`;
  };
  const reduceToken = t => {
    try {
      const ast = LswTimer.parser.parse(t.trim());
      return ast.length === 1 ? ast[0] : ast;
    } catch (error) {
      try {
        return LswTyper.parse(t.trim());
      } catch (error) {
        try {
          // En principio es lo mismo que el JSON:
          const num1 = intentaNumerizar(t.trim());
          return num1;
        } catch (error) {
          return t.trim();
        }
      }
    }
  };
  const multiparseo = text => {
    return text.split("*").map(reduceToken);
  };
  const getNameFromDetails = function(details) {
    return details.split("*")[0].trim();
  }
  const intentaNumerizar = function(t) {
    try {
      const out = parseFloat(t);
      if(isNaN(out)) throw new Error();
      return out;
    } catch (error) {
      return t;
    }
  };
  const unifyActions = function(actions) {
    let out = {};
    for(let index=0; index<actions.length; index++) {
      const action = actions[index];
      for(let hourId in action) {
        if(!(hourId in out)) {
          out[hourId] = {};
        }
        const actionDetails = action[hourId];
        const conceptId = actionDetails.concept;
        if(!(conceptId in out[hourId])) {
          out[hourId][conceptId] = []
        }
        out[hourId][conceptId] = actionDetails.details;
      }
    }
    return out;
  };
  const tryToParse = content => {
    try {
      return LswTyper.parse("{" + content + "}");
    } catch (error) {
      return content;
    }
  }
}

Protolang = Bloque_final

Bloque_final = b:Bloque _* { return b }

Bloque = s:Sentencia_completa* { return s }

Sentencia_completa = Sentencia_de_funcion / Sentencia_de_relacion / Sentencia_de_definicion / Sentencia_de_aniadicion / Sentencia_de_inclusion 

Sentencia_de_definicion = 
  token1:(_* "def" _+)
  id:Hasta_ocb_en_misma_linea
  content:Contenido_cb
    { return { type: "def", id, content: tryToParse(content) } }

Sentencia_de_inclusion = 
  token1:(_* "inc" _+)
  id:Hasta_final_de_linea
    { return { type: "inc", id } }

Sentencia_de_aniadicion = 
  token1:(_* "add" _+)
  date:Fecha_dia_entero
  actions:Lista_de_actividades_por_hora?
    { return { type: "add", date, actions } }

Lista_de_actividades_por_hora = actions:Item_de_actividad_por_hora+ { return unifyActions(actions) }

Item_de_actividad_por_hora =
  token1:(EOL __*)
  hour:Fecha_hora_entera
  details:Hasta_final_de_linea
    { return { [fromHourToString(hour)]: { concept: getNameFromDetails(details), details: details.split("*").splice(1).map(reduceToken) } } }

Fecha_hora_entera = 
  negable:("!")?
  hora:Fecha_hora
  token1:(":")
  minuto:Fecha_minuto
    { return { hora, minuto } }

Fecha_dia_entero = 
  anio:Fecha_anio
  token1:("/")
  mes:Fecha_mes
  token2:("/")
  dia:Fecha_dia
    { return LswTimer.utils.formatMomentoObjectToMomentoString({ anio, mes, dia }) }

Fecha_anio = Digito Digito Digito Digito { return parseInt(text()) }
Fecha_mes = Digito Digito { return parseInt(text()) }
Fecha_dia = Digito Digito { return parseInt(text()) }
Fecha_hora = Digito Digito { return parseInt(text()) }
Fecha_minuto = Digito Digito { return parseInt(text()) }

Digito = [0-9] { return text() }

Sentencia_de_funcion = 
  token1:(_* "fun" _+)
  id:Hasta_ocb_en_misma_linea
  content:Contenido_cb
    { return { type: "fun", id, content } }

Sentencia_de_relacion = 
  token1:_*
  token2:("rel" _+)
  id:Hasta_final_de_linea
  relations:Grupo_de_relaciones?
  { return { type: "rel", id, relations } }

Grupo_de_relaciones = Unidad_de_relacion+

Unidad_de_relacion = ( Relacion_por_propagador / Relacion_por_concepto )

Relacion_por_propagador = 
  token1:(__* EOL __* ">>" __*)
  linea:Hasta_final_de_linea
    { return { type: "by propagator", parameters: multiparseo(linea) } }

Relacion_por_concepto =
  token1:(__* EOL __* ">" __*)
  linea:Hasta_final_de_linea
    { return { type: "by concept", parameters: multiparseo(linea) } }

Contenido_cb = Contenido_vacio_cb / Contenido_lleno_cb

Contenido_vacio_cb = "{" __* "}" { return "" }

Contenido_lleno_cb = 
  token3:"{"
  content:Hasta_ccb_en_nueva_linea*
  token4:(EOL "}")
    { return content.join("\n") }

Hasta_ocb_en_misma_linea = ( !("{" / EOL / EOF) .)+ { return text().trim() }
Hasta_ccb_en_nueva_linea = Line_ccb+ 

Line_ccb = Token_ccb+ (!(!EOL)) { return text().trim() }

Token_ccb = (!((EOL "}") / EOF) .)+ { return text() }

Hasta_final_de_linea = ( !(EOL / EOF / Comentario) .)+ { return text().trim() }

Comentario = Comentario_unilinea / Comentario_multilinea
Comentario_unilinea = "//" Hasta_final_de_linea { return text() }
Comentario_multilinea = "/*" (!("*/").)* "*/" { return text() }

EOL = ___
EOF = !.
_ = __ / ___ / Comentario
__ = " " / "\t"
___ = "\r\n" / "\r" / "\n"