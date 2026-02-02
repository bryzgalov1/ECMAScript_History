
const setA = new Set([1, 2, 3]);
const setB = new Set([2, 3, 4, 5]);

// Объединение (все элементы из обоих множеств)
const union = setA.union(setB); 
console.log(union); // Set { 1, 2, 3, 4, 5 }

// Пересечение (только общие элементы)
const intersection = setA.intersection(setB);
console.log(intersection); // Set { 2, 3 }

// Разность (элементы из A, которых нет в B)
const difference = setA.difference(setB);
console.log(difference); // Set { 1 }

// Симметрическая разность (элементы, которые есть либо в A, либо в B, но не в обоих)
const symmetricDifference = setA.symmetricDifference(setB);
console.log(symmetricDifference); // Set { 1, 4, 5 }

// Проверки подмножеств/надмножеств
console.log(setA.isSubsetOf(union));   // true
console.log(union.isSupersetOf(setA)); // true
console.log(setA.isDisjointFrom(new Set([4, 5]))); // true (нет общих элементов)
