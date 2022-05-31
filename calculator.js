//  add  function: uses anonymous function syntax

const sum = function(a, b){
    return a + b;
};

// subtract function: uses arrow function with implicit return syntax

const subtract = (number1, number2) => number1-number2;

// multiply function:  uses arrow function with explicit return syntax

 const multiply = (number1, number2) => {
    return  number1 * number2;
}

// divide function:    uses arrow function with implicit return syntax

const divide= (number1, number2) => number1 / number2;


// modulus function:   uses name function syntax

 const modulus = function modulus(number1, number2)
{
    return (number1 % number2)
}

// even function: uses arrow function with explicit return syntax


const even = (number) => {
    if(number % 2 == 0 )
    {return true} 
    else {return false}
}


// const odd = uses arrow function with explcit return syntax

const odd = (number) => {
    if(!number % 2 == 0)
    {return true}
    else { return false}
}

// let us export all functions so they can be used outside of the calculator.js package
// critical for testing which is done in separate package

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
