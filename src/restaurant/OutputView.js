import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './Constant.js';

const OutputView = {
  printGreeting() {
    Console.print(MESSAGE.GREETING);
  },

  printMenu(clientOrderList) {
    Console.print(MESSAGE.ORDER_LIST);
    const menuKeys = Object.keys(clientOrderList);
    for (const menu of menuKeys) {
      Console.print(`${menu} ${clientOrderList[menu]}개`);
    }
  },

  printPreviewMessage(date){
    Console.print(`12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`)
  },

  printErrorMessage(error) {
    Console.print(`${error.message}`);
  },

  printBeforeDiscountPrice(price) {
    Console.print(MESSAGE.BEFORE_DISCOUNT);
    Console.print(`${price}원`);
  },
  printPresentEvent(price) {
    Console.print(MESSAGE.SERVICE_MENU);
    if (price !== 0) Console.print('샴페인 1개');
    if (price === 0) Console.print(MESSAGE.NO);
  },
  printTotalEventResult(
    dDayEventPrice,
    weekDayPrice,
    weekendDayEventPrice,
    specialDicountEvent,
    presentEventPrice,
  ) {
    Console.print(MESSAGE.BENEFITS);
    if (
      dDayEventPrice === 0 &&
      weekDayPrice === 0 &&
      weekendDayEventPrice === 0 &&
      specialDicountEvent === 0 &&
      presentEventPrice === 0
    ) {
      Console.print(MESSAGE.NO);
    } else {
      if (dDayEventPrice !== 0)
        Console.print(`크리스마스 디데이 할인: -${dDayEventPrice}원`);
      if (dDayEventPrice === 0)
        Console.print(`크리스마스 디데이 할인: ${dDayEventPrice}원`);
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
  },

  printTotalBenefitPrice(benefitPrice) {
    Console.print(MESSAGE.BENEFITS_TOTAL_AMOUNT);
    if (benefitPrice !== 0) Console.print(`-${benefitPrice}원`);
    if (benefitPrice === 0) Console.print(`${benefitPrice}원`);
  },

  printAfterDiscount(beforeDisountPrice, discountPrice, presentEvent) {
    Console.print(MESSAGE.AFTER_DISCOUNT);
    if (presentEvent !== 0)
      Console.print(`${beforeDisountPrice - discountPrice + 25000}원`);
    if (presentEvent === 0)
      Console.print(`${beforeDisountPrice - discountPrice}원`);
  },

  printBedge(bedge) {
    Console.print(MESSAGE.AFTER_DISCOUNT);
    Console.print(bedge);
  },
};

export default OutputView;
