const core = require("@actions/core");
const checkConfigFile = require("./checkConfigFile");
const checkPackageJsonFile = require("./checkPackageJsonFile");
const checkLicenseFile = require("./checkLicenseFile");

const main = async () => {
  try {
    console.log('Starting Integration Development Checklist...\n');

    checkConfigFile();

    checkLicenseFile();

    await checkPackageJsonFile();

    console.log('\n\nIntegration Development Checklist Passed!\n');
  } catch (error) {
    core.setFailed(error.message);
  }
};

main();

module.exports = main;