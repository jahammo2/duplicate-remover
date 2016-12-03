import {
  removeWhiteSpace
} from '../TestFramework/helpers';
import Logger from '../TestFramework/Logger';
import Test from '../TestFramework/Test';
import TestFramework from '../TestFramework';

const testFramework = new TestFramework(Logger);

const globalDocument = {
  getElementById: () => {
    return {
      className: {
        replace: () => {}
      }
    };
  }
};

export {
  Test,
  testFramework,
  removeWhiteSpace,
  globalDocument
};
