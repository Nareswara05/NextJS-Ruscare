import React from 'react'
import DashboardStats from './common-components/statistic-dashboard'
import TableConsultation from './common-components/table-consultation'

const page = () => {
  return (
    <div className='bg-white px-16 py-8 overflow-y-hidden'>
        <DashboardStats/>
        <TableConsultation/>
    </div>
  )
}

export default page