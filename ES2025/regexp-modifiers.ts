
// Включение case-insensitive (i) только для части паттерна
const re1 = /^(?i:hello) world$/;
console.log(re1.test("HELLO world")); // true
console.log(re1.test("HELLO WORLD")); // false (вторая часть чувствительна к регистру)

// Отключение флага (i-), если он был включен глобально
const re2 = /^(?i:hello (?-i:world))$/;
console.log(re2.test("HELLO world")); // true
console.log(re2.test("HELLO WORLD")); // false

// Удобно для сложных регулярок, где флаги нужны только локально
