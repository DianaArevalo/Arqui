import { PNG_FILE_URL, downLoadFileAtURL } from "../../exports/data"

const arquitecturalCard = ({ imgUrl, title, description }) => {
    return (
        <div className='bg-orange-default/15 dark:bg-blue-default/5 flex flex-col md:even:flex-row-reverse md:odd:flex-row rounded-2xl'>
            <div className='flex-1'>
                <img src={imgUrl} alt={title} className='w-full h-80 md:h-full' />
            </div>

            <div className='flex-1 '>
                <div className='p-10'>
                    <h6 className='text-xl md:text-2xl orange-gradient_text dark:blue-gradient_text font-bold mb-3'>{title}</h6>
                    <p className='text-md md:text-xl leading-6 whitespace-pre-line'>{description}</p>
                </div>
                <div className='max-w-screen p-10 space-y-4 flex justify-around mx-auto flex-wrap'>
                    {/*descarga de portafolio*/}
                    <button
                        onClick={() => { downLoadFileAtURL(PNG_FILE_URL) }}
                        className='btn'>more info Download Portafolio...</button>

                </div>

            </div>

        </div>
    )
}

export default arquitecturalCard