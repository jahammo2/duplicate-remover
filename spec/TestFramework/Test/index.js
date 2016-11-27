import Logger from '../Logger';

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

  deeplyEquals(expectedValue) {
    return {
      passed: this.actualValue == expectedValue,
      errorMessage: `expected ${this.actualValue} to deeply equal ${expectedValue}`
    }
  }
}

export default Test;
