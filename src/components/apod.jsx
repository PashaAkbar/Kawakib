import React from 'react'
import { useState, useEffect } from 'react'

const Apod = () => {
    
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=3kb8t5BBiOoubvVy5qN2dcPCUOUh70nTzZhqxnRG');
            const jsonData = await response.json();
            setData(jsonData);
          } catch (error) {
            console.log('Error fetching data:', error);
          }
        };
        fetchData();
      }, []);
  return (
    <div className='container mx-auto'>
        {data ? (
        <div className='shadow-lg bg-white app-shadow rounded-xl backdrop-blur-3xl bg-opacity-10'>
          {<div className='w-3/4 mx-auto text-center'>
            <h2 className='text-2xl text-gray-100 py-2 cursor-pointer hover:scale-105 duration-200'> Astronomy Picture of the Day</h2>
            <h3 className='text-2xl text-gray-100 pb-2 cursor-pointer hover:scale-105 duration-200'>{data['title']}</h3>
            <div className='flex flex-wrap content-center pb-10'>
                <div className='w-1/2 my-auto pr-3'>
                    <img src={data['url']} alt="" className='mx-auto pb-4 cursor-pointer hover:scale-105 duration-200' style={{height:'240px'}} />        
                </div>
                <div className='w-1/2 pl-3'>
                    <p className='text-md text-gray-100 py-2 cursor-pointer hover:scale-105 duration-200'>{data['explanation']}</p>
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

export default Apod