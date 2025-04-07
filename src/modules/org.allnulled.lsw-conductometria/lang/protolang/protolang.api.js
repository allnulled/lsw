(function () {

  class ProtolangTranscriptor {

    static $includeSource(sentence) {
      let js = "";
      const { id = "~" } = sentence;
      js += `await this.includeSource(${JSON.stringify(id)});`;
      return js;
    }

    static $defineConcept(sentence) {
      let js = "";
      try {
        const { id = "~", content } = sentence;
        js += `await this.defineConcept(${JSON.stringify(id)}, ${JSON.stringify(content, null, 2)});`;
      } catch (error) {
        return sentence.content;
      }
      return js;
    }

    static $addActions(sentence) {
      let js = "";
      const { id = "~" } = sentence;
      const { date, actions } = sentence;
      try {
        const id = date;
        js += `await this.addActions(${JSON.stringify(id)}, ${JSON.stringify(actions, null, 2)});`;
      } catch (error) {
        console.log(error);
        throw error;
      }
      return js;
    }

    static $defineFunction(sentence) {
      let js = "";
      const { id = "~", content = "" } = sentence;
      js += `await this.defineFunction(${JSON.stringify(id)}, function(it) {\n  ${content.split("\n").map(t => "  " + t).join("\n")}\n});`;
      return js;
    }

    static $relatePropagators(sentence) {
      let js = "";
      const { id = "~" } = sentence;
      js += `await this.relatePropagators(${JSON.stringify(id)});`;
      return js;
    }

  }

  class ProtolangApi {

    constructor(parser, browsieDatabase) {
      this.parser = parser;
      this.database = browsieDatabase || lsw.database;
    }

    async codify(protoCode) {
      try {
        const ast = this.parser.parse(protoCode);
        console.log(ast);
        let js = "\n";
        for (let indexSentence = 0; indexSentence < ast.length; indexSentence++) {
          const sentence = ast[indexSentence];
          const result = await (() => {
            switch (sentence.type) {
              case "inc": return ProtolangTranscriptor.$includeSource(sentence);
              case "def": return ProtolangTranscriptor.$defineConcept(sentence);
              case "add": return ProtolangTranscriptor.$addActions(sentence);
              case "rel": return ProtolangTranscriptor.$relatePropagators(sentence);
              case "fun": return ProtolangTranscriptor.$defineFunction(sentence);
              default: return sentence;
            }
          })();
          js += result + "\n";
        }
        console.log(js);
        return js;
      } catch (error) {
        throw error;
      }
    }

    async includeSource(subpath) {

    }

    async defineConcept(id, contents) {

    }

    async addActions(day, actions) {

    }

    async defineFunction(id, contents) {

    }

    async relatePropagators(conceptId, relations) {

    }

  }

  globalThis.Protolang = new ProtolangApi(ProtolangParser);

})();