
const nums = [1, 2, 3, 4, 5, 6];

// Найти последний четный элемент
const lastEven = nums.findLast(n => n % 2 === 0);
console.log(lastEven); // 6

const lastEvenIndex = nums.findLastIndex(n => n % 2 === 0);
console.log(lastEvenIndex); // 5 (индекс)
