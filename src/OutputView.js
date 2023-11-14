import { Console } from '@woowacourse/mission-utils';
import Event from './event.js';

const OutputView = {

    printServiceStart (){
        Console.print("안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.");

    },

    printMenu(userOrderList) {
        Console.print("<주문 메뉴>");
        // console.log("userOrderList",userOrderList);
        userOrderList.forEach(menu => {
            Console.print(`${menu.name} ${menu.quantity}개`);
        });
    },

    printBeforeDiscount(totalPrice){
        Console.print("<할인 전 총주문 금액>");
        Console.print(`${totalPrice.toLocaleString() }원`);
    },

    printGiveAway(beforeDiscount, giveawayMenu) {
        Console.print("<증정 메뉴>");

        if (beforeDiscount >= 120000) {
            Console.print(`${giveawayMenu.name} ${giveawayMenu.quantity}개`);
        } 

        if (beforeDiscount < 120000) {
            Console.print("없음");
        }
    }
    
}

export default OutputView;