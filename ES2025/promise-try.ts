
function getUserSync() {
  return "Sync User";
}

function getUserAsync() {
  return Promise.resolve("Async User");
}

function potentiallyFailing() {
  throw new Error("Boom!");
}

// Promise.try оборачивает выполнение функции в Promise.
// Это удобно, если ф-ция может быть как синхронной, так и асинхронной,
// или если нужно поймать синхронное исключение в .catch()

Promise.try(getUserSync).then(console.log);   // "Sync User"
Promise.try(getUserAsync).then(console.log);  // "Async User"

Promise.try(potentiallyFailing)
  .then(val => console.log("Success:", val))
  .catch(err => console.log("Caught:", err.message)); // "Caught: Boom!"
