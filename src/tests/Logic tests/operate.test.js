import operate from '../../logic/operate';

// Test operation function
describe('Test the operate function', () => {
  const Action = {
    numberOne: 8,
    numberTwo: 2,
  };
  test('Test Addition', () => {
    // Act
    const result = operate(Action.numberOne, Action.numberTwo, '+');
    // Assert
    expect(result).toBe('10');
  });

  test('Test subtraction', () => {
    const result = operate(Action.numberOne, Action.numberTwo, '-');
    // Assert
    expect(result).toBe('6');
  });

  test('Test Multiplication', () => {
    const result = operate(Action.numberOne, Action.numberTwo, 'x');

    // Assert
    expect(result).toBe('16');
  });

  test('Test Division', () => {
    const result = operate(Action.numberOne, Action.numberTwo, '÷');

    // Assert
    expect(result).toBe('4');
  });

  test('Div 8 ÷ 0 to be error message:', () => {
    const result = operate(Action.numberOne, 0, '÷');

    // Assert
    expect(result).toBe('Can\'t divide by 0.');
  });

  test('Test Modulo', () => {
    const result = operate(Action.numberOne, Action.numberTwo, '%');

    // Assert
    expect(result).toBe('0');
  });

  test('Mod 4 % 0 to be error message:', () => {
    const result = operate(Action.numberOne, 0, '%');

    // Assert
    expect(result).toBe('Can\'t find modulo as can\'t divide by 0.');
  });
});

