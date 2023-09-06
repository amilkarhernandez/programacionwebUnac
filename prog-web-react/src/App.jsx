import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import NavbarDashboard from './components/NavbarDashboard'
import Dashboard from './pages/Dashboard'
import Registro from './pages/Registro'

function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/register' element={<Registro />}/>
    </Routes>
  )
}

export default App
