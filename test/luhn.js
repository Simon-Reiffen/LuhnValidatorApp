const { expect } = require('chai');
const isValidLuhn = require('../src/server/luhn.js');

describe('Luhn Algorithm Tests', () => {
    it('should recognize valid Luhn numbers', () => {
      const numbers = [4532015112830366, 6011000990139424, 2222111133334444];
      numbers.forEach(num => expect(isValidLuhn(num)).to.be.true);
    });

  
    it('should reject invalid Luhn numbers', () => {
      const numbers = [1234567812345678, 79927398715, 407166211681, 123123];
      numbers.forEach(num => expect(isValidLuhn(num)).to.be.false);
    });

    it('should safely handle invalid input', () => {
      const numbers = [null, undefined, NaN, '', "ABBCCD", "7992739871a", "7992739871", "79927398710"];
      numbers.forEach(num => expect(isValidLuhn(num)).to.be.false);
    });

  });