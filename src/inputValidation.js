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
        if (quantity >= 1) {
            return;
        }
        throw new Error(ERROR.INVALID_QUANTITIY);
    },

    checkDuplicate(userInput){
        const menuList = [];
        const splitOrderList = userInput.split(',');
        splitOrderList.forEach(item => {
            const menu = item.split("-")[0].trim();
            if (menuList.includes(menu)){
                throw new Error (ERROR.IS_DUPLICATE);
            }
            menuList.push(menu);
        });
        console.log("menulist",menuList);
        return;
    }   
}

export default inputValidation;