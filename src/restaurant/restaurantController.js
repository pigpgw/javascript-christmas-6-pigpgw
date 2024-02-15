import Menu from './Menu.js';
import OutputView from './OutputView.js';
class RestaurantController {
  #totalPrice = 0;
  #totalBenefit = 0;
  #customerReservationDate = 0;
  #customerReservationMenuList;

  constructor() {
    this.main = Menu.메인;
  }

  getCustomerReservationDate(){
    return this.#customerReservationDate
  }

  getCustomerReservationMenuList() {
    return this.#customerReservationMenuList;
  }

  setCustomeReservationDate(date) {
    this.#customerReservationDate = date;
  }

  setCustomerReservationMenuList(menuList) {
    this.#customerReservationMenuList = menuList;
  }

  calculateTotalPrice() {
    const orderdKeys = Object.keys(this.#customerReservationMenuList);
    for (const menu of orderdKeys) {
      this.#totalPrice += this.calculateIndividualMenuPrice(menu);
    }
    if (this.#totalPrice > 10000) {
      this.calculateTotalBenefit();
    }
  }

  getTotalPrice() {
    return this.#totalPrice;
  }

  calculateIndividualMenuPrice(item) {
    for (const category in Menu) {
      const categoryMenuList = Menu[category];
      if (categoryMenuList.hasOwnProperty(item)) {
        // 메뉴 가격 * 메뉴 개수
        // console.log("categoryMenuList[item] this.#customerReservationMenuList[item]" ,categoryMenuList[item],this.#customerReservationMenuList[item])
        return categoryMenuList[item] * this.#customerReservationMenuList[item];
      }
    }
  }

  christmasDayEvent() {
    let discountPrice = 0;
    if (this.#customerReservationDate > 1 && this.#customerReservationDate < 26) discountPrice += 1000 + (this.#customerReservationDate - 1) * 100;
    return discountPrice;
  }

  weekendEvent() {
    let discountPrice = 0;
    if (
      this.#customerReservationDate % 7 === 1 ||
      this.#customerReservationDate % 7 === 2
    ) {
      const saleCategory = Menu['메인'];
      discountPrice += this.calculateDayEventDiscountMoney(saleCategory);
    }
    return discountPrice;
  }

  weekdayEvent() {
    let discountPrice = 0;
    if (
      this.#customerReservationDate % 7 !== 1 &&
      this.#customerReservationDate % 7 !== 2
    ) {
      const saleCategory = Menu['디저트'];
      discountPrice += this.calculateDayEventDiscountMoney(saleCategory);
    }
    return discountPrice;
  }

  calculateDayEventDiscountMoney(saleCategory) {
    let discountPrice = 0;
    for (const food in this.#customerReservationMenuList) {
      if (saleCategory.hasOwnProperty(food))
        discountPrice += 2023 * this.#customerReservationMenuList[food];
    }
    return discountPrice;
  }

  specialDicountEvent() {
    let discountPrice = 0;
    if (this.#customerReservationDate % 7 === 3) discountPrice += 1000;
    return discountPrice;
  }

  // 샴페인
  presentEvent() {
    let discountPrice = 0;
    if (this.#totalPrice > 120000) discountPrice += 25000;
    return discountPrice;
  }

  calculateTotalBenefit() {
    // Christmas Day 이벤트 혜택 계산
    this.#totalBenefit += this.christmasDayEvent();

    // Weekday 이벤트 혜택 계산
    this.#totalBenefit += this.weekdayEvent();

    // Weekend 이벤트 혜택 계산
    this.#totalBenefit += this.weekendEvent();

    this.#totalBenefit += this.specialDicountEvent();

    // 추가 혜택(예: 샴페인 이벤트) 계산
    this.#totalBenefit += this.presentEvent();

    // console.log("calculateTotalBenefit",totalBenefit)
    return this.#totalBenefit;
  }

  getTotalbenefit() {
    return this.#totalBenefit;
  }

  bedgeEvent() {
    if (this.#totalBenefit > 20000) return '산타';
    if (this.#totalBenefit > 10000) return '트리';
    if (this.#totalBenefit > 5000) return '별';
    return '없음';
  }
}

export default RestaurantController;
