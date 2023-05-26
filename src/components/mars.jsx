import React from 'react'
import { useState, useEffect } from 'react'

const Mars = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=3kb8t5BBiOoubvVy5qN2dcPCUOUh70nTzZhqxnRG');
            const jsonData = await response.json();
            setData(jsonData);
          } catch (error) {
            console.log('Error fetching data:', error);
          }
        };
        fetchData();
      }, []);
  return (
    <div className='container mx-auto mt-8'>
        {data ? (
        <div className='shadow-lg bg-white app-shadow rounded-xl backdrop-blur-3xl bg-opacity-10'>
          {<div className='w-3/4 mx-auto text-center'>
            <h2 className='text-2xl text-gray-100 py-2 cursor-pointer hover:scale-105 duration-200'>Mars Rover Image</h2>
            <h3 className='text-2xl text-gray-100 pb-2 cursor-pointer hover:scale-105 duration-200'>{data['photos'][0]['camera']['full_name']}</h3>
            <div className='content-center pb-10'>
                <div className='flex flex-wrap w-full my-auto pr-3'>
                    <img src={data['photos'][0]['img_src']} alt="" className='mx-auto pb-4 px-2 cursor-pointer hover:scale-105 duration-200' style={{height:'240px'}} />
                    <img src={data['photos'][1]['img_src']} alt="" className='mx-auto pb-4 px-2 cursor-pointer hover:scale-105 duration-200' style={{height:'240px'}} />   
                    <img src={data['photos'][2]['img_src']} alt="" className='mx-auto pb-4 px-2 cursor-pointer hover:scale-105 duration-200' style={{height:'240px'}} />          
                </div>
            </div>
            
            
        </div> }
          <p>{data.name}</p>
          <p>{data.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
          
    </div>
  )
}

export default Mars