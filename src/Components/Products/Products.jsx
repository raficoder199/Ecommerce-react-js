import React from 'react'
import Img1 from '../../assets/women/women.png'
import Img2 from '../../assets/women/women2.jpg'
import Img3 from '../../assets/women/women3.jpg'
import Img4 from '../../assets/women/women4.jpg'
import { FaStar } from 'react-icons/fa6'
import { data } from 'autoprefixer'

const ProductsData = [
    {
        id:1,
        image : Img1,
        title: "Women Ethics",
        Rating: "5.0",
        color:'white',
        Aosdelay: "0",

    },
    {
        id:2,
        image : Img2,
        title: "Women Collections",
        Rating: "4.0",
        color:'violet',
        Aosdelay: "200",

    },
    {
        id:3,
        image : Img3,
        title: "Mens Collection",
        Rating: "4.5",
        color:'crimson',
        Aosdelay: "400",

    },
    {
        id:4,
        image : Img4,
        title: "Womens winter Collection",
        Rating: "4.8",
        color:'green',
        Aosdelay: "600",

    },
]

const Products = () => {
  return (
    <div className='mt-10  mb-10'>
        <div className="container">
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p data-Aos="fade-up " className='text-sm text-primary  dark:text-yellow-100'>Top Selling Products For You </p>
                <h1 data-Aos="fade-up " className='text-3xl font-bold dark:text-yellow-100' >Products</h1>
                <p data-Aos="fade-up " className='text-xs text-gray-400'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ducimus blanditiis incidunt.
                </p>


            </div>
            <div className=' grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center  gap-10'>
                {ProductsData.map((data)=>(
                    <div data-Aos="fade-up" data-Aos-delay={data.Aosdelay} key={data.id} className='space-y-3'>
                        <img src={data.image} alt="cover image" className='h-[220px] w-[150px] hover:scale-105 transition-all  object-cover rounded-md' />
                        <div>
                            <h3 className='font-semibold  dark:text-yellow-50'>{data.title}</h3>
                            <p className='text-sm text-gray-600' >{data.color}</p>
                            <div className='flex items-center gap-1'>
                                <FaStar className='text-yellow-400'/>
                                <span className='dark:text-yellow-100'>{data.Rating}</span>

                            </div>
                        </div>

                    </div>
                ))}

            </div>
            <div className='flex justify-center'>
                <button className='text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5  rounded-md'>View All button</button>

            </div>
        </div>

    </div>
  )
}

export default Products