const fs = require("fs");
const path = require("path");
const packageJsonPath = path.resolve(projectPath, "package.json");

console.log(packageJsonPath);
console.log(fs.existsSync(packageJsonPath));
const currentPackage = require(packageJsonPath);
Create_script_if_not: {
  Object.assign(currentPackage, { scripts: currentPackage.scripts || {} });
}
Create_basic_script_if_not: {
  Object.assign(currentPackage.scripts, {
    build: currentPackage.scripts.build || `echo 'no building for ${name}'`,
    test: currentPackage.scripts.test || `echo 'no test for ${name}'`,
    versionate: currentPackage.scripts.versionate || `echo 'no versionate for ${name}'`,
  });
}
Do_your_thing_here: {
  
}
fs.writeFileSync(packageJsonPath, JSON.stringify(currentPackage, null, 2), "utf8");