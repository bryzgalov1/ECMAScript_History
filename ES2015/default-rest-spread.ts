
// Параметры по умолчанию
function greet(name: string = "Гость") {
  console.log(`Привет, ${name}`);
}
greet(); // Привет, Гость

// Rest operator (сбор аргументов)
function sum(...numbers: number[]) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// Spread operator (распыление массивов)
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4]
