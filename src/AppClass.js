import React from "react";
import "./App.css";

class AppClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      inOn: false,
      x: null,
      y: null
    };
  }

  componentDidMount() {
    document.title = `clicked ${this.state.click}`;
    window.addEventListener("mousemove", this.handleMouseMove);
  }
  componentDidUpdate() {
    document.title = `clicked ${this.state.click}`;
  }
  componentWillUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove);
  }
  handleMouseMove = event => {
    this.setState({
      x: event.pageX,
      y: event.pageY
    });
  };

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };
  toggleLigt = () => {
    this.setState(prevState => ({
      isOn: !prevState.isOn
    }));
  };

  render() {
    return (
      <>
        <h1>Class Component</h1>
        <button onClick={this.incrementCount}>
          I was clicked {this.state.count}times
        </button>
        <h1>Toggle light</h1>
        <div
          style={{
            height: "50px",
            width: "50px",
            background: this.state.isOn ? "yellow" : "grey"
          }}
          onClick={this.toggleLigt}
        ></div>
        <h2>Mouse Position</h2>
        <p>x Position:{this.state.x}</p>
        <p>y Position:{this.state.y}</p>
      </>
    );
  }
}

export default AppClass;
