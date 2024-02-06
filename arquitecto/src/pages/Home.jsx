

import { useTypewriter } from 'react-simple-typewriter'
import React from 'react'

import About from './About'
import Project from './Project'
import Contact from './Contact'
import { Stats } from '../components/Stats'

const Home = () => {
    const [texto] = useTypewriter({
        words: ['Alejandro Arevalo', 'drawing with light', 'architecture and photography'],
        loop: 0
    })

    return (
        <>
            <section className='max-container bg-gray-default w-full h-screen dark:bg-corbeau-default dark:text-white justify-center items-center' >
                <div className='flex flex-row justify-center items-center  '>
                    <h1 className='architect'
                    >Architect.
                    </h1>
                    <span className='orange-gradient_text dark:blue-gradient_text font-tertiary font-extrabold text-[5vw]'>
                        {texto}
                    </span>
                </div>
                <div className='space-y-4'>
                    <Stats />

                </div>

            </section>

            <section>
                <About />
                <Project />
                <Contact />
            </section>

        </>

    )
}

export default Home
