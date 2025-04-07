Vue.component("LswProtolangEditor", {
  template: $template,
  props: {
    initialContents: {
      type: String,
      default: () => ""
    }
  },
  data() {
    this.$trace("lsw-protolang-editor.data");
    return {
      error: false,
      result: false,
      contents: this.initialContents,
      placeholder: `rel correr
  > cardio * 1
  > musculación * 0.3
  >> propagador de correr * []`
    };
  },
  methods: {
    setError(error) {
      this.$trace("lsw-protolang-editor.methods.setError");
      this.error = error;
    },
    setResult(result) {
      this.$trace("lsw-protolang-editor.methods.setResult");
      this.result = result;
    },
    async validateCode() {
      this.$trace("lsw-protolang-editor.methods.validateCode");
      try {
        const value = this.contents;
        const js = await Protolang.codify(value);
        console.log(js);
        this.setError(false);
        this.setResult(js);
      } catch (error) {
        this.setError(error);
      }
    },
    async evaluateCode() {
      this.$trace("lsw-protolang-editor.methods.evaluateCode");
      try {
        const value = this.contents;
        const js = await Protolang.codify(value);
        console.log(js);
        this.setError(false);
      } catch (error) {
        this.setError(error);
      }
    },
  },
  watch: {},
  mounted() {
    try {
      this.$trace("lsw-protolang-editor.mounted");
      this.$window.protolangEditor = this;
    } catch(error) {
      console.log(error);
    }
  }
});