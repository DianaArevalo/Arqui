import React from 'react'
import ItemsContainer from './ItemsContainer'
import SocialIcon from './SocialIcon'
import { ICONS } from '../exports/data.js'


const Footer = () => {
    return (
        <footer className='footer bg-gray-default dark:bg-corbeau-default'>
            <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 bg-orange-default/15 dark:bg-blue-default/5 py-7'>
                <h1 className='lg:text-4xl text-3xl head-text dark:text-white md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'>
                    <span className='orange-gradient_text dark:blue-gradient_text'> Bogotá, </span> Colombia
                </h1>
                <div className='items-center'>
                    <a
                        href="mailto:aarevaloar@unbosque.edu"
                        className='dark:text-white lg:text-3xl text-2xl sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none'
                    >
                        aarevaloar@unbosque.edu
                    </a>
                </div>
            </div>
            <ItemsContainer />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 dark:text-white text-sm pb-10'>
                <span>© 2024 <strong>Alejandro Arevalo</strong> All rights reserved</span>
                <span>Terms Privacy Policy</span>
                <SocialIcon Icons={ICONS} />
            </div>
        </footer>
    )
}

export default Footer
