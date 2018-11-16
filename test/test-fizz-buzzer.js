//need edge case and unit tests for fizzbuzzer.js 
const expect = require('chai').expect; 

const fizzBuzz= require('../fizzBuzzer.js'); 

describe('fizzBuzz', function(){
    it('should return "fizz", "buzz", or "fizz-buzz"', function(){
        const inputArray= [
            {num:5, expected:'buzz'},
            {num:9, expected:'fizz'}, 
            {num:10, expected:'buzz'},
            {num:15, expected:'fizz-buzz'},
            {num:18, expected:'fizz'},
            {num:20, expected:'buzz'},  
            {num:30, expected:'fizz-buzz'},
            {num: 45, expected:'fizz-buzz'},
            {num: 60, expected:'fizz-buzz'}]; 
        inputArray.forEach(function(input){
            const answer = fizzBuzz(input.num)
            expect(answer).to.equal(input.expected); 
        });
    });
    it('should throw an error', function(){
        const illegalInput= [["number"], 
        ["1"], 
        [null], 
        [false], 
        [true], 
        [NaN]
        ];
        illegalInput.forEach(function(input){
            expect(function(){
                fizzBuzz(input); 
            }).to.throw(Error);
        
        });
    });
});