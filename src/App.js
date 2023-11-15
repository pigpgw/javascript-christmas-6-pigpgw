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
    this.giveawayMenu = '';
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
    this.userOrderList = userSelectMenu;
    this.beforeDiscount = totalPrice;
  }

  handleEvent(){
    this.totalDiscount = Event.totalDiscountCalculator(this.reserveDay, this.userOrderList, this.beforeDiscount);
    const giveawayMenu = Event.giveawayMenuCheck(this.beforeDiscount);
    OutputView.printGiveAway(this.beforeDiscount,giveawayMenu);
    OutputView.printBenefit(Event.dDayDiscount(this.reserveDay), Event.aWeekDiscount(this.reserveDay, this.userOrderList), Event.checkStar(this.reserveDay),this.beforeDiscount);
    // printBenefit(dDayDiscount, aWeekDiscount, checkStar, beforeDiscount){
  }
  

}

export default App;