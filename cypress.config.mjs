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

      /*run: {
        // id: 1,

        // Generate the same link that would be created by the GitHub Action
        title: `Test Run - Qase Link: ${process.env.QASE_API_BASE_URL}/apps/external_link/${process.env.QASE_TESTOPS_PROJECT}/github-app/?run_id=${process.env.QASE_TESTOPS_RUN_ID}&external_run_id=${process.env.GITHUB_RUN_ID}`,

        description: "Cypress Automated Test run",
        complete: true,
      },*/
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

      // Ensure the dynamic Qase link is passed to the environment
      config.env.QASE_TESTOPS_RUN_TITLE = `Test Run - Qase Link: ${process.env.QASE_API_BASE_URL}/apps/external_link/${process.env.QASE_TESTOPS_PROJECT}/github-app/?run_id=${process.env.QASE_TESTOPS_RUN_ID}&external_run_id=${process.env.GITHUB_RUN_ID}`;

      return config;
    },
  },
});

