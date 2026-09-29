import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('taskflow_final');
    return saved? JSON.parse(saved) : [{ id: 1, text: "Design homepage hero section", completed: false }];
  });
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  useEffect(() => {
    localStorage.setItem('taskflow_final', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([{ id: Date.now(), text: input, completed: false },...tasks]);
    setInput('');
  };
  const deleteTask = (id) => setTasks(tasks.filter(t => t.id!== id));
  const toggleTask = (id) => setTasks(tasks.map(t => t.id === id? {...t, completed:!t.completed } : t));
  const startEdit = (task) => { setEditId(task.id); setEditText(task.text); };
  const saveEdit = () => {
    if (!editText.trim()) return;
    setTasks(tasks.map(t => t.id === editId? {...t, text: editText } : t));
    setEditId(null);
  };

  const total = tasks.length;
  const pending = tasks.filter(t =>!t.completed).length;
  const done = tasks.filter(t => t.completed).length;

  return (
    <div className="bg">
      <div className="main-card">
        <div className="top-bar">
          <div className="left">
            <div className="at-logo">AT</div>
            <div>
              <h1>TaskFlow</h1>
              <p>• Aurex Internship • Hefza Munsha</p>
            </div>
          </div>
          <div className="right-icons">🔔 ⚙️</div>
        </div>

        <div className="stats-row">
          <div className="stat-card">
            <div className="icon purple">☰</div>
            <div className="stat-info"><span>Total</span><b>{total}</b><small>All tasks</small></div>
          </div>
          <div className="stat-card">
            <div className="icon pink">◷</div>
            <div className="stat-info"><span>Pending</span><b>{pending}</b><small>In progress</small></div>
          </div>
          <div className="stat-card">
            <div className="icon green">✓</div>
            <div className="stat-info"><span>Done</span><b>{done}</b><small>Completed</small></div>
          </div>
        </div>

        <div className="input-row">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && addTask()}
            placeholder="What needs to be done?"
          />
          <button onClick={addTask}>+ Add Task</button>
        </div>

        <div className="tasks-head">
          <h3>Tasks</h3>
          <span className="badge">{total} task</span>
        </div>

        <div className="list">
          {tasks.map(task => (
            <div key={task.id} className={`task-row ${task.completed? 'done' : ''}`}>
              <label className="check"><input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} /><span></span></label>
              {editId === task.id? (
                <div className="edit-inline">
                  <input value={editText} onChange={e => setEditText(e.target.value)} autoFocus />
                  <button onClick={saveEdit}>Save</button>
                </div>
              ) : (
                <p>{task.text}</p>
              )}
              <div className="actions">
                <button onClick={() => startEdit(task)} className="edit-btn">✏️ Edit</button>
                <button onClick={() => deleteTask(task.id)} className="del-btn">🗑️ Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="footer">TaskFlow • v2026.1 • Built for Aurex Internship • Hefza Munsha</p>
    </div>
  );
}
export default App;