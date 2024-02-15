import Menu from './Menu.js';
import {ERROR_MESSAGE} from './Constant.js'
class Validator {
  static isValidVisitDay(input) {
    if (!this.isNumber(input))
      throw Error(ERROR_MESSAGE.INVALID_DATE_INPUT);
    if (!this.isValidDay(input))
      throw Error(ERROR_MESSAGE.INVALID_DATE_INPUT);
    return true;
  }

  static isNumber(input) {
    return !isNaN(input);
  }
  static isValidDay(input) {
    return input > 0 && input < 32;
  }

  static isValidateOrder(orderList) {
    let hasOnlyDrink = false;
    let menuCount = 0;
    const userOrderList = orderList.split(',');
    for (const order of userOrderList) {
      const [menuItem, count] = order.split('-');
      menuCount += Number(count);
      if (!this.isExist(menuItem) || isNaN(count))
        throw new Error(
          ERROR_MESSAGE.INVALID_MENU_LIST_INPUT,
        );
      if (!this.onlyDrink(menuItem)) hasOnlyDrink = true;
    }
    if (!hasOnlyDrink || menuCount > 20)
      throw new Error(ERROR_MESSAGE.INVALID_MENU_LIST_INPUT);
    if (!this.isDuplicated(userOrderList))
      throw new Error(ERROR_MESSAGE.INVALID_MENU_LIST_INPUT);

    return true;
  }

  static isDuplicated(orderList) {
    const orderItems = orderList.map(order => order.split('-')[0]);
    const uniqueItems = new Set(orderItems);
    return uniqueItems.size === orderItems.length;
  }

  static isExist(item) {
    const menuCategoryKeys = Object.keys(Menu);
    let exist = 0;
    for (let i = 0; menuCategoryKeys.length > i; i += 1) {
      const foodList = Menu[menuCategoryKeys[i]];
      if (Object.keys(foodList).includes(item)) exist += 1;
    }
    return exist === 0 ? false : true;
  }

  static onlyDrink(item) {
    for (const category in Menu) {
      if (Object.keys(Menu[category]).includes(item)) {
        return category === '음료';
      }
    }
    return false;
  }
}

export default Validator;
