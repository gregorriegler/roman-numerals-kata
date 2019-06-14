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
    let cases = [
        {n: 1, roman: 'I'},
        {n: 2, roman: 'II'},
        {n: 3, roman: 'III'},
        {n: 5, roman: 'V'},
        {n: 4, roman: 'IV'},
        {n: 6, roman: 'VI'},
        {n: 7, roman: 'VII'},
        {n: 8, roman: 'VIII'},
        {n: 9, roman: 'IX'},
        {n: 10, roman: 'X'},
        {n: 11, roman: 'XI'},
        {n: 13, roman: 'XIII'},
        {n: 14, roman: 'XIV'},
        {n: 15, roman: 'XV'},
        {n: 16, roman: 'XVI'},
        {n: 18, roman: 'XVIII'},
        {n: 19, roman: 'XIX'},
        {n: 20, roman: 'XX'},
        {n: 21, roman: 'XXI'},
        {n: 29, roman: 'XXIX'},
        {n: 30, roman: 'XXX'},
        {n: 31, roman: 'XXXI'},
        {n: 39, roman: 'XXXIX'},
        {n: 50, roman: 'L'},
    ];

    cases.forEach(function(x) {
        it(x.n + ' -> ' + x.roman, function () {
            expect(roman(x.n)).to.equal(x.roman)
        })
    })
});