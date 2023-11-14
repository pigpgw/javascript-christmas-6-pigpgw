import ERROR from './error.js';
import Menu from './Menu.js';

const inputValidation = {
    // ... (existing code)

    checkNumber(input) {
        if (!Number(input)) {
            throw ERROR.NOT_A_NUMBER;
        }
    },

    checkLength(input) {
        if (Number(input) < 1 || Number(input) > 31) {
            throw ERROR.OVER_RANGE_DATE;
        }
    },

    checkExitsMenu(menuitem) {
        for (const category in Menu) {
            if (Menu[category].some(item => item.name === menuitem)) {
                return;
            }
        }
        throw ERROR.NOT_IN_MENU;
    },

    checkValidQuantity(quantity) {
        if (quantity >= 1) {
            return;
        }
        throw ERROR.INVALID_QUANTITY;
    },

    checkDuplicate(userInput) {
        const menuList = [];
        const splitOrderList = userInput.split(',');
        splitOrderList.forEach(item => {
            const menu = item.split("-")[0].trim();
            if (menuList.includes(menu)) {
                throw ERROR.IS_DUPLICATE;
            }
            menuList.push(menu);
        });
        console.log("menulist", menuList);
        return true;  // Return true to indicate success
    },
};

export default inputValidation;
