export class Person {
  constructor(public name: string, public age: number) {}

  greet(): void {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}
