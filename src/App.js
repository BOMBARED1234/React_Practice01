import "./App.css";
import { userState, useState } from "react";
import { User } from "./User";
import { Task } from "./Task";
import { Text } from "./Text";

function App() {
  const [showText, setShowText] = useState(false);

  return (
    <div className="App">
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        Show Text
      </button>
      {showText && <Text />}
    </div>
  );
}

export default App;
