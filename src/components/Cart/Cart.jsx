import PropTypes from 'prop-types'

const Cart = props => {
  return (
    <div className='md:w-[25%]'>
    <div  className='rounded-lg  p-6 bg-white'>
    <h3 className='text-center font-bold text-xl mt-6 mb-4 text-primary-sky'>Credit Hour Remaining 7 hr</h3>
        <hr />
        <h3 className='text-xl font-semibold pt-4 pb-5 text-primary-dark'>Course Name</h3>
            <h5>1 Introduction to c programming</h5>
        <hr className='mt-6 mb-4' />
        <h4 className='font-semibold'>Total Credit Hour: 12</h4>
        <hr className='my-4' />
        <h3 className='text-lg font-semibold'>Total Price : 48000 USD</h3>
    </div>
        
    </div>
  )
}

Cart.propTypes = {}

export default Cart