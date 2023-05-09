import React, {useState} from 'react'


//Icon imports
import { CheckIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";


function TaskItem({task, deleteTask, toggleTask}) {

    const [isChecked, setIsChecked] = useState(task.checked)

const handleCheckBox =(e)=>{
    setIsChecked(!isChecked)
    toggleTask(task.id);
}

  return (
    <li>
      <div>
        <input
          type="checkbox"
          checked={isChecked}
          name={task.name}
          id={task.id}
          onChange={handleCheckBox}
        />
        <label htmlFor={task.id}>{task.name}</label>
        <p>
          <CheckIcon strokeWidth={2} width={24} height={24} />
        </p>
      </div>
      <div>
        <button aria-label="update Task">
          <PencilIcon width={24} height={24} />
        </button>
        <button aria-label="delete Task" onClick={()=>deleteTask(task.id)}>
          <TrashIcon width={24} height={24} />
        </button>
      </div>
    </li>
  );
}

export default TaskItem