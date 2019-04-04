// CODE here for your Lambda Classes


// PERSON CLASS (base)
class Person {
    constructor(personAttr) {
        this.name = personAttr.name;
        this.age = personAttr.age;
        this.location = personAttr.location;
        this.gender = personAttr.gender;
        this.race = personAttr.race;
    }
    
    speak() {
        return `Hello, my name is ${this.name}, and I am from ${this.location}.`;
    }
}

// INSTRUCTOR CLASS
class Instructor extends Person {
    constructor(instructorAttr) {
        super(instructorAttr);
        this.specialty = instructorAttr.specialty;
        this.favLanguage = instructorAttr.favLanguage;
        this.catchPhrase = instructorAttr.catchPhrase;
    }
    
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

// STUDENT CLASS
class Student extends Person {
    constructor(studentAttr) {
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
    }
    
    listsSubjects() {
        this.favSubjects.forEach(function(ele) {
            console.log(ele);
        });
    }
    
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`; 
    }
}

// PM CLASS
class ProjectManager extends Instructor {
    constructor(pmAttr) {
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    }
    
    standUp(channel) {
        return `${this.name} accounces to ${channel}, @channel standy times!`;
    }
    
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}



// Instructors Instructors Instructors Instructors Instructors Instructors Instructors
const ganedri = new Instructor({
    name: 'Ganedri',
    location: 'Citime',
    age: 2210,
    gender: 'male',
    race: 'Elf',
    favLanguage: 'Fortran',
    specialty: 'Back-end',
    catchPhrase: `Sometimes you just have to take the L.`
});

const rondris = new Instructor({
    name: 'Rondris',
    location: 'Ditho',
    age: 3201,
    gender: 'male',
    race: 'Elf',
    favLanguage: 'Ruby',
    specialty: 'Full-stack',
    catchPhrase: `Life is a lot like Ruby, what you get out of it depends on how you program it.`
});

const atlanaeon = new Instructor({
    name: 'Atlanaeon',
    location: 'Citime',
    age: 1395,
    gender: 'female',
    race: 'Elf',
    favLanguage: 'Pascal',
    specialty: 'Full-stack',
    catchPhrase: 'It is better to be feared than loved, if you cannot be both.'
});

const daelphos = new Instructor({
    name: 'Daelphos',
    location: 'Ditho',
    age: 1233,
    gender: 'female',
    race: 'Elf',
    favLangauge: 'Java',
    speciality: 'Back-stack',
    catchPhrase: 'A computer once beat me at chess, but it was no match for me at kick boxing.'
});
// Instructors Instructors Instructors Instructors Instructors Instructors Instructors

// Students Students Students Students Students Students Students Students Students Students
const cash = new Student({
    name: 'Cash',
    location: 'Steamboat Springs',
    age: 21,
    gender: 'male',
    race: 'Human',
    previousBackground: 'Jazz and Classical Piano',
    className: 'Web19',
    favSubjects: ['Jazz', 'Linguistics', 'Computer Programming', 'Fitness/Health'] 
});

const gimli = new Student({
    name: 'Gimli',
    location: 'Blue Mountains',
    age: 139,
    gender: 'male',
    race: 'Dwarf',
    previousBackground: 'Fighting Orcs',
    className: 'WebPT3',
    favSubjects: ['Killing Orcs', 'Ruby', 'Axes', 'Zymology'] 
});

const legolas = new Student({
    name: 'Legolas',
    location: 'Mirkwood',
    age: 2931,
    gender: 'male',
    race: 'Elf',
    previousBackground: 'Master of Bow and Arrow',
    className: 'DS3',
    favSubjects: ['Killing Orcs', 'Ajax', 'Bow and Arrow', 'Oenology'] 
});
// Students Students Students Students Students Students Students Students Students Students

// PMs PMs PMs PMs PMs PMs PMs PMs PMs PMs PMs PMs PMs PMs PMs PMs PMs PMs PMs PMs PMs PMs PMs PMs PMs

const byron = new ProjectManager({
    name: 'Byron',
    location: 'New Orleans',
    age: 28,
    gender: 'male',
    race: 'Human',
    gradClassName: 'Web17', //Not sure xD
    favInstructor: 'Daelphos'
});

const dori = new ProjectManager({
    name: 'Dori',
    location: 'Lonely Mountain',
    age: 130,
    gender: 'male',
    race: 'Dwarf',
    gradClassName: 'UX8', 
    favInstructor: 'Ganedri'
});

const nori = new ProjectManager({
    name: 'Nori',
    location: 'Lonely Mountain',
    age: 131,
    gender: 'male',
    race: 'Dwarf',
    gradClassName: 'UX8', 
    favInstructor: 'Atlanaeon'
});

console.log(ganedri.speak());
console.log(dori.speak());
console.log(legolas.speak());
console.log(ganedri.demo('JS'));
console.log(atlanaeon.grade(cash, "Hacking"));
console.log(cash.listsSubjects());
console.log(cash.PRAssignment("Javascript 1"));
console.log(cash.sprintChallenge("JS 1"));
console.log(byron.standUp("web19_byron"));
console.log(byron.debugsCode(cash, "Hacking"));
console.log(nori.name);
console.log(nori.location);
console.log(nori.gender);
console.log(nori.race);
console.log(nori.age);
console.log(nori.gradClassName);
console.log(nori.favInstructor);
console.log(legolas.previousBackground);
console.log(legolas.className);
console.log(legolas.favSubjects);
console.log(atlanaeon.specialty);
console.log(atlanaeon.favLanguage);
console.log(atlanaeon.catchPhrase);


// PMs PMs PMs PMs PMs PMs PMs PMs PMs PMs PMs PMs PMs PMs PMs PMs PMs PMs PMs PMs PMs PMs PMs PMs PMs