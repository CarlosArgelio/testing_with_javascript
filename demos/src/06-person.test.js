const Person = require('./06-person');

describe('Test Suite for Person class', () => {
  let person;
  // Arrange
  beforeEach(() => {
    person = new Person('John Doe', 45, 1.7);
  });

  test('should return "down" when the result is greater than 0 and less than 18', () => {
    person.weight = 45;
    // Act
    const result = person.calcIMC();
    // Assert
    expect(result).toBe('down');
  });

  test('should return "normal" when the result is greater than 18 and less than 24', () => {
    person.weight = 59;
    const result = person.calcIMC();
    expect(result).toBe('normal');
  });
});
