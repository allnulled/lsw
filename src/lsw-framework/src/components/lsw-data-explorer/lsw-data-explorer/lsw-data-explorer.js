Vue.component('LswDataExplorer', {
  template: $template,
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
