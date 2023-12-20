// №2 Задача о странных числах: Напишите функцию, которая принимает число и возвращает true,
// если это число является странным, и false в противном случае. Странным числом считается число,
// которое равно сумме всех своих делителей, кроме самого себя.

function isTidy(number) {
  let inputNumber = String(number);
  let prevNum = inputNumber[0];
  let current;
  for (let i = 1; i < inputNumber.length; i++) {
    current = Number(inputNumber[i]);

    if (prevNum <= current) {
      prevNum = current;
    } else return false;
  }
  return true;
}

console.log(isTidy(1234)); // return True
console.log(isTidy(2345)); // return True
console.log(isTidy(2182)); // return False
console.log(isTidy(6274)); // return False
