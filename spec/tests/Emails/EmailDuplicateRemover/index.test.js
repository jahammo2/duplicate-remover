import {
  globalDocument,
  Test,
  testFramework
} from '../../testHelpers';
import EmailDuplicateRemover from '../../../../src/Emails/EmailDuplicateRemover';
import * as utils from '../../../../utils';
let actualValue;

global.document = globalDocument;

testFramework.runTests(['EmailDuplicateRemover','removeDuplicates'], [
  () => {
    const emails = utils.generateEmails();
    const emailDuplicateRemover = new EmailDuplicateRemover(emails);
    const t0 = utils.getTime();
    const promise = new Promise((resolve) => resolve(emailDuplicateRemover.removeDuplicates()));

    return promise.then(() => {
      const t1 = utils.getTime();
      actualValue = t1-t0;
      const maxTime = 1000;

      testFramework.it(
        'finishes in under 1 second',
        new Test(actualValue).isLessThan(maxTime)
      );
    });
  },

  () => {
    const emails = utils.generateEmails();
    const emailDuplicateRemover = new EmailDuplicateRemover(emails);
    const promise = new Promise((resolve) => resolve(emailDuplicateRemover.removeDuplicates()));

    return promise.then((newEmails) => {
      actualValue = newEmails;
      const oldEmails = emails;
      testFramework.it(
        'returns it in the same order',
        new Test(actualValue).isOrderedAs(oldEmails)
      );
    });
  },
]);
