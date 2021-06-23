/* https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
1) Find the smallest integer in the array codewars */
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

/* https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
2) Geometry Basics: Circle Circumference in 2D */
function circleCircumference(circle) {
  return circle.radius * 2 * Math.PI;
}

/* https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript
3) Fun with ES6 Classes #2 - Animals and Inheritance */
class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }

  introduce() {
    return `${super.introduce()}  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master = "") {
    super(name, age, 4, "dog", status);
    this.master = master;
  }

  greetMaster() {
    return `Hello ${this.master}`;
  }
}

/* 4) https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript */
function giveMeFive(obj) {
  const fiveArr = [];
  for (const key in obj) {
    if (key.length === 5) {
      fiveArr.push(key);
    }
    if (obj[key].length === 5) {
      fiveArr.push(obj[key]);
    }
  }
  return fiveArr;
}

/* Bohdan
5) https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript */
function buildFun(n) {
  const funcArr = [];
  for (let i = 0; i < n; i++) {
    funcArr.push(() => i);
  }
  return funcArr;
}
