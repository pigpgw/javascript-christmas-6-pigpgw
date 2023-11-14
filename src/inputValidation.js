import { Random, Console } from '@woowacourse/mission-utils';
import ERROR from './error.js';
import Menu from './Menu.js'; 

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

    checkExitsMenu (menuitem) {
        for (const category in Menu){
            if (Menu[category].some(item => item.name === menuitem)){
                return;
            }
        }
        throw new Error(ERROR.NOT_IN_MENU);
    },

    checkValidQuantity(quantity){
        console.log("시작");
        if (quantity >= 1) {
            console.log("성공");
            return;
        }
        console.log("오루ㅠ");
        throw new Error(ERROR.INVALID_QUANTITIY);
    }


}

export default inputValidation;