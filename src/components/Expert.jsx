import React from 'react'
import laptop from "../assets/laptop.jpg"
const Expert = () => {
  return (
    <div className=' max-w-[1240px] mx-auto my-10 p-3 md:grid grid-cols-2'>
        <div className=' col-span-1 md:w-[80%]'>
            <img src={laptop} alt="" className='inline'/>
        </div>
        <div className=' col-span-1 flex flex-col justify-center' >
        <p className='text-[#00df9a] font-bold my-2'>LEARN FROM EXPERTS</p>
          <p className='my-2 ' >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className='bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 '>Get Started</button>
        </div>

    </div>
  )
}

export default Expert;