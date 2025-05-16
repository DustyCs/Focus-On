
import { useState } from "react";
import { useTaskContext } from "../context/TaskContext"

export const UserTask = () => {

  const [active, setActive] = useState(true);
  const { task, setTask } = useTaskContext();
  console.log(task);
  return (
    <>
      {active ?
        (
          <>
            <form onSubmit={
              (e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                // setTask(e.target.task.value); // ts error
                const form = e.currentTarget;
                setTask(form.task.value);
                setActive(false);
                console.log(task);
              }
            }>
              <input name="task" type="text" placeholder={task}/>
            </form>
          </>
        ) 
        : 
        <p onClick={() => setActive(true)}>{task}</p>
      }
    </>
  )
}
