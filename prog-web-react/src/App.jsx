import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import NavbarDashboard from './components/NavbarDashboard'

function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/dashboard' element={<NavbarDashboard />}/>
    </Routes>
  )
}

export default App
