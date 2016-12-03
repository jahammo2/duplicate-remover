import Emails from '../Emails';

class Home {
  run() {
    new Emails().registerEvents();
  }
}

export default Home;
