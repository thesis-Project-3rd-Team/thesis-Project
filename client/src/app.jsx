import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h1>hello World</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
