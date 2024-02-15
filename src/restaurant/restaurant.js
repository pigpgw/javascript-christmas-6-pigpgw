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
    this.RestaurantController.setCustomeReservationDate(
      this.User.getReservationDate(),
    );
    this.RestaurantController.setCustomerReservationMenuList(
      this.User.getOrderMenuList(),
    );

    // 고객에게 주문한 메뉴 재 확인겸 출력
    OutputView.printMenu(
      this.RestaurantController.getCustomerReservationMenuList(),
    );

    // 총 유저의 총 주문 확인 및 총 구매 금액 계산
    this.RestaurantController.calculateTotalPrice();
    // console.log("user order TotalPrice",this.RestaurantController.getTotalPrice())

    //할인전 총 주문금액 출력
    OutputView.printBeforeDiscountPrice(
      this.RestaurantController.getTotalPrice(),
    );

    // 이벤트 발생 체크
    console.log(
      'this.RestaurantController.christmasDayEvent();',
      this.RestaurantController.christmasDayEvent(),
    );
    console.log(
      'this.RestaurantController.weekdayEvent()',
      typeof this.RestaurantController.weekdayEvent(),
      this.RestaurantController.weekdayEvent(),
    );
    console.log(
      'this.RestaurantController.weekendEvent()',
      this.RestaurantController.weekendEvent(),
    );

    OutputView.printPresentEvent(this.RestaurantController.presentEvent());
    OutputView.printTotalEventResult(
      this.RestaurantController.christmasDayEvent(),
      this.RestaurantController.weekdayEvent(),
      this.RestaurantController.weekendEvent(),
      this.RestaurantController.specialDicountEvent(),
      this.RestaurantController.presentEvent(),
    );

    OutputView.printTotalBenefitPrice(
      this.RestaurantController.calculateTotalBenefit(),
    );

    OutputView.printAfterDiscount(
      this.RestaurantController.getTotalPrice(),
      this.RestaurantController.calculateTotalBenefit(),
      this.RestaurantController.presentEvent()
    );
    // console.log("printAfterDiscount",this.RestaurantController.getTotalPrice(),this.RestaurantController.calculateTotalBenefit())

    OutputView.printBedge(this.RestaurantController.bedgeEvent());
  }
}

export default restaurant;
