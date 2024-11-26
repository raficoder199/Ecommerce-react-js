import React from 'react'
import Bannerimg from '../../assets/4547829.jpg'
import { GrSecure} from 'react-icons/gr'
import { IoFastFood} from 'react-icons/io5'
import { GiFoodTruck} from 'react-icons/gi'

const Banner = () => {
  return (
    <div className=' min-h-[550px] flex justify-center  items-center py-12 sm:py-0'>
        <div className="container">
            <div className=' grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
                <div data-Aos ='zoom-in'>
                    <img className='max-w-[400px] h-[350px] w-full mx-auto object-cover rounded-lg hover:scale-105 transition-all' src={Bannerimg} alt="Banner Img" />

                </div>
                <div className=' flex flex-col justify-center gap-6 sm:pt-0 '>
                    <h1 data-Aos ='fade-up' className='text-3xl sm:text-4xl font-bold dark:text-yellow-50 tracking-tighter  '>
                        winter sale upto 50% off</h1>
                        <p data-Aos ="fade-up" className='text-sm text-gray-500 tracking-wide leading-5 dark:text-yellow-50'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam perferendis quod quo.</p>
                        <div className='flex flex-col gap-4 '>
                            <div data-Aos ="fade-up " className=' flex items-center gap-4'>
                                <GrSecure className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400'/>
                                <p className='dark:text-yellow-50'>Quality Products</p>
                            </div>
                            <div data-Aos ="fade-up" className='flex items-center  gap-4'>
                                <IoFastFood className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400'/>
                                <p className='dark:text-yellow-50'>Fast Delivery</p>

                            </div>
                            <div data-Aos ="fade-up" className='flex items-center  gap-4'>
                                <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400'/>
                                <p className='dark:text-yellow-50'>Secure Payment</p>

                            </div>
                            <div data-Aos ="fade-up" className='flex items-center  gap-4'>
                                <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400'/>
                                <p className='dark:text-yellow-50'>Get Offers</p>

                            </div>

                        </div>
                </div>

            </div>
        </div>
        
    </div>
  )
}

export default Banner