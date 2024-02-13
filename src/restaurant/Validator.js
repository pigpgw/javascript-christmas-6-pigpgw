class Validator {
    // Input originally came in as a string.
    static isValidVisitDay(input){
        if (!Validator.isNumber(input)) throw Error('[ERROR]');
        if (!Validator.isValidDay(input)) throw Error('[ERROR]');
        return true;
    }
    static isNumber(input){
        return !isNaN(input);
    }
    static isValidDay(input){
        return input > 0 && input < 32;
    }
}

export default Validator;