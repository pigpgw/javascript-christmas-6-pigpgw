import { Console } from '@woowacourse/mission-utils';

class OutputView  {
  static printMenu(clientOrderList) {
    Console.print('<주문 메뉴>');
  }
  
  static printErrorMessage(error) {
    Console.print(error);
  }
};

export default OutputView;