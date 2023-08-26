describe('Test Suite', () => {
  beforeAll(() => {
    console.log('Before All');
    // up db
  });

  afterAll(() => {
    console.log('After All');
    // down db
  });

  beforeEach(() => {
    console.log('Before Each');
  });

  afterEach(() => {
    console.log('After Each');
  });
  test('case 1', () => {
    console.log('Case 1');
    expect(1 + 1).toBe(2);
  });
  test('case 2', () => {
    console.log('Case 2');
    expect(1 + 3).toBe(4);
  });

  describe('Nested Suite', () => {
    beforeAll(() => {
      console.log('Before All');
      // up db
    });

    test('case 3', () => {
      console.log('Case 3');
      expect(1 + 3).toBe(4);
    });

    test('case 4', () => {
      console.log('Case 4');
      expect(1 + 3).toBe(4);
    });
  });
});
