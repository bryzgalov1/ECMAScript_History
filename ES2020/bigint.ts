
// BigInt - для чисел больше 2^53 - 1
const maxSafe = Number.MAX_SAFE_INTEGER;
console.log(maxSafe + 1 === maxSafe + 2); // true (ошибка в Number)

const bigIntVal = 9007199254740991n; // суффикс n
const anotherBig = BigInt(9007199254740991);

console.log(bigIntVal + 2n); // 9007199254740993n

// Нельзя смешивать с number без явного приведения
// console.log(10n + 5); // TypeError
console.log(10n + 5n);   // 15n
