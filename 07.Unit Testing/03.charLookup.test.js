const lookupChar = require('./03.charLookup.js');
const { assert } = require('chai');

describe('lookupChar unit testing', () => {

    it('should return indefined if the input is invalid', () => {
        assert.equal(lookupChar(10, 10), undefined);
    });
    it('should return indefined if the input is invalid', () => {
        assert.equal(lookupChar(10, '10'), undefined);
    });
    it('should return indefined if the input is invalid', () => {
        assert.equal(lookupChar('String', '10'), undefined);
    });
    it('should return indefined if the input is invalid', () => {
        assert.equal(lookupChar('String', []), undefined);
    });
    it('should return indefined if the input is invalid', () => {
        assert.equal(lookupChar('String', {}), undefined);
    });
    it('should return indefined if the input is invalid', () => {
        assert.equal(lookupChar({}, 4), undefined);
    });
    it('should return indefined if the input is invalid', () => {
        assert.equal(lookupChar([], 4), undefined);

    });
    it('should return Incorrect index if the index is longer than length or < 0', () => {
        assert.equal(lookupChar('Marti', 4.50), undefined);
    });
    //Function gets parmeter string
    it('should return Incorrect index if the index is longer than length or < 0', () => {
        assert.equal(lookupChar('Marti', -3), 'Incorrect index');
    });
    it('should return Incorrect index if the index is longer than length or < 0', () => {
        assert.equal(lookupChar('Marti', 6), 'Incorrect index');
    });
    it('should return Incorrect index if the index is longer than length or < 0', () => {
        assert.equal(lookupChar('Marti', 5), 'Incorrect index');
    });
    //valid input
    it('should return the character at the specified index in the string', () => {
        assert.equal(lookupChar('Marti', 3), 't');
    });
})