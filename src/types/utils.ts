export function printId(id: string | number) {
    console.log(">>>> Function with union type >>>>");
    console.log(`ID: ${id}`);
  }
  

 // Variable with union type
let value: string | number;

value = "Hello"; 
value = 42;  
//value = true;    