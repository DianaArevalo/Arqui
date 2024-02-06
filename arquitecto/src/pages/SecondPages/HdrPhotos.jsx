import { motion } from 'framer-motion'
import { fadeIn } from '../../constants/variants'


//images
import presentHDR from '../../assets/photography/mix/HDR.jpeg'
import { PARTONE, PARTTHREE, PARTTWO } from '../../exports/data'
import HdrOneCard from '../../components/Cards/HdrOneCard'
import HdrTwoCard from '../../components/Cards/HdrTwoCard'
import HdrThreeCard from '../../components/Cards/HdrThreeCard'



export const HdrPhotos = () => {
    return (
        <div className='max-container flex flex-col dark:text-white'>
            <h5 className='head-text font-secondary dark:text-white font-semibold text-center mb-10 uppercase'>Photography hdr</h5>
            <motion.div
                variants={fadeIn("right", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className='flex flex-col gap-y-10 '

            >
                <div className='group relative overflow-hidden rounded-xl  '>
                    {/*overlai*/}
                    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 '></div>
                    {/*imagen*/}

                    <img
                        src={presentHDR}
                        alt=""
                        className='group-hover:scale-125 transition-all duration-500 object-cover lg:w-full lg:h-[600px] md:w-[600px] md:[400px]'

                    />
                </div>
            </motion.div>
            <div className='lg:shadow-xl p-10'>
                {/*Results*/}
                <div>
                    <h1 className='head-text orange-gradient_text blue-gradient_text text-center'>Architectural Rhythm</h1>
                </div>

                {/*Part One*/}
                <div className='justify-center items-center md:mb-0 mb-6 lg:leading-normal'>
                    <h5 className='lg:text-4xl text-3xl font-semibold orange-gradient_text dark:blue-gradient_text p-10 text-center head-text'>Result</h5>
                    <p className='gap-10 p-10 text-center lg:text-2xl '>The first image combines the best of each of the following images by improving color and vegetation.</p>
                    <div className='md:flex-row lg:flex w-[600] h-[430]'>
                        {PARTONE.map((item) => (
                            <HdrOneCard
                                key={item.imgUrl}
                                imgUrl={item.imgUrl}
                            />
                        ))}

                    </div>


                </div>
                {/*Part Two*/}
                <div className='justify-center items-center md:mb-0 mb-6 lg:leading-normal'>
                    <h5 className='lg:text-4xl text-3xl font-semibold orange-gradient_text dark:blue-gradient_text p-10 text-center head-text'>Result - 2</h5>
                    <p className='gap-10 p-10 text-center lg:text-2xl'>The combination of images enhances and brings out textures such as brick, brickwork, etc.</p>
                    <div className='md:flex-row lg:flex w-[600] h-[430]'>
                        {PARTTWO.map((image) => (
                            <HdrTwoCard
                                key={image.imgUrl}
                                imgUrl={image.imgUrl}
                            />

                        ))}

                    </div>
                </div>

                {/*Part Three*/}
                <div className='justify-center items-center md:mb-0 mb-6 lg:leading-normal'>
                    <h5 className='lg:text-4xl text-3xl font-semibold orange-gradient_text dark:blue-gradient_text p-10 text-center head-text'>Result - 3</h5>
                    <div className="md:flex-row lg:flex w-[600] h-[430] ">
                        {PARTTHREE.map((ima) => (
                            <HdrThreeCard
                                key={ima.imgUrl}
                                imgUrl={ima.imgUrl}
                            />

                        ))}

                    </div>



                </div>
            </div>
        </div>
    )
}
