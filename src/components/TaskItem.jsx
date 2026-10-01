function TaskItem({ task, onToggle, onDelete, onEdit }) {
  return (
    <div style={{background:'#1e293b', border:'1px solid #334155', borderRadius:'14px', padding:'14px', display:'flex', alignItems:'center', gap:'12px', marginBottom:'10px'}}>
      <input type="checkbox" checked={task.completed} onChange={()=>onToggle(task.id)} style={{width:'20px', height:'20px'}} />
      <p style={{flex:1, color: task.completed? '#64748b':'white', textDecoration: task.completed? 'line-through':'none', fontSize:'14px', margin:0}}>{task.text}</p>
      <div style={{display:'flex', gap:'6px'}}>
        <button onClick={()=>onEdit(task)} style={{background:'#334155', color:'white', border:'none', padding:'6px 10px', borderRadius:'8px', fontSize:'12px', cursor:'pointer'}}>✏️ Edit</button>
        <button onClick={()=>onDelete(task.id)} style={{background:'#334155', color:'white', border:'none', padding:'6px 10px', borderRadius:'8px', fontSize:'12px', cursor:'pointer'}}>🗑️ Delete</button>
      </div>
    </div>
  )
}
export default TaskItem