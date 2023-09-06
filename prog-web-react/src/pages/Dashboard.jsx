import React from 'react'
import Navbar from '../components/NavbarDashboard'
import FormularioRegistro from '../components/FormularioRegistro'
import ListUsers from '../components/ListUsers'

const Dashboard = () => {
  return (
    <div className='w-screen h-screen'>
      <Navbar />
      <div>
        {/* <FormularioRegistro /> */}
        <ListUsers />
      </div>
    </div>
  )
}

export default Dashboard
