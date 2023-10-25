const sum = require('../repository/Suma');

describe("Test Function Suma", ()=>{
    it("Should return 10", ()=>{
        const returnSuma = sum(5, 5);
        expect(returnSuma).toBe(10);
    })

    it("Should return 0", ()=>{
        const returnSuma = sum(5, -5);
        expect(returnSuma).toBe(0);
    })
});