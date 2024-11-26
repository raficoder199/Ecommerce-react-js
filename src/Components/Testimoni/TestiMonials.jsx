import React from 'react'
import Slider from 'react-slick'

const TestiData = [
    {
        id:1,
        Name: 'Mahfuz Alam Rafi',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At est placeat dolorum',
        img :' https://picsum.photos/id/237/200/300',
    },
    {
        id:2,
        Name: 'Simanta Islam Sania',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At est placeat dolorum',
        img :' https://picsum.photos/seed/picsum/200/300',
    },
    {
        id:3,
        Name: 'Alcohol ',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At est placeat dolorum',
        img :'https://picsum.photos/200/300?grayscale',
    },
    {
        id:4,
        Name: 'tahsan opu',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At est placeat dolorum',
        img :' https://picsum.photos/200/300/?blur',
    },
    {
        id:5,
        Name: 'Safwan ',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At est placeat dolorum',
        img :' https://picsum.photos/200/300.jpg',
    },
]

const TestiMonials = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed:700,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        pauseonHover : 'true',
        pauseonFocus : 'true',
        responsive:[
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                   intialSlider :2,
                    
                },
            },
            
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                   
                    
                },
            },
            
        ]
      };
  return (
    <div className=' py-10 mb-10'>
        <div className='container'>
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p data-Aos="fade-up " className='text-xl font-semibold tracking-tighter text-primary dark:text-yellow-100'>
                    what our customer says about us
                </p>
                <h1 data-Aos="fade-up" className='text-3xl font-bold dark:text-white'>
                    Testimonials
                </h1>
                <p data-Aos="fade-up " className='text-xs text-gray-400'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui facere labore voluptas?

                </p>


            </div>
            <div data-Aos="zoom-in " >
                <Slider  {...settings}>
                    {TestiData.map((data)=>(
                        <div className='my-6'>
                            <div key={data.id} className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-slate-600 bg-primary/20 relative '>
                            <div className='mb-4'>
                                <img src={data.img} alt="" className='rounded-full w-20 h-20' />


                            </div>
                            <div className='flex flex-col items-center gap-4'>
                                <div className='space-y-3'>
                                    <p className='text-xs text-gray-500   dark:text-slate-300 text-black/80 dark:text-light'>
                                    {data.text}

                                    </p>
                                    <h1 className='text-xl font-bold dark:text-slate-300 text-black/80 dark:text-light'>
                                    {data.Name}

                                    </h1>

                                </div>

                            </div>
                            <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>

                            </p>

                            </div>

                        </div>
                    ))}

                </Slider>

            </div>

        </div>

    </div>
  )
}

export default TestiMonials