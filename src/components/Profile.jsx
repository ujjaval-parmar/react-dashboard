import React from 'react'
import SettingSection from './SettingSection'
import { UserIcon } from 'lucide-react'

const Profile = () => {
    return (
        <SettingSection icon={UserIcon} title="Profile">

            <div className='flex  flex-col gap-3 sm:flex-row items-center mb-6 justify-between'>



                <div className='flex items-center sm:gap-2'>
                    <img src="https://avatars.githubusercontent.com/u/154329143?v=4" alt="profile"
                        className='rounded-full w-12 h-12 sm:w-20 sm:h-20 object-cover mr-4'
                    />
                    <div>
                        <h3 className='text-lg font-semibold text-gray-100 '>Ujjaval Parmar</h3>
                        <p className='text-gray-400  w-20 sm:w-full truncate'>ujjavalparmar32@gmail.com</p>
                    </div>
                </div>

                <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200 w-full sm:w-auto'>
                    Edit Profile
                </button>

            </div>

        </SettingSection>
    )
}

export default Profile