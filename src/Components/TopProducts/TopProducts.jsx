import React from 'react'
import Img1 from '../../assets/shirt/shirt.png'
import Img2 from '../../assets/shirt/shirt2.png'
import Img3 from '../../assets/shirt/shirt3.png'
import { FaStar } from 'react-icons/fa'

const ProductsData = [
    {
        id:1,
        image: Img1,
        title: 'Casual Wear',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolorum praesentium saepe!',
    },
    {
        id:2,
        image: Img2,
        title: 'Streets Wear',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolorum praesentium saepe!',
    },
    {
        id:3,
        image: Img3,
        title: 'Jeans Wear',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolorum praesentium saepe!',
    },
]

const TopProducts = ({handleOrderPopup}) => {
  return (
    <div className='container'>
        <div className='text-left mg-24'>
            <p data-Aos="fade-up" className='text-sm font-bold text-primary'>
                Top Rated Products For You.
            </p>
            <h1 data-Aos="fade-up" className='text-3xl tracking-tighter font-bold'>
                Best Products
            </h1>
            <p data-Aos="fade-up" className='text-xs font-bold text-gray-400 mb-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptate earum incidunt!</p>
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
                    {ProductsData.map((data)=>(

                        <div data-Aos="zoom-in" className='rounded-2xl text-center bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]'>
                            <div><img src={data.image} className='max-w-[140px] block mx-auto transform -translate-y-1 group-hover:scale-105 duration-300 drop-shadow-md' alt="" />
                                
                            </div>
                            <div className='w-full flex items-center justify-center gap-1'>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>

                            </div>
                            <h1 className='text-xl font-bold'>{data.title}</h1>
                            <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2 '>
                                {data.description}
                            </p>
                            <button className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary ' onClick={handleOrderPopup}>Order Now</button>
                        </div>
                    ))}

                </div>
            </div>

        </div>

    </div>
  )
}

export default TopProducts