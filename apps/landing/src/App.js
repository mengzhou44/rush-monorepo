import { sum } from "@shared/components";
import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState(sum(4, 5));
  return <div className="App">{result}</div>;
}

export default App;
