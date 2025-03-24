{
  const minify_location = function(loc) {
    return loc;
    return JSON.stringify(loc);
    return `${loc.start.line}:${loc.start.column}-${loc.end.line}:${loc.end.column}|${loc.start.offset}-${loc.end.offset}`;
  };
  const compact_comment_object = function(array) {
    const output = {$comment:""};
    let last_key = "$comment";
    for(let index_array=0; index_array<array.length; index_array++) {
      const item = array[index_array];
      if(typeof item === "object") {
        const [key, value] = item;
        if(!(key in output)) {
          output[key] = "";
        }
        output[key] += output[key].length > 0 ? "\n" : "";
        output[key] += value;
        last_key = key;
      } else {
        output[last_key] += output[last_key].length > 0 ? "\n" : "";
        output[last_key] += item;
      }
    }
    if(output.$comment === "") {
      delete output.$comment;
    }
    return output;
  }
}

Documentator_language = comments:Documentator_text { return { comments, code: text() } }

Documentator_text = tokens:(Documentator_comment / Any_character)* { return tokens.filter(t => !!t) }

Documentator_comment = Documentator_comment_multiline / Documentator_comment_uniline

Documentator_comment_uniline = 
  token1:(__* "//" __?)
  content:Documentator_comment_uniline_property+
  token2:(EOL/EOF)
    { return { $location: minify_location(location()), ...compact_comment_object(content) } }

Documentator_comment_uniline_property =
  token1:(__* "|" __*)? 
  token2:(__* "@")
  property:Documentator_property_token
  value:Documentator_value_inline
    { return [property.trim(), value.trim()] }

Documentator_value_inline = Documentator_value_inline_char+ { return text() }

Documentator_value_inline_char = (!(EOL/"|")). { return text() }

Documentator_comment_multiline =
  Documentator_opener
  content:Documentator_content
  Documentator_closer
    { return { $location: minify_location(location()), ...content } }

Documentator_opener = "/**" __* EOL?
Documentator_content = lines:(Documentator_sentence)+ { return compact_comment_object(lines) }
Documentator_sentence = (!Documentator_closer) atom:(Documentator_property / Documentator_line) { return atom }
Documentator_closer = __* "*/"

Documentator_line =  
  tabulation:(__* "*" _?)?
  token:Text_line
    { return token }

Documentator_property = 
  tabulation:(__* "*" _?)?
  token1:(__* "@")
  property:Documentator_property_token
  value:Text_line
    { return [property, value] }

Documentator_property_token = chars:No_EOL_or_semicolon+ ":" __? { return chars.join("") }

No_EOL_or_semicolon = (!(EOL_or_semicolon)). { return text() }

EOL_or_semicolon = (EOL/":")

Text_line = chars:No_EOL_or_Documentator_closer* EOL { return chars.join("") }

No_EOL_or_Documentator_closer = (!EOL_or_Documentator_closer). { return text() }

EOL_or_Documentator_closer = (EOL/"*/")

_ = __ / ___
__ = "\t" / " "
___ = "\r\n" / "\r" / "\n"
EOL = "\r\n" / "\r" / "\n"
EOF = !.

Any_character = . { return false }