export class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Using Class >>>> : Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}
