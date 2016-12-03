import {
  GREEN,
  RED
} from './Constants/colors';

class TestFramework {
  constructor(logger) {
    this.logger = logger;
    this.testSpaces = 0;
  }

  it(description, test) {
    new this.logger(
      this.testSpaces,
      description,
      GREEN
    ).run();

    if (!test.passed) {
      new this.logger(
        this.testSpaces + 2,
        test.errorMessage,
        RED
      ).run();
    }
  }

  runTests(descriptions, tests) {
    this.logDescriptions(descriptions);
    this.testSpaces = descriptions.length * 2;

    tests.forEach((test) => {
      test();
    });
  }

  logDescriptions(descriptions) {
    descriptions.forEach((description, index) => {
      new this.logger(
        index * 2,
        description,
        GREEN
      ).run();
    });
  }
}

export default TestFramework;
