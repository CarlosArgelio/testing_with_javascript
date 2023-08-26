const { sum, multiply, divide } = require('./02-math');

test("adds 1 + 3 should be 4", () => {
  const resp = sum(1, 3);
  expect(resp).toBe(4);
});

test("adds 1 * 3 should be 3", () => {
  const resp = multiply(1, 3);
  expect(resp).toBe(3);
});

test("should divide", () => {
  const resp = divide(1, 5);
  expect(resp).toBe(0.2);
  const resp2 = divide(2, 5);
  expect(resp2).toBe(0.4);
});

test("should divide by 0", () => {
  const resp = divide(1, 0);
  expect(resp).toBeNull();
});
