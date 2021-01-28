import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import Header from "./layout/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading",
    };
  }

  componentDidMount() {
    fetch("api")
      .then((response) => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then((data) => {
        this.setState(() => {
          return {
            data,
            loaded: true,
          };
        });
      });
  }

  render() {
    return (
      <Fragment>
        <Header />
        <ul>
          {this.state.data.map((note) => {
            return (
              <li key={note.id}>
                {note.question} - {note.answer}
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);
