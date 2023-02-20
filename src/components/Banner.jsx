import React from 'react'
import Typed from 'react-typed';

const Banner = () => {
  return (
    <div className=' bg-gradient-to-r from-sky-500 to-indigo-500 w-full py-[170px]'>
        <div className='max-w-[1240px] mx-auto text-center '>
            <div className='text-xl md:text-4xl font-bold'>Learn with us</div>
            <h2 className='text-white font-bold md:py-[15px] text-4xl md:text-[65px]'>Grow with us.</h2>
            <div className='text-2xl  md:text-[50px] md:py-[20px] text-white font-bold'>learn <Typed
                    strings={['with Anuj', 'with Anugrah', 'with Anushuman','with Aman']}
                    typeSpeed={140}
                    backSpeed={110}

                    loop={true}
                /> </div>
        </div>
    </div>
  )
}

export default Banner;