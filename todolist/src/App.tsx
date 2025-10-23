import { useState } from "react";
import AddItem from "./components/addItem";

function App() {
  const [todos, setTodos] = useState<string[]>([]);


  const addItem = (newItem: string) => {
    setTodos([...todos, newItem]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddItem addItem={addItem}/>
      <ul>
        {
          todos.map((todo, index) =>
            <li key={index}>{todo}</li>
          )
        }
      </ul>
    </div>
  );
}

export default App;