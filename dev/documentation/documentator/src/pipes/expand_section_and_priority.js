module.exports = function(ast, dir, parser, options) {
  const fs = require("fs");
  const path = require("path");
  const comments = ast.comments;
  const default_file = options.default_file ?? "index.html";
  const default_section = options.default_section ?? "0. Prelude";
  const book = {
    files: {
      [default_file]: {
        sections: {
          [default_section]: []
        }
      }
    }
  };
  Iterate_comments_1:
  for(let index_comment_1=0; index_comment_1<comments.length; index_comment_1++) {
    const comment_1 = comments[index_comment_1];
    const file_1 = (comment_1.$output ?? comment_1.output ?? default_file).replace(/^\//g, "").trim();
    const section_1 = (comment_1.$section ?? comment_1.section ?? default_section).trim();
    if(!(file_1 in book.files)) {
      book.files[file_1] = {
        sections: {
          [default_section]: []
        }
      };
    }
    if(!(section_1 in book.files[file_1].sections)) {
      book.files[file_1].sections[section_1] = [];
    }
    comment_1.$output = file_1;
    book.files[file_1].sections[section_1].push(comment_1);
  }
  ast.book = book;
  return ast;
};