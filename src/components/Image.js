import React from "react";
import dog from "../images/dog.jpeg";
import caramelo from "../images/caramelo.jpg";
import cat from "../images/cat.jpg";

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [caramelo, dog, cat] };
  }
  render() {
    return (
      <img
        src={this.state.pictures[Math.floor(Math.random() * 3)]}
        className="App-logo"
        alt="logo"
      />
    );
  }
}

export default Image;
