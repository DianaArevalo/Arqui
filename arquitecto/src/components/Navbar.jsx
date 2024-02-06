import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../exports/data.js'
import { RiMenu4Line, RiCloseFill } from "react-icons/ri"


//assets

//import x from '../assets/x.svg';
//import menu from '../assets/menu.svg';
import MobileNavbar from './MobileNavbar.jsx';



export const Navbar = () => {
    // const [toogle, setToogle] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(true)

    const toogleMenu = () => {
        setIsMenuOpen(!isMenuOpen)

    }
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
        <>

            {isMenuOpen && <MobileNavbar setIsMenuOpen={setIsMenuOpen} />}
            <header className=" bg-gray-default dark:bg-corbeau-default ">
                <nav className=''>
                    <div className='header'>
                        <NavLink
                            to="/"
                            className="flex w-10 h-10 rounded-lg bg-white dark:bg-corbeau-default dark:border-[1px] dark:border-blue-default items-center justify-center font-bold shadow-md ">
                            <p
                                className="orange-gradient_text"
                            >
                                AAA
                            </p>
                        </NavLink>

                        <ul className='hidden md:flex md:gap-14'>

                            {navLinks.map((nav, index) => (
                                <li
                                    key={nav.id}
                                    className={`menu-item dark:text-white hover:text-orange-default dark:hover:text-blue-default ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} mr-10`}
                                >
                                    <a href={`${nav.id}`}>
                                        {nav.title}
                                    </a>
                                </li>

                            ))}
                        </ul>

                        <button
                            className='hidden md:flex btn dark:bg-corbeau-default dark:text-white px-4'
                            onClick={handleChangeTheme}
                        >Theme</button>

                        <button
                            onClick={() => { setIsMenuOpen(true) }}
                            className='w-10 h-10 bg-orange-default dark:bg-blue-default text-2xl text-white flex items-center justify-center rounded-lg md:hidden z-50'
                        >
                            {isMenuOpen ? <RiCloseFill /> : <RiMenu4Line />}


                        </button>
                    </div>
                </nav>
            </header>
        </>
    )
}


{/* <nav className=' h-full flex py-6 justify-end items-center navbar hover:text-orange-default dark:text-white dark:hover:text-blue-default '>
                <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                    {navLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`font-tertiary cursor-pointer text-[16px]${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} mr-10`}
                        >
                            <a href={`${nav.id}`}>
                                {nav.title}
                            </a>
                        </li>

                    ))}

                </ul>

                <div className='sm:hidden flex flex-1 justify-end items-center dark:bg-transparent dark:rounded-full dark:border-[1px] dark:border-blue-default dark:p-2 '>
                    <img src={toogle ? x : menu}
                        alt="menu"
                        className="w-[28px] object-contain dark:text-white"
                        onClick={() => setToogle((prev) => !prev)}
                    />
                    <div className={`${toogle ? 'flex' : 'hidden'} p-6 bg-white dark:bg-corbeau-default absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                        <ul className='list-none flex flex-col justify-end items-center flex-1'>
                            {navLinks.map((nav, index) => (
                                <li
                                    key={nav.id}
                                    className={`font-tertiary cursor-pointer text-[16px]${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} mr-10`}
                                >
                                    <a href={`${nav.id}`}>
                                        {nav.title}
                                    </a>
                                </li>

                            ))}

                        </ul>

                    </div>

                </div>
            </nav> */}