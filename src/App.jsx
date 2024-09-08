import { Link } from "react-router-dom";
import { Advice } from "./components/Advice";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Advice />
      <h1 className="attribution">
        Responsive Advice Generator by{" "}
        <Link
          to="https://abdelrahmanhassanalii.github.io/card/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Abderahman Hassan
        </Link>
      </h1>
    </div>
  );
}

export default App;
