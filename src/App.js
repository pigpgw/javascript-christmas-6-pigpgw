import restaurantController from './restaurant/restaurantController.js';
class App {
  async run() {
    new restaurantController().run();
  }
}

export default App;
