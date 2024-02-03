import React from "react";
import "./Reloj.css";

class Reloj extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString("en-US"),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString("en-US"),
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <div className="container">
          <h1>Hora actual</h1>
          <div className="card">
            <h1>{this.state.time}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Reloj;
