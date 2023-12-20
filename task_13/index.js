// Задача №13 на классы и наследование: создайте базовый класс Shape (фигура),
// который имеет методы для расчета площади и периметра. Затем создайте подклассы,
// представляющие различные фигуры, такие как прямоугольник, круг и треугольник.
// Реализуйте методы расчета площади и периметра для каждой фигуры.

class Shape {
  calculateArea() {
    throw new Error("Метод calculateArea должен быть переопределен");
  }

  calculatePerimeter() {
    throw new Error("Метод calculatePerimeter должен быть переопределен");
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }

  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius ** 2;
  }

  calculatePerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

class Triangle extends Shape {
  constructor(sideA, sideB, sideC) {
    super();
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  calculateArea() {
    const p = (this.sideA + this.sideB + this.sideC) / 2;
    return Math.sqrt(
      p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC)
    );
  }

  calculatePerimeter() {
    return this.sideA + this.sideB + this.sideC;
  }
}

const rectangle = new Rectangle(4, 5);
console.log(rectangle.calculateArea()); // Вывод: 20
console.log(rectangle.calculatePerimeter()); // Вывод: 18

const circle = new Circle(3);
console.log(circle.calculateArea()); // Вывод: около 28.27
console.log(circle.calculatePerimeter()); // Вывод: около 18.85

const triangle = new Triangle(3, 4, 5);
console.log(triangle.calculateArea()); // Вывод: 6
console.log(triangle.calculatePerimeter()); // Вывод: 12
