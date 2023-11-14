import { Random, Console } from '@woowacourse/mission-utils';
import inputValidation from './inputValidation.js';
import inputView from './InputView.js';
import OutputView from './OutputView.js';
import Menu from './Menu.js';
class App {

  async run() {
    OutputView.printServiceStart();
    const reserveDay =  await inputView.readDate();

    // const menuItemName = '양송이수프';
    // const menu = Menu.appetizer.find(item => item.name === menuItemName);
    // console.log(menu.price);
    inputView.readMenu();

  }
}

export default App;
