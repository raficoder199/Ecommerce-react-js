import React from 'react'
import { IoMdSearch } from 'react-icons/io'
import { FaCartShopping } from 'react-icons/fa6'
import { FaCaretDown } from 'react-icons/fa6'
import { FiShoppingBag } from 'react-icons/fi'

import Darkmode from './Darkmode'

const Menu =[
    {
        id:1,
        name: 'Home',
        link: '/#',
        
    },
    {
        id: 2,
        name: 'Top Rated',
        link: '/#services',

    },
    {
        id:3,
        name: 'Kids Wear',
        link: '/#',

    },
    {
        id:4,
        name: 'Mens Wear',
        link: '/#',

    },
    {
        id:5,
        name: 'Electronic',
        link: '/#',

    },
]

const DropDownlist = [
    {
        id: 1,
        name: "Trending Products",
        link: "/#"
    },
    {
        id: 2,
        name: "Best Selling",
        link: "/#"
    },
  
]

const Navbar = ({handleOrderPopup}) => {
  return (
    <div className='shadow-md bg-white dark:bg-slate-800 duration-200 relative z-40 rounded-lg'>

        <div className='bg-primary/40 py-2'>
        <div className='container flex justify-between items-center ' >
            <div>
                <a href="#" className='font-bold text-3xl items-center flex gap-1 '>
                    <FiShoppingBag size={30}/>
                   <p className='dark:text-violet-300 font-bold tracking-tighter '>ShopMe </p> 
                </a>
            </div>

            <div className=' flex justify-between items-center gap-4 '>
                <div className='relative group hidden sm:block'>
                    <input type="text" placeholder='Search' className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300  rounded-lg  border-gray-300  py-1 px-2 text-sm focus:outline focus:border-1 focus: border-primary dark:border-gray-500 ' dark:bg-slate-800 />
                    <IoMdSearch className='text-slate-800 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3'/>

                </div>
                <button onClick={()=> {handleOrderPopup()}}
                    className='bg-gradient-to-t from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group '>
                        <span className='group-hover:block hidden transition-all duration-200  '> Order </span>
                        <FaCartShopping  className='text-xl text-white drop-shadow-sm cursor-pointer transition-all duration-200 '/>

                </button>
                <div> <Darkmode/> </div>

            </div>

        </div>

        </div>
        <div data-Aos= "zoom-in " className=' flex justify-center '>
            <ul className='sm:flex hidden items-center gap-4'>
                {Menu.map((data)=>(
                    <li key={data.id}> <a href={data.link} className='inline-block px-4 hover:text-primary duration-200  dark:text-violet-300 font-semibold tracking-tighter' >{data.name}</a> 
                    </li>
                ))}
                <li className='group relative cursor-pointer '>
                    <a href="#" className='flex items-center gap-[2px] py-2 dark:text-violet-300 font-semibold tracking-tighter'>
                        Trending Products
                        <span>
                            <FaCaretDown className='transition-all duration-200 group-hover:rotate-180 '/>
                        </span>
                    </a>
                    <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md  p-2 text-black shadow-md '>
                        <ul>
                            {DropDownlist.map((data)=>(
                                <li key={data.id}> <a href={data.link} className=' inline-block  rounded-md w-full dark:bg-violet-900 px-6 mt-1 text-lg font-semibold tracking-tighter hover:text-gray-500 dark:hover:bg-violet-700 duration-200 '>{data.name}</a> </li>
                            ))}
                        </ul>

                    </div>

                </li>

            </ul>
            
        </div>
     
    </div>
  )
}

export default Navbar