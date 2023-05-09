
//component import
import TaskItem from "./TaskItem";

export default function TaskList({tasks, deleteTask, toggleTask}){
    return(
   <ul className=''> 
{tasks.sort((a, b) => b.id - a.id).map(task =>(
    <TaskItem key={task.id} task={task} deleteTask={deleteTask} toggleTask={toggleTask}/>
))}
   </ul>
    )

}