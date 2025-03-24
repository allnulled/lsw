const { styles } = require("ansi-colors");

const section_title_to_text = function (section_id) {
  let text = "";
  if (section_id === "0. Prelude") {
    return text;
  }
  text += "<h3 class='documentator_section_title'>";
  text += section_id;
  text += "</h3>";
  text += "\n";
  return text;
};

const escape_html_attribute = function (str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/\n/g, "&#10;");
};

const unescape_html_attribute = function (str) {
  return str
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#10;/g, "\n")
    .replace(/&amp;/g, "&");
};

const inject_html_attribute_string = function (text) {
  // @TOREVIEW: comprobar si esta es la forma correcta de escapar los tags en un string attr html:
  return escape_html_attribute(text);
};

const exported_i18n_keys = {};

const export_i18n_key = function(key) {
  if(!(key in export_i18n_key)) {
    exported_i18n_keys[key] = key;
  }
};

let i18n_key_mapper_counter = 0;
const i18n_key_mapper = {};

const get_i18n_key_mapping_for = function(value) {
  if(!(value in i18n_key_mapper)) {
    i18n_key_mapper[value] = "auto.translation." + (++i18n_key_mapper_counter);
  }
  return i18n_key_mapper[value];
}

const internationalify_html = function (text) {
  if ((text.indexOf("<") !== -1) || (text.indexOf(">") !== -1)) {
    return text;
  }
  let html = "";
  html += `<span data-i18n-key="${get_i18n_key_mapping_for(text)}">`;
  export_i18n_key(text);
  html += text;
  html += "</span>";
  return html;
};

const comment_to_text = function (comment, dir) {
  const comment_props = Object.keys(comment);
  let text = "";
  text += "<div class='documentator_comment'>\n";
  if (comment.$comment) {
    text += "<div class='documentator_property_definition'>\n";
    text += "" + internationalify_html(comment.$comment);
    text += "</div>\n";
  }
  Iterating_props:
  for (let index = 0; index < comment_props.length; index++) {
    const comment_prop = comment_props[index];
    if (comment_prop.startsWith("$")) {
      continue Iterating_props;
    }
    const comment_value = comment[comment_prop];
    text += "<div class='documentator_property_definition'>\n";
    if ((comment_prop !== "nokey") && (!comment_prop.startsWith("nokey"))) {
      text += "<span class='documentator_property_name'>";
      text += internationalify_html(comment_prop);
      text += "</span>";
    }
    text += "  <span class='documentator_property_value'>";
    text += "" + internationalify_html(comment_value);
    text += "</span>\n";
    text += "</div>\n";
  }
  Set_indentation: {
    text = text.trim() + "\n";
  }
  Append_code: {
    if (comment.$code) {
      let code = "";
      code += "\n<div class='documentator_code_snippet_block'>";
      Label: {
        /*
        code += "\n<div class='documentator_code_snippet_label'>";
        code += " <span class='snippet_attribute'>Snippet on file </span>";
        code += comment.$file.replace(dir, "");
        code += " <span class='snippet_attribute'> identified as </span>";
        code += comment["$code.label"];
        code += " <span class='snippet_attribute'> located at </span>";
        code += minify_location(comment.$location);
        code += "</div>\n";
        //*/
        code += "\n<div class='documentator_code_snippet_label'>";
        code += "Snippet on file ";
        code += "<span class='snippet_value'>" + comment.$file.replace(dir, "") + "</span>";
        code += " identified as ";
        code += "<span class='snippet_value'>" + comment["$code.label"] + "</span>";
        code += " located at ";
        code += "<span class='snippet_value'>" + minify_location(comment.$location) + "</span>";
        code += "</div>\n";
      }
      Code: {
        code += "<pre class='documentator_code_snippet'>";
        let code_output = comment.$code.trimRight();
        if (comment.$beautifyjs || comment.beautifyjs) {
          code_output = require("js-beautify").js(code_output, {
            indent_size: 2
          });
        }
        code += escape_html_attribute(code_output);
        code += "</pre>\n";
      }
      code += "</div>\n";
      text += code;
    }
  }
  text += "</div>";
  return text;
};

const minify_location = function (loc) {
  return `${loc.start.line}:${loc.start.column}-${loc.end.line}:${loc.end.column}|${loc.start.offset}-${loc.end.offset}`;
};

const formalize_document = function (header, body) {
  let code = "";
  code += "<!DOCTYPE html>\n";
  code += "<html>\n";
  code += "  <head>\n";
  code += header;
  code += "  </head>\n";
  code += "  <body>\n";
  code += body;
  code += "  </body>\n";
  code += "</html>";
  return code;
};

const inject_header = function () {
  let code = "";
  code += '<meta charset="UTF-8">\n';
  code += '<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n';
  return code;
};

const inject_style = function (filepath) {
  let code = "";
  code += "<style>\n";
  code += require("fs").readFileSync(filepath).toString();
  code += "</style>\n";
  return code;
};

const inject_styles = function (options) {
  let code = "";
  code += "<style>\n";
  try {
    code += require("fs").readFileSync(__dirname + "/../themes/" + options.theme + ".css").toString();
  } catch (error) {
    code += require("fs").readFileSync(__dirname + "/../themes/default.css").toString();
  }
  code += "</style>\n";
  code += inject_style(__dirname + "/../themes/highlight.js/highlight.default.css");
  if (options.styles) {
    for (let index_style = 0; index_style < styles.length; index_style++) {
      const style_path = styles[index_style];
      code += inject_style(style_path);
    }
  }
  return code;
};

const inject_scripts = function (options) {
  let code = "";
  const scripts = options.scripts;
  const final_scripts = ["ejs.js", "i18n.js", {
    type: "module",
    file: "highlight.js/highlight.js"
  }, {
    type: "module",
    file: "marked.js"
  }, "highlight.js/autoinject.js"].concat(scripts || []);
  for (let index_script = 0; index_script < final_scripts.length; index_script++) {
    const script_item = final_scripts[index_script];
    const is_module = typeof script_item === "object";
    const script_file = is_module ? script_item.file : script_item;
    const script_path = require("path").resolve(__dirname + "/../scripts", script_file);
    const script_content = require("fs").readFileSync(script_path).toString();
    code += is_module ? "<script type='module'>" : "<script type='text/javascript'>";
    code += script_content;
    code += "</script>";
  }
  return code;
}

const file_to_schema = function(section_ids) {
  let code = "";
  code += "<div class='documentator_section'>"
  code += "<h3 class='documentator_section_title'>0. Prelude</h3>";
  code += "<ul>";
  for(let index=0; index<section_ids.length; index++) {
    const section_id = section_ids[index];
    code += "<li>";
    code += "<a href='#'>";
    code += section_id;
    code += "</a>";
    code += "</li>";
  }
  code += "</ul>";
  code += "</div>";
  code += "</div>";
  return code;
};

const export_all_i18n_keys_to_file = function(options) {
  const fs = require("fs");
  const path = require("path");
  const main_language = require(__dirname + "/../../config.json").main_language;
  const translations_keymapper_source_path = path.resolve(options.output_dir_html, "translations/keymapper.json");
  const default_translations_source_path = path.resolve(__dirname, "..", `translations/source/${main_language}.json`);
  const default_translations = JSON.parse(fs.readFileSync(default_translations_source_path).toString());
  const extended_translations = Object.assign({}, exported_i18n_keys, default_translations);
  fs.writeFileSync(default_translations_source_path, JSON.stringify(extended_translations, null, 2), "utf8");
  const i18n_key_mapper_reversed = {};
  Object.values(i18n_key_mapper).forEach(v => {
    let key = undefined;
    for(let prop in i18n_key_mapper) {
      if(i18n_key_mapper[prop] === v) {
        key = prop;
      }
    }
    i18n_key_mapper_reversed[v] = key;
  });
  fs.writeFileSync(translations_keymapper_source_path, JSON.stringify(i18n_key_mapper_reversed, null, 2), "utf8");
}

module.exports = function (ast, dir_brute, parser, options) {
  const dir = require("path").resolve(dir_brute);
  if (!(options.output_dir_html)) {
    return ast;
  }
  const fs = require("fs");
  const path = require("path");
  const files = ast.book.files;
  const files_sorted = Object.keys(files).sort();
  console.log(JSON.stringify(ast.book, null, 2));
  const documentator_ast_path = path.resolve(options.output_dir_html, "translations/documentator.ast.json");
  require("fs").writeFileSync(documentator_ast_path, JSON.stringify(ast.book, null, 2), "utf8");
  Iterating_files:
  for (let index_file = 0; index_file < files_sorted.length; index_file++) {
    const file_id = files_sorted[index_file];
    console.log("  [*] Compiling file: " + file_id);
    const file = files[file_id];
    let file_contents = "";
    const sections_sorted = Object.keys(file.sections).sort();
    const file_schema = file_to_schema(sections_sorted);
    Generate_file_from_fileobject: {
      for (let index_section = 0; index_section < sections_sorted.length; index_section++) {
        const section_id = sections_sorted[index_section];
        console.log("  [*] Compiling section: " + section_id);
        const section = file.sections[section_id];
        let section_contents = "";
        section_contents += "<div class='documentator_section'>\n";
        section_contents += section_title_to_text(section_id);
        const comments_sorted = section.sort(function (c1, c2) {
          const p1 = c1.$priority ?? c1.priority ?? 0;
          const p2 = c2.$priority ?? c2.priority ?? 0;
          return p1 > p2 ? -1 : p1 < p2 ? 1 : 0;
        });
        for (let index_comments = 0; index_comments < comments_sorted.length; index_comments++) {
          const comment = comments_sorted[index_comments];
          section_contents += comment_to_text(comment, dir);
        }
        section_contents += "</div>\n";
        file_contents += section_contents;
      }
    }
    file_contents = file_schema + file_contents;
    let file_header = "";
    file_header += inject_styles(options);
    file_header += inject_header(options);
    file_header += inject_scripts(options);
    file_contents = formalize_document(file_header, file_contents);
    const file_path = path.resolve(options.output_dir_html, file_id);
    fs.writeFileSync(file_path + ".json", JSON.stringify(ast, null, 2), "utf8");
    fs.writeFileSync(file_path, file_contents, "utf8");
    Build_and_export_translations_directory: {
      const origin = path.resolve(__dirname + "/../translations/output");
      const destination = path.resolve(options.output_dir_html, "translations");
      require("fs-extra").copySync(origin, destination);
    }
  }
  export_all_i18n_keys_to_file(options);
  return ast;
};