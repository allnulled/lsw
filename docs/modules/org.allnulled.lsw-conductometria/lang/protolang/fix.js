const fs = require("fs");

const output = fs.readFileSync(__dirname + "/protolang.js").toString().replace(/\(this\);[\n\r\t ]*$/g, "(globalThis);");

fs.writeFileSync(__dirname + "/protolang.js", output, "utf8");