const readline = require('readline-sync');

class Calculator {
  constructor() {
    this.PI = Math.PI;
    this.E = Math.E;
  }

  ratio(x, y, width) {
    return (y * width) / x;
  }

  percentage(x, y) {
    if (y === 0) {
      return 'Error: Divisor cannot be zero';
    }
    return `${((x / y) * 100).toFixed(2)}%`;
  }

  add(x, y) {
    return x + y;
  }

  subtract(x, y) {
    return y - x;
  }

  multiply(x, y) {
    return x * y;
  }

  divide(x, y) {
    if (y === 0) {
      return 'Error: Divisor cannot be zero';
    }
    return x / y;
  }

  remainder(x, y) {
    if (y === 0) {
      return 'Error: Divisor cannot be zero';
    }
    return x % y;
  }

  elevate(x, y) {
    return Math.pow(x, y);
  }

  sqrt(x) {
    if (x < 0) {
      return 'Error: Cannot calculate the square root of a negative number';
    }
    return Math.sqrt(x);
  }
}

const calc = new Calculator();

console.log('Welcome to the Calculator');
const num1 = parseFloat(readline.question('Enter the first number: '));
const operation = readline.question('Enter an operation (+, -, *, /, %, ^, sqrt): ');

let result;

if (operation === 'sqrt') {
  result = calc.sqrt(num1);
} else {
  const num2 = parseFloat(readline.question('Enter the second number: '));
  switch (operation) {
    case '+':
      result = calc.add(num1, num2);
      break;
    case '-':
      result = calc.subtract(num1, num2);
      break;
    case '*':
      result = calc.multiply(num1, num2);
      break;
    case '/':
      result = calc.divide(num1, num2);
      break;
    case '%':
      result = calc.remainder(num1, num2);
      break;
    case '^':
      result = calc.elevate(num1, num2);
      break;
    default:
      result = 'Invalid operation';
  }
}

console.log(`The result is: ${result}`);
