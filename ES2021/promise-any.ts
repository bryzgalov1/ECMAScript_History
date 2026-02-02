
const p1 = new Promise((_, reject) => setTimeout(() => reject("Err1"), 100));
const p2 = new Promise((resolve, _) => setTimeout(() => resolve("Success"), 200));
const p3 = new Promise((_, reject) => setTimeout(() => reject("Err3"), 300));

// Ждет ПЕРВОГО успешно выполненного
Promise.any([p1, p2, p3])
  .then(val => console.log("Winner:", val)) // Winner: Success
  .catch(err => console.log("All failed:", err));
