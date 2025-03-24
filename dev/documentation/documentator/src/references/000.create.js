const new_references_brute = `

ref.api.loader.rf
ref.api.loader.creation
ref.api.loader.load.utilities_and_configurations
ref.api.loader.load.database
ref.api.loader.load.server
ref.api.loader.load.modules
ref.api.loader.load.start_and_stop_server_functions


`;

const main = async function () {
  const fs = require("fs");
  const path = require("path");
  const new_references = new_references_brute.split("\n").map(rf => rf.trim()).filter(rf => rf !== "").map(rf => rf.endsWith(".rf") ? rf : (rf + ".rf"));
  Iterating_references:
  for (let index_ref = 0; index_ref < new_references.length; index_ref++) {
    const new_reference = new_references[index_ref];
    const new_reference_path = path.resolve(__dirname, new_reference);
    let is_file = false;
    try {
      const new_reference_stat = await fs.promises.lstat(new_reference_path);
      is_file = new_reference_stat.isFile();
    } catch (error) {}
    if(is_file) {
      continue Iterating_references;
    }
    fs.writeFileSync(new_reference_path, "", "utf8");
  }
};

module.exports = main();