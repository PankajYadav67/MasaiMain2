const sum = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
const mul = (a, b) => {
  return a * b;
};

const arr = [12, 45 ,687];
// export in ESM way
// export { sum };
// export default sum;

// CJS
module.exports = { sum, sub, mul,arr };
