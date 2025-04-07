npx pegjs --format globals --export-var ProtolangParser --output protolang.js protolang.pegjs
node fix.js
npx universal-tester test/test.js