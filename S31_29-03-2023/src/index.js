import ReactDOM from "react-dom";

import App from "./App";
import Header from "./Components/Header";
import Main from "./Components/Main";
import CustomProviderComp from "./Components/Context-API-2/CustomProvider";

ReactDOM.render(
  <CustomProviderComp>
    <App />
  </CustomProviderComp>,
  document.getElementById("root")
);
