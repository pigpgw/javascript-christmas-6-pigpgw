import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './Constant.js'

class OutputView  {
  static printGreeting(){
    Console.print(MESSAGE.GREETING)
  }
  
  static printMenu(clientOrderList) {
    Console.print('<주문 메뉴>');
  }

  static printErrorMessage(error) {
    Console.print(error);
  }
};

export default OutputView;