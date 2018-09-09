import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      clockStyle : 'basic',
      seconds_degress : 0,
      minutes_degrees : 0,
      hours_degrees : 0,
    }
  }
  componentDidMount() {
    setInterval(this.setDate.bind(this), 1000);
  }

  setDate() {
    const secondHand = document.querySelector(".second-hand");
    const minuteHand = document.querySelector(".minute-hand");
    const hourHand = document.querySelector(".hour-hand");
    const now = new Date();

    const seconds = now.getSeconds();
    this.setState({seconds_degrees : (90 + (seconds / 60) * 360)});
    secondHand.style.transform = `rotate(${this.state.seconds_degrees}deg)`;

    const minutes = now.getMinutes();
      this.setState({minutes_degrees : (90 + (minutes / 60) * 360)});
    minuteHand.style.transform = `rotate(${this.state.minutes_degrees}deg)`;

    const hour = now.getHours();
    this.setState({hours_degrees : (90 + ((hour * 30) + (minutes / 2)))});
    hourHand.style.transform = `rotate(${this.state.hours_degrees}deg)`;

  }

  render() {
      return (
        <div className="container">
          <div className="clock">
            <div className="clock-face">
              <div className="hand hour-hand" />
              <div className="hand minute-hand" />
              <div className="hand second-hand" />
            </div>
          </div>
        </div>
      );

  }
}

export default App;
