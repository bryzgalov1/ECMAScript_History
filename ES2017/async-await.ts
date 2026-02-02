
function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchUser() {
  try {
    console.log("Загрузка...");
    await delay(1000); // Ожидание
    return { name: "Alice" };
  } catch (error) {
    console.error("Ошибка загрузки");
  }
}

fetchUser().then(user => console.log(user));
