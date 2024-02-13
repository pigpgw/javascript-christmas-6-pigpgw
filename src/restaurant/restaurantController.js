import menu from './Menu.js';
class restaurantController {
  async run() {
    menu.메인['크리스마스파스타'] = 100;
    menu.메인['라멘'] = 2000;
    delete menu.메인['크리스마스파스타'];
    console.log(menu);
  }
}

export default restaurantController;
