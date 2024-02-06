import React from 'react'
import { Link } from 'react-router-dom'
import { ICONS } from '../exports/data'

//p-4 cursor-pointer items-center rounded-full bg-gray-700 mx-1.5 text-xl duration-300

const SocialIcon = () => {
    return <div className='justify-center items-center flex'>
        {ICONS.map((link) => (
            <Link key={link.name} to={link.link}>
                <img
                    src={link.iconUrl}
                    alt={link.name}
                    className='rounded-full w-11 h-11 p-2 cursor-pointer items-center bg-orange-default/35 dark:bg-blue-default dark:text-white mx-1.5 text-xl duration-300'
                />
            </Link>
        ))}
    </div>
}

export default SocialIcon