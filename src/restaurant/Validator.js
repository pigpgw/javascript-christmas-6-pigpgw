class Validator {
    // input은 원래는 string으로 들어옴
    isValidVisitDay(input){
        if (!this.isNumber(input)) throw Error('[ERROR]')
        if (!this.isValidDay(input)) throw Error('[ERROR]')
        return true
    }
    // 숫자인지
    isNumber(input){
        if (isNaN(input)) return true;
        return false
    }
    // 1 ~ 31 사이인지
    isValidDay(input){
        if(input > 0 && input < 32) return true;
        return false
    }
}

export default Validator;