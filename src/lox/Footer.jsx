import React from 'react'

const Footer = () => {
  return (
    <div className='bg-emerald-800 container pt-[80px] pb-[50px]'>

        <div className='flex justify-between items-start flex-wrap gap-[50px]'>

        <div className='flex gap-[50px] md:gap-[100px] '>

      <ul className='text-white flex flex-col gap-3'>
        <li>Cityes:</li>
        <li>Moscow</li>
        <li>U.K</li>
        <li>Tashkent</li>
      </ul>
      <ul className='text-white flex flex-col gap-3'>
        <li>Contries:</li>
        <li>Russia</li>
        <li>United Kingdom</li>
        <li>O.A.E</li>
      </ul>
      <ul className='text-white flex flex-col gap-3'>
        <li>Cityes:</li>
        <li>Moscow</li>
        <li>U.K</li>
        <li>Tashkent</li>
      </ul>
        </div>
        <div>
        <div className="  h-[70px] flex flex-col items-start gap-2    border-gray-300">
        
        <h1 className="text-white font-medium"> ❤️ Lorem ipsum dolor sit.</h1>

    <div class="mt-4">
        <input type="text" placeholder="Email" className="  px-3 py-2 border border-gray-300 rounded-md text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"/>
    </div>
    </div>
        </div>
        </div>
        <div className='w-full h-[3px] mt-[40px] mb-[20px] bg-white'></div>
        <div className='flex items-center justify-between'>
          <h1 className='text-white'>Lorem, ipsum dolor.</h1>
          <div className='flex gap-3 items-center text-white text-[22px]'>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-telegram"></i>
          <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
    </div>
  )
}

export default Footer
