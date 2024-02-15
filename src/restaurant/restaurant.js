import InputView from './InputView.js';
import Validator from './Validator.js';
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

    // 메뉴들 미리 보여주는 메세지
    OutputView.printPreviewMessage(
      this.RestaurantController.getCustomerReservationDate(),
    );
    // 고객에게 주문한 메뉴 재 확인겸 출력
    OutputView.printMenu(
      this.RestaurantController.getCustomerReservationMenuList(),
    );

    // 총 유저의 총 주문 확인 및 총 구매 금액 계산
    this.RestaurantController.calculateTotalPrice();

    //할인전 총 주문금액 출력
    OutputView.printBeforeDiscountPrice(
      this.RestaurantController.getTotalPrice(),
    );

    // 이벤트 결과 출력
    OutputView.printPresentEvent(this.RestaurantController.presentEvent());
    OutputView.printTotalEventResult(
      this.RestaurantController.christmasDayEvent(),
      this.RestaurantController.weekdayEvent(),
      this.RestaurantController.weekendEvent(),
      this.RestaurantController.specialDicountEvent(),
      this.RestaurantController.presentEvent(),
    );

    // 이벤트 할인 총 금액 출력
    OutputView.printTotalBenefitPrice(
      this.RestaurantController.getTotalbenefit(),
    );

    // 할인 적용 금액 출력
    OutputView.printAfterDiscount(
      this.RestaurantController.getTotalPrice(),
      this.RestaurantController.getTotalbenefit(),
      this.RestaurantController.presentEvent(),
    );

    // 벳지 이벤트 결과 출력
    OutputView.printBedge(this.RestaurantController.bedgeEvent());
  }
}

export default restaurant;
