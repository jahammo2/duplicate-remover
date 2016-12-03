import {
  globalDocument,
  Test,
  testFramework
} from '../testHelpers';
import Emails from '../../../src/Emails';
let expectedValue;
let actualValue;

global.document = globalDocument;

// Just to demostrate a basic test
testFramework.runTests(['Emails','handleShowHideClick'], [
  () => {
    const emails = new Emails();
    emails.initialEmailsEl = {
     className: ''
    };
    emails.showing = true;
    emails.handleShowHideClick();
    actualValue = emails.showing;
    expectedValue = false;

    testFramework.it(
      'changes showing to false if initially set to true',
      new Test(actualValue).equals(expectedValue)
    );
  }
]);

