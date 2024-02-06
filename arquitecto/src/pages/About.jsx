//card

import { Card } from '../components/Cards/Card'

//images

import part1 from '../assets/about/1.jpg'
import part2 from '../assets/about/2.jpg'
import part3 from '../assets/about/3.jpg'


const About = () => {
    return (
        <section className='max-container bg-gray-default dark:bg-corbeau-default flex flex-col-reverse gap-12 items-center mx-auto py-16 px-6 md:flex-row'>


            <div className=' flex-1 md:justify-start md:mt-10 justify-center items-center p-10 lg:p-20' >
                <Card className='' />
            </div>
            <div className='flex gap-2 justify-center md:gap-3 lg:gap-5 group relative overflow-hidden rounded-2xl'>
                <img className="about-img" src={part1} alt="img one" />
                <img className="mt-[5%] about-img" src={part2} alt="img two" />
                <img className="about-img" src={part3} alt="img three" />
            </div>



        </section>
    )
}

export default About
