export interface Dog {
    bark(): void;
  }
  
  export interface Cat {
    meow(): void;
  }
  
  type Pet = Dog | Cat;
  
  function isDog(pet: Pet): pet is Dog {
    return (pet as Dog).bark !== undefined;
  }
  
  export function makeSound(pet: Pet) {
    if (isDog(pet)) {
      pet.bark(); // pet is Dog here
    } else {
      pet.meow(); // pet is Cat here
    }
  }
  
  /*
  The isDog(pet) function helps TypeScript figure out whether the pet is a Dog, so it safely allows calling .bark().

If isDog(pet) returns false, the pet must be a Cat, so .meow() is safe.
  */