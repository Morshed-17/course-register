import PropTypes from 'prop-types'
import { FaBook, FaDollarSign } from 'react-icons/fa';

const Card = ({card, handleSelect}) => {
    const {img,course_name, credit,price, course_details} = card
  return (
    <div className='rounded-lg bg-white p-4 flex flex-col justify-between'>
       <div>
       <img className='rounded-lg h-[144px] w-full mb-4' src={img} alt="" />
       <h3 className='text-primary-dark text-xl font-semibold mb-3'>{course_name}</h3>
       <p className='text-primary-gray mb-5'>{course_details}</p>
       <div className='flex justify-between mb-6'>
        <p className='flex items-center text-primary-gray text-lg'><span className='text-primary-dark mr-2 text-xl'><FaDollarSign></FaDollarSign></span>Price: {price}</p>
        <p className='flex items-center text-primary-gray text-lg'><span className='text-primary-dark mr-2 text-xl'><FaBook></FaBook></span>Credit: {credit}hr</p>
       </div>
       </div>
      <button onClick={() => handleSelect(card)} className='bg-primary-sky text-white text-xl py-2 block w-full rounded-lg mx-auto hover:scale-95 duration-300
      '>Select</button>

    </div>
  )
}

Card.propTypes = {
    card: PropTypes.object,
    handleSelect: PropTypes.func
}

export default Card