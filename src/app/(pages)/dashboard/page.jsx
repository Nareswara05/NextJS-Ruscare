import React from 'react'
import DashboardStats from './common-components/statistic-dashboard'
import TableConsultation from './common-components/table-consultation'

const Dashboard = () => {
  return (
    <div className='bg-white px-16 py-8 overflow-y-hidden'>
        <DashboardStats/>
    </div>
  )
}

export default Dashboard