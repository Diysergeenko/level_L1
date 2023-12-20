function getLocalStorageSize() {
  try {
    const testKey = "__test__";
    const testData = new Array(1024 * 1024).join("a");
    let dataSize = testData.length;
    let totalDataSize = 0;

    while (true) {
      try {
        localStorage.setItem(testKey, testData);
        totalDataSize += dataSize;
        dataSize *= 2;
      } catch (e) {
        localStorage.removeItem(testKey);
        break;
      }
    }

    return totalDataSize;
  } catch (e) {
    return -1; // Возникла ошибка при попытке определить объем localStorage
  }
}

const localStorageSize = getLocalStorageSize();
console.log(
  "Максимальный объем данных, который можно записать в localStorage:",
  localStorageSize,
  "байт"
);
