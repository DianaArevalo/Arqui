import React from 'react'

const StatsCard = ({ iconUrl, count, label }) => {
    return (
        <div className='min-w-48  flex flex-col items-center justify-center '>
            <div className='w-14 h-14 justify-center items-center bg-white rounded-full dark:bg-gray-default'>
                <img src={iconUrl} alt={label} className='w-8 mt-4 ml-2' />
            </div>

            <p className='text-xl md:text-2xl font-secondary mt-4'>{count}</p>
            <span className='text-sm md:text-md mt-1'>{label}</span>
        </div>
    )
}

export default StatsCard
