import { Random, Console } from '@woowacourse/mission-utils';
import inputValidation from './inputValidation.js';
import Menu from './Menu.js';
const InputView = {
    
    async readDate() {
        while (true) {
            try{
                const input = await Console.readLineAsync("12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)");
                inputValidation.checkNumber(input);
                inputValidation.checkLength(input);
                return input;
            } catch (erorr) {
                Console.print(erorr.message);
            }
        }
    },

    async readMenu() {
        const userSelectMenu = [];
        let totalPrice = 0;

        while (true) {
            try {
                const input = await Console.readLineAsync("주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1)");
                const sanitizedInput = input.replace(/,+$/, '');

                const forCheckUserMenu = sanitizedInput.split(',');

                forCheckUserMenu.forEach(item => {
                    item = item.split("-");
                    const menu = item[0];
                    const quantity = Number(item[1]);

                    inputValidation.checkExitsMenu(menu);
                    inputValidation.checkValidQuantity(quantity);

                    userSelectMenu.push(menu);
                    totalPrice += Number(quantity);
                });
                break;
            } catch (error) {
                Console.print(error.message);
            }
        }
        return { userSelectMenu, totalPrice };
    }



}

export default InputView;