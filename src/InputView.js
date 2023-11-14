import { Random, Console } from '@woowacourse/mission-utils';
import inputValidation from './inputValidation.js';
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

    }

    
}

export default InputView;