import { useState, useEffect } from 'react';
import './App.css';

function HomePage({ onEnter }) {
  return (
    <div style={{ minHeight: '100vh', background: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div style={{ maxWidth: '900px', width: '100%', textAlign: 'center' }}>
        <div style={{ background: '#7c3aed', color: 'white', width: '70px', height: '70px', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', fontWeight: 'bold', margin: '0 auto 20px' }}>AT</div>
        <h1 style={{ fontSize: '48px', color: 'white', margin: '0' }}>TaskFlow</h1>
        <p style={{ color: '#94a3b8', marginTop: '5px' }}>• Aurex Internship • Hefza Munsha</p>
        <h2 style={{ fontSize: '32px', color: 'white', marginTop: '30px', lineHeight: '1.3' }}>Organize your work,<br />Achieve more every day.</h2>
        <p style={{ color: '#cbd5e1', maxWidth: '600px', margin: '15px auto', lineHeight: '1.6' }}>A simple, beautiful and powerful task manager built with React. Track your pending tasks, mark done, edit, search and filter - all data saved in your browser.</p>

        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '30px' }}>
          <div style={{ background: '#1e293b', padding: '15px 25px', borderRadius: '12px', color: 'white' }}><b style={{ color: '#a78bfa' }}>✓</b> Fast & Simple</div>
          <div style={{ background: '#1e293b', padding: '15px 25px', borderRadius: '12px', color: 'white' }}><b style={{ color: '#fb7185' }}>✓</b> Local Storage</div>
          <div style={{ background: '#1e293b', padding: '15px 25px', borderRadius: '12px', color: 'white' }}><b style={{ color: '#34d399' }}>✓</b> Filter & Search</div>
        </div>

        <button onClick={onEnter} style={{ marginTop: '40px', background: 'linear-gradient(90deg,#7c3aed,#ec4899)', color: 'white', border: 'none', padding: '16px 40px', borderRadius: '30px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 10px 30px rgba(124,58,237,0.4)' }}>
          Go to App →
        </button>
        <p style={{ color: '#475569', marginTop: '20px', fontSize: '13px' }}>TaskFlow • v2026.1 • Built for Aurex</p>
      </div>
    </div>
  );
}

function TaskApp({ onBack }) {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('taskflow_final');
    return saved ? JSON.parse(saved) : [{ id: 1, text: "Design homepage hero section", completed: false }];
  });
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  useEffect(() => { localStorage.setItem('taskflow_final', JSON.stringify(tasks)); }, [tasks]);

  const filteredTasks = tasks.filter(t => {
    const f = filter === 'all' || (filter === 'done' ? t.completed : !t.completed);
    const s = t.text.toLowerCase().includes(search.toLowerCase());
    return f && s;
  });

  const addTask = () => { if (!input.trim()) return; setTasks([{ id: Date.now(), text: input, completed: false }, ...tasks]); setInput(''); };
  const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id));
  const toggleTask = (id) => setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  const startEdit = (task) => { setEditId(task.id); setEditText(task.text); };
  const saveEdit = () => { if (!editText.trim()) return; setTasks(tasks.map(t => t.id === editId ? { ...t, text: editText } : t)); setEditId(null); };

  return (
    <div className="bg"><div className="main-card">
      <div className="top-bar">
        <div className="left"><div className="at-logo">AT</div><div><h1>TaskFlow</h1><p>• Aurex Internship • Hefza Munsha</p></div></div>
        <button onClick={onBack} style={{ background: '#1e293b', color: 'white', border: 'none', padding: '8px 14px', borderRadius: '8px', cursor: 'pointer' }}>← Home</button>
      </div>
      <div className="stats-row">
        <div className="stat-card"><div className="icon purple">☰</div><div className="stat-info"><span>Total</span><b>{tasks.length}</b></div></div>
        <div className="stat-card"><div className="icon pink">◷</div><div className="stat-info"><span>Pending</span><b>{tasks.filter(t => !t.completed).length}</b></div></div>
        <div className="stat-card"><div className="icon green">✓</div><div className="stat-info"><span>Done</span><b>{tasks.filter(t => t.completed).length}</b></div></div>
      </div>
      <div className="input-row">
        <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && addTask()} placeholder="What needs to be done?" />
        <button onClick={addTask}>+ Add Task</button>
      </div>
      <div style={{display:'flex', gap:'8px', margin:'15px 0', flexWrap:'wrap'}}>
  <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="🔍 Search..." style={{flex:'1 1 180px', padding:'10px', borderRadius:'10px', border:'1px solid #334155', background:'#0f172a', color:'white', minWidth:'0'}} />
  <div style={{display:'flex', gap:'8px', flexWrap:'wrap'}}>
    <button onClick={()=>setFilter('all')} style={{padding:'8px 14px', background: filter==='all'?'#7c3aed':'#334155', color:'white', borderRadius:'8px', border:'none', cursor:'pointer'}}>All</button>
    <button onClick={()=>setFilter('pending')} style={{padding:'8px 14px', background: filter==='pending'?'#ec4899':'#334155', color:'white', borderRadius:'8px', border:'none', cursor:'pointer'}}>Pending</button>
    <button onClick={()=>setFilter('done')} style={{padding:'8px 14px', background: filter==='done'?'#10b981':'#334155', color:'white', borderRadius:'8px', border:'none', cursor:'pointer'}}>Done</button>
  </div>
</div>
      <div className="tasks-head"><h3>Tasks</h3><span className="badge">{filteredTasks.length} task</span></div>
      <div className="list">
        {filteredTasks.map(task => (
          <div key={task.id} className={`task-row ${task.completed ? 'done' : ''}`}>
            <label className="check"><input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} /><span></span></label>
            {editId === task.id ? <div className="edit-inline"><input value={editText} onChange={e => setEditText(e.target.value)} autoFocus /><button onClick={saveEdit}>Save</button></div> : <p>{task.text}</p>}
            <div className="actions"><button onClick={() => startEdit(task)} className="edit-btn">✏️ Edit</button><button onClick={() => deleteTask(task.id)} className="del-btn">🗑️ Delete</button></div>
          </div>
        ))}
      </div>
    </div><p className="footer">TaskFlow • v2026.1 • Built for Aurex Internship • Hefza Munsha</p></div>
  );
}

function App() {
  const [page, setPage] = useState('home');
  return page === 'home' ? <HomePage onEnter={() => setPage('app')} /> : <TaskApp onBack={() => setPage('home')} />;
}
export default App;