// Разработайте функцию преобразования JSON в связный список.
// На входе функция должна получать JSON, содержащий список объектов,
//  на выходе объект, представляющий из себя односвязный список.

const arrayExample = [
  { name: "Dmitry", age: 25 },
  { name: "Ivan", age: 32 },
  { name: "Evgeny", age: 29 },
];

const json = JSON.stringify(arrayExample);

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append = (value) => {
    const newNode = {
      value: value,
      next: null,
    };
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  };
  getList = () => {
    return this.head;
  };
}

const convertJsonToLinkedList = (json) => {
  const list = JSON.parse(json);
  const linkedList = new LinkedList();
  if (!(Array.isArray(list) && list.length > 0))
    return "not an array was passed or the array is empty";
  list.forEach((obj) => linkedList.append(obj));
  return linkedList.getList();
};

console.log(convertJsonToLinkedList(json));
