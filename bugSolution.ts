function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result = add(5, 3); // Correct usage
console.log(result); // Output: 8

result = subtract(10, 5); // Correct usage
console.log(result); // Output: 5

//Corrected usage of add function
result = add(5, 3); // Correct usage
console.log(result); // Output: 8

//Using type assertion to bypass type checking(not recommended)
result = add(5, <number><unknown>"3");
console.log(result); //Output: 8