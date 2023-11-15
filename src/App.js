import inputView from './InputView.js';
import OutputView from './OutputView.js';
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
    await this.christmasEvent();
  }

  async christmasEvent(){
    await this.getUserInput();
    OutputView.printServiceStart();
    OutputView.printMenu(this.userOrderList);
    OutputView.printBeforeDiscount(this.beforeDiscount);
    this.totalEventLogic();
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

  totalEventLogic(){
    this.calculateEventDiscount();
    this.printUserPayment();
  }
  
  calculateEventDiscount(){
    this.totalDiscount = Event.totalDiscountCalculator(this.reserveDay, this.userOrderList, this.beforeDiscount);
    this.totalBenefit = Event.totalBenefitCalculator(this.reserveDay, this.userOrderList, this.beforeDiscount);
    this.bedge = Event.giveBadgeCheck(this.totalBenefit);
    this.giveawayMenu = Event.giveawayMenuCheck(this.beforeDiscount);
  }

  printUserPayment(){
    OutputView.printGiveAway(this.beforeDiscount, this.giveawayMenu);
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