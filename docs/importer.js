(function (factory) {
  const mod = factory();
  if (typeof window !== 'undefined') {
    window['Importer'] = mod;
  }
  if (typeof global !== 'undefined') {
    global['Importer'] = mod;
  }
  if (typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function () {

  const Importer = class {

    static create(...args) {
      return new this(...args);
    }

    $trace(method, args) {
      if (this.options.trace) {
        const args_resumen = Array.from(args).map((it, index) => {
          return (index + 1) + "=" + typeof it;
        }).join(", ");
        console.log("[TRACE][importer][" + method + "][" + args.length + "][" + args_resumen + "]");
      }
    }

    $error(error, clue = false) {
      let errorText = "";
      errorText += "[ERROR]   " + error.name + "\n";
      errorText += "[MESSAGE] " + error.message + "\n";
      errorText += "[STACK]\n" + error.stack.trim().split("\n").map(line => {
        return "    | " + this.$reverseStackLine(line);
      }).join("\n") + "";
      if (clue) {
        errorText = errorText + "\n[CLUE]\n" + clue + "";
      }
      console.error(errorText);
    }

    $reverseStackLine(text) {
      const index = text.indexOf('@');
      if (index === -1) {
        // Si no hay @, devolvemos el texto completo y una cadena vacía
        return [text, ''];
      }
      return [text.slice(index + 1), " @ ", text.slice(0, index)].join("");
    }

    constructor(total_modules = 0, options_input = {}) {
      const options = Object.assign({}, {
        id: "#intersitial",
        id_loaded: "#intersitial_modules_loaded",
        id_all: "#intersitial_modules_all",
        id_trace: "#intersitial_modules_trace",
        id_loader: "#intersitial_loader",
        id_loader_bar: "#intersitial_loader_bar",
        trace: false,
        update_ui: false,
        update_ui_minimum_milliseconds: 1200,
      }, options_input);
      this.options = options;
      Duplicated_options: {
        this.id = options.id;
        this.id_all = options.id_all;
        this.id_loaded = options.id_loaded;
        this.id_trace = options.id_trace;
        this.id_loader = options.id_loader;
        this.id_loader_bar = options.id_loader_bar;
      }
      this.modules_total = total_modules;
      this.modules_loaded = -1;
      this.modules_loaded_ids = [];
      this.time_of_creation = new Date();
      this.is_loaded = false;
      this.setTotal();
      this.$trace("constructor", arguments);
    }

    $getMillisecondsOfLife() {
      this.$trace("$getMillisecondsOfLife", arguments);
      return this.$formatMilliseconds(new Date() - this.time_of_creation);
    }

    $formatMilliseconds(ms) {
      this.$trace("$formatMilliseconds", arguments);
      return ms.toLocaleString("es-ES");
    }

    setTimeout(timeout) {
      this.$trace("$setTimeout", arguments);
      this.options.update_ui_minimum_milliseconds = timeout;
      return this;
    }

    setTotal(total = undefined) {
      this.$trace("$setTotal", arguments);
      try {
        if (typeof total !== "undefined") {
          this.modules_total = total;
        }
        if (!this.options.update_ui) {
          return;
        }
        const htmlTotal = document.querySelector(this.id_all);
        htmlTotal.textContent = this.modules_total;
        return this;
      } catch (error) {
        console.log(error);
        console.log("[WARN][Importer] Cannot update total modules. Insert «" + this.id_all + "» to skip this warning.");
      }
    }

    $prependTrace(message) {
      this.$trace("$prependTrace", arguments);
      try {
        if (!this.options.update_ui) {
          return;
        }
        const htmlTrace = document.querySelector(this.id_trace);
        if (htmlTrace.textContent.length) {
          htmlTrace.textContent = "\n" + htmlTrace.textContent;
        }
        htmlTrace.textContent = message + htmlTrace.textContent;
      } catch (error) {
        console.log(error);
        console.log("[WARN][Importer] Cannot append trace. Insert «" + this.id_trace + "» to skip this warning.");
      }
    }

    $increaseLoadedModules(moduleType = "unknown", moduleId = "unknown") {
      this.$trace("$increaseLoadedModules", arguments);
      try {
        ++this.modules_loaded;
        const isRepeated = this.modules_loaded_ids.indexOf(moduleId) !== -1;
        if (isRepeated) {
          throw new Error("Repeated module load: " + moduleId);
        }
        this.modules_loaded_ids.push(moduleId);
        console.log(`[OK][Importer] Loaded module «${this.modules_loaded}» named «${moduleId}» as «${moduleType}» ${this.$getMillisecondsOfLife()}`);
        if (!this.options.update_ui) {
          return;
        }
        const htmlLoaded = document.querySelector(this.id_loaded);
        htmlLoaded.textContent = this.modules_loaded;
        this.$prependTrace(`Loaded «${moduleType}» from «${moduleId}»`);
        this.$updateLoaderBar();
        if ((this.modules_loaded + 1) >= this.modules_total) {
          // this.$removeIntersitial();
        }
      } catch (error) {
        if (this.is_loaded) {
          console.log("[CAUTION][Importer] Module out of the count was loaded: type «" + moduleType + "» from «" + moduleId + "» [" + this.modules_loaded + " modules loaded].");
        } else {
          console.log(error);
          console.log("[WARN][Importer] Cannot update total modules. Insert «" + this.id_loaded + "» to skip this warning.");
        }
      }
    }

    $updateLoaderBar() {
      this.$trace("$updateLoaderBar", arguments);
      try {
        if (!this.options.update_ui) {
          return;
        }
        const htmlLoaderBar = document.querySelector(this.id_loader + " " + this.id_loader_bar);
        const percentageCompleted = Math.round((this.modules_loaded / this.modules_total) * 100);
        htmlLoaderBar.style.width = percentageCompleted + "%";
      } catch (error) {
        console.log(error);
        console.log("[WARN][Importer] Cannot update loaded bar. Insert «" + this.id_loader_bar + "» inside of «" + this.id_loader + "» to skip this warning.");
      }
    }

    $removeIntersitial() {
      this.$trace("$removeIntersitial", arguments);
      try {
        if (this.is_loaded) {
          return;
        }
        this.is_loaded = true;
        if (!this.options.update_ui) {
          return;
        }
        if (this.options.update_ui_minimum_milliseconds) {
          clearTimeout(this.options.update_ui_minimum_milliseconds_timeout_id);
          this.update_ui_minimum_milliseconds_timeout_id = setTimeout(() => {
            const intersitial = document.querySelector(this.id);
            if (intersitial) {
              intersitial.remove();
            } else {
              console.log("Cannot remove intersitial. Insert «" + this.id + "» to skip this warning");
            }
          }, this.options.update_ui_minimum_milliseconds);
        } else {
          const intersitial = document.querySelector(this.id);
          intersitial.remove();
        }
      } catch (error) {
        console.log(error);
        console.log("[WARN][Importer] Cannot remove intersitial. Insert «" + this.id + "» to skip this warning.");
      }
    }

    async scriptSrc(src) {
      this.$trace("scriptSrc", arguments);
      console.log(`[OK][Importer] Loading «${src}» as «script.src» ${this.$getMillisecondsOfLife()}`);
      await new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve();
        script.onerror = (e) => reject(e);
        document.head.appendChild(script);
      });
      this.$increaseLoadedModules("script.src", src);
      return;
    }

    async scriptSrcModule(src) {
      this.$trace("scriptSrcModule", arguments);
      console.log(`[OK][Importer] Loading «${src}» as «script.src.module» ${this.$getMillisecondsOfLife()}`);
      await new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.type = "module";
        script.onload = () => resolve();
        script.onerror = (e) => reject(e);
        document.head.appendChild(script);
      });
      this.$increaseLoadedModules("script.src.module", src);
      return;
    }

    async scriptAsync(url, context = {}) {
      this.$trace("scriptAsync", arguments);
      console.log(`[OK][Importer] Loading «${url}» as «script.async» ${this.$getMillisecondsOfLife()}`);
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Failed to fetch script: ${url}`);
      const scriptText = await response.text();
      const AsyncFunction = (async function () { }).constructor;
      let scriptCode = scriptText;
      try {
        const asyncFunction = new AsyncFunction(...Object.keys(context), scriptText);
        scriptCode = asyncFunction.toString();
        const result = await asyncFunction(...Object.values(context));
        return result;
      } catch (error) {
        this.$error(error, `Error evaluating «script.async» from «${url}» in code «\n${this.$breakLines(scriptCode)}\n»`);
        throw error;
      } finally {
        this.$increaseLoadedModules("script.async", url);
      }
    }

    $wrapInTryCatch(code) {
      let js = "";
      js += `try {\n`;
      js += `${code}\n`;
      js += `} catch(error) {\n`;
      js += `  console.error('Error in «script.async» execution:');\n`;
      js += `  console.error(error.name);\n`;
      js += `  console.error(error.message);\n`;
      js += `  console.error(error.stack);\n`;
      js += `  throw error;\n`;
      js += `}\n`;
      js = js.replace("***THIS_IS_A_MAGIC_TOKEN_TO_NOT_USE_NEVER_EVER***", JSON.stringify(js));
      return js;
    }

    $padLeft(input, spaces = 2, charc = " ") {
      let out = "" + input;
      while (out.length < spaces) {
        out = charc + out;
      }
      return out;
    }

    $breakLines(code) {
      const lines = code.split(/(\r\n|\r|\n)/g).filter(l => {
        return l !== "\n" && l !== "";
      });
      const maxDigits = (lines.length + "").length + 1;
      let out = "";
      for (let index = 0; index < lines.length; index++) {
        const line = lines[index];
        out += this.$padLeft(index + 1, maxDigits, " ");
        out += " | ";
        out += line;
        out += "\n";
      }
      return out;
    }

    async linkStylesheet(href) {
      this.$trace("linkStylesheet", arguments);
      console.log(`[OK][Importer] Loading «${href}» as «link.stylesheet.css» ${this.$getMillisecondsOfLife()}`);
      await new Promise((resolve, reject) => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = href;
        link.onload = () => resolve();
        link.onerror = (e) => reject(e);
        document.head.appendChild(link);
      });
      this.$increaseLoadedModules("link.stylesheet.css", href);
      return;
    }

    async text(url) {
      this.$trace("text", arguments);
      console.log(`[OK][Importer] Loading «${url}» as «text» ${this.$getMillisecondsOfLife()}`);
      const response = await fetch(url);
      this.$increaseLoadedModules("text", url);
      if (!response.ok) throw new Error(`Failed to fetch text: ${url}`);
      return response.text();
    }

    async importVueComponent(url) {
      this.$trace("importVueComponent", arguments);
      try {
        const urlJs = url + ".js";
        const urlCss = url + ".css";
        const urlHtml = url + ".html";
        const template = await this.text(urlHtml);
        await this.scriptAsync(urlJs, { $template: template });
        await this.linkStylesheet(urlCss);
        this.$increaseLoadedModules("vue.component", url);
        return;
      } catch (error) {
        console.log(error);
        throw error;
      }
    }

  }

  window.Importer = Importer;
  window.importer = new Importer();
  window.importer.options.update_ui = true;

  return Importer;

});