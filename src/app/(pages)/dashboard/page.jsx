"use client"

import React, { useEffect, useState } from 'react'
import DashboardStats from './common-components/statistic-dashboard'
import TableConsultation from './common-components/table-consultation'
import { useUser } from '@/app/lib/hooks/use-user';
import EmailPopup from './components/popup-email';

const Dashboard = () => {
  const { user, loading } = useUser();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    let intervalId;

    if (user && user.email === null) {
      setShowPopup(true);
      intervalId = setInterval(() => {
        setShowPopup(true);
      }, 5 * 60 * 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [user]);

  if (loading) return <div>Loading...</div>;
  return (
    <div className='bg-white px-16 py-8 overflow-y-hidden'>
      {showPopup && user && user.email === null && (
        <EmailPopup userId={user.id} closePopup={() => setShowPopup(false)} />
      )}
      <DashboardStats />
    </div>
  )
}

export default Dashboard