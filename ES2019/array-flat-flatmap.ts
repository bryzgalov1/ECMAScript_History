
const nested = [1, [2, 3], [[4, 5]]];

// Flat - уменьшает вложенность
console.log(nested.flat());      // [1, 2, 3, [4, 5]] (по умолчанию depth=1)
console.log(nested.flat(2));     // [1, 2, 3, 4, 5]
console.log(nested.flat(Infinity)); // полное выравнивание

// FlatMap - map + flat (глубина 1)
const arr = [1, 2, 3];
const result = arr.flatMap(x => [x, x * 2]);
console.log(result); // [1, 2, 2, 4, 3, 6]
