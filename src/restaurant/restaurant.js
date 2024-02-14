import InputView from './InputView.js';
import Validator from './Validator.js';
import { Console } from '@woowacourse/mission-utils';
import OutputView from './OutputView.js';
import User from './User.js';
import RestaurantController from './restaurantController.js';

class restaurant {
  constructor() {
    this.User = new User();
    this.RestaurantController = new RestaurantController();
  }

  async run() {
    // 인사말
    OutputView.printGreeting();
    // 예약 날짜를 입력받기
    while (true) {
      try {
        const visitDay = await InputView.readDate();
        Validator.isValidVisitDay(Number(visitDay));
        this.User.setReservationDate(Number(visitDay));
        break;
      } catch (error) {
        OutputView.printErrorMessage(error);
      }
    }
    // 주문 메뉴를 입력 받기
    while (true) {
      try {
        const orderMenu = await InputView.readOrderMenu();
        Validator.isValidateOrder(orderMenu);
        this.User.setOrderMenuList(orderMenu);
        console.log(this.User.getOrderMenuList());
        break;
      } catch (error) {
        OutputView.printErrorMessage(error);
      }
    }

    //예약 날짜와 주문 메뉴를 레스토랑 시스템에 전달하기
    this.RestaurantController.setCustomeReservationDate(this.User.getReservationDate());
    this.RestaurantController.setCustomerReservationMenuList(this.User.getOrderMenuList())
    
    // 총 유저의 총 주문 확인 및 총 구매 금액 계산
    this.RestaurantController.calculateTotalPrice();
    console.log("user order TotalPrice",this.RestaurantController.getTotalPrice())
  }
}

export default restaurant;
