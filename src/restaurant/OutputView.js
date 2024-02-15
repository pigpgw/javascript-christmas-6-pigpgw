import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './Constant.js';

class OutputView {
  static printGreeting() {
    Console.print(MESSAGE.GREETING);
  }

  static printMenu(clientOrderList) {
    Console.print('<주문 메뉴>');
    const menuKeys = Object.keys(clientOrderList);
    for (const menu of menuKeys) {
      Console.print(menu, clientOrderList[menu]);
    }
  }

  static printErrorMessage(error) {
    Console.print(error);
  }

  static printBeforeDiscountPrice(price) {
    Console.print('<할인 전 총주문 금액>');
    Console.print(`${price}원`);
  }

  static printPresentEvent(price) {
    Console.print('<증정 메뉴>');
    if (price !== 0) Console.print('샴페인 1개');
    if (price === 0) Console.print('없음');
  }

  static printTotalEventResult(
    dDayEventPrice,
    weekDayPrice,
    weekendDayEventPrice,
    specialDicountEvent,
    presentEventPrice,
  ) {
    Console.print('<혜택 내역>');
    Console.print(`크리스마스 디데이 할인: -${dDayEventPrice}원`);
    if (weekDayPrice !== 0) Console.print(`평일 할인: -${weekDayPrice}원`);
    if (weekendDayEventPrice !== 0)
      Console.print(`주말 할인: -${weekendDayEventPrice}원`);
    if (specialDicountEvent !== 0)
      Console.print(`특별 할인: -${specialDicountEvent}원`);
    if (specialDicountEvent === 0)
      Console.print(`특별 할인: ${specialDicountEvent}원`);

    if (presentEventPrice !== 0)
      Console.print(`증정 이벤트: -${presentEventPrice}원`);
    if (presentEventPrice === 0)
      Console.print(`증정 이벤트: ${presentEventPrice}원`);
  }

  static printTotalBenefitPrice(benefitPrice) {
    Console.print('<총혜택 금액>');
    if (benefitPrice !== 0) Console.print(`-${benefitPrice}원`);
    if (benefitPrice === 0) Console.print(`${benefitPrice}원`);
  }

  static printAfterDiscount(beforeDisountPrice,discountPrice,presentEvent){
    Console.print('<할인 후 예상 결제 금액>');
    if(presentEvent !== 0)Console.print(`${beforeDisountPrice - discountPrice + 25000}원`)
    if(presentEvent === 0)Console.print(`${beforeDisountPrice - discountPrice}원`)
  }

  static printBedge(bedge){
    Console.print("<12월 이벤트 배지>")
    Console.print(bedge)
  }
}

export default OutputView;
