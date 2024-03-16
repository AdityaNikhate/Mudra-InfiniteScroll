import React from 'react'
import { GiTwoCoins } from "react-icons/gi";
const Navigation = () => {
  return (
    <div className='sticky top-0 w-full bg-gray-900 px-10 py-2 flex justify-between shadow-md border-b-[0.5px] border-gray-500 shadow-gray-300'>
      <h1 className='text-4xl uppercase text-[#FFD700] font-["Rubik_Gemstones"]'>Mudra</h1>
      <GiTwoCoins className='text-4xl text-[#FFD700]'/>
    </div>
  )
}

export default Navigation