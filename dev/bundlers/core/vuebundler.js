class vuebundler {

  static create(...args) {
    return new this(...args);
  }

  static bundle(...args) {
    return this.create().bundle(...args);
  }

  static defaultOptions = {
    ignore: [],
    _module: true
  };

  constructor(options = {}) {
    Object.assign(this, options);
  }

  _opener(id, _module = true) {
    let js = "";
    js += "(function(factory) {\n";
    js += "  const mod = factory();\n";
    js += "  if(typeof window !== 'undefined') {\n";
    js += "    window[" + JSON.stringify(id) + "] = mod;\n";
    js += "  }\n";
    js += "  if(typeof global !== 'undefined') {\n";
    js += "    global[" + JSON.stringify(id) + "] = mod;\n";
    js += "  }\n";
    if(_module) {
      js += "  if(typeof module !== 'undefined') {\n";
      js += "    module.exports = mod;\n";
      js += "  }\n";
    }
    js += "})(function() {\n";
    return js;
  }

  _closer() {
    let js = "";
    js += "});\n";
    return js;
  }

  bundle(optionsInput = {}) {
    const options = Object.assign({}, this.constructor.defaultOptions, optionsInput);
    const { list, output, id, ignore = [], module:_module = true } = options;
    const fs = require("fs");
    const path = require("path");
    if(typeof list !== "string") {
      throw new Error("Required parameter «list» to be a string");
    }
    if(!fs.lstatSync(list).isFile()) {
      throw new Error("Required parameter «list» to poitn to a readable file");
    }
    if(typeof output !== "string") {
      throw new Error("Required parameter «output» to be a string");
    }
    if(typeof id !== "string") {
      throw new Error("Required parameter «id» to be a string");
    }
    if(!Array.isArray(ignore)) {
      throw new Error("Required parameter «ignore» to be an array");
    }
    if(typeof _module !== "boolean") {
      throw new Error("Required parameter «module» to be a boolean");
    }
    const outputpathJs = path.resolve(output);
    const outputpathCss = path.resolve(output).replace(/\.js$/g, ".css");
    const listpath = path.resolve(list);
    const nodes = require(listpath);
    let bundlingJs = "";
    let bundlingCss = "";
    bundlingJs += this._opener(id, _module);
    IteratingFiles:
    for(let index_node=0; index_node<nodes.length; index_node++) {
      let templateHtml = "";
      const node = nodes[index_node];
      const files = [
        node + ".html",
        node + ".js",
        node + ".css",
      ];
      for(let index=0; index<files.length; index++) {
        const file = files[index];
        const filepath = path.resolve(file);
        const filename = path.basename(filepath);
        Apply_ignore_filters: {
          if(ignore.indexOf(file) !== -1) {
            continue IteratingFiles;
          }
          if(ignore.indexOf(filepath) !== -1) {
            continue IteratingFiles;
          }
          if(ignore.indexOf(filename) !== -1) {
            continue IteratingFiles;
          }
        }
        if(!fs.existsSync(filepath)) {
          if(filepath.endsWith(".js")) {
            throw new Error("Could not find file «" + filepath + "» on «vuebundler.bundle»");
          }
        }
        const content = fs.readFileSync(filepath).toString();
        if(filename.endsWith(".html")) {
          templateHtml = this.printAsString(content);
        } else if(filename.endsWith(".js")) {
          bundlingJs += this.replaceTemplate(content, templateHtml) + "\n";
        } else if(filename.endsWith(".css")) {
          bundlingCss += content + "\n";
        }
      }
    }
    bundlingJs += this._closer();
    fs.writeFileSync(outputpathJs, bundlingJs, "utf8");
    fs.writeFileSync(outputpathCss, bundlingCss, "utf8");
    return this;
  }

  printAsString(text) {
    return "`" + text.replace(/`/g, "\\`").replace(/\$/g, "\\$") + "`";
  }

  replaceTemplate(text, template) {
    return text.replace("$template", template);
  }

}

module.exports = vuebundler;