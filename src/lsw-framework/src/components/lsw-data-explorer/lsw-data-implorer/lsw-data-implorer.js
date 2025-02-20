Vue.component('LswDataImplorer', {
  template: $template,
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
