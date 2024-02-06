// construcciones de Rogelio Salmona
import { SwipeCarousel } from '../../components/SwipeCarousel'

//usaquen
import u1 from '../../assets/photography/urban/u1.png'
import u2 from '../../assets/photography/urban/u2.png'
import u3 from '../../assets/photography/urban/u3.png'
import u4 from '../../assets/photography/urban/u4.png'
import u5 from '../../assets/photography/urban/u5.png'
import u6 from '../../assets/photography/urban/u6.png'
import u7 from '../../assets/photography/urban/u7.png'
import u8 from '../../assets/photography/urban/u8.png'
import u9 from '../../assets/photography/urban/u9.png'
import u10 from '../../assets/photography/urban/u10.png'
import u11 from '../../assets/photography/urban/u11.png'
import u12 from '../../assets/photography/urban/u12.png'
import u13 from '../../assets/photography/urban/u13.png'
import u14 from '../../assets/photography/urban/u14.png'
import u15 from '../../assets/photography/urban/u15.png'
import u16 from '../../assets/photography/urban/u16.png'
import u17 from '../../assets/photography/urban/u17.png'
import u18 from '../../assets/photography/urban/u18.png'
import u19 from '../../assets/photography/urban/u19.png'
import u20 from '../../assets/photography/urban/u20.png'
import u21 from '../../assets/photography/urban/u21.png'
import u22 from '../../assets/photography/urban/u22.png'
import u23 from '../../assets/photography/urban/u23.png'
import u24 from '../../assets/photography/urban/u24.png'
import u25 from '../../assets/photography/urban/u25.png'

//nature
import { NATURE } from "../../exports/data"
import UrbanCard from "../../components/Cards/UrbanCard"


//monumental work

import o1 from '../../assets/photography/urban/o1.png'
import o2 from '../../assets/photography/urban/o2.png'
import o3 from '../../assets/photography/urban/o3.png'
import o4 from '../../assets/photography/urban/o4.png'
import o5 from '../../assets/photography/urban/o5.png'
import o6 from '../../assets/photography/urban/o6.png'
import o7 from '../../assets/photography/urban/o7.png'


//Rogelio Salmona Biography

import rogelioSalmona from '../../assets/photography/urban/RogelioSalmona.jpg'
import { motion } from 'framer-motion'
import { fadeIn } from '../../constants/variants'




const Urban = () => {

    //

    return (
        <div className=' bg-gray-default dark:bg-corbeau-default dark:text-white justify-center items-center  '>
            <div className="max-container ">
                <div>
                    <h1 className="lg:text-4xl text-3xl font-semibold orange-gradient_text dark:blue-gradient_text p-10 text-center">
                        The best architecture for the environment is the one that is not built.
                    </h1>
                    <h5 className="gap-10 p-10 text-center lg:text-2xl">
                        In this section you will find the best images of our planet without human intervention and others intervened in the best way.
                    </h5>
                    <div className="md:flex-row lg:flex w-[600] h-[430]">
                        {/*NATURE*/}
                        {NATURE.map((item) => (
                            <UrbanCard
                                key={item.imgUrl}
                                imgUrl={item.imgUrl}

                            />
                        ))}

                    </div>

                </div>

                <div className="p-10 md:flex sm:flex-row">
                    {/*Biografia rogelio Salmona*/}
                    <div className="p-10">
                        <p className="lg:text-3xl text-2xl head-text font-semibold orange-gradient_text dark:blue-gradient_text text-center items-center lg:p-20">

                            (Paris, 1929 - Bogotá, 2007) Colombian architect. He interrupted his studies to work in Le Corbusier's studio in Paris from 1949 to 1958, after meeting him during Le Corbusier's visit to Colombia in 1947 for the Bogotá Plan.

                        </p>

                    </div>
                    <motion.div
                        variants={fadeIn("right", 0.5)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className='flex flex-col gap-y-10 w-[150%] '


                    >
                        <div className=" group relative overflow-hidden rounded-xl ">
                            {/*overlai*/}
                            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 '></div>
                            {/*imagen*/}

                            <img
                                src={rogelioSalmona}
                                alt=""
                                className='group-hover:scale-125 transition-all duration-500 object-cover lg:w-full lg:h-[600px] md:w-[600px] md:[400px]'
                            />


                        </div>

                    </motion.div>

                </div>
                <section>
                    {/*Obras*/}
                    <h5 className="head-text font-secondary dark:text-white font-semibold text-center mb-10 uppercase">Monumental works</h5>
                    <div className="grid grid-cols-1 grid-rows-6 gap-2 md:grid-cols-4 md:grid-rows-2">
                        <div className="">
                            <img src={o1} alt="" className="gallery-img" />
                        </div>
                        <div className="">
                            <img src={o2} alt="" className="gallery-img" />
                        </div>
                        <div className="md:col-span-2">
                            <img src={o3} alt="" className="gallery-img" />
                        </div>
                        <div className="">
                            <img src={o4} alt="" className="gallery-img" />
                        </div>
                        <div className="md:col-span-2">
                            <img src={o5} alt="" className="gallery-img" />
                        </div>
                        <div className="">
                            <img src={o6} alt="" className="gallery-img" />
                        </div>
                        <div className="md:col-span-2">
                            <img src={o7} alt="" className="gallery-img" />
                        </div>


                    </div>
                </section>
                <section className=" p-10">
                    {/*Obras monumentales*/}
                    <div className='justify-center items-center h-[100vh] w-full'>
                        <SwipeCarousel />
                    </div>
                </section>
                <section className=" p-10 max-container pt-8 mx-auto">
                    {/*usaquen*/}
                    <h5 className="head-text font-secondary dark:text-white font-semibold text-center mb-10 uppercase">Usaquen</h5>

                    <div className="grid grid-cols-1 grid-rows-6 gap-2 md:grid-cols-4 md:grid-rows-2">
                        <div className="md:col-span-2">
                            <img src={u1} alt="" className="gallery-img" />
                        </div>
                        <div className="">
                            <img src={u2} alt="" className="gallery-img" />
                        </div>
                        <div className="">
                            <img src={u3} alt="" className="gallery-img" />
                        </div>
                        <div className="">
                            <img src={u4} alt="" className="gallery-img" />
                        </div>
                        <div className="">
                            <img src={u5} alt="" className="gallery-img" />
                        </div>
                        <div className="md:col-span-2">
                            <img src={u6} alt="" className="gallery-img" />
                        </div>
                        <div className="">
                            <img src={u7} alt="" className="gallery-img" />
                        </div>
                        <div className="">
                            <img src={u8} alt="" className="gallery-img" />
                        </div>
                        <div className="">
                            <img src={u9} alt="" className="gallery-img" />
                        </div>
                        <div className="md:col-span-2">
                            <img src={u10} alt="" className="gallery-img" />
                        </div>
                        <div className="">
                            <img src={u11} alt="" className="gallery-img" />
                        </div>
                        <div className="">
                            <img src={u12} alt="" className="gallery-img" />
                        </div>
                        <div className="">
                            <img src={u13} alt="" className="gallery-img" />
                        </div>
                        <div className="">
                            <img src={u14} alt="" className="gallery-img" />
                        </div>
                        <div className="md:col-span-2">
                            <img src={u15} alt="" className="gallery-img" />
                        </div>
                        <div className="">
                            <img src={u16} alt="" className="gallery-img" />
                        </div>
                        <div className="">
                            <img src={u17} alt="" className="gallery-img" />
                        </div>
                        <div className="">
                            <img src={u18} alt="" className="gallery-img" />
                        </div>
                        <div className="">
                            <img src={u19} alt="" className="gallery-img" />
                        </div>
                        <div className="md:col-span-2">
                            <img src={u20} alt="" className="gallery-img" />
                        </div>
                        <div className="">
                            <img src={u21} alt="" className="gallery-img" />
                        </div>
                        <div className="">
                            <img src={u22} alt="" className="gallery-img" />
                        </div>
                        <div className="">
                            <img src={u23} alt="" className="gallery-img" />
                        </div>
                        <div className="">
                            <img src={u24} alt="" className="gallery-img" />
                        </div>
                        <div className="md:col-span-2">
                            <img src={u25} alt="" className="gallery-img" />
                        </div>


                    </div>
                </section>

            </div>
        </div>
    )
}

export default Urban