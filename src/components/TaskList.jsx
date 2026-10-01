import TaskItem from './TaskItem'
function TaskList({ tasks, onToggle, onDelete, onEdit }) {
  if(tasks.length === 0) return <p style={{color:'#94a3b8', textAlign:'center', padding:'20px'}}>No tasks found</p>
  return (
    <div>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  )
}
export default TaskList