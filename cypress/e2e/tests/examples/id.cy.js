import { qase } from "cypress-qase-reporter/mocha";


// Please, change the Ids in the following tests to valid ids from your Qase project.
 
describe('Example: id.cy.js', () => {

  qase(1,
    it('Result will be posted against the specified test in Qase', () => {
      expect(true).to.equal(true);
    })
  );

  qase([2, 3],
    it('Result of this test will be applied to multiple test cases', () => {
      expect(true).to.equal(true);
    })
  );

  qase(4,
    it.skip('This test result will show up as "skipped" in Qase test run', () => {
      expect(true).to.equal(true);
    })
  );

});

