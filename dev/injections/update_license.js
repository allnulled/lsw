const fs = require("fs");
const path = require("path");
const licensePath = path.resolve(projectPath, "LICENSE.md");
const $packagePath = path.resolve(projectPath, "package.json");
const $package = require($packagePath);

fs.writeFileSync(licensePath, `/*
  @artifact:  Lite Starter Web Dependency
  @url:       ${project.source}
  @name:      ${project.name}
  @version:   ${$package.version}
*/`, "utf8");