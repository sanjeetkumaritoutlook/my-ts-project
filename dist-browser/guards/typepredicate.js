function isDog(pet) {
    return pet.bark !== undefined;
}
export function makeSound(pet) {
    if (isDog(pet)) {
        pet.bark(); // pet is Dog here
    }
    else {
        pet.meow(); // pet is Cat here
    }
}
/*
The isDog(pet) function helps TypeScript figure out whether the pet is a Dog, so it safely allows calling .bark().

If isDog(pet) returns false, the pet must be a Cat, so .meow() is safe.
*/ 
