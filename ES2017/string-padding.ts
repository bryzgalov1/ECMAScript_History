
// Дополнение строки до определенной длины
const str = "5";

console.log(str.padStart(3, "0")); // "005"
console.log(str.padEnd(4, "."));   // "5..."

const title = "Menu";
console.log(title.padStart(10));   // "      Menu" (пробелами по умолчанию)
