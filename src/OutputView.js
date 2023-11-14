import { Console } from '@woowacourse/mission-utils';
const OutputView = {

    printServiceStart (){
        Console.print("안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.");

    },

    printMenu(userOrderList) {
        Console.print("<주문 메뉴>");
        userOrderList.forEach(menu => {
            Console.print(`${menu.name} ${menu.quantity}개`);
        });
    },

    printBeforeDiscount(totalPrice){
        Console.print("<할인 전 총주문 금액>");
        Console.print(`${totalPrice}원`);
    }

    
    
}

export default OutputView;