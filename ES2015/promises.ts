
const myPromise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("Успех!");
    } else {
      reject("Ошибка!");
    }
  }, 1000);
});

myPromise
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
