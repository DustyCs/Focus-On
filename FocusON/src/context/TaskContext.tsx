import { createContext, useContext, useState, type ReactNode } from "react"

interface TaskContextProps {
    children: ReactNode
}

type TaskContextType = {
    timer: string;
    setTimer: React.Dispatch<React.SetStateAction<string>>;
    task: string;
    setTask: React.Dispatch<React.SetStateAction<string>>;
}

const TaskContext = createContext<TaskContextType | undefined> (undefined);

export const TaskContextProvider = ({ children }: TaskContextProps) => {
    const [timer, setTimer] = useState('2025-05-30T00:00:00');
    const [task, setTask] = useState('Type Task');

  return (
      <TaskContext.Provider value={{timer, setTimer, task, setTask}}>
          {children}
      </TaskContext.Provider>
  )
}

export const useTaskContext = () => {
    const context = useContext(TaskContext)
    if (!context) {
        throw new Error('useTaskContext must be used within a TaskContextProvider')
    }
    return context
}
