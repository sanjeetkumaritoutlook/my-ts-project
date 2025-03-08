// Union type with objects
export type User = { name: string; age: number };
export type Admin = { name: string; role: string };

export function printPerson(person: User | Admin) {
 console.log(`>>>>> Union Type with Objects >>>>>`);	
  console.log(`Name: ${person.name}`);

  if ("age" in person) {
    console.log(`Age: ${person.age}`);
  }

  if ("role" in person) {
    console.log(`Role: ${person.role}`);
  }
}
