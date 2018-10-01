import React, { Component } from "react";
import ReactDOM from "react-dom";

import QRCodeGenerator from "./QRCodeGenerator";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ""
    };
  }

  handleChange(event) {
    const url = event.target.value || "";
    this.setState({
      url
    });
  }

  render() {
    return (
      <div className="App">
        <h1>QRCode Generator</h1>
        <form>
          <label>
            URL:
            <input
              type="text"
              value={this.state.url}
              onChange={event => this.handleChange(event)}
            />
          </label>
        </form>
        <QRCodeGenerator url={this.state.url} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
