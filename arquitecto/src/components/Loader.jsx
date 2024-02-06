import React from 'react'
import { Html } from '@react-three/drei'

export const Loader = () => {
    return (
        <Html>
            <div className='flex justify-center items-center'>
                <div className='w-100 h-100 border-2 border-opacity-20 border-orange-default border-t-orange-default dark:border-blue-default dark:border-t-blue-default rounded-full animate-spin' />
            </div>

        </Html>

    )
}
