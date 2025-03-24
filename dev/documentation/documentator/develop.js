require("chokidar").watch([
  __dirname + "/src",
  __dirname + "/test/examples",
]).on("change", function(file) {
  console.log(file);
  if(!file.endsWith(".js")) {
    return;
  }
  if(file.endsWith("/documentator.js")) {
    return;
  }
  console.log(file);
  require("child_process").spawn("npm", ["test"], {
    cwd: __dirname,
    stdio: [process.stdin, process.stdout, process.stderr]
  });
});