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
    await this.runChristmasEventService();
  }

  async runChristmasEventService(){
    await this.getUserOrder();
    OutputView.printServiceStart();
    OutputView.printMenu(this.userOrderList);
    OutputView.printBeforeDiscount(this.beforeDiscount);
    this.serviceMainLogic();
  }

  async getUserOrder() {
    try {
      this.reserveDay = await inputView.readDate();
      const { userSelectMenu, totalPrice } = await inputView.readMenu();
      this.userOrderList = userSelectMenu;
      this.beforeDiscount = totalPrice;
    } catch (error) {
      await this.getUserOrder();
    }
  }

  serviceMainLogic(){
    this.calculateEventDiscount();
    this.printBill();
  }
  
  calculateEventDiscount(){
    this.totalDiscount = Event.totalDiscountCalculator(this.reserveDay, this.userOrderList, this.beforeDiscount);
    this.totalBenefit = Event.totalBenefitCalculator(this.reserveDay, this.userOrderList, this.beforeDiscount);
    this.bedge = Event.giveBadgeCheck(this.totalBenefit);
    this.giveawayMenu = Event.giveawayMenuCheck(this.beforeDiscount);
  }

  printBill(){
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