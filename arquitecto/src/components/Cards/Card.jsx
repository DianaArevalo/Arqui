import { useMotionValue, useTransform, motion } from "framer-motion"
import { logos, PNG_FILE_URL, downLoadFileAtURL } from "../../exports/data.js"


export const Card = () => {

    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const rotateX = useTransform(y, [-100, 100], [30, -30])
    const rotateY = useTransform(x, [-100, 100], [-30, 30])



    return (
        <div style={{ perspective: 2000 }}>
            {/*Card*/}
            <motion.div
                style={{ x, y, rotateX, rotateY, z: 100 }}
                drag
                dragElastic={0.18}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                className='w-[426px] min-h-[300px] bg-transparent rounded-[30px] border-[5px] border-orange-default dark:border-blue-default dark:text-white px-[40px] py-[24px] cursor-grab justify-center items-center'>

                {/*subtitle*/}
                <div className='max-w-[300px] font-primary mb-6'>
                    I'm Alejandro Arevalo architecture student at Universidad del Bosque.
                    I have skills in architectural design,
                    as well as in the management and efficient execution of projects on site.
                    Committed to excellence and innovation in each project.
                </div>
                {/*btn*/}
                <div className='mb-12 justify-center items-center'>
                    <button onClick={() => { downLoadFileAtURL(PNG_FILE_URL) }} className='btn mb-6 capitalize'>download architectural portfolio</button>
                </div>
                {/*skills*/}
                <ul className="flex gap-x-[10px]">
                    {logos.map((skill, index) => {
                        return (
                            <li
                                key={index}
                                className="w-8 h-8 rounded-full cursor-pointer">
                                <img
                                    src={skill.icon}
                                    alt={skill.company_name}
                                />
                            </li>
                        )
                    })}</ul>
            </motion.div>

        </div>


    )
}
