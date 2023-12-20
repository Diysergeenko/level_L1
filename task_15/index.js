// Задача на асинхронность: напишите асинхронную функцию,
// которая использует ключевое слово await для ожидания
// выполнения других асинхронных операций, и возвращает
// результат выполнения.

async function myAsyncFunction() {
  const result = await someAsyncOperation();

  return result;
}

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Результат выполнения асинхронной операции");
    }, 2000);
  });
}

myAsyncFunction()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
