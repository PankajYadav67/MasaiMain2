const crypto = require("crypto");

const [operation, ...operands] = process.argv.splice(2);

function generateRandomNumber(length) {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString("hex")
    .slice(0, length);
}

function calcultor(operation) {
  switch (operation) {
    case "add":
      return operands.reduce((acc, num) => acc + parseFloat(num), 0);

    case "sub":
      return operands.slice(1).reduce((acc, num) => acc - parseFloat(num));

    case "multi":
      return operands.reduce((acc, num) => acc * parseFloat(num), 1);

    case "divide":
      return operands
        .slice(1)
        .reduce((acc, num) => parseFloat(acc) / parseFloat(num), parseFloat(operands[0]));

    case "sin":
      return Math.sin(parseFloat(operands[0]));

    case "cos":
      return Math.cos(parseFloat(operands[0]));

    case "tan":
      return Math.tan(parseFloat(operands[0]));

    case "random":
      const length = operands.length > 0 ? parseInt(operands[0]) : 8;
      return generateRandomNumber(length);

    default:
      return "Invaild operation!";
  }
}

const result = calcultor(operation, ...operands);
consol