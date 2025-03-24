const fs = require("fs");
const path = require("path");
const documentator_parser = require(__dirname + "/documentator.js");

const documentator_api = {
  parse_text: documentator_parser.parse,
  parse_directory: function (dir, options = {}) {
    const start_moment = new Date();
    const {
      fileformats = [".js"],
      ignored = ["/node_modules/"],
      pipes = [],
      output_dir = false,
    } = options;
    const all_files = fs.readdirSync(dir, { recursive: true });
    const filtered_files = [];
    Filtering_files:
    for (let index_file = 0; index_file < all_files.length; index_file++) {
      const file = all_files[index_file];
      const file_path = path.resolve(dir, file);
      Filter_1_fileformat: {
        let is_valid_fileformat = false;
        Iterating_fileformats:
        for (let index_ff = 0; index_ff < fileformats.length; index_ff++) {
          const fileformat = fileformats[index_ff];
          if (file.endsWith(fileformat)) {
            is_valid_fileformat = true;
            break Iterating_fileformats;
          }
        }
        if (!is_valid_fileformat) {
          console.log("[!] File ignored because no fileformat match: " + file);
          continue Filtering_files;
        }
      }
      Filter_2_ignored: {
        let is_valid_by_ignored = true;
        Iterating_ignored:
        for (let index_ignored = 0; index_ignored < ignored.length; index_ignored++) {
          const ignored_path = ignored[index_ignored];
          if (file.indexOf(ignored_path) !== -1) {
            is_valid_by_ignored = false;
          }
        }
        if (!is_valid_by_ignored) {
          console.log("[!] File ignored because ignored match: " + file);
          continue Filtering_files;
        }
      }
      Filter_3_only_files: {
        const is_file = fs.lstatSync(file_path).isFile();
        if (!is_file) {
          continue Filtering_files;
        }
        filtered_files.push(file);
      }
    }
    const filematches = {};
    let output = { comments: [] };
    Iterating_filtered_files:
    for (let index_file = 0; index_file < filtered_files.length; index_file++) {
      const filtered_file = filtered_files[index_file];
      const filepath = path.resolve(dir, filtered_file);
      if (!(filtered_file in filematches)) {
        filematches[filtered_file] = 0;
      }
      console.log("[*] Parsing file: " + filtered_file);
      const file_contents = fs.readFileSync(filepath).toString();
      const file_ast = this.parse_text(file_contents);
      if (!file_ast.comments.length) {
        console.log(`  [*] 0 comments found.`)
        continue Iterating_filtered_files;
      }
      console.log(`  [*] ${file_ast.comments.length} comments found.`)
      for (let index_ast = 0; index_ast < file_ast.comments.length; index_ast++) {
        const file_comment = file_ast.comments[index_ast];
        output.comments.push({
          $file: filepath.replace(dir, ""),
          ...file_comment
        });
        filematches[filtered_file]++;
      }
    }
    const final_pipes = [
      "expand_code",
      "expand_references",
      "expand_section_and_priority"
    ].concat(pipes);
    Apply_pipes: {
      for (let index_pipe = 0; index_pipe < final_pipes.length; index_pipe++) {
        const pipe_id = final_pipes[index_pipe];
        console.log("[*] Applying pipe: " + pipe_id);
        const pipe_function = require(__dirname + "/pipes/" + pipe_id + ".js");
        const pipe_result = pipe_function(output, dir, documentator_parser, options);
        if (typeof pipe_result !== "undefined") {
          output = pipe_result;
        }
      }
    }
    Expand_metadata: {
      output.metadata = {
        fileformats: fileformats,
        ignored: ignored,
        output_dir: output_dir,
        pipes: final_pipes,
        filematches: filematches,
        time: new Date() - start_moment + " milliseconds"
      };
    }
    return output;
  }
};

module.exports = documentator_api;