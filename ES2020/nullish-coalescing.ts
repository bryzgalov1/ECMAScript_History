
// Nullish Coalescing (??)
// Срабатывает ТОЛЬКО если левая часть null или undefined.

const input = ""; // пустая строка - falsy значение
const val1 = input || "default"; 
console.log(val1); // "default" (потому что "" ложно)

const val2 = input ?? "default";
console.log(val2); // "" (потому что "" не есть null/undefined)

const count = 0;
console.log(count || 100); // 100
console.log(count ?? 100); // 0
