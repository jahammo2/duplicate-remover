import Logger from '../Logger';
import {
  arraysInitiallyOrderedTheSame,
  arraysNotReversed
} from '../../../utils';

class Test {
  constructor(actualValue) {
    this.actualValue = actualValue;
  }

  equals(expectedValue) {
    return {
      passed: this.actualValue === expectedValue,
      errorMessage: `expected ${this.actualValue} to equal ${expectedValue}`
    }
  }

  isOrderedAs(expectedValue) {
    // Since the duplicates that are removed are the ones that aren't the first instance, this test will suffice.
    // Example: the resulting array of [1,2,3,1] will be [1,2,3] so I only need to check that the first element in
    // both arrays match.
    //
    // This doesn't cover cases where the first elements match but the rest of the array is out order.
    const orderedCorrectly = arraysInitiallyOrderedTheSame(expectedValue, this.actualValue);

    return {
      passed: orderedCorrectly,
      errorMessage: 'the new array is ordered differently than the original'
    }
  }

  isLessThan(max) {
    return {
      passed: this.actualValue < max,
      errorMessage: `expected ${this.actualValue} to be less than ${max}`
    }
  }
}

export default Test;
