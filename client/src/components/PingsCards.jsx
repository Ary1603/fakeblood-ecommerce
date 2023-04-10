import React from 'react'

//IMPORT CSS COMPONENTS STYLES
import '../assets/styles/componentsStyles.css'

export default function PingsCards({ pings }) {
    return (
        <>
            {pings.map((ping, key) => (
                <div className="ping-card" key={key}>
                    <i className='ping-icon'>{ping.icon}</i>
                    <h2 className="ping-title">{ping.ping_title}</h2>
                    <p className="ping-description">{ping.ping_description}</p>
                </div>

            ))}
        </>

    )
}


