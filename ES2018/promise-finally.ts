
function doSomething(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) resolve();
    else reject("Some error");
  });
}

doSomething()
  .then(() => console.log("Success"))
  .catch((err) => console.error(err))
  .finally(() => console.log("Cleanup (всегда выполняется)"));
