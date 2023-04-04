import { Children, useContext } from "react";
import { AuthContext } from "../Context-API-2/CustomProvider";
import { Navigate } from "react-router-dom";

function ProtectPrivate({ children }) {
  const { isAdmin } = useContext(AuthContext);
  if (isAdmin) {
    return children;
  } else {
    return <Navigate to="/error" />;
  }
}

export default ProtectPrivate;
