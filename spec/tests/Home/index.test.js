import {
  TestFramework,
  Test,
  testFramework
} from '../testHelpers';
import Home from '../../../src/Home';
let expectedValue;
let actualValue;

testFramework.runTests(['Home','renderTasks'], [
  () => {
    const home = new Home();
    home.tasks = ['testHelpers', 'bar'];
    actualValue = home.renderTasks();
    expectedValue = '<li>testHelpers</li><li>bar</li>';

    testFramework.it(
      'returns a list of list items with tasks',
      new Test(actualValue).equals(expectedValue)
    );
  }
]);
