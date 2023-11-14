import { Random, Console } from '@woowacourse/mission-utils';
import inputValidation from './inputValidation.js';
import inputView from './InputView.js';
import OutputView from './OutputView.js';

class App {
  async run() {
    OutputView.printServiceStart();
    const reserveDay =  await inputView.readDate();

    

  }
}

export default App;
