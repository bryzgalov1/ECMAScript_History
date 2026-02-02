
// Асинхронное ожидание на SharedArrayBuffer
/*
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);

async function wait() {
  const result = await Atomics.waitAsync(int32, 0, 0, 1000);
  console.log(result); // "timed-out" или "ok"
}

wait();
*/
