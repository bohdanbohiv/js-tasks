1) https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

function stringToArray(string) {
  let str = "Robin, Singh";
  let arr = str.split(",");
  //split string by comma

  console.log(arr);
  //["Robin", "Singh"]
}

2) https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");

  // create a function which returns an RNA sequence from the given DNA sequence
}

3) https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

const min = (list) => {
  return Math.min(...list);
};

const max = (list) => {
  return Math.max(...list);
};
