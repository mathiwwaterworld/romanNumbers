
// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter
let romanNumbers = {
  1: ["I", "X", "C", "M"],
  2: ["II", "XX", "CC", "MM"],
  3: ["III", "XXX", "CCC", "MMM"],
  4: ["IV", "XL", "CD"],
  5: ["V", "L", "D"],
  6: ["VI", "LX", "DC"],
  7: ["VII", "LXX", "DCC"],
  8: ["VIII", "LXXX", "DCCC"],
  9: ["IX", "XC", "CM"]
};

function convertToRoman(num) {
  let decimalNumberArray = num.toString().split("");
  let numberLength = decimalNumberArray.length;
  let result = ''

  for (let i = 0; i < numberLength; i++) {

    const actualPosition = i
    const numberMapRowIndex = decimalNumberArray[actualPosition]
    let lettersArray = romanNumbers[numberMapRowIndex]

    if (lettersArray) {
      let number = lettersArray[numberLength - (i + 1)]
      result = result + number
    }
  }

  return result
}

convertToRoman(90)