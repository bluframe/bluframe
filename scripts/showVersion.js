const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const root = path.join(__dirname, "..");
const appName = process.argv.slice(2)[0];

const find = /"version":\s*"(.*)"/;

const showVersionName = (file) => {
  const fullPath = path.join(root, file);

  fs.readFile(fullPath, "utf8", (err, content) => {
    const version = find.exec(content);
    console.log(`Version ${version[1]} 🎉`);
  });
};

let pathName = "package.json";

if (appName) {
  pathName = `${appName}/package.json`;
}

showVersionName(pathName);
