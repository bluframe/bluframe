const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const root = path.join(__dirname, "..");
const appName = process.argv.slice(2)[0];
let newVersion = process.argv.slice(3)[0];

if (!newVersion) {
  newVersion = appName;
}

const CURRENT_VERSION_REGEX = /"version":\s*"(.*)"/;

let pathName = "package.json";

if (appName && appName !== newVersion) {
  pathName = `${appName}/package.json`;
}

if (!newVersion) {
  console.log("No app version is specified! 👮🏼‍♀️");
  process.exit();
}

const fullPath = path.join(root, pathName);

fs.readFile(fullPath, "utf8", (err, content) => {
  const currentVersion = CURRENT_VERSION_REGEX.exec(content)[1];
  const currentVersionParts = currentVersion.split(".");

  const currentMajor = currentVersionParts[0];
  const currentMinor = currentVersionParts[1];
  const currentPatch = currentVersionParts[2];

  if (newVersion === "major") {
    newVersion = `${parseInt(currentMajor) + 1}.0.0`;
  } else if (newVersion === "minor") {
    newVersion = `${currentMajor}.${parseInt(currentMinor) + 1}.0`;
  } else if (newVersion === "patch") {
    newVersion = `${currentMajor}.${currentMinor}.${
      parseInt(currentPatch) + 1
    }`;
  }

  const replace = `"version": "${newVersion}"`;
  const replaced = content.replace(CURRENT_VERSION_REGEX, replace);

  fs.writeFile(fullPath, replaced, (error) => {
    if (error) {
      throw `There was a problem updating ${pathName} 😢`;
    }

    const newVersion = CURRENT_VERSION_REGEX.exec(replaced)[1];

    console.log(
      `Successfully updated${
        appName !== newVersion ? ` ${appName}` : ""
      } to ${newVersion}! 🎉`
    );
  });
});
