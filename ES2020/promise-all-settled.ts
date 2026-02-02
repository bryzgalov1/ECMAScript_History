
const p1 = Promise.resolve("Success");
const p2 = Promise.reject("Error");
const p3 = Promise.resolve("Another success");

Promise.allSettled([p1, p2, p3]).then((results) => {
  results.forEach((result) => {
    if (result.status === "fulfilled") {
      console.log("Val:", result.value);
    } else {
      console.log("Reason:", result.reason);
    }
  });
});
/* Вывод:
Val: Success
Reason: Error
Val: Another success
*/
