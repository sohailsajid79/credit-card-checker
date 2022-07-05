// Project Goals
// Context: The company that you work for suspects that credit card distributors have been mailing out cards that have invalid numbers.
// In this project, you have the role of a clerk who checks if credit cards are valid. Every other clerk currently checks using pencil and paper,
// but you’ll be optimizing the verification process using your knowledge of functions and loops to handle multiple credit cards at a time.

// To find out if a credit card number is valid or not, we will use the Luhn algorithm. The algorithm is a series of mathematical calculations used to validate certain identification numbers, e.g. credit card numbers.
// The calculations in the Luhn algorithm can be broken down in the following steps:
// 1. From the farthest digit to the right (last digit), AKA the check digit, iterate to the left.
// 2. As you iterate to the left, every other digit is doubled (the check digit is not doubled). If the number is greater than 9 after doubling, subtract 9 from its value.
// 3. Sum up all the digits in the credit card number.
// 4. If the sum modulo 10 is 0 (if the sum divided by 10 has a remainder of 0) then the number is valid, otherwise, it’s invalid.

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Phase 1 Start
let invalidCred = [];
let validCred = [];

// The purpose of validateCred() is to return true when an array contains digits of a valid credit card number and false when it is invalid. The function does not mutate the values of the original array.
function validateCred(card) {
    let checkForModulo = 0;
    let lastDigit = card[card.length - 1];

// Remove the last digit and reverse the string
    let newArray = card.slice(0, -1);  
    newArray.reverse();

// Loop through the string and double the value of every second value, and then subtract 9 if the value is greater than 9 using assignment operators and add value to variable 
     for (let i = 0; i < newArray.length; i += 2) {
      newArray[i] *= 2;
        if (newArray[i] > 9) {
          newArray[i] -= 9;
        }
      checkForModulo += newArray[i];
    }

// Loop through string sums variable that's been incremented, add the value of the last digit we removed earlier, and check the sum modulo has a remainder of 0 
    for (let j = 1; j < newArray.length; j += 2) {
      checkForModulo += newArray[j];
    }
    return (checkForModulo + lastDigit) % 10 === 0;
  }

// Run the function with the 'batch' array, should return true or false 
  batch.forEach(element => console.log(validateCred(element)));

// Output:
// true
// true
// true
// true
// true
// false
// false
// false
// false
// false
// false
// true
// false
// false
// true


// Phase 1 End
// Phase 2 Start


// The role of findInvalidCards() is to check through the nested array for which numbers are invalid, and return another nested array of invalid cards.
function findInvalidCards(element) {
    batch.forEach(function (element) {
        if (validateCred(element) == false) {
            invalidCred.push(element);
        }
    })
}

findInvalidCards();
console.log(invalidCred)

// Output:
// [
//    [
//      4, 5, 3, 2, 7, 7,
//      8, 7, 7, 1, 0, 9,
//      1, 7, 9, 5
//    ],
//    [
//      5, 7, 9, 5, 5, 9,
//      3, 3, 9, 2, 1, 3,
//      4, 6, 4, 3
//    ],
//    [
//      3, 7, 5, 7, 9, 6,
//      0, 8, 4, 4, 5, 9,
//      9, 1, 4
//    ],
//    [
//      6, 0, 1, 1, 1, 2,
//      7, 9, 6, 1, 7, 7,
//      7, 9, 3, 5
//    ],
//    [
//      5, 3, 8, 2, 0, 1,
//      9, 7, 7, 2, 8, 8,
//      3, 8, 5, 4
//    ],
//    [
//      3, 4, 4, 8, 0, 1,
//      9, 6, 8, 3, 0, 5,
//      4, 1, 4
//    ],
//    [
//      6, 0, 1, 1, 3, 7, 7,
//      0, 2, 0, 9, 6, 2, 6,
//      5, 6, 2, 0, 3
//    ],
//    [
//      4, 9, 2, 9, 8, 7,
//      7, 1, 6, 9, 2, 1,
//      7, 0, 9, 3
//    ]
//  ]


// Phase 2 end
// Phase 3 Start


// The function will return an array of companies that have mailed out cards with invalid numbers. This will NOT contain duplicates and will only appear once in the array.
invalidCardCompanies = []

//This function checks to see if the first digit of the arrays in our invalidCred array has a certain value. Depending on the value, it will push a string of text to the array labeled "invalidCardCompanies"
function idInvalidCardCompanies() {
  //loop through the invalidCred array
  for (let i = 0; i < invalidCred.length; i++) {
  //create variable and assign to loop index
  const badCard = invalidCred[i]
    //Nest loop. Loops through the variable we just created, used to access the first item in an array of arrays
    for (let j = 0; j < 1; j++) {
      //switch case, using badCard[j] as an argument
      switch (badCard[j]) {
        //if the first digit of the string is 3, push string to invalidCardCompanies array. And so on...
        case badCard[j][0] = 3:
          invalidCardCompanies.push(' Amex')
          break
        case badCard[j][0] = 4:
          invalidCardCompanies.push(' Visa')
          break
        case badCard[j][0] = 5:
          invalidCardCompanies.push(' MasterCard')
          break
        case badCard[j][0] = 6:
          invalidCardCompanies.push(' Discover')
          break
        //Set default value to be pushed to invalidCardCompanies array if none of the above occur
        default: 
          invalidCardCompanies.push(' Company not found')
      }
    }
  }
  //Log this to see the array that submits duplicate entries of the credit card companies     console.log(invalidCardCompanies);
}

//Invoke the function
idInvalidCardCompanies()

//This function cleans up our invalidCardCompanies array so that only one instance of each company is mentioned, where it may have appeared multiple times otherwise. 
function removeDuplicates(array) {
  return array.filter((a, b) => array.indexOf(a) === b)
}

console.log('Companies that have submitted invalid cards are: ' + removeDuplicates(invalidCardCompanies))

// Output:
// Companies that have submitted invalid cards are: Visa, MasterCard, Amex, Discover

// Phase 3 End