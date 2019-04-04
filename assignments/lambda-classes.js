// CODE here for your Lambda Classes


// PERSON CLASS (base)
class Person {
    constructor(personAttr) {
        this.name = personAttr.name;
        this.age = personAttr.age;
        this.location = personAttr.location;
        this.gender = personAttr.gender;
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
    
    listSubjects() {
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
        this.favInstructor = pmAttr.gradClassName;
    }
    
    standUp(channel) {
        return `${this.name} accounces to ${channel}, @channel standy times!`;
    }
    
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}



// Instructors

// Students

// PMs