import React, { useState } from 'react'
import SettingSection from './SettingSection'
import { BellRing } from 'lucide-react'
import ToggleSwitch from './ToggleSwitch';


const Notifications = () => {

    const [notifications, setNotifications] = useState({
        push: false,
        email: true,
        sms: true
    });




    return (
        <SettingSection icon={BellRing} title="Notification">

            <div className='flex flex-col gap-3'>


                <ToggleSwitch
                    label='Push Notification'
                    isOn={notifications.push}
                    onToggle={() => setNotifications(() => ({ ...notifications, push: !notifications.push }))}
                />

                <ToggleSwitch
                    label='Email'
                    isOn={notifications.email}
                    onToggle={() => setNotifications(() => ({ ...notifications, email: !notifications.email }))}
                />

                <ToggleSwitch
                    label='SMS'
                    isOn={notifications.sms}
                    onToggle={() => setNotifications(() => ({ ...notifications, sms: !notifications.sms }))}
                />

            </div>

        </SettingSection>
    )
}

export default Notifications