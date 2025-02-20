const fs = require('fs');
const path = require('path');

const copyDirectorySync = function(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }

    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            copyDirectorySync(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
};

const copyFilesOnlySync = function(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }

    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
        if (entry.isFile()) {
            const srcPath = path.join(src, entry.name);
            const destPath = path.join(dest, entry.name);
            fs.copyFileSync(srcPath, destPath);
        }
    }
};

module.exports = {
  copyDirectorySync,
  copyFilesOnlySync,
}