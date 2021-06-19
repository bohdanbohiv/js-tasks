// 1) https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

function stringToArray(string) {
  return string.split(' ');
}

// 2) https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");

  // create a function which returns an RNA sequence from the given DNA sequence
}

// 3) https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

const min = (list) => {
  return Math.min(...list);
};

const max = (list) => {
  return Math.max(...list);
};

// 4) https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
  let val = arr[0];
  let index = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < val) {
      val = arr[i];
      index = i;
    }
  }
  return toReturn === 'value' ? val : index;
}

// 5) https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
function warnTheSheep(queue) {
  let i = 1;
  for (; queue[queue.length - i] !== 'wolf'; i++);
  return i === 1
    ? 'Pls go away and stop eating my sheep'
    : `Oi! Sheep number ${i - 1}! You are about to be eaten by a wolf!`;
}


// 6) https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript
function maps(x){
  return x.map(int => int << 1);
}


// 7) https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== 1) {
      return arr[i];
    }
  }
  return null;
}
