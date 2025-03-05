import { add, multiply } from "./utils/math";
import { Person } from "./models/person";
import { fetchData } from "./services/api";
import logger from "./utils/logger";

console.log("Addition:", add(5, 10));
console.log("Multiplication:", multiply(3, 4));

const person = new Person("Alice", 25);
person.greet();

// Async function for API call
async function loadData() {
  const data = await fetchData("https://jsonplaceholder.typicode.com/users");
  console.log(data);
}

loadData();
logger.info("Application started");
logger.error("Something went wrong!");