import React, { useState } from 'react'
import SettingSection from './SettingSection'
import { Lock } from 'lucide-react'
import ToggleSwitch from './ToggleSwitch';

const Security = () => {

    const [security, setSecurity] = useState( false);

    return (
        <SettingSection icon={Lock} title="Security">

            <ToggleSwitch   
                label='Two-Factor Authentication'
                isOn={security}
                onToggle={() => setSecurity(!security)}
            />

            <div className='mt-4'>
                <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200 w-full sm:w-auto'>
                    Change Password
                </button>
            </div>


        </SettingSection>
    )
}

export default Security