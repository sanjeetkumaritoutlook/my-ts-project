import { add, multiply } from "./utils/math";
import { Person } from "./models/person";
import { Person1} from "./models/person1";
import { fetchData } from "./services/api";
import logger from "./utils/logger";
import { printPerson, User, Admin } from "./types/personUtils";
import { printId } from "./types/utils";
import { printIdType } from "./guards/typeguard";
import { makeSound ,Dog,Cat} from "./guards/typepredicate";
import {isString,logValue} from "./guards/type-predicate";
//installed from private registry in  AWS CodeArtifact, registry has it own domain, not npm
const { greet ,farewell ,toUpperCase, getCurrentDate, getRandomNumber} = require('@my-scope/hello-package');

console.log(greet('Sanjeet'));
console.log(greet('Sanjeet', 'hi')); 
console.log(greet('Sanjeet', 'es')); 
console.log(farewell('Sanjeet')); 
console.log(toUpperCase('hello'));
console.log("curent Date:", getCurrentDate());
console.log("Random Number:", getRandomNumber(1,100));

console.log("Addition:", add(5, 10));
console.log("Multiplication:", multiply(3, 4));

const person = new Person("Sanjeet", 35); //person is the object
person.greet();

const person1: Person1 = {
  name: "Sanjeet",
  age: 35,
  greet() {
    console.log(`Using Interface >>> : Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
};

person1.greet();

// Async function for API call
async function loadData() {
  const data = await fetchData("https://jsonplaceholder.typicode.com/users");
  console.log(data);
}

loadData();

//Union Type with Objects
const user: User = { name: "Sanjeet", age: 35 };
const admin: Admin = { name: "Kumar", role: "Admin" };

printPerson(user);
printPerson(admin);

printId(101);   
printId("A102");   
//printId(true);  

printIdType(123);          // Output: "123.00"
printIdType("typescript"); // Output: "TYPESCRIPT"
//printIdType(true); // ❌ Error: Argument of type 'boolean' is not assignable to parameter of type 'number | string'.
const dog: Dog = {
  bark: () => console.log("Woof!"),
};

makeSound(dog); // Output: "Woof!"

const cat: Cat = {
  meow: () => console.log("Meow!"),
};

makeSound(cat); // Output: "Meow!"

logValue("hello");   // Output: "HELLO"
logValue(42);        // Output: "Not a string: 42"
logValue(true);      // Output: "Not a string: true"

console.log(isString("TypeScript")); // true
console.log(isString(123));          // false

const myValue: unknown = "chatGPT";

if (isString(myValue)) {
  // TypeScript now knows `myValue` is a string here
  console.log(myValue.length); // 7
}


logger.info("Application started");
logger.warn("This is a warning!");
logger.error("Something went wrong!");