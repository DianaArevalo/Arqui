import React from 'react'
import { Link } from 'react-router-dom'

export const Buttons = () => {
    return (
        <div className='max-w-screen flex flex-col gap-12 p-10 lg:flex-row lg:items-center '>
            <Link className='btn' to="/hdr">HDR</Link>
            <Link className='btn' to="/urban">Photography Urban </Link>
            <Link className='btn' to="/architectural">Arquitectural Projects</Link>

        </div>
    )
}
