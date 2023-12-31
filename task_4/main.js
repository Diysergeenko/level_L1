// №4 задача Разработать функцию, изменяющую окончание слов в зависимости от падежа. Например:
// - 112 сообщения
// - 12 сообщений
// - 1 сообщение
// - 1024 пользователя
// - 1026 пользователей
// - 121 пользователь
// Функцию надо упаковать в модуль.

const pluralize = (number, forms) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return forms[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
};

export default pluralize;
