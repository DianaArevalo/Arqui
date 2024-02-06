import React from 'react'
import { Link } from 'react-router-dom'

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='btn'>
            {btnText}
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center bg-transparent rounded-[30px] border-[5px] border-orange-default dark:border-blue-default dark:text-white py-4 px-8 mx-5'>
            In my architectural career, I stand out for my unique approach to design and execution of projects.
            <span className='font-secondary font-extrabold '>Discover</span> my commitment and quality in some of my works.</h1>
    ),
    2: (
        <InfoBox
            text='The best architecture for the environment is the one that is not built.'
            link='/urban'
            btnText='Photography Nature and Urban'
        />
    ),
    3: (
        <InfoBox
            text="Effect HDR about photography"
            link='/hdr'
            btnText='HDR'
        />

    ),
    4: (
        <InfoBox
            text='I stand out for my unique approach to design and execution of projects.'
            link='/architectural'
            btnText='architectural projects'
        />
    ),
}



const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null
}

export default HomeInfo;
