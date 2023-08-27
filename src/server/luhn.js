
const logger = require("../../logger");

function isValidLuhn(number) {
    // Stringifiying the number makes it easier to work with
    try {
        const numStr = number.toString();

        // Since we're only validating credit card numbers, we can reject early if there aren't exactly 16 digits
        if (numStr.length != 16 ) return false;
    
        let sum = 0;
        let isSecondDigit = false;
    
        // Iterate through the digits from right to left
        for (let i = numStr.length - 1; i >= 0; i--) {
            let digit = parseInt(numStr[i], 10);
        
            // Double every second digit
            if (isSecondDigit) {
                digit = digit * 2;
                if (digit > 9) {
                    digit -= 9;
                }
            }
        
            sum += digit;
            isSecondDigit = !isSecondDigit;
        }
    
        // Check if the sum is divisible by 10
        return sum % 10 === 0;
    }
    catch (err) {
        logger.error("Luhn check failed due to: ", err);
        return false;
    }
  }
  
  module.exports = isValidLuhn;
  