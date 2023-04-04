import { useContext } from "react";
import { AuthContext } from "../Context-API-2/CustomProvider";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";
function Nav(props) {
  const navigate = useNavigate();
  const { logout, isloggedin, changeStatusOfAdmin } = useContext(AuthContext);
  return (
    <div className="nav">
      <div className="title">
        <h2>React API Call</h2>
      </div>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/support">Support</Link>
        {isloggedin ? (
          <button
            onClick={() => {
              logout();
              changeStatusOfAdmin(false);
              navigate("/");
            }}
          >
            Logout
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default Nav;
