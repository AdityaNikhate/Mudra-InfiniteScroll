import React from 'react'

const Card = ({coin,img,price}) => {
  return (
    <div className='w-56 h-72 bg-white rounded-md p-2 px-4'>
      <img src={img} alt="" />
      <h1 className='text-xl font-extrabold text-gray-800 uppercase'>{coin}</h1>
      <h1 className='text-base font-bold text-gray-800 uppercase'>$ {price}</h1>
    </div>
  )
}

export default Card