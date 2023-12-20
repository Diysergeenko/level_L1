// Задача №12 на работу с объектами: создайте объект, представляющий собой книгу.
// Объект должен иметь свойства, такие как: название книги, автор и год издания.
// Напишите методы для получения и изменения значений свойств книги.

const book = {
  title: "Название книги",
  author: "Автор",
  year: 2022,
  get(property) {
    return this[property];
  },
  set(property, value) {
    this[property] = value;
  },
};

console.log(book.get("title"));
console.log(book.get("author"));
console.log(book.get("year"));
book.set("year", 2023);
console.log(book.get("year"));
