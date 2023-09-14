import PropTypes from 'prop-types'
import { FaBook, FaDollarSign } from 'react-icons/fa';

const Card = ({card}) => {
    const {id, img,course_name, credit,price, course_details} = card
  return (
    <div className='rounded-lg shadow-xl p-4'>
       <img className='rounded-lg h-[144px] w-full mb-4' src={img} alt="" />
       <h3 className='text-primary-dark text-2xl font-semibold mb-3'>{course_name}</h3>
       <p className='text-primary-gray mb-5'>{course_details}</p>
       <div className='flex justify-between mb-6'>
        <p className='flex items-center text-primary-gray text-lg'><span className='text-primary-dark mr-2 text-xl'><FaDollarSign></FaDollarSign></span>Price: </p>
        <p className='flex items-center text-primary-gray text-lg'><span className='text-primary-dark mr-2 text-xl'><FaBook></FaBook></span>Credit: hr</p>
       </div>
       <button className='bg-primary-sky text-white text-xl py-2 block w-full rounded-lg mx-auto'>Select</button>

    </div>
  )
}

Card.propTypes = {
    card: PropTypes.object
}

export default Card