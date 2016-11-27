const app = document.getElementById('app');
import Home from './Home';

app.innerHTML = new Home().render();
