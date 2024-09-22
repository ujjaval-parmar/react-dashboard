import React from 'react'
import Header from '../components/common/Header'
import Profile from '../components/Profile'
import Notifications from '../components/Notifications'
import Security from '../components/Security'
import ConnectedAccounts from '../components/ConnectedAccounts'

const SettingsPage = () => {
  return (
    <div className='flex-1 relative z-10 overflow-auto min-w-72'>

      <Header title="Settings" />

      <main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>


        <Profile />

        <Notifications />

        <Security />

        <ConnectedAccounts />


      </main>


      </div>
  )
}

export default SettingsPage