import { add, multiply } from "./utils/math";
import { Person } from "./models/person";
import { Person1} from "./models/person1";
import { fetchData } from "./services/api";
import logger from "./utils/logger";

console.log("Addition:", add(5, 10));
console.log("Multiplication:", multiply(3, 4));

const person = new Person("Sanjeet", 35); //person is the object
person.greet();

const person1: Person1 = {
  name: "Sanjeet",
  age: 35,
  greet() {
    console.log(`Using Interface: Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
};

person1.greet();

// Async function for API call
async function loadData() {
  const data = await fetchData("https://jsonplaceholder.typicode.com/users");
  console.log(data);
}

loadData();
logger.info("Application started");
logger.warn("This is a warning!");
logger.error("Something went wrong!");