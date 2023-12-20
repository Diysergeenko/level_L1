const MathX = (function () {
  function fibonacciNumber(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    let a = 0,
      b = 1;
    for (let i = 2; i <= n; i++) {
      const temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  }

  function fibonacciSequence(n) {
    if (n <= 0) return [];
    const sequence = [];
    for (let i = 0; i < n; i++) {
      sequence.push(fibonacciNumber(i));
    }
    return sequence;
  }

  function isPrimeNumber(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  function primeNumbers(n) {
    if (n <= 0) return [];
    const numbers = [];
    let currentNumber = 2;
    while (numbers.length < n) {
      if (isPrimeNumber(currentNumber)) {
        numbers.push(currentNumber);
      }
      currentNumber++;
    }
    return numbers;
  }

  return {
    fibonacciNumber,
    fibonacciSequence,
    primeNumbers,
  };
})();
console.log(MathX);
