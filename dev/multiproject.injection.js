const fs = require("fs");
const path = require("path");
const changelogPath = path.resolve(projectPath, "CHANGELOG.md");

fs.writeFileSync(changelogPath, `# CHANGELOG\n\nChangelog file of project [${project.name}](${project.source}) on [${project.source}](${project.source}).\n\n`);