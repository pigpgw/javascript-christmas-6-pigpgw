import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './Constant.js';

class OutputView {
  static printGreeting() {
    Console.print(MESSAGE.GREETING);
  }

  static printMenu(clientOrderList) {
    Console.print('<주문 메뉴>');
    const menuKeys = Object.keys(clientOrderList);
    for (const menu of menuKeys) {
      Console.print(menu, clientOrderList[menu]);
    }
  }

  static printErrorMessage(error) {
    Console.print(error);
  }

  static printBeforeDiscountPrice(price) {
    Console.print('<할인 전 총주문 금액>');
    Console.print(`${price}원`);
  }
}

export default OutputView;
