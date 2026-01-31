import { useState } from 'react'

function App() {
  const [ task,setTask] = useState("");
  const [todos,setTodos] = useState([]);
  const addtodo=()=>{
    const trimmed = task.trim();
    if(!trimmed) return;
    setTodos((prev)=>[...prev,{id:crypto.randomUUID(),text:trimmed}]);
    setTask("");
  };
  const deletetodo = (id)=>{
    setTodos((prev)=>prev.filter((t)=>t.id !== id));
  }
    return (
      <>
      <h1>Todo List</h1>
      <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} placeholder='Type a task' />
      <button onClick={addtodo}>Add</button>
      <ul>
        {
          todos.map((t)=> (
            <li key={t.id}>{t.text}
            <button onClick={()=>deletetodo(t.id)}>Delete</button>
            </li>
          ))
        }
      </ul>
      </>
    );
}

export default App
