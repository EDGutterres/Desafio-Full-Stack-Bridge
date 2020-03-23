import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", playerName: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log("making request");
    fetch("/calculate", {
      method: "POST",
      cache: "no-cache",
      headers: {
        content_type: "application/json"
      },
      body: JSON.stringify(this.state.value)
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({ playerName: json[0] });
      });
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          action="http://localhost:5000/calculate"
          method="get"
        >
          <label>
            Insira um número:<br/>
            <input type="text" name="number" /><br/>
            <input
              type="submit"
              onChange={this.handleChange}
              value={this.state.value}
            />
          </label>
        </form>
        <h3> Lista de divisores: {this.state.playerName} </h3>
      </div>
    );
  }
}

export default App;
