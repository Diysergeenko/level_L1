// Задача о сортировке объектов:
// у вас есть массив объектов вида { name: 'John', age: 25 }.
// Напишите код, который сортирует этот массив по возрастанию возраста,
// а при равных возрастах сортирует по алфавиту по полю name.

let users = [
  { name: "John", age: 25 },
  { name: "Anton", age: 25 },
  { name: "Ivan", age: 32 },
  { name: "Evgeny", age: 55 },
];

users.sort(function (a, b) {
  var nameA = a.name.toLowerCase(),
    nameB = b.name.toLowerCase();
  if (a.age - b.age) return a.age - b.age;
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

console.log(users);
