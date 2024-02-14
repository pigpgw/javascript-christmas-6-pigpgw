import Validator from "../src/restaurant/Validator"

describe('input Test',() => {
    test(('check validator can validate user incorrect input - string'), () => {
        expect(() => {
            !Validator.isValidVisitDay("hi")
        }).toThrow();
    })

    test(('check validator can validate user incorrect input - over range day'), () => {
        expect(() => {
            !Validator.isValidVisitDay(32)
        }).toThrow();
    })

    test(('check validator can validate user incorrect input - order incorrect menu(not exist)'), () => {
        expect(() => {
            !Validator.isValidateOrder("라멘-1,제로콜라-1")
        }).toThrow();
    })
    
    test(('check validator can validate user incorrect input - order incorrect count(string)'), () => {
        expect(() => {
            !Validator.isValidateOrder("타파스-d,제로콜라-1")
        }).toThrow();
    })
})