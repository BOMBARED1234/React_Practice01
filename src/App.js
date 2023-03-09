import "./App.css";
import { userState, useState } from "react";
import { User } from "./User";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const newTodoList = [...todoList, newTask];
    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <div className="addTask"></div>
      <input onChange={handleChange} />
      <button onClick={addTask}>Add Task</button>
      <div className="list">
        {todoList.map((task) => {
          return (
            <div>
              <h1>{task}</h1>
              <button>x</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
