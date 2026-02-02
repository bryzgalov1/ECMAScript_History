
function* idGenerator() {
  let id = 0;
  while (true) {
    yield ++id;
  }
}

const gen = idGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3

function* range(start: number, end: number) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}
console.log([...range(1, 3)]); // [1, 2, 3]
