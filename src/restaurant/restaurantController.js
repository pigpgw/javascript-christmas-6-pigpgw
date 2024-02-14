import InputView from './InputView.js';
import Validator from './Validator.js';
import { Console } from '@woowacourse/mission-utils';
import OutputView from './OutputView.js';
import User from './User.js';

class RestaurantController {
  async run() {
    while (true) {
      try {
        const visitDay = await InputView.readDate();
        Validator.isValidVisitDay(Number(visitDay));
        break
      } catch (error) {
        OutputView.printErrorMessage(error);
      }
    }
  }
}

export default RestaurantController;
