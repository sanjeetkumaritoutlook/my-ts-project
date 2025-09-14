export function isString(value) {
    return typeof value === "string";
}
export function logValue(value) {
    if (isString(value)) {
        console.log(value.toUpperCase()); // `value` is now a string
    }
    else {
        console.log("Not a string:", value);
    }
}
