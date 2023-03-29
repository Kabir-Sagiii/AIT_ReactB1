import { useContext } from "react";
import { AuthContext } from "../Context-API-2/CustomProvider";
import "./Nav.css";
function Nav(props) {
  const { logout, isloggedin } = useContext(AuthContext);
  return (
    <div className="nav">
      <div className="title">
        <h2>React API Call</h2>
      </div>
      <div className="menu">
        <a href="#">Home</a>
        <a href="#">Counter</a>
        <a href="#">Profile</a>
        <a href="">Support</a>
        {isloggedin ? (
          <button
            onClick={() => {
              logout();
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
