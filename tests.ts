import {expect} from "chai";

let sections = [
    {'numeral': 'L', 'n': 50},
    {'numeral': 'X', 'n': 10},
    {'numeral': 'IX', 'n': 9},
    {'numeral': 'V', 'n': 5},
    {'numeral': 'IV', 'n': 4},
    {'numeral': 'I', 'n': 1}
]

function roman(n: number) {
    let result = '';
    for (const section of sections) {
        while (n >= section.n) {
            result += section.numeral
            n -= section.n
        }
    }

    return result
}

describe('roman numerals generator', function () {
    let cases = [
        {n: 1, roman: 'I'},
        {n: 2, roman: 'II'},
        {n: 3, roman: 'III'},
        {n: 4, roman: 'IV'},
        {n: 5, roman: 'V'},
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

    cases.forEach(function (x) {
        it(x.n + ' -> ' + x.roman, function () {
            expect(roman(x.n)).to.equal(x.roman)
        })
    })
});