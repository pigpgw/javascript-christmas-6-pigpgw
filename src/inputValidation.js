import ERROR from './error.js';
import Menu from './Menu.js';

const inputValidation = {
    checkNumber(input) {
        const num = Number(input);
        if (isNaN(num) || !Number.isInteger(num)) {
            throw new Error(ERROR.INVALID_DATE.message);
        }
    },

    checkLength(input) {
        if (Number(input) < 1 || Number(input) > 31) {
            throw new Error(ERROR.OVER_RANGE_DATE.message);
        }
    },

    checkExitsMenu(menuitem) {
        for (const category in Menu) {
            if (Menu[category].some(item => item.name.toLowerCase() === menuitem.toLowerCase())) {
                return;
            }
        }
        throw new Error(ERROR.NOT_IN_MENU.messag);
    },

    checkValidQuantity(quantity) {
        if (quantity >= 1) {
            return;
        }
        throw new Error(ERROR.INVALID_QUANTITY.message);
    },

    checkDuplicate(userInput) {
        const menuList = [];
        const splitOrderList = userInput.split(',');
        splitOrderList.forEach(item => {
            const menu = item.split("-")[0].trim();
            if (menuList.includes(menu.toLowerCase())) {
                throw new Error(ERROR.IS_DUPLICATE);
            }
            menuList.push(menu.toLowerCase());
        });
    },
};

export default inputValidation;
