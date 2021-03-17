const calculator = require('../src/rpn')

describe('rpn.js',  () => {
    test('should calculate a simple addition of 2 values', () => {
      let result = calculator('5 2 +');
      expect(result).toBe(7);
    });

    test('should calculate a simple subtraction of 2 values', () => {
        let result = calculator('20 10 -');
        expect(result).toBe(10);
    });

    test('should calculate a simple multiplication of 2 values', () => {
        let result = calculator('4 3 *');
        expect(result).toBe(12);
    });

    test('should calculate a simple division of 2 values', () => {
        let result = calculator('100 4 /');
        expect(result).toBe(25);
    });

    test('should calculate simple calculation (addition) with decimal value', () => {
        let result = calculator('2.3 4 +');
        expect(result).toBe(6.3);
    });

    test('should resulting equational calculation', () => {
        let result = calculator('2 3 ^');
        expect(result).toBe(8);
    });

    test('should calculate factorial', () => {
        let result = calculator('4 !');
        expect(result).toBe(24);
    });

    test('Calculate 3 ! = 6',  function() {
      expect(calculator('3 !')).toBe(6);
    });

    test('should calculate percentage', () => {
        let result = calculator('50 %');
        expect(result).toBe(0.5);
    });

    test('should has a greater number than the operator', () => {
        let result = calculator('5 +');
        expect(result).toBe(NaN);
    });

    test('Calculate 1 2 3 + - = -4',  function() {
      expect(calculator('1 2 3 + -')).toBe(-4);
    });

    test('Calculate : 9 5 3 + 2 4 ^ - + 0.5 + = 1.5',  function() {
      expect(calculator('9 5 3 + 2 4 ^ - + 0.5 +')).toBe(1.5);
    });

    test(' Calculate 9 5 3 + 2 4 ^ - + 4 + 2 ^ = 25',  function() {
      expect(calculator('9 5 3 + 2 4 ^ - + 4 + 2 ^')).toBe(25);
    });

    test(' Calculate 9 5 3 + 2 4 ^ - + 4 + ! = 120',  function() {
      expect(calculator('9 5 3 + 2 4 ^ - + 4 + !')).toBe(120);
    });

});
