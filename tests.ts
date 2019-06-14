import {expect} from "chai";


function roman(n: number) {
    if (n < 9) {
        return V(n);
    }

    if (n < 19) {
        return X(n);
    }

    if (n < 29) {
        return 'X' + X(n - 10)
    }

    if (n < 39) {
        return 'XX' + X(n - 20)
    }

    if (n < 49) {
        return 'XXX' + X(n - 30)
    }

    return 'L';
}

function V(n: number) {
    if (n < 5 - 1)
        return I(n);

    return section(n, 5, 'V', I);
}

function I(n: number) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += 'I'
    }
    return result;
}

function X(n: number) {
    return section(n, 10, 'X', V);
}

function section(n: number, target: number, representation: string, rest) {
    if (n === target - 1) {
        return 'I' + representation
    } else {
        return representation + rest(n - target)
    }
}


describe('roman numerals generator', function () {
    it('should generate numerals', function () {
        expect(roman(1)).to.equal('I')
        expect(roman(2)).to.equal('II')
        expect(roman(3)).to.equal('III')
        expect(roman(5)).to.equal('V')
        expect(roman(4)).to.equal('IV')
        expect(roman(6)).to.equal('VI')
        expect(roman(7)).to.equal('VII')
        expect(roman(8)).to.equal('VIII')
        expect(roman(9)).to.equal('IX')
        expect(roman(10)).to.equal('X')
        expect(roman(11)).to.equal('XI')
        expect(roman(13)).to.equal('XIII')
        expect(roman(14)).to.equal('XIV')
        expect(roman(15)).to.equal('XV')
        expect(roman(16)).to.equal('XVI')
        expect(roman(18)).to.equal('XVIII')
        expect(roman(19)).to.equal('XIX')
        expect(roman(20)).to.equal('XX')
        expect(roman(21)).to.equal('XXI')
        expect(roman(29)).to.equal('XXIX')
        expect(roman(30)).to.equal('XXX')
        expect(roman(31)).to.equal('XXXI')
        expect(roman(39)).to.equal('XXXIX')
        expect(roman(50)).to.equal('L')
    });
});