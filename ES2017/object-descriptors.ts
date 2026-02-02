
const obj = {
  get foo() { return 123; }
};

const descriptors = Object.getOwnPropertyDescriptors(obj);
console.log(descriptors.foo.get); // [Function: get foo]

// Можно использовать для полного копирования объекта вместе с геттерами/сеттерами
const clone = Object.defineProperties({}, descriptors);
