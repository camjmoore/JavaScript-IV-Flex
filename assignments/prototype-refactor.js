

// In order to do these exercises you'll need your newly acquired knowledge on
// constructor functions, methods, prototypes and the `this` keyword.
// Here's an example of an exercise:

// TASK 0:
// - Build an Airplane constructor that takes a name.
// - Give airplanes the ability to take off and land.
// - If a plane takes off, its "isFlying" property is true.
// - If a plane lands, its "isFlying" property is false.

// SOLUTION CODE:
class Airplane{
  constructor(name){
    this.name = name;
    this.isFlying = false;
  }
  takeOff(){
    return this.isFlying = true;
  }
  land(){
    return this.isFlying = false;
  }
};

// HOW TO TEST OUR SOLUTION:
const jumbo = new Airplane('Jumbo');
console.log(jumbo.name)              // 'Jumbo'
console.log(jumbo.isFlying)          // false
jumbo.takeOff();
console.log(jumbo.isFlying)          // true
jumbo.land();
console.log(jumbo.isFlying)          // false


// TASK 1
// - Build a Person Constructor that takes name and age.
// - Give persons the ability to greet by returning a string stating name and age.
// - Give persons the ability to eat edibles.
// - When eating an edible, it should be pushed into a "stomach" property which is an array.
// - Give persons the ability to poop.
// - When pooping, the stomach should empty.

class Person{
  constructor(attributes){
    this.name = attributes.name;
    this.age = attributes.age;
    this.stomach = [];
  }
    greet(){
    return `${this.name} says Hello!`
  }
    eat(edibles){
      this.stomach.push(edibles)
    return `${this.name}\'s stomach is filled with ${this.stomach}`
  }
    poop(){
      this.stomach = []
    return `${this.name}\'s stomach is all empty`
  }
};

let guy = new Person({
  name: 'Gary',
  age: 32,
  stomach: []
})

console.log(guy.greet())
console.log(guy.eat('pizza'))
console.log(guy.poop())

// TASK 2
// - Build a Car constructor that takes model name and make.
// - Give cars the ability to drive a distance.
// - By driving a car, the distance driven should be added to an "odometer" property.
// - Give cars the ability to crash.
// - A crashed car can't be driven any more. Attempts return a string "I crashed at x miles!", x being the miles in the odometer.
// - Give cars the ability to be repaired.
// - A repaired car can be driven again.

class Car{
  constructor(attributes){
    this.modelName = attributes.modelName;
    this.make = attributes.make;
    this.odometer = attributes.odometer;
    this.mobility = attributes.mobility
  }
    drive(distance){
      if(this.mobility === 'crashed' ){
      return `a crashed ${this.make} can\'t be driven anymore!`
      }else if(this.mobility === 'mobile' ){
        this.odometer += distance
      return `I drove ${distance} miles`
      }
    }
    crashed(){
      this.mobility = 'crashed'
    return `I crashed at ${this.odometer} miles`
    }
    repaired(){
      this.mobility = 'mobile'
    return ` the ${this.make} is ${this.mobility}`
    }
    resetOdometer(){
      this.odometer = 0;
    return this.odometer 
    }
}

let porsche = new Car({
  modelName: '930 Turbo',
  make: 'Porsche',
  odometer: 0,
  mobility: 'mobile'
})

console.log(porsche.drive(65))
console.log(porsche.crashed())
console.log(porsche.drive())
console.log(porsche.repaired())
console.log(porsche.drive(45))
console.log(porsche.odometer)
console.log(porsche.resetOdometer())

// TASK 3
// - Build a Baby constructor that subclasses the Person built earlier.
// - Babies of course inherit the ability to greet, which can be strange.
// - Babies should have the ability to play, which persons don't.
// - By playing, a string is returned with some text of your choosing.

class Baby extends Person{
  constructor(attributes){
    super(attributes);
    this.toy = attributes.toy;
  }  
    play(){
    return `${this.name} played with the ${this.toy}`
    }
}

let babyBlue = new Baby({
  name: 'Blue',
  age: 3,
  stomach: [],
  toy: 'Fire-truck'
})

console.log(babyBlue.greet())
console.log(babyBlue.play())
console.log(babyBlue.eat('carrots'))
console.log(babyBlue.poop())

// TASK 4

// Use your imagination and come up with constructors that allow to build objects
// With amazing and original capabilities. Build 3 small ones, or a very
// complicated one with lots of state. Surprise us!
//Coffee, Beer, Music

class Coffee{
  constructor(attributes){
    this.region = attributes.region,
    this.roast = attributes.roast,
    this.aromatics = attributes.aromatics
  }
}

let rwandanCoffee = new Coffee({
  region: 'Rwandan',
  roast: 'moderate',
  aromatics: 'fruity'
})

let tanzanianCoffee = new Coffee({
  region: 'Tanzanian',
  roast: 'moderate',
  aromatics: 'floral'
})

class FavoriteCoffee extends Coffee{
  constructor(attributes){
    super(attributes)
  }
  favorite(){
  return `My favorite coffee is ${this.region}, it is ${this.roast}ly roasted and has a ${this.aromatics} aroma`
  }
}

let ethiopianCoffee = new FavoriteCoffee({
  region: 'Ethiopian',
  roast: 'light',
  aromatics: 'floral'
})

console.log(ethiopianCoffee.favorite())


class Beer{
  constructor(attributes){
  this.style = attributes.style;
  this.flavors = attributes.flavors;
  this.ABV = attributes.ABV;
  }
}

let dalesPaleAle = new Beer({
  style: 'Pale Ale',
  flavors: ['hoppy', 'malty'],
  ABV: '5%'
})

let ecliptical = new Beer({
  style: 'Saison',
  flavors: ['Citrusy', 'Woody'],
  ABV: '7%'
})

class FavoriteBeer extends Beer{
  constructor(attributes){
    super(attributes);
  }
    favorite(){
    return `My favorite beer is a ${this.style}, Mmmmmm liquid dessert!`
    }
}

let breakfastStout = new FavoriteBeer({
  style: 'Double Chocolate Coffee Oatmeal Stout',
  flavors: ['Chocolatey', 'Roasty', 'Coffee'],
  ABV: '8.3%'
})

console.log(dalesPaleAle.flavors)
console.log(breakfastStout.favorite())


class Music{
  constructor(attributes){
  this.genre = attributes.genre;
  this.mood = attributes.mood;
  this.instruments = attributes.instruments;
  }
}

let radioHead = new Music({
  genre: 'progressive-rock',
  mood: 'introspective',
  instruments: ['guitars', 'drums', 'pianos', 'synthesizers']
})

let brianEno = new Music({
  genre: 'ambient',
  mood: 'meditative',
  instruments: ['computers']
})

console.log(brianEno.instruments)
console.log(radioHead.genre)


/*
STRETCH TASK
Object oriented design is commonly used in video games. You will be implementing several constructor functions with their correct inheritance hierarchy.
In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.
At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.

Each constructor function has unique properties and methods that are defined in their block comments below:

=== GameObject ===
* createdAt
* name
* dimensions (These represent the character's size in the video game)
* destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

class GameObject{
  constructor(attributes){
  this.createdAt = attributes.createdAt;
  this.name = attributes.name;
  this.dimensions = attributes.dimensions;
}
  destroy(){
  return `${this.name} was removed from the game.`
  }
}

/*
=== CharacterStats ===
* healthPoints
* takeDamage() // prototype method -> returns the string '<object name> took damage.'
* should inherit destroy() from GameObject's prototype
*/

class CharacterStats extends GameObject{
  constructor(attributes){
    super(attributes);
    this.healthPoints = attributes.healthPoints;
  }
    takeDamage(num){
    return `${this.name} took ${num} damage points.`
    }
}


/*
=== Humanoid (Having an appearance or character resembling that of a human.) ===
* team
* weapons
* language
* greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
* should inherit destroy() from GameObject through CharacterStats
* should inherit takeDamage() from CharacterStats
*/
class Humanoid extends CharacterStats{
  constructor(attributes){
    super(attributes);
      this.team = attributes.team;
      this.weapons = attributes.weapons;
      this.language = attributes.language;
  }
    greet(){
    return `${this.name} offers a greeting in ${this.language}`
    }
}

/*
* Inheritance chain: GameObject -> CharacterStats -> Humanoid
* Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
* Instances of CharacterStats should have all of the same properties as GameObject.
*/
// Test you work by un-commenting these 3 objects and the list of console logs below:
const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
  length: 2,
  width: 1,
  height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
  'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});
const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
  length: 2,
  width: 2,
  height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
  'Giant Sword',
  'Shield',
  ],
  language: 'Common Tongue',
});
const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
  length: 1,
  width: 2,
  height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
  'Bow',
  'Dagger',
  ],
  language: 'Elvish',
});
console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

