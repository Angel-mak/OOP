'use strict';
// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //NEVER USE THIS BAD PERFORMANCE
//   //    this.calcAge = function(){
//   //     console.log(2037-this.birthYear);
//   //    }
// };
// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// // 1. New {} is created
// // 2. function is called,this = {}
// // 3. {} linked to a prototype
// // 4. function automatically return {}

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);
// console.log(matilda, jack);

// const jay = 'Jay';

// console.log(jonas instanceof Person);
// console.log(jay instanceof Person);

// // Prototypes
// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// jonas.calcAge();
// matilda.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));
// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species);
// console.log(matilda.species);

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

// console.log(jonas.__proto__);
// // Object.prototype (top of prototype chain)
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3,4,5,141,141,3,4,5]
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function(){
//    return [...new Set(this)]
// }
// console.log(arr.unique());
// const h1 = document.querySelector('h1')
// console.dir(x=>x+1);

// const Car = function(make,speed){
// this.make = make
// this.speed = speed
// }
// Car.prototype.accelerate = function(){
//     this.speed+=10
//     console.log(this.speed);
// }
// Car.prototype.brake = function(){
//     this.speed-=5
//     console.log(this.speed);
// }
// const bmw = new Car('BMW',120)
// const mercedes = new Car('Mercedes',95)
// bmw.accelerate()
// bmw.brake()
// mercedes.accelerate()
// mercedes.brake()

// class expression
// const PersonCl = class{}

// class  declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   // Methods will be added to the .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet = function () {
//     console.log(`Hey ${this.fullName}`);
//   };
//   get age() {
//     return 2037 - this.birthYear;
//   }
//   //set a property that already exist

//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }
//   // Static method
//   static hello() {
//     console.log('Hello!');
//   }
// }
// const jessica = new PersonCl('Jesica Davis', 1996);
// console.log(jessica.age);

// // personalbar.prototype.greet = function(){
// //     console.log(`Hey ${this.firstName}`);
// // }
// jessica.greet();

// // 1. Classes are NOT hoisted
// // 2. Class are first-class citizes
// // 3. classes are executed in strict mode

// const account = {
//   owner: 'Jonas',
//   movements: [233, 4141, 14, 1, 1, 4, 4],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };
// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);

// PersonCl.hey = function () {
//   console.log('Hey there 😊');
//   console.log(this);
// };
// PersonCl.hey();
// PersonCl.hello();

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();
// console.log(steven.__proto__);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(this.speed);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(this.speed);
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }
// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);
// bmw.speedUS=110
// bmw.accelerate();
// bmw.brake();
// console.log(bmw);
// console.log(bmw.speedUS);

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this,firstName,birthYear)
//   this.course = course;
// };
// // Linking prototypes
// Student.prototype = Object.create(Person.prototype)

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'computer science');
// console.log(mike);
// mike.introduce()
// mike.calcAge()
// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// //
// Student.prototype.constructor = Student
// console.dir(Student.prototype.constructor);
// const Car = function(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   Car.prototype.accelerate = function() {
//     this.speed += 10;
//     console.log(this.speed);
//   }
//   Car.prototype.brake = function() {
//     this.speed -= 5;
//     console.log(this.speed);
//   }
//   // get speedUS() {
//   //   return this.speed / 1.6;
//   // }
//   // set speedUS(speed) {
//   //   this.speed = speed * 1.6;
//   // }

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };
// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chatgeTo) {
//   this.charge = chatgeTo;
// };
// EV.prototype.accelerate = function(){
//   this.speed +=20
//   this.charge--
//   console.log(`${this.make} is going at ${this.speed}km/h with a charge of ${this.charge}%`);
// }
// const tesla = new EV('Tesla', 90, 80);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.accelerate()
// tesla.chargeBattery(55)
// tesla.brake()
// console.log(tesla);

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   // Methods will be added to the .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet = function () {
//     console.log(`Hey ${this.fullName}`);
//   };
//   get age() {
//     return 2037 - this.birthYear;
//   }
//   //set a property that already exist

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }
//   // Static method
//   static hey() {
//     console.log('Hello!');
//   }
// }
// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     //Alaways need to be called first
//     super(fullName, birthYear);
//     this.course = course;
//   }
//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }
//   calcAge() {
//     console.log(
//       `I'm ${
//         2037 - this.birthYear
//       } years old, but as a student I feel more like ${
//         2037 - this.birthYear + 10
//       }`
//     );
//   }
// }
// const martha = new StudentCl('Martha Jones', 2012, 'Compute Science');

// martha.introduce();
// martha.calcAge();

// const PersonProto = {

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const StudentProto = Object.create(PersonProto);

// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.fullName} and I study ${this.course}`);
// };

// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'computer Science');
// jay.introduce()
// jay.calcAge()

// 1) Public fields
// 2) Privete fields
// 3) Public methods
// 4) Private methods
// (there is also the static version )

// class Account {
//   //Public field (instances)
//   locale = navigator.language;

//   // Private fields (intances)
//   #movements = [];
//   #pin;
//   constructor(owner, currecy, pin) {
//     this.owner = owner;
//     this.currecy = currecy;
//     // Protected property
//     this.#pin = pin;
//     // this._movements = [];
//     // this.locale = navigator.language
//     console.log(`Thanks for opening account ${owner}`);
//   }

//   // 3) Public methods
//   getMovements() {
//     return this.#movements;
//   }
//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }
//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }

//   requestLoan(val) {
//     if (this._approvedLoan(val)) {
//       this.deposit(val);
//       console.log('Loan is approved');
//       return this;
//     }
//   }
//   // 4) Private methods
//   // #approvedLoan(val){
//   _approvedLoan(val) {
//     return true;
//   }
// }
// const acc1 = new Account('Jonas', 'EUR', 1111);

// // acc1.movements.push(250)
// // acc1.movements.push(-140)

// acc1.deposit(259);
// acc1.withdraw(140);
// acc1.requestLoan(1000);
// acc1._approvedLoan(1000);
// acc1.getMovements();
// console.log(acc1);
// // console.log(acc1.#movements);

// //Chaining
// acc1.deposit(200).deposit(500).withdraw(35).requestLoan(25000).withdraw(400);
// console.log(acc1.getMovements());

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 20;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(this.speed);
    return this
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCL extends CarCl {
  #charge
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge
  }
  accelerate(){
    this.speed += 20;
    this.#charge--
    console.log(`${this.make} is going at ${this.speed}km/h`);
    return this
  }
  chargeBattery(chargeTo){
    this.#charge = chargeTo
    return this
  }
}

const rivian = new EVCL('Rivian',120,23)
rivian.accelerate().brake()
console.log(rivian);
