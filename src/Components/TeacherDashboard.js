import React from 'react'
import './TeacherDashboard.css'
import DataTable from './DataTable'
import './DataTable.css';


function TeacherDashboard() {
  return (
    <div className='teachBg'>

      <h1>Welcome to TeacherDashboard</h1>
      <DataTable />
    </div>
  )
}

export default TeacherDashboard
