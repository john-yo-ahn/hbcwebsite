import * as React from "react";
import "../styles/App.css";

function Sermon() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <h1>Sermon</h1>
        {/* <iframe
          style="max-width: 480px"
          width="100%"
          height="360"
          src="http://www.youtube.com/embed?max-results=1&controls=0&showinfo=0&rel=0&listType=user_uploads&list=UCnjQ70k5-nBh-kDZxMkDpxA"
          frameborder="0"
          allowfullscreen
        ></iframe> */}
        <p></p>
        <p></p>
        <p></p>
        <iframe
          width="40%"
          height="500"
          src="https://www.youtube.com/embed/+lastest?list=UUnjQ70k5-nBh-kDZxMkDpxA"
          frameborder="0"
          allowfullscreen
        ></iframe>
        <br />

        <br />
      </header>
    </div>
  );
}

export default Sermon;
