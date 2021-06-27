import * as React from "react";
import "../styles/App.css";
import "../styles/navbar.css"


import Home from "../components/home"
import About from "../components/about"
import Greeting from "../components/greeting"
import Sermon from "../components/sermon"
import Donations from "../components/donations"
import Contact from "../components/contact"
// import Home from "./components/home";
// import Greeting from "./components/greeting";
// import About from "./components/about";
// import Donations from "./components/donations";
// import Sermon from "./components/sermon";
// import Contact from "./components/contact";

function Navbar() {
  return (
    <body>
      <div>
        <div class="text-responsive">
          <nav
            id="navbar-example2"
            class="navbar navbar-light fixed-top bg-light px-.5"
          >
            <a class="navbar-brand" href="#Home">
              Holy City Bethesda Church
            </a>
            <ul class="nav nav-pills">
              <li class="nav-item">
                <a class="nav-link" href="#About">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Greeting">
                  Greeting
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Sermon">
                  Sermon
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Donations">
                  Donations
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div
          data-bs-spy="scroll"
          data-bs-target="#navbar-example2"
          data-bs-offset="0"
          class="scrollspy-example"
          tabindex="0"
        >
          <div id="Home">
            <Home />
          </div>
          <div id="About">
            <About />
          </div>
          <div id="Greeting">
            <Greeting />
          </div>
          <div id="Sermon">
            <Sermon />
          </div>
          <div id="Donations">
            <Donations />
          </div>
          <div id="Contact">
            <Contact />
          </div>
        </div>
      </div>
    </body>
  );
}

export default Navbar;
