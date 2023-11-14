import { Random, Console } from '@woowacourse/mission-utils';
import inputValidation from './inputValidation.js';
import inputView from './InputView.js';
import OutputView from './OutputView.js';
import Menu from './Menu.js';
import Event from './event.js';

class App {

  constructor(){
    this.reserveDay = 0;
    this.beforeDiscount = 0;
    this.userOrderList = [];
    this.totalDiscount = 0;
  }

  async run() {
    OutputView.printServiceStart();
    await this.getUserInput();
    OutputView.printMenu(this.userOrderList);
    OutputView.printBeforeDiscount(this.beforeDiscount);
    this.handleEvent();
  }

  async getUserInput() {
    this.reserveDay = await inputView.readDate();
    const { userSelectMenu, totalPrice } = await inputView.readMenu();
    console.log("userOrderList", userSelectMenu);
    this.userOrderList = userSelectMenu;
    this.beforeDiscount = totalPrice;
    console.log(this.userOrderList, this.beforeDiscount);
  }

  handleEvent(){
    this.totalDiscount = Event.totalDiscountCalculator(this.reserveDay,this.userOrderList);
  }
}

export default App;