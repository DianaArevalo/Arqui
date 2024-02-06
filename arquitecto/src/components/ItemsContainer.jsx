
import Item from './Item'
import { SKILLS, SOCIALS, SECTIONS } from '../exports/data.js'

const ItemsContainer = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 dark:text-white'>
            <Item Links={SKILLS} title="SKILLS" />
            <Item Links={SOCIALS} title="ICONS" />
            <Item Links={SECTIONS} title="SECTIONS" />
        </div>
    )
}

export default ItemsContainer