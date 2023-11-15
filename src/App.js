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
    this.totalBenefit = 0;
    this.bedge = "";
  }

  async run() {
    await this.getUserInput();
    OutputView.printServiceStart();
    OutputView.printMenu(this.userOrderList);
    OutputView.printBeforeDiscount(this.beforeDiscount);
    this.handleEvent();
  }

  async getUserInput() {
    try {
      this.reserveDay = await inputView.readDate();
      const { userSelectMenu, totalPrice } = await inputView.readMenu();
      this.userOrderList = userSelectMenu;
      this.beforeDiscount = totalPrice;
    } catch (error) {
      await this.getUserInput();
    }
  }

  handleEvent(){
    this.totalDiscount = Event.totalDiscountCalculator(this.reserveDay, this.userOrderList, this.beforeDiscount);
    this.totalBenefit = Event.totalBenefitCalculator(this.reserveDay,this.userOrderList,this.beforeDiscount);
    this.bedge = Event.giveBadgeCheck(this.totalBenefit);
    const giveawayMenu = Event.giveawayMenuCheck(this.beforeDiscount);
    OutputView.printGiveAway(this.beforeDiscount,giveawayMenu);
    OutputView.printBenefit(
      Event.dDayDiscount(this.reserveDay, this.beforeDiscount),
      Event.aWeekDiscount(this.reserveDay, this.userOrderList, this.beforeDiscount),
      Event.checkStar(this.reserveDay, this.beforeDiscount),
      this.beforeDiscount
    );
    OutputView.printAfterDiscount(this.beforeDiscount, this.totalDiscount);
    OutputView.printBedge(this.bedge);
  }
  

}

export default App;