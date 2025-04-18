export function isString(value: unknown): value is string {
    return typeof value === "string";
  }
  
  export function logValue(value: unknown) {
    if (isString(value)) {
      console.log(value.toUpperCase()); // `value` is now a string
    } else {
      console.log("Not a string:", value);
    }
  }
  