const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should return non-string values', () => {
        var res = isRealString(69);
        expect(res).toBe(false);
    });

    it('should reject string with only spaces', () => {
        var res = isRealString('    ');
        expect(res).toBe(false);
    });

    it('should allow string with non-space characters', () => {
        var res = isRealString('   Stiffmeister     ');
        expect(res).toBe(true);
    });
});