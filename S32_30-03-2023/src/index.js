import ReactDOM from "react-dom";

import App from "./App";
import Header from "./Components/Header";
import Main from "./Components/Main";
import CustomProviderComp from "./Components/Context-API-2/CustomProvider";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <CustomProviderComp>
      <App />
    </CustomProviderComp>
  </BrowserRouter>,
  document.getElementById("root")
);
