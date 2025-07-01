import React from 'react'

const Navbar:React.FC = () => {
  return (
    <div className='fixed top-0 w-full h-20 bg-gray-200 flex gap-[60px] items-center justify-start'>
        <ul className='text-[28px] ml-[30px] font-medium text-green-500'>Logicoding</ul>
        <ul className='text-[20px] font-medium'>Home</ul>
        <ul className='text-[20px] font-medium'>About</ul>
    </div>
  )
}

export default Navbar