import restaurant from './restaurant/restaurant.js';
class App {
  async run() {
    new restaurant().run();
  }
}

export default App;
