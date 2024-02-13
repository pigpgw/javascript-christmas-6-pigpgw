import InputView from './InputView.js';
import Validator from './Validator.js';
import { Console } from '@woowacourse/mission-utils';

class RestaurantController {
    async run() {
        try {
            const visitDay = await this.getUserVisitDay();
        } catch (error) {
            Console.print(error.message);
            await this.run();
        }
    }

    async getUserVisitDay() {
        const input = await InputView.readDate();
        Validator.isValidVisitDay(Number(input)); // Throws error if invalid
        return input;
    }
}

export default RestaurantController;