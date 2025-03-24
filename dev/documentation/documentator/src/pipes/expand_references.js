module.exports = function(ast, dir, parser) {
  const fs = require("fs");
  const path = require("path");
  const comments = ast.comments;
  const references_dir = path.resolve(__dirname, "../references");
  Iterate_comments_1:
  for(let index_comment_1=0; index_comment_1<comments.length; index_comment_1++) {
    const comment_1 = comments[index_comment_1];
    if("reference" in comment_1) {
      const ref = comment_1.reference;
      const ref_path = path.resolve(references_dir, ref);
      try {
        const ref_content = fs.readFileSync(ref_path).toString();
        const ref_content_in_comment = "/**\n" + ref_content + "\n*/";
        const ref_ast = parser.parse(ref_content_in_comment);
        const ref_ast_comment = ref_ast.comments[0];
        comments[index_comment_1] = Object.assign({}, comment_1, ref_ast_comment);
        delete comments[index_comment_1].reference;
      } catch (error) {
        console.log("  [!] Reference not found: " + ref);
      }
    }
  }
  return ast;
};