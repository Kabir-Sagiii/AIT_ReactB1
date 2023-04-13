import { Component } from "react";

class ClassState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product1: "Laptop",
      product2: "Mobile",
      product3: "Tv",
    };
  }

  render() {
    return (
      <div>
        <h2>Class Component with State</h2>
        <ol>
          <li>{this.state.product1}</li>
          <li>{this.state.product2}</li>
          <li>{this.state.product3}</li>
        </ol>
      </div>
    );
  }
}
export default ClassState;
