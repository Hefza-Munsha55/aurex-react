import { useState, useEffect } from 'react'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import './App.css'

function HomePage({ onEnter }) {
  return (
    <div style={{minHeight:'100vh', background:'#0f172a', display:'flex', alignItems:'center', justifyContent:'center', padding:'20px'}}>
      <div style={{maxWidth:'900px', width:'100%', textAlign:'center'}}>
        <div style={{background:'#7c3aed', color:'white', width:'70px', height:'70px', borderRadius:'18px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'28px', fontWeight:'bold', margin:'0 auto 20px'}}>AT</div>
        <h1 style={{fontSize:'48px', color:'white', margin:'0'}}>TaskFlow</h1>
        <p style={{color:'#94a3b8'}}>• Aurex Internship • Hefza Munsha</p>
        <h2 style={{fontSize:'32px', color:'white', marginTop:'30px'}}>Organize your work, Achieve more.</h2>
        <button onClick={onEnter} style={{marginTop:'40px', background:'linear-gradient(90deg,#7c3aed,#ec4899)', color:'white', border:'none', padding:'16px 40px', borderRadius:'30px', fontSize:'18px', fontWeight:'bold', cursor:'pointer'}}>Go to App →</button>
      </div>
    </div>
  )
}

function App() {
  const [page, setPage] = useState('home')
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('taskflow_final')
    return saved? JSON.parse(saved) : [{ id: 1, text: "Design homepage hero section", completed: false }]
  })
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [editId, setEditId] = useState(null)

  useEffect(() => { localStorage.setItem('taskflow_final', JSON.stringify(tasks)) }, [tasks])

  const addTask = (text) => setTasks([{ id: Date.now(), text, completed: false },...tasks])
  const deleteTask = (id) => setTasks(tasks.filter(t => t.id!== id))
  const toggleTask = (id) => setTasks(tasks.map(t => t.id === id? {...t, completed:!t.completed} : t))
  const startEdit = (task) => { const newText = prompt("Edit task:", task.text); if(newText!== null && newText.trim()) setTasks(tasks.map(t => t.id === task.id? {...t, text:newText} : t)) }

  const filtered = tasks.filter(t => {
    const f = filter === 'all' || (filter === 'done'? t.completed :!t.completed)
    return f && t.text.toLowerCase().includes(search.toLowerCase())
  })

  if(page === 'home') return <HomePage onEnter={()=>setPage('app')} />

  return (
    <div className="bg"><div className="main-card">
      <Header showBack={true} onBack={()=>setPage('home')} />
      <div className="stats-row">
        <div className="stat-card"><div className="icon purple">☰</div><div className="stat-info"><span>Total</span><b>{tasks.length}</b></div></div>
        <div className="stat-card"><div className="icon pink">◷</div><div className="stat-info"><span>Pending</span><b>{tasks.filter(t=>!t.completed).length}</b></div></div>
        <div className="stat-card"><div className="icon green">✓</div><div className="stat-info"><span>Done</span><b>{tasks.filter(t=>t.completed).length}</b></div></div>
      </div>
      <TaskForm onAdd={addTask} />
      <div style={{display:'flex', gap:'8px', margin:'15px 0', flexWrap:'wrap'}}>
        <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="🔍 Search..." style={{flex:'1 1 180px', padding:'10px', borderRadius:'10px', border:'1px solid #334155', background:'#0f172a', color:'white'}} />
        <div style={{display:'flex', gap:'8px'}}>
          <button onClick={()=>setFilter('all')} style={{padding:'8px 14px', background: filter==='all'?'#7c3aed':'#334155', color:'white', borderRadius:'8px', border:'none'}}>All</button>
          <button onClick={()=>setFilter('pending')} style={{padding:'8px 14px', background: filter==='pending'?'#ec4899':'#334155', color:'white', borderRadius:'8px', border:'none'}}>Pending</button>
          <button onClick={()=>setFilter('done')} style={{padding:'8px 14px', background: filter==='done'?'#10b981':'#334155', color:'white', borderRadius:'8px', border:'none'}}>Done</button>
        </div>
      </div>
      <div className="tasks-head"><h3>Tasks</h3><span className="badge">{filtered.length} task</span></div>
      <TaskList tasks={filtered} onToggle={toggleTask} onDelete={deleteTask} onEdit={startEdit} />
    </div></div>
  )
}
export default App