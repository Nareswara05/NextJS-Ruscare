import React from 'react'
import DashboardStats from './common-components/statistic-dashboard'
import TableConsultation from './common-components/table-consultation'

const page = () => {
  return (
    <div className='p-16 overflow-scroll'>
        <DashboardStats/>
        <TableConsultation/>
    </div>
  )
}

export default page