window.addEventListener("load", function() {
  Array.from(document.querySelectorAll(".documentator_code_snippet")).forEach(el => {
    window.hljs.highlightElement(el);
  });
})