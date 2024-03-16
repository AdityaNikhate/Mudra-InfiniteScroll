import React, { useEffect, useState } from 'react'
import Card from './Card';

const Hero = () => {
  const [coin, setCoin] = useState([]);
  const [page, setPage] = useState(1)
  const getData = async ()=>{
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=${page}&sparkline=false`);
    const data =await res.json();
    setCoin([...coin, ...data])
  }

  useEffect(()=>{
    if(page<101){
      getData();
    }
  },[page])

  const handleScroll = ()=>{
    
    if(window.innerHeight+ document.documentElement.scrollTop + 1>=  document.documentElement.scrollHeight){
      setPage(prev=>prev+1)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll);
  },[])

  return (
    <div className='w-full flex justify-around flex-wrap px-10 py-10 gap-32 bg-gray-900'>
    {/* <h1 className='text-white'>{page}</h1> */}
        {
          coin.map((item, index)=>(
            <Card key={index} coin={item.symbol} img={item.image} price={item.current_price} /> 
          ))
        }
    </div>
  )
}

export default Hero