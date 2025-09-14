export function printPerson(person) {
    console.log(`>>>>> Union Type with Objects >>>>>`);
    console.log(`Name: ${person.name}`);
    if ("age" in person) {
        console.log(`Age: ${person.age}`);
    }
    if ("role" in person) {
        console.log(`Role: ${person.role}`);
    }
}
