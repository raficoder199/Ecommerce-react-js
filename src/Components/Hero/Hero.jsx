import React from 'react'
import Image1 from '../../assets/hero/women.png'
import Image2 from '../../assets/hero/shopping.png'
import Image3 from '../../assets/hero/sale.png'
import Slider from 'react-slick'


const ImageList = [
    {
        id:1,
        image: Image1,
        title: 'Upto 50% Off',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolorum praesentium saepe!',
      
    },
    {
        id:2,
        image: Image2,
        title: 'Upto 30% Off',
        description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolorum praesentium saepe!',
      
    },
    {
        id:1,
        image: Image3,
        title: 'Upto 70% Off All Products',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolorum praesentium saepe!',
      
    },
]

const Hero = ({handleOrderPopup}) => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed:700,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseonHover : false,
        pauseonFocus : false,
      };
      
return (
          <div className='relative overflow-hidden min-h-[550px] sm:min-h[650px] bg-gray-100 flex justify-center items-center dark:bg-slate-950 dark:text-white duration-300 rounded-lg'> 
                <div className=' h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]'>

                </div>
                <div className='container pb-8 sm:pb-0'>
                    <Slider {...settings} > {ImageList.map((data)=>(
                            <div>
                                <div className='grid grid-cols-1 sm:grid-cols-2 '>
                                    <div className='flex flex-col justify-center gap-4 pt-12 sm:pt:0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                        <h1 data-Aos="zoom-out " data-Aos-duration='500' data-Aos-once='true' className='text-5xl sm:text-6xl lg-text-7xl font-bold '>
                                            {data.title}

                                        </h1>
                                        <p data-Aos="fade-up " data-Aos-duration='500' data-Aos-delay ="100" className='text-sm' >
                                            {data.description}
                                        </p>
                                        <div 
                                        data-Aos="fade-up" data-Aos-duration='500'
                                        data-Aos-delay="300"

                                        >
                                            <button onClick={()=>{
                                                handleOrderPopup;

                                            }} className=' bg-gradient-to-r from-primary to to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>
                                                Order Now 
                                            </button>

                                        </div>

                                    </div>
                                    <div className='order-1 sm:order-2 '>
                                        <div data-Aos ="zoom-in" data-Aos-once="true" className='relative z-10 '>
                                            <img src={data.image} alt="Slider Img" className='w-[300px] sm:h-[450px] sm:w-[450px] sm: scale-105 lg: scale-125 object-contain mx-auto' />
                                            
                                        </div>

                                    </div>

                                </div>
                            </div>
                    ))}</Slider>

                </div>
         </div>
  )
}


export default Hero