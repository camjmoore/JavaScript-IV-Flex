class Person {
  constructor(attributes){
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  };
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    };
};

class Instructor extends Person {
  constructor(attributes){
    super(attributes);
    this.specialty = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  };
    demo(subject){
      console.log(`Today we are learning about ${subject}`)
    };
    grade(student, subject){
      console.log(`${student} receives a perfect score on ${subject}`)
    };
};

class Student extends Person {
  constructor(attributes){
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
  };
    listsSubjects(){
      console.log(this.favSubjects)
    };
    PRAssignment(subject){
      console.log(`${student.name} has submitted a PR for ${subject}`)
    };
    sprintChallenge(subject){
      console.log(`${student.name} has begun a sprint challenge on ${subject}`)
    };
};

class ProjectManager extends Instructor {
  constructor(attributes){
    super(attributes)
    this.gradClassName = attributes.gradClassName;
    this.favInstructors = attributes.favInstructors;
  };
    standUp(name, channel){
      console.log(`${name} announces to ${channel}, @channel standy times!`)
    };
    debugsCode(student, subject){
      console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    };
};

const kingCold = new Instructor({
  name: 'kingCold',
  location: 'Hell',
  age: 790,
  favLanguage: 'Java',
  specialty: 'Android Development',
  catchPhrase: 'My clan is feared throughout the Universe! What fool dares challenge our supremacy?'
});

const korin = new Instructor({
  name: 'Korin',
  location: 'Korin Tower',
  age: 800,
  favLanguage: 'C++',
  specialty: 'climbing all levels of the stack',
  catchPhrase: 'The cat has a name you know! And it wouldn\'t hurt for you to show a little respect!'
});


const trunks = new Student({
  name: 'Trunks',
  location: 'Earth',
  age: 7,
  previousBackground: 'baby',
  className: 'FullStack',   
  favSubjects: 'functional programming'
})

const gohan = new Student({
  name: 'Gohan',
  location: 'Earth',
  age: 29,
  previousBackground: 'Z Fighter',
  className: 'DataScience',   
  favSubjects: 'data analyis'
})


const piccolo = new ProjectManager({
  name: 'Piccolo',
  location: 'Namek',
  age: 120,
  favLanguage: 'python',
  specialty: 'Dev Ops',
  catchPhrase: 'After all my years of training to defeat your father, I go out like this trying to save you; his son.',
  gradClassName: 'iOS3',
  favInstructors: 'korin'
})

const frieza = new ProjectManager({
  name: 'Frieza',
  location: 'universe 7',
  age: 36,
  favLanguage: 'namekian',
  specialty: 'Death Comet',
  catchPhrase: 'There are three things I refuse to tolerate. Cowardice. Bad haircuts, and military insurrection.',
  gradClassName: 'FullStack7',
  favInstructors: 'King Cold'
})

