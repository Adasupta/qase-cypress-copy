import { qase } from "cypress-qase-reporter/mocha";

describe("Example: attach.cy.js", () => {
  it("Test result with attachment", async () => {
    // To attach a single file
    qase.attach({
      paths: "./cypress/e2e/tests/examples/attachments/test-file.txt",
    });

    /* 
         // Add multiple attachments. 
      qase.attach({ paths: ['/path/to/file', '/path/to/another/file'] });

         // Upload file's contents directly from code.
      qase.attach({ name: 'attachment.txt', content: 'Hello, world!', contentType: 'text/plain' });
        */

    expect(true).to.equal(true);
  });
});
