// Задача №10 Реализовать функцию конвертации строки в JSON
// со всеми необходимыми проверками и валидациями.

function stringToJson(str) {
  try {
    const json = JSON.parse(str);
    return json;
  } catch (error) {
    console.error("Ошибка валидации строки JSON:", error);
    return null;
  }
}
const jsonString = '{"name":"John","age":30,"city":"Moscow"}';
const json = stringToJson(jsonString);
if (json) {
  console.log(json);
}
