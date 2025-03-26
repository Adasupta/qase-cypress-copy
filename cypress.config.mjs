import { defineConfig } from "cypress";
import qasePlugin from "cypress-qase-reporter/plugin";
import qaseMetadata from "cypress-qase-reporter/metadata";

export default defineConfig({
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "cypress-qase-reporter",
    cypressQaseReporterReporterOptions: {
      // Existing config, unchanged

      //mode: 'testops',
      //debug: false,
      //testops: {
        //api: {
          //token: 'api_key',
        //},
        //project: 'project_code',
        //uploadAttachments: true,

      run: {
        // id: 1,
        title: process.env.QASE_TESTOPS_RUN_TITLE || "Default Title"
        description: process.env.QASE_TESTOPS_RUN_DESCRIPTION || "Regress run description",
        complete: true,
      },
      //environment: 'prod',
      //},
      /*framework: {
          cypress: {
              screenshotsFolder: 'cypress/screenshots',
          }
      }*/
    },
  },
  video: true,
  screenshotOnRunFailure: true,
  e2e: {
    setupNodeEvents(on, config) {
      qasePlugin(on, config);
      qaseMetadata(on);
      return config;
    },
  },
});
