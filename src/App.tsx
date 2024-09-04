import "./App.css";
import Consultation from "./Consultation";
import logo from "./logo.png";

function App() {
  return (
    <div>
      <header className="p-4 border-b-2 border-blue-500">
        <img alt="med express logo" src={logo} width={200} />
      </header>

      <Consultation />
    </div>
  );
}

export default App;
