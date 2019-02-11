const { copyFiles } = require("mrm-core");

const FILES = [
  ".editorconfig",
  ".eslintrc.js",
  ".gitignore",
  ".prettierrc.js",
  "jest.config.js",
  "tsconfig.json"
];

function task() {
  copyFiles(__dirname, FILES, { overwrite: false });
}

task.description = "Add files";
module.exports = task;
