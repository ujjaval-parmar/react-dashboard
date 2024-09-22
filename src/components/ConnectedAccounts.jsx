import React, { useState } from 'react'
import SettingSection from './SettingSection'
import { HelpCircle, Plus } from 'lucide-react'



const ConnectedAccounts = () => {

    const [connectedAccounts, setConnectedAccounts] = useState([
        {
            id: 1,
            name: "Google",
            connected: true,
            icon: "https://github.com/burakorkmez/react-admin-dashboard/blob/master/public/google.png?raw=true",
        },
        {
            id: 2,
            name: "Facebook",
            connected: false,
            icon: "https://raw.githubusercontent.com/burakorkmez/react-admin-dashboard/f4c4de45f7651daf20e2959c4bd05e5dc8abdac7/public/facebook.svg",
        },
        {
            id: 3,
            name: "Twitter",
            connected: true,
            icon: "https://github.com/burakorkmez/react-admin-dashboard/blob/master/public/x.png?raw=true",
        },
    ]);





    return (
        <SettingSection icon={HelpCircle} title={"Connected Accounts"}>

            {connectedAccounts.map(account => {
                return (
                    <div key={account.id}
                        className='flex items-center justify-between py-3'
                    >

                        <div className='flex gap-1'>
                            <img src={account.icon} alt="social img" className='size-6 object-cover rounded-full mr-2' />
                            <span className='text-gray-300 text-sm md:text-base'>
                                {account.name}
                            </span>
                        </div>

                        <button
                            className={`px-3 py-1 rounded ${account.connected ? "bg-green-600 hover:bg-green-700" : "bg-gray-600 hover:bg-gray-700"
                                } transition duration-200`}
                            onClick={() => setConnectedAccounts(() => {
                                return connectedAccounts.map(item => {

                                    if (account.name !== item.name) {
                                        return item
                                    }

                                    return { ...account, connected: !account.connected }

                                })

                            })}
                        >
                            {account.connected ? 'Connected' : 'Connect'}
                        </button>


                    </div>
                )
            })}

            <button className='mt-4 flex items-center text-indigo-400 hover:text-indigo-300 transition duration-200'>
                <Plus size={18} className='mr-2' /> Add Account
            </button>


        </SettingSection>
    )
}

export default ConnectedAccounts