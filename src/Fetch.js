import React, { Component } from "react";
import axios from "axios";

export default class Fetch extends Component {
  state = {
    data: [],
  };
  componentWillMount() {
    axios.get("https://api.mocki.io/v1/b043df5a").then((response) => {
      // console.log("response :", response.data);
      this.setState({
        data: response.data,
      });
    });
  }

  render() {
    console.log("this.state.data :", this.state.data);
    return (
      <div>
        {this.state.data &&
          this.state.data.map((city) => <p key={city.name}>{city.name}</p>)}
      </div>
    );
  }
}
