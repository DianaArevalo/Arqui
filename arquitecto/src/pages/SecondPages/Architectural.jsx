import React from 'react'
import ArquitecturalCard from '../../components/Cards/arquitecturalCard'
import { PROJECTS } from '../../exports/data.js'

const Architectural = () => {

    return (
        <section className='max-container bg-gray-default dark:bg-corbeau-default dark:text-white py-16 mx-auto'>
            <h5 className='head-text font-secondary dark:text-white font-semibold text-center mb-10 uppercase'>Projects</h5>
            <div className='lg:shadow-xl'>
                {PROJECTS.map((item) => (
                    <ArquitecturalCard
                        key={item.title}
                        imgUrl={item.imgUrl}
                        title={item.title}
                        description={item.description}
                    />

                ))}

            </div>
        </section>
    )
}

export default Architectural