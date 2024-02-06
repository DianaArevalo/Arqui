import { Suspense, useState } from 'react'

import { Canvas } from '@react-three/fiber'
import { Loader } from '../components/Loader'
import Edificio from '../models/Edificio'
import HomeInfo from '../components/HomeInfo'
import { Buttons } from '../components/Buttons'


const Project = () => {

    const [isRotating, setIsRotating] = useState(false)
    const [currentStage, setCurrentStage] = useState(1)

    const adjustBuildScreen = () => {
        let screenScale = null
        let screenPosition = [5, -6.7, -43]
        let rotation = [0.1, 4.7, 0]

        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9]
        } else {
            screenScale = [0.6, 0.6, 0.6]
        }
        return [screenScale, screenPosition, rotation]
    }

    const [buildScale, buildPosition, buildRotation] = adjustBuildScreen();


    return (
        <section className='max-container flex flex-col gap-10 md:gap-28 lg:py-10 xl:flex-row w-full h-[50vh] justify-center'>

            <div className='max-container order-1 xl:order-2 flex justify-center items-center'>
                <div className='top-28 left-0 right-0 z-10 flex flex-col items-center justify-center'>
                    {currentStage && <HomeInfo currentStage={currentStage} />}
                    <Buttons />

                </div>
                {/* rounded-[30px] border-[5px] border-orange-default dark:border-blue-default */}

                <Canvas
                    className={`w-full h-screen bg-transparent   ${isRotating ?
                        'cursor-grabbing' : 'cursor-grab'}`}
                    camera={{ near: 0.1, far: 1000 }}>
                    <Suspense fallback={<Loader />}>
                        <directionalLight position={[2, 1, 1]} intensity={2} />
                        <ambientLight intensity={0.5} />
                        <hemisphereLight skyColor='#b1e1ff' groundColor="#000000"
                            intensity={1} />

                        <Edificio
                            position={buildPosition}
                            scale={buildScale}
                            rotation={buildRotation}
                            isRotating={isRotating}
                            setIsRotating={setIsRotating}
                            setCurrentStage={setCurrentStage}
                        />
                    </Suspense>

                </Canvas>
            </div>
        </section>
    )
}

export default Project

