import React from 'react'
import { STATS_DATA } from '../exports/data.js'
import StatsCard from './Cards/StatsCard'

export const Stats = () => {
    return (
        <section className=' max-container bg-orange-default/15 dark:bg-blue-default/5'>
            <div className='max-w-screen flex justify-around mx-auto flex-wrap'>
                {STATS_DATA.map((item) => (
                    <StatsCard
                        key={item.label}
                        iconUrl={item.iconUrl}
                        count={item.count}
                        label={item.label}
                    />
                ))}
            </div>
        </section>
    )
}
