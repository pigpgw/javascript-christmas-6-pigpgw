import restaurantController from './restaurant/restaurantController';
class App {
  async run() {
    new restaurantController().run();
  }
}

export default App;
