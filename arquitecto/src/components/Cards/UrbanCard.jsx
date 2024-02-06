import React from 'react'

const UrbanCard = ({ imgUrl }) => {
    return (
        <div className='bg-orange-default/15 dark:bg-blue-default/5 rounded-2xl  p-2 '>
            <img
                src={imgUrl}
                alt=""
                className='section-img section-img:hover rounded-2xl'
            />
        </div>
    )
}

export default UrbanCard