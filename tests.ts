import {expect} from "chai";

const numerals = new Map<string, number>([
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['LC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
]);

function roman(n: number) {
    let result = '';

    for (let [numeral, numeralValue] of numerals) {
        while (n >= numeralValue) {
            result += numeral
            n -= numeralValue
        }
    }

    return result
}



describe('roman numerals generator', function () {
    const cases = [
        c(1, 'I'),
        c(2, 'II'),
        c(3, 'III'),
        c(4, 'IV'),
        c(5, 'V'),
        c(6, 'VI'),
        c(7, 'VII'),
        c(8, 'VIII'),
        c(9, 'IX'),
        c(10, 'X'),
        c(11, 'XI'),
        c(13, 'XIII'),
        c(14, 'XIV'),
        c(15, 'XV'),
        c(16, 'XVI'),
        c(18, 'XVIII'),
        c(19, 'XIX'),
        c(20, 'XX'),
        c(21, 'XXI'),
        c(29, 'XXIX'),
        c(30, 'XXX'),
        c(31, 'XXXI'),
        c(39, 'XXXIX'),
        c(49, 'XLIX'),
        c(50, 'L'),
        c(1984, 'MCMLXXXIV')
    ];

    cases.forEach(function (c) {
        it(c.n + ' -> ' + c.roman, function () {
            expect(roman(c.n)).to.equal(c.roman)
        })
    })

    function c(n: number, roman: string) {
        return {n: n, roman: roman};
    }
});