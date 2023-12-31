import { Console } from '@woowacourse/mission-utils';
import inputValidation from './inputValidation.js';
import Menu from './Menu.js';
const InputView = {
        async readDate() {
            while (true) {
                try {
                    const input = await Console.readLineAsync("12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)");
                    inputValidation.checkNumber(input);
                    inputValidation.checkLength(input);
                    return input;
                } catch (error) {
                    Console.print(error.message);
                }
            }
        },

    async readMenu() {
        const userSelectMenu = [];
        let totalPrice = 0;

        while (true) {
            try {
                const input = await Console.readLineAsync("주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1)");
                const forCheckUserMenu = this.splitUserMenu(input);
                inputValidation.checkDuplicate(input);
                this.processUserMenu(forCheckUserMenu, userSelectMenu, totalPrice);
                break;
            } catch (error) {
                Console.print(error.message);
            }
        }
        return { userSelectMenu, totalPrice };
    },

    splitUserMenu(input) {
        return input.split(',').map(item => item.trim());
    },

    processUserMenu(forCheckUserMenu, userSelectMenu, totalPrice) {
        forCheckUserMenu.forEach(item => {
            item = item.split("-").map(part => part.trim());
            const menuName = item[0];
            const quantity = Number(item[1]);
            inputValidation.checkExitsMenu(menuName);
            inputValidation.checkValidQuantity(quantity);
            const menuPrice = this.getPrice(menuName) * quantity;
            totalPrice += menuPrice;

            userSelectMenu.push({ name: menuName, quantity, price: menuPrice });
        });
    },
    
    getPrice (itemName) {
        for (const category in Menu){
            const menu = Menu[category].find(item => item.name === itemName);
            if (menu) {
                return menu.price;
            }
        }
    },
}

export default InputView;