import { Random, Console } from '@woowacourse/mission-utils';
import ERROR from './error.js';

const inputValidation = {
    checkNumber (input) {
        if(!Number(input)){
            throw new ERROR(ERROR.NOT_A_NUMBER);
        }
    },
     
    checkLength(input) {
        if (Number(input) < 1 || Number(input) > 31){
            throw new ERROR(ERROR.OVER_RANGE_DATE);
        }
    },

}

export default inputValidation;