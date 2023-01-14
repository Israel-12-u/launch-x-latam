const adder = require('../../services/adder');

describe("Test de divicion", function () {
    let _numberA;
    let _numberB;
    it("Deberia de devolver la suma de numberA y numberB", function () {
        _numberA = 6;
        _numberB = 7;

        const result = adder.add(_numberA,_numberB);

        expect(result).toEqual(13);
    })
});