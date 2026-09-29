import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input, done: false }]);
    setInput("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f5f7fb", fontFamily: "Inter, sans-serif", padding: "40px" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto", background: "white", borderRadius: "16px", padding: "30px", boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}>
        <h1 style={{ textAlign: "center", color: "#5b5bff" }}>Aurex - TaskFlow ✨</h1>
        <p style={{ textAlign: "center", color: "#888" }}>{tasks.filter(t => !t.done).length} tasks pending</p>

        <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && addTask()}
            placeholder="Add a new task..."
            style={{ flex: 1, padding: "12px 16px", borderRadius: "10px", border: "1px solid #ddd", outline: "none" }}
          />
          <button onClick={addTask} style={{ padding: "12px 20px", borderRadius: "10px", border: "none", background: "#5b5bff", color: "white", cursor: "pointer", fontWeight: "bold" }}>Add</button>
        </div>

        <div style={{ marginTop: "25px", display: "flex", flexDirection: "column", gap: "10px" }}>
          {tasks.map(task => (
            <div key={task.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 15px", borderRadius: "10px", background: task.done ? "#eef0ff" : "#f9f9ff", border: "1px solid #eee" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <input type="checkbox" checked={task.done} onChange={() => toggleTask(task.id)} />
                <span style={{ textDecoration: task.done ? "line-through" : "none", color: task.done ? "#999" : "#333" }}>{task.text}</span>
              </div>
              <button onClick={() => deleteTask(task.id)} style={{ background: "none", border: "none", cursor: "pointer", color: "#ff5b5b" }}>✕</button>
            </div>
          ))}
          {tasks.length === 0 && <p style={{ textAlign: "center", color: "#aaa", marginTop: "20px" }}>No tasks yet. Add one! 🚀</p>}
        </div>
      </div>
    </div>
  );
}

export default App;