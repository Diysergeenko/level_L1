// Задача №11 о замыканиях и области видимости: напишите функцию, которая
// возвращает другую функцию. Внутренняя функция должна иметь доступ
// к переменной, определенной во внешней функции, даже после того, как
//  внешняя функция завершила свое выполнение.

function outerFunction(outerVariable) {
  function innerFunction() {
    console.log(outerVariable);
  }
  return innerFunction;
}

const newFunction = outerFunction("Добрый день, коллеги");

newFunction();
