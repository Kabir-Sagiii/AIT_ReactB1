import { Link } from "react-router-dom";
import "./Nav.css";
function Nav(props) {
  return (
    <div className="nav">
      <div className="title">
        <h2>React with Redux</h2>
      </div>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/redux">Redux Basic</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/cart">Add-to-Cart</Link>
      </div>
    </div>
  );
}

export default Nav;
