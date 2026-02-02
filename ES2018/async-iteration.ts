
async function* asyncGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

async function processData() {
  for await (const val of asyncGenerator()) {
    console.log(val);
  }
}

// Также работает с массивами промисов
const promises = [Promise.resolve(10), Promise.resolve(20)];
async function loopPromises() {
  for await (const p of promises) {
    console.log(p);
  }
}
