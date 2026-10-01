import { useState } from 'react'
function TaskForm({ onAdd }) {
  const [input, setInput] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!input.trim()){ alert("Task cannot be empty!"); return }
    onAdd(input)
    setInput('')
  }
  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="What needs to be done?" />
      <button type="submit">+ Add Task</button>
    </form>
  )
}
export default TaskForm