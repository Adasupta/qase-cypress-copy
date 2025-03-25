import { defineConfig } from "cypress";
import qasePlugin from "cypress-qase-reporter/plugin";
import qaseMetadata from "cypress-qase-reporter/metadata";

export default defineConfig({
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "cypress-qase-reporter",
    cypressQaseReporterReporterOptions: {
      

            //mode: 'testops',
            //debug: false,
            //testops: {
              //api: {
                //token: 'api_key',
              //},
              //project: 'project_code',
              //uploadAttachments: true,
              run: {
              //  id: 1,
                title: `Test Run with GitHub Run ID: ${github.run_id}`,
                description: "Cypress Automated Test run",
                complete: true,
              },
              environment: 'prod',
            },
            framework: {
                cypress: {
                    screenshotsFolder: 'cypress/screenshots',
                }
            }
          
    },
  },
  video: true,
  screenshotOnRunFailure: true,
  e2e: {
    setupNodeEvents(on, config) {
      qasePlugin(on, config);
      qaseMetadata(on);
    },
  },
});
