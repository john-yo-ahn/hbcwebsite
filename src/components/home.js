import * as React from 'react'
import "../styles/App.css"
import logo from "../assets/cropped-logo.jpeg"

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <p></p>
        <p></p>
        <h1>주님의 이름으로 환영합니다!</h1>
      </header>
    </div>
  );
}

export default Home;
