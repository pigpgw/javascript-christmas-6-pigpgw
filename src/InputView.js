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

    async readMenu(){
        while (true) {
            const userSelectMenu = [];
            const totalPrice = 0;
            try {
                const input = await Console.readLineAsync("주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)");
                const forCheckUserMenu = input.split(',');
                console.log("forCheckUserMenu",forCheckUserMenu);
                forCheckUserMenu.forEach(item => {
                    item = item.split("-");
                    const menu = item[0];
                    const quantity = item[1];
                    console.log("메뉴",menu);
                    inputValidation.checkExitsMenu(menu);
                    // userSelectMenu.push(menu[0]);
                    // totalPrice += Number(menu[1]);
                });

                return {userSelectMenu,totalPrice}
            } catch (error) {
                Console.print(error.message);
            }
        }
    },

    

}

export default InputView;