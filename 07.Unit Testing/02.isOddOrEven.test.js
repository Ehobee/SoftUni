const isOddOrEven = require('./02.isOddOrEven');
const { assert } = require('chai');

describe('isOddOrEven function tests', () => {

    it('should return undefined when the parameter is a number', () => {
        assert.equal(isOddOrEven(10), undefined);
    });
    it('should return undefined when the parameter is an object', () => {
        assert.equal(isOddOrEven({}), undefined);
    });
    it('should return undefined when the parameter is an array', () => {
        assert.equal(isOddOrEven([]), undefined);
    });
    it('should return undefined when the parameter is a boolean', () => {
        assert.equal(isOddOrEven(true), undefined);
    });
    it('should return undefined when the parameter is a boolean', () => {
        assert.equal(isOddOrEven(false), undefined);
    });
    it('should return undefined when the parameter is NaN', () => {
        assert.equal(isOddOrEven(NaN), undefined);
    });
    it('should return undefined when the parameter is undefined', () => {
        assert.equal(isOddOrEven(undefined), undefined);
    });
    //Valid input tests
    it('should return even', () => {
        assert.equal(isOddOrEven('Hi'), 'even');
    });
    it('should return odd', () => {
        assert.equal(isOddOrEven('Odd'), 'odd');
    });
})