// Задача №9 Реализовать функцию конвертации JSON в строку

function jsonToString(json) {
  return JSON.stringify(json);
}
const json = { name: "John", age: 30, city: "Moscow" };
const jsonString = jsonToString(json);
console.log(jsonString);
