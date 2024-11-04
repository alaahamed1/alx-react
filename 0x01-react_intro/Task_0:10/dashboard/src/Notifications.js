import React, { useState } from 'react';
import './Notifications.css'

export function getLatestNotification() {
    return `<strong>Urgent requirement</strong> - complete by EOD`;
}

function Notifications() {
    const [isOpen, setIsOpen] = useState(true);
    function handleClose() {
        setIsOpen(false);
        console.log('Close button has been clicked')
    }

    return (
        <div className='notification-box'>
            {isOpen && <><p>Here is the list of notifications</p>
                <ul>
                    <li data-priority='default'>New course available</li>
                    <li data-priority='urgent'>New resume available</li>
                    <li
                        data-priority='urgent'
                        dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
                    ></li>
                </ul>
            </>}
            <button style={{ position: 'absolute', top: '8px', right: '8px', border: 'none', fontSize: '20px' }} onClick={handleClose}>x</button>
        </div>
    );
}

export default Notifications;
