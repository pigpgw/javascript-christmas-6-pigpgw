import menu from './Menu.js';
import InputView from './InputView.js';
import Validator from './Validator.js';
import { Console } from '@woowacourse/mission-utils';
class restaurantController {
    async run() {
      try {
        const visitDay = await this.getUserVisitDay();
      } catch (error) {
        console.error('An error occurred:', error.message);
        await this.run(); 
      }
    }
  
    async getUserVisitDay() {
      const input = await InputView.readDate();
      if (!Validator.isValidVisitDay(Number(input))) {
        throw new Error('Invalid visit day. Please enter a valid day.');
      }
      return input;
    }
  }

export default restaurantController;
