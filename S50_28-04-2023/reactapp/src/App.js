import logo from "./logo.svg";
import "./App.css";
import { lazy } from "react";
import Kabir from "./A";
// import B from "./B"
import ErrorBoundary from "./ErrorBoundary";
import Error from "./Error";
//lazy loading
const B = lazy(() => import("./B"));

function App() {
  return (
    <div className="App">
      <ErrorBoundary fallback={<Error />}>
        <Kabir />
        <B />
      </ErrorBoundary>
    </div>
  );
}

export default App;
