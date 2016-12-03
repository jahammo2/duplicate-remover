function findHighestAmountOfDuplicatesInArray(arr) {
  const hash = {};
  let highestAmounts = 0;

  for (let i = 0; i < arr.length; i++) {
    const hashValue = hash[arr[i]];

    if (hashValue > -1) {
      hash[arr[i]]++;

      if (highestAmounts <= hashValue) {
        highestAmounts = hashValue + 1;
      }
    } else {
      hash[arr[i]] = 0;
    }
  }

  return highestAmounts;
}

function shuffle(array) {
  let randomNum;

  for (let i = array.length; i; i--) {
    randomNum = Math.floor(Math.random() * i);
    [array[i - 1], array[randomNum]] = [array[randomNum], array[i - 1]];
  }

  return array;
}

export function arraysInitiallyOrderedTheSame(arr1, arr2) {
  const highestDuplicateAmounts = findHighestAmountOfDuplicatesInArray(arr1);

  for (let i = 0; i < highestDuplicateAmounts; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

export function generateEmails() {
  let emailAddress;
  let initialEmails = [];

  for (let ii = 2; ii > 0; ii--) {
    for (let i = 25000; i > 0; i--) {
      emailAddress = `foo${i}@email.com`;
      initialEmails.push(emailAddress);
    }
  }

  for (let i = 50000; i > 0; i--) {
    emailAddress = `bar${i}@email.com`;
    initialEmails.push(emailAddress);
  }

  return shuffle(initialEmails);
}

export function getTime() {
  return new Date().getTime();
}

export function find(id) {
  return document.getElementById(id)
}
