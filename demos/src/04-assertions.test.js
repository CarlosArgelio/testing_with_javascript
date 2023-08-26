// matchers
test('test obj', () => {
  const data = { name: 'Carlos' };
  data.lastname = 'Palacios';
  expect(data).toEqual({ name: 'Carlos', lastname: 'Palacios' });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('string', () => {
  expect('Christian').toMatch(/sti/);
});

test('list / array', () => {
  const numbers = [1, 2, 3, 4];
  expect(numbers).toContain(2);
  expect(numbers).not.toContain(5);
});
