/* eslint-disable @typescript-eslint/no-var-requires */
const { execSync } = require("child_process");
const { existsSync } = require("fs");
const { join } = require("path");

/**
 * @param {import("electron-builder").AfterPackContext} context
 * @returns void
 */
const codeSign = (context) => {
    const { appOutDir, packager } = context;

    const appName = packager.appInfo.productFilename;
    const appPath = join(appOutDir, `${appName}.app`);

    if (!existsSync(appPath)) {
        throw new Error(`App not found at path: ${appPath}`);
    }

    console.log("Performing ad-hoc signing...");

    try {
        // Remove existing signature if any
        execSync(`codesign --remove-signature "${appPath}"`, { stdio: "inherit" });

        // Perform ad-hoc signing
        execSync(`codesign --force --deep -s - "${appPath}"`, { stdio: "inherit" });

        console.log("Ad-hoc signing completed successfully");
    } catch (error) {
        console.error("Error during ad-hoc signing:", error.message);
        throw error;
    }
};

module.exports = codeSign;
