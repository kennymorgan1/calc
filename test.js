const assert = require('assert');
const operations = require('./operations')

it('correctly calculates the sum of 5 and 3', () =>{
    assert.equal(operations.add(5,3), 8);
})

it('correctly calculate the sum -1 and -5', () => {
    assert.equal(operations.add(-1,-5), -6);
})

it('correctly calculate the diference of 17 and 3', () => {
    assert.equal(operations.subtract(17, 3), 14);
})

it('correctly calculate the difference of 7 and -3', () => {
    assert.equal(operations.subtract(7, -3), 10);
})

it('correctly calculate the product of 10 and 15', () => {
    assert.equal(operations.multiply(10, 15), 150);
})

it('correctly calculate the quotient of 21 and 7', () => {
    assert.equal(operations.divide(21, 7), 3);
})

it('correctly calculate the quotient of 1 and 2', () => {
    assert.equal(operations.divide(1, 2), 0.5);
})

it('correctly return the remainder of 20 divided by 6', () => {
    assert.equal(operations.mod(20, 6), 2);
})

it('indicates failure when a string is used instead of a number', () => {
    assert.equal(operations.validateNumbers('sammy', 5), false);
});
  
it('indicates failure when two strings is used instead of numbers', () => {
    assert.equal(operations.validateNumbers('sammy', 'sammy'), false);
});

it('successfully runs when two numbers are used', () => {
    assert.equal(operations.validateNumbers(5, 5), true);
});
