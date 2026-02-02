
const str1 = "ab\uD800"; // Одинокий суррогат (некорректный UTF-16)
const str2 = "abc";

// console.log(str1.isWellFormed()); // false (в новых средах)
// console.log(str2.isWellFormed()); // true

// console.log(str1.toWellFormed()); // Заменяет "битые" символы
