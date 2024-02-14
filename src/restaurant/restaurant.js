import InputView from './InputView.js';
import Validator from './Validator.js';
import { Console } from '@woowacourse/mission-utils';
import OutputView from './OutputView.js';
import User from './User.js';

class restaurant {
  constructor() {
    this.User = new User();
  }

  async run() {
    while (true) {
      try {
        const visitDay = await InputView.readDate();
        Validator.isValidVisitDay(Number(visitDay));
        this.User.setReservationDate(visitDay);
        break;
      } catch (error) {
        OutputView.printErrorMessage(error);
      }
    }

    while (true) {
      try {
        const orderMenu = await InputView.readOrderMenu();
        Validator.isValidateOrder(orderMenu);
        this.User.setOrderMenuList(orderMenu);
        break;
      } catch (error) {
        OutputView.printErrorMessage(error);
      }
    }
  }
}

export default restaurant;
