import React from 'react'

const GetNotif = () => {
  return (
    <div data-Aos='zoom-in' className='mb-20 bg-slate-700 dark:bg-gray-800 text-white'>
        <div className='container backdrop-blur-sm py-10'>
            <div className='space-y-6 max-w-xl mx-auto '>
                <h1 className='text-2xl text-center sm:text-left sm:text-4xl font-semibold'>
                    Get notified about new product

                </h1>
                <input type="email " data-Aos="fade-up" placeholder='Enter Your Email' className='w-full p-3 text-black' />

            </div>

        </div>

    </div>
  )
}

export default GetNotif