import logo from "./logo.svg";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { Movies } from "./components/Movies";

function App() {
  return (
    <div className="container">
      <Movies />
    </div>
  );
}

export default App;
