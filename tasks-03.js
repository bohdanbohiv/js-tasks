// https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
// 1) Find the smallest integer in the array codewars

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}
// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
// 2) Geometry Basics: Circle Circumference in 2D

function circleCircumference(circle) {
  var circumference = circle.radius * 2 * Math.PI;
  return circumference;
}

// https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript
// 3) Fun with ES6 Classes #2 - Animals and Inheritance

class Shark extends Animal {
  constructor(name, age, status) {
    super();
    this.name = name;
    this.age = age;
    this.legs = 0;
    this.status = status;
    this.species = "shark";
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super();
    this.name = name;
    this.age = age;
    this.status = status;
    this.legs = 4;
    this.species = "cat";
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master = "") {
    super();
    this.master = master;
    this.name = name;
    this.age = age;
    this.status = status;
    this.legs = 4;
    this.species = "dog";
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}
