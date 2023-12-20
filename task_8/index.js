// Задача №8 о замыканиях: напишите функцию, которая будет принимать массив функций
// и возвращать новую функцию, которая вызывает каждую функцию в этом массиве и
// возвращает массив результатов, полученных после вызова каждой функции.

function applyFunctions(functionsArray) {
  return function (...args) {
    return functionsArray.map((func) => func(...args));
  };
}

function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

const functionsArray = [sum, multiply, subtract];
const combinedFunction = applyFunctions(functionsArray);

const results = combinedFunction(2, 3);
console.log(results); // Вывод: [5, 6, -1]
