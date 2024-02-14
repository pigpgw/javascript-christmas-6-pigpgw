import Menu from './Menu.js';
class Validator {
  static isValidVisitDay(input) {
    if (!this.isNumber(input)) throw Error('[ERROR]');
    if (!this.isValidDay(input)) throw Error('[ERROR]');
    return true;
  }
  static isNumber(input) {
    return !isNaN(input);
  }
  static isValidDay(input) {
    return input > 0 && input < 32;
  }

  static isValidateOrder(orderList) {
    const userOrderList = orderList.split(',');
    for (const order of userOrderList) {
      const [menuItem, count] = order.split('-');
      if (!this.isExist(menuItem) || isNaN(count)) throw new Error('[ERROR]');
    }
    return true;
  }

  static isExist(item) {
    const menuCategoryKeys = Object.keys(Menu);
    let exist = 0;
    for (let i = 0; menuCategoryKeys.length > i; i += 1) {
      const foodList = Menu[menuCategoryKeys[i]];
      if (Object.keys(foodList).includes(item))  exist += 1;
    }
    return exist === 0 ? false : true;
  }
}

export default Validator;
