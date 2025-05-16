import './styles/App.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'
import { TaskContextProvider } from './context/TaskContext'

function App() {

  return (
   <BrowserRouter>    
      <TaskContextProvider>
          <AppRoutes />
      </TaskContextProvider>
   </BrowserRouter>
  )
}

export default App
