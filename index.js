//console.log(this);
//you want to create a list of cars with caracteristics
const person ={
    username: 'max',
    age: 22,
    role: 'Developer',
    sayHi: function () {
        console.log(`Hello my name is ${this.username}, im a ${this.role} and im ${this.age}.`);
    }
}
person.sayHi();
//class properties
// 
class Car {
    constructor(maker, year, model) {
        this.maker = maker;
        this.year = year;
        this.model = model;
        this.speed = 100;
    }
    increaseSpeed(){
        this.speed += 10; // increment speed by 10
    }
}
const honda = new Car ('honda', 2022, 'civic');
honda.increaseSpeed();
console.log(honda);
//Create animal classes
class Animal {
    constructor(animalName, sex, fur, age, isAwake, isMoving){
    this.animalName = animalName;
    this.sex = sex;
    this.fur = fur;
    this.age = 3;
    this.isAwake = isAwake;
    this.isMoving = isMoving;
}
}
const dog = new Animal('patrol', 'female', 'black dot', 3, true, false);
    console.log(dog);
//Add Method
const nums = [1,2,3];
nums.forEach((nums) => {
    console.log(nums);
});

console.log(Math.random());

class Pet {
	constructor(name,eyes, legs, isAwake, isMoving) {
    this.name = name;
	this.eyes = eyes;
    this.legs = legs;
    this.isAwake = isAwake;
    this.isMoving = isMoving;
    this.toy = [];
    }
    pushNewToy = (newToy) => {
        this.toy.push(newToy);
	  // return is not needed because the new object is returned by default
	}
  sleep() {
    this.isAwake = false;
  }
  wake() {
    this.isAwake = true;
  }
  sit() {
    this.isMoving = false;
  }
  walk() {
    this.isMoving = true;
  }
  speak(sound) {
    console.log(`My pet ${this.name} is making a sound ${sound}`);
  }
}
const newToy1 = ['ball'];
const newToy2 = ['samson'];
pushNewToy(newToy1, newToy2);
console.log(toy);
console.log(Pet);
const cat1 = new Pet('Tom', 2, 4, false, false);
console.log(cat1);
console.log('is tom awake?', cat1.isAwake);
cat1.speak('miauu');
