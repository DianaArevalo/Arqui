import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { navLinks } from '../exports/data.js'

const MobileNavbar = ({ setIsMenuOpen }) => {

    const [theme, setTheme] = useState(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return "dark"
        }
        return "light"
    })

    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }

    useEffect(() => {
        if (theme === "dark") {
            document.querySelector('html').classList.add('dark')
        } else {
            document.querySelector('html').classList.remove('dark')
        }
    }, [theme])

    return (
        <div className='w-screen fixed top-0 z-20 lg:hidden'>
            <div className='w-1/2 h-screen flex flex-col p-8 bg-gray-default dark:bg-corbeau-default'>
                <NavLink
                    to="/"
                    className="mb-5 w-10 h-10 rounded-lg bg-white dark:bg-corbeau-default dark:border-[1px] dark:border-blue-default items-center justify-center flex font-bold shadow-md ">
                    <p
                        className="orange-gradient_text"
                    >
                        AAA
                    </p>
                </NavLink>
                <ul className=''>

                    {navLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`menu-item dark:text-white hover:text-orange-default dark:hover:text-blue-default mb-5 ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} mr-10`}
                        >
                            <a href={`${nav.id}`}>
                                {nav.title}
                            </a>
                        </li>

                    ))}


                </ul>

                <button
                    className='btn dark:bg-corbeau-default dark:text-white px-4'
                    onClick={handleChangeTheme}
                >Theme</button>

                <div
                    onClick={() => {
                        setIsMenuOpen(false)
                    }}
                    className='w-screen h-screen bg-black/50 fixed top-0 -z-10'></div>


            </div>


        </div>
    )
}

export default MobileNavbar