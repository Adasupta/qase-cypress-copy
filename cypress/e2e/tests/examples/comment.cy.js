import { qase } from "cypress-qase-reporter/mocha";

describe("Example: comment.cy.js", () => {
  it("A test 123 with qase.comment()", () => {
    /*
     * Please note, this comment is added to a Result, not to the Test case.
     */

    qase.comment(
      "This comment will be displayed in the 'Actual Result' field of the test result in Qase.",
    );

    expect(true).to.equal(true);
  });
});
