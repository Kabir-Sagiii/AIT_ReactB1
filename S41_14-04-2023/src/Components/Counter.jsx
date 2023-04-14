import { Component } from "react";
class Counter extends Component {
  static getDerivedStateFromProps(state, props) {
    console.log("getDerivedStateFromProps is Called");
    return null;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount is called");
  }
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor Called");
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate is called");
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate is called");
    return null;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate is Called");
  }

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  componentDidMount() {
    console.log("componentDidMount is called");
  }

  render() {
    return (
      <div>
        {console.log("Render is Called")}
        <h2>Count Value :{this.state.count} </h2>
        <button onClick={this.increaseCount}>Increase Count</button>&nbsp;&nbsp;
        <button
          onClick={() => {
            this.setState({
              count: this.state.count - 1,
            });
          }}
        >
          Decrease Count
        </button>
      </div>
    );
  }
}

export default Counter;
