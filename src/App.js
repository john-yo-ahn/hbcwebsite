import logo from './logo.svg';
import './styles/App.css';

import Navbar from './components/navbar';
import Home from "./components/home"
import Greeting from "./components/greeting"
import About from "./components/about";
import Donations from "./components/donations"
import Sermon from "./components/sermon"
import Contact from "./components/contact"

function App() {
  return (
    <div>
      <Navbar />
      {/* <div>
        <div>
          <Home />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Greeting />
        </div>
        <div>
          <Sermon />
        </div>
        <div>
          <Donations />
        </div>
        <div>
          <Contact />
        </div>
      </div> */}
    </div>
  );
}

export default App;
