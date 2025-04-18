export function printIdType(id: number | string) {
    if (typeof id === "string") {
      // TypeScript knows `id` is a string here
      console.log(id.toUpperCase());
    } else {
      // Here, `id` is narrowed to a number
      console.log(id.toFixed(2));
    }
  }

  //Here, typeof id === "string" is a type guard.

/*
Other built-in type guards:

typeof

instanceof

Array.isArray


*/