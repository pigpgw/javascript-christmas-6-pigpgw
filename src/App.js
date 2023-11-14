import { Random, Console } from '@woowacourse/mission-utils';
import inputValidation from './inputValidation.js';
import inputView from './InputView.js';
import OutputView from './OutputView.js';
import Menu from './Menu.js';
class App {

  constructor(){
    this.beforeDiscount = 0;
    this.selectMenuList;
  }

  async run() {
    OutputView.printServiceStart();
    await this.getUserInput();
    OutputView.printMenu();
  }

  async getUserInput(){
    const reserveDay = await inputView.readDate();
    const { userSelectMenu, totalPrice } = await inputView.readMenu();
    this.selectMenuList = userSelectMenu;
    this.beforeDiscount = totalPrice;
  }
}

export default App;
