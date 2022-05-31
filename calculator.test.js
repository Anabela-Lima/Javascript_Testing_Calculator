// use require keyword to import the functions to be tested ./calculator refers to relative file path 
// where "." denotes right here

const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

// Sum Tests

// let us group our functions using the describe keyword, arguments are functions to be grouped 
describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    // Given: [ Arrange ]- do any setup

    // When: [ Act]  call function under test, use it, store actual result in "actual" and expected in "expected"
    const actual = sum(4, 5);
    const expected = 9; 
    // then: [ Assert ]- call assertion method to assert that actual = expected
    expect(actual).toBe(expected);  
  });


  test('can add two large positive numbers', () => { 
    // Given [ Arrange ] - do any setup

    // When [Act] - call function under test, use it, store result in "actual" variable and expected result in "expected" variable
    
    const actual = sum(1000, 2500);
    const expected = 3500;

    // then: [ Assert ]- call assertion method to assert that actual = expected
    expect(actual).toBe(expected)
  });

  test('can add two negative numbers', () => {

   // Give [ Arrange ]- do any setup

   // When [Act] - call function under test, use it, store result in "actual" variable and expected reuslt in "expected" variable 
   const actual = sum(-1000, -50);
   const expected = -1050;
   // then [ Assert ]- call assertion method to assert that actual = expected
   expect(actual).toBe(expected)
  
   // extra console output 
   if (actual == expected ){console.log("correct!")}else{"incorrect answer! check function again!"}
    
  });

  test('can add zero', () => {

    // Give [ Arrange ]- do any setup

    // When [Act] - call function under test, use it, store result in "actual" variable and expected reuslt in "expected" variable 
    const actual = sum(10,0);
    const expected = 10;
    // then [ Assert ]- call assertion method to assert that actual = expected
    expect(actual).toBe(expected)
  
    // extra console output 
   if (actual == expected ){console.log("correct!")}else{"incorrect answer! check function again!"}
    
    
  });

});


// Subtract Tests

describe('subtract', () => {
  test('can subtract two small numbers', () => {

   // Given [Arrange]- do any setup 

   // When [Act]- call function under test, use it, store result in "actual" variable and expected reuslt in "expected" variable 

   const actual = subtract(9,2);
   const expected = 7;
   // then [ Assert ]-call assertion method to assert that actual = expected

   expect(actual).toBe(expected);

    // extra console output 
    if (actual == expected ){console.log("correct, subtract function can subtract two small numbers!")}else{"incorrect answer! check function again!"}

  });

  test('can subtract two large numbers', () => {

    // Given [Arrange]- do any setup 
 
    // When [Act]- call function under test, use it, store result in "actual" variable and expected reuslt in "expected" variable 
 
    const actual = subtract(5000,2200);
    const expected = 2800;
    // then [ Assert ]-call assertion method to assert that actual = expected
 
    expect(actual).toBe(expected);
 
     // extra console output 
     if (actual == expected ){console.log("correct, subtract function can subtract two large numbers!")}else{"incorrect answer! check function again!"}
 
   });
   

   test('can subtract two negative numbers', () => {

    // Given [Arrange]- do any setup 
 
    // When [Act]- call function under test, use it, store result in "actual" variable and expected reuslt in "expected" variable 
 
    const actual = subtract(-8000,-2000);
    const expected = -6000;
    // then [ Assert ]-call assertion method to assert that actual = expected
 
    expect(actual).toBe(expected);
 
     // extra console output 
     if (actual == expected ){console.log("correct, subtract can subtract two negative numbers!")}else{"incorrect answer! check function again!"}
 
   });


   test('can subtract zero', () => {

    // Given [Arrange]- do any setup 
 
    // When [Act]- call function under test, use it, store result in "actual" variable and expected reuslt in "expected" variable 
 
    const actual = subtract(5000,0);
    const expected = 5000;
    // then [ Assert ]-call assertion method to assert that actual = expected
 
    expect(actual).toBe(expected);
 
     // extra console output 
     if (actual == expected ){console.log("correct, subtract function can subtract 0!")}else{"incorrect answer! check function again!"}
 
   });

});


// Multiply tests

describe('multiply', () => {
  test('can multiply two small numbers', () => {

    // Given [Arrange]- do any setup 
 
    // When [Act]- call function under test, use it, store result in "actual" variable and expected reuslt in "expected" variable 
 
    const actual = multiply(5,5);
    const expected = 25;
    // then [ Assert ]-call assertion method to assert that actual = expected
 
    expect(actual).toBe(expected);
 
     // extra console output 
     if (actual == expected ){console.log("correct,multiply function can multiply two small numbers!")}else{"incorrect answer! check function again!"}
 
   });
 
   test('can multiply two large numbers', () => {
 
     // Given [Arrange]- do any setup 
  
     // When [Act]- call function under test, use it, store result in "actual" variable and expected reuslt in "expected" variable 
  
     const actual = multiply(1200,4000);
     const expected = 4800000;
     // then [ Assert ]-call assertion method to assert that actual = expected
  
     expect(actual).toBe(expected);
  
      // extra console output 
      if (actual == expected ){console.log("correct, multiply function can multiply two large numbers!")}else{"incorrect answer! check function again!"}
  
    });
    
 
    test('can multiply two negative numbers', () => {
 
     // Given [Arrange]- do any setup 
  
     // When [Act]- call function under test, use it, store result in "actual" variable and expected reuslt in "expected" variable 
  
     const actual = multiply(-3000,-4000);
     const expected = 12000000;
     // then [ Assert ]-call assertion method to assert that actual = expected
  
     expect(actual).toBe(expected);
  
      // extra console output 
      if (actual == expected ){console.log("correct, multiply can multiply two large numbers!")}else{"incorrect answer! check function again!"}
  
    });
 
 
    test('can multiply zero', () => {
 
     // Given [Arrange]- do any setup 
  
     // When [Act]- call function under test, use it, store result in "actual" variable and expected reuslt in "expected" variable 
 
     const actual = multiply(5,0);
     const expected = 0;
     // then [ Assert ]-call assertion method to assert that actual = expected
  
     expect(actual).toBe(expected);
  
      // extra console output 
      if (actual == expected ){console.log("correct, multiply function can multiply 0!")}else{"incorrect answer! check function again!"}
  
    });

});


// Divide Tests


describe('divide', () => {
  
  test('can divide two small numbers', () => {

    // Given [Arrange]- do any setup 
 
    // When [Act]- call function under test, use it, store result in "actual" variable and expected reuslt in "expected" variable 
 
    const actual = divide(3,1);
    const expected = 3;
    // then [ Assert ]-call assertion method to assert that actual = expected
 
    expect(actual).toBe(expected);
 
     // extra console output 
     if (actual == expected ){console.log("correct, divide function can divide two small numbers!")}else{"incorrect answer! check function again!"}
 
   });


   test('can divide two large numbers', () => {

    // Given [Arrange]- do any setup 
 
    // When [Act]- call function under test, use it, store result in "actual" variable and expected reuslt in "expected" variable 
 
    const actual = divide(3000,1000);
    const expected = 3;
    // then [ Assert ]-call assertion method to assert that actual = expected
 
    expect(actual).toBe(expected);
 
     // extra console output 
     if (actual == expected ){console.log("correct, divide function can divide two large numbers!")}else{"incorrect answer! check function again!"}
 
   });
   

   test('can divide two negative numbers', () => {

    // Given [Arrange]- do any setup 
 
    // When [Act]- call function under test, use it, store result in "actual" variable and expected reuslt in "expected" variable 
 
    const actual = divide(-8000,-2000);
    const expected = 4;
    // then [ Assert ]-call assertion method to assert that actual = expected
 
    expect(actual).toBe(expected);
 
     // extra console output 
     if (actual == expected ){console.log("correct, divide can divide two negative numbers!")}else{"incorrect answer! check function again!"}
 
   });


   test('can divide zero', () => {

    // Given [Arrange]- do any setup 
 
    // When [Act]- call function under test, use it, store result in "actual" variable and expected reuslt in "expected" variable 
 
    const actual = divide(5000,0);
    const expected = Infinity
    // then [ Assert ]-call assertion method to assert that actual = expected
 
    expect(actual).toBe(expected);
 
     // extra console output 
     if (actual == expected ){console.log("correct, divide function can divide 0!")}else{"incorrect answer! check function again!"}
 
   });


});


// Modulus Tests


describe('modulus', () => {


  test('can find the remainder of  two small numbers', () => {

    // Given [Arrange]- do any setup 
 
    // When [Act]- call function under test, use it, store result in "actual" variable and expected reuslt in "expected" variable 
 
    const actual = modulus(4,2);
    const expected = 0;
    // then [ Assert ]-call assertion method to assert that actual = expected
 
    expect(actual).toBe(expected);
 
     // extra console output 
     if (actual == expected ){console.log("correct, modulus function can find the remainder of  two small numbers!")}else{"incorrect answer! check function again!"}
 
    });


   test('can find the modulus of two large numbers', () => {

    // Given [Arrange]- do any setup 
 
    // When [Act]- call function under test, use it, store result in "actual" variable and expected reuslt in "expected" variable 
 
    const actual = modulus(8000,2500);
    const expected = 500;
    // then [ Assert ]-call assertion method to assert that actual = expected
 
    expect(actual).toBe(expected);
 
     // extra console output 
     if (actual == expected ){console.log("correct, modulus function can find the remainder of two large numbers!")}else{"incorrect answer! check function again!"}
 
    });
   

   test('can find the remainder of two negative numbers', () => {

    // Given [Arrange]- do any setup 
 
    // When [Act]- call function under test, use it, store result in "actual" variable and expected reuslt in "expected" variable 
 
    const actual = divide(-7500,-3000);
    const expected = 2.5;  
    // then [ Assert ]-call assertion method to assert that actual = expected
 
    expect(actual).toBe(expected);
 
     // extra console output 
     if (actual == expected ){console.log("correct, modulus can find the remainder of two negative numbers!")}else{"incorrect answer! check function again!"}
 
    });


   test('can divide zero', () => {

    // Given [Arrange]- do any setup 
 
    // When [Act]- call function under test, use it, store result in "actual" variable and expected reuslt in "expected" variable 
 
    const actual = modulus(8000,0);
    const expected = NaN
    // then [ Assert ]-call assertion method to assert that actual = expected
 
    expect(actual).toBe(expected);
 
     // extra console output 
     if (actual == expected ){console.log("correct, modulus function can find the remainder of 0!")}else{"incorrect answer! check function again!"}
 
    });


});



// Even Tests

describe('even', () => {


  test('can identify odd number as not even', () => {

    // Given [Arrange]- do any setup 
 
    // When [Act]- call function under test, use it, store result in "actual" variable and expected reuslt in "expected" variable 
 
    const actual = even (43);
    // then [ Assert ]-call assertion method to assert that actual = expected
 
    expect(actual).toBeFalsy
 
     // extra console output 
     if (actual == false ){console.log("correct, even function can identify odd numbers as not even!")}else{"incorrect answer! check function again!"}
 
  });


  test('can identify small even numbers', () => {

    // Given [Arrange]- do any setup 
 
    // When [Act]- call function under test, use it, store result in "actual" variable and expected reuslt in "expected" variable 
 
    const actual = even(2);
    // then [ Assert ]-call assertion method to assert that actual = expected
 
    expect(actual).toBeTruthy
 
     // extra console output 
     if (actual == true ){console.log("correct, even function identify small even numbers!")}else{"incorrect answer! check function again!"}
 
  });
   

  test('can identify large even numbers', () => {

      // Given [Arrange]- do any setup 
 
      // When [Act]- call function under test, use it, store result in "actual" variable and expected reuslt in "expected" variable 
 
      const actual = even(3000); 
      // then [ Assert ]-call assertion method to assert that actual = expected
 
     expect(actual).toBeTruthy
 
     // extra console output 
     if (actual == true ){console.log("correct, even function can identify large even numbers!")}else{"incorrect answer! check function again!"}
 
  });


  test('can identify that a negative number is not even', () => {

     // Given [Arrange]- do any setup 
 
     // When [Act]- call function under test, use it, store result in "actual" variable and expected reuslt in "expected" variable 
 
     const actual = even(-2);
     // then [ Assert ]-call assertion method to assert that actual = expected
 
     expect(actual).toBeFalsy
 
     // extra console output 
     if (actual == false ){console.log("correct, even function can identify negative numbers as not even!")}else{"incorrect answer! check function again!"}
  });

  test('can identify zero as even', () => {

    // Given [Arrange]- do any setup 
 
    // When [Act]- call function under test, use it, store result in "actual" variable and expected reuslt in "expected" variable 
 
    const actual = even(-2);
    // then [ Assert ]-call assertion method to assert that actual = expected
 
    expect(actual).toBeTruthy
 
     // extra console output 
     if (actual == true ){console.log("correct, even function can identify negative numbers as not even!")}else{"incorrect answer! check function again!"}
 
  });

});


// Odd Tests

describe('odd', () => {


  test('can identify odd number as odd', () => {

    // Given [Arrange]- do any setup 
 
    // When [Act]- call function under test, use it, store result in "actual" variable and expected reuslt in "expected" variable 
 
    const actual = odd(43);
    // then [ Assert ]-call assertion method to assert that actual = expected
 
    expect(actual).toBeTruthy
 
     // extra console output 
     if (actual == true ){console.log("correct, odd  function can identify odd numbers as not even!")}else{"incorrect answer! check function again!"}
 
  });


  test('can identify small odd numbers', () => {

    // Given [Arrange]- do any setup 
 
    // When [Act]- call function under test, use it, store result in "actual" variable and expected reuslt in "expected" variable 
 
    const actual = odd(3);
    // then [ Assert ]-call assertion method to assert that actual = expected
 
    expect(actual).toBeTruthy
 
     // extra console output 
     if (actual == true ){console.log("correct, odd function identify small odd numbers!")}else{"incorrect answer! check function again!"}
 
  });
   

  test('can identify large odd numbers', () => {

      // Given [Arrange]- do any setup 
 
      // When [Act]- call function under test, use it, store result in "actual" variable and expected reuslt in "expected" variable 
 
      const actual = odd(3331); 
      // then [ Assert ]-call assertion method to assert that actual = expected
 
     expect(actual).toBeTruthy
 
     // extra console output 
     if (actual == true ){console.log("correct, odd function can identify large odd numbers!")}else{"incorrect answer! check function again!"}
 
  });


  test('can identify that a negative whole number is not odd', () => {

     // Given [Arrange]- do any setup 
 
     // When [Act]- call function under test, use it, store result in "actual" variable and expected reuslt in "expected" variable 
 
     const actual = odd(-10);
     // then [ Assert ]-call assertion method to assert that actual = expected
 
     expect(actual).toBeFalsy
 
     // extra console output 
     if (actual == false ){console.log("correct, odd function can identify negative whole numbers as not odd!")}else{"incorrect answer! check function again!"}
  });

  test('can identify zero as not odd', () => {

    // Given [Arrange]- do any setup 
 
    // When [Act]- call function under test, use it, store result in "actual" variable and expected reuslt in "expected" variable 
 
    const actual = odd(0);
    // then [ Assert ]-call assertion method to assert that actual = expected
 
    expect(actual).toBeFalsy
 
     // extra console output 
     if (actual == false ){console.log("correct, odd function can identify zero as not odd!")}else{"incorrect answer! check function again!"}
 
  });

});


// to run test normally in terminal: >  npm test

// test coverage is a built in tool that tells us how much of our code has been tested 
// or in other words any conditions which have not been tested for 
// to run with coverage in terminal> npm run test: coverage
