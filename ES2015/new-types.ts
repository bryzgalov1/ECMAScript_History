
// Map - коллекция ключ-значение (ключи любого типа)
const map = new Map<string | number, string>();
map.set("key", "value");
map.set(1, "number key");
console.log(map.get(1)); // number key

// Set - коллекция уникальных значений
const set = new Set<number>();
set.add(1);
set.add(1); // Игнорируется
set.add(2);
console.log(set.size); // 2

// Symbol - уникальный идентификатор
const sym1 = Symbol("desc");
const sym2 = Symbol("desc");
console.log(sym1 === sym2); // false
