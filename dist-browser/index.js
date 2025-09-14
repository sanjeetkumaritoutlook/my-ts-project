var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { add, multiply } from "./utils/math";
import { Person } from "./models/person";
import { fetchData } from "./services/api";
import logger from "./utils/logger";
import { printPerson } from "./types/personUtils";
import { printId } from "./types/utils";
import { printIdType } from "./guards/typeguard";
import { makeSound } from "./guards/typepredicate";
import { isString, logValue } from "./guards/type-predicate";
//installed from private registry in  AWS CodeArtifact, registry has it own domain, not npm
let helloPkg;
try {
    helloPkg = require('@my-scope/hello-package');
}
catch (e) {
    helloPkg = {
        greet: (name) => `Hello, ${name} (fallback)!`,
        farewell: (name) => `Bye, ${name} 👋`,
        toUpperCase: (s) => s.toUpperCase(),
        getCurrentDate: () => new Date(),
        getRandomNumber: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
    };
}
const { greet, farewell, toUpperCase, getCurrentDate, getRandomNumber } = helloPkg;
console.log(greet('Sanjeet'));
console.log(greet('Sanjeet', 'hi'));
console.log(greet('Sanjeet', 'es'));
console.log(farewell('Sanjeet'));
console.log(toUpperCase('hello'));
console.log("curent Date:", getCurrentDate());
console.log("Random Number:", getRandomNumber(1, 100));
console.log("Addition:", add(5, 10));
console.log("Multiplication:", multiply(3, 4));
const person = new Person("Sanjeet", 35); //person is the object
person.greet();
const person1 = {
    name: "Sanjeet",
    age: 35,
    greet() {
        console.log(`Using Interface >>> : Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
};
person1.greet();
// Async function for API call
function loadData() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetchData("https://jsonplaceholder.typicode.com/users");
        console.log(data);
    });
}
loadData();
//Union Type with Objects
const user = { name: "Sanjeet", age: 35 };
const admin = { name: "Kumar", role: "Admin" };
printPerson(user);
printPerson(admin);
printId(101);
printId("A102");
//printId(true);  
printIdType(123); // Output: "123.00"
printIdType("typescript"); // Output: "TYPESCRIPT"
//printIdType(true); // ❌ Error: Argument of type 'boolean' is not assignable to parameter of type 'number | string'.
const dog = {
    bark: () => console.log("Woof!"),
};
makeSound(dog); // Output: "Woof!"
const cat = {
    meow: () => console.log("Meow!"),
};
makeSound(cat); // Output: "Meow!"
logValue("hello"); // Output: "HELLO"
logValue(42); // Output: "Not a string: 42"
logValue(true); // Output: "Not a string: true"
console.log(isString("TypeScript")); // true
console.log(isString(123)); // false
const myValue = "chatGPT";
if (isString(myValue)) {
    // TypeScript now knows `myValue` is a string here
    console.log(myValue.length); // 7
}
logger.info("Application started");
logger.warn("This is a warning!");
logger.error("Something went wrong!");
/*
In browser → It prints both to console + webpage.

In Node → It prints only to console (skips DOM since document doesn’t exist).
*/
const oldLog = console.log;
console.log = (...args) => {
    oldLog(...args);
    if (typeof document !== "undefined") {
        const outputEl = document.getElementById("output");
        if (outputEl) {
            outputEl.innerHTML += args.join(" ") + "<br>";
        }
    }
};
console.log("App started to be shown on browser UI also!");
console.log("2 + 2 =", 2 + 2);
