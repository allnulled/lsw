const unabsolutize_file = function(file, basedir = "") {
  console.log(file);
  console.log(basedir);
  let file2 = file;
  file2 = file2.startsWith(basedir) ? file2.substr(basedir.length) : file2;
  file2 = (file2.startsWith("/") && (file2.length > 1)) ? file2.substr(1) : file2;
  return file2;
};

module.exports = function(ast, dir_brute) {
  const dir = require("path").resolve(dir_brute);
  const comments = ast.comments;
  Iterate_comments_1:
  for(let index_comment_1=0; index_comment_1<comments.length; index_comment_1++) {
    const comment_1 = comments[index_comment_1];
    if("code.start" in comment_1) {
      const code_id_1 = comment_1["code.start"];
      const file_1 = require("path").resolve(dir, unabsolutize_file(comment_1.$file, dir));
      Iterate_comments_2:
      for(let index_comment_2=index_comment_1; index_comment_2<comments.length; index_comment_2++) {
        const comment_2 = comments[index_comment_2];
        const file_2 = require("path").resolve(dir, unabsolutize_file(comment_2.$file, dir));
        if(file_1 !== file_2) {
          continue Iterate_comments_2;
        }
        if("code.end" in comment_2) {
          if(code_id_1 === comment_2["code.end"]) {
            const pos_start = comment_1.$location.end.offset;
            const pos_end = comment_2.$location.start.offset;
            const filecontents = require("fs").readFileSync(file_1).toString();
            comment_1.$code = filecontents.substring(pos_start, pos_end);
            comment_1["$code.label"] = comment_1["code.start"];
            delete comment_1["code.start"];
            continue Iterate_comments_1;
          }
        }
      }
    }
  }
  Remove_comments_with_code_end_and_delete_code_start: {
    ast.comments = ast.comments.filter(comment => {
      return !("code.end" in comment);
    });
  }
  return ast;
};