
try {
  // Какой-то низкоуровневый код
  try {
    throw new Error("Low level error");
  } catch (err) {
    // Проброс ошибки с указанием причины
    throw new Error("High level operation failed", { cause: err });
  }
} catch (e: any) {
  console.log(e.message); // High level operation failed
  console.log(e.cause.message); // Low level error
}
