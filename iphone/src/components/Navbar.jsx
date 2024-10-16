import React from 'react'
import { appleImg, bagImg, searchImg } from '../utils'
import { navLists } from '../constants'


export const Navbar = () => {
  return (
    <div>
        <header className=' w-full flex items-center justify-between py-5 px-6 sm:px-10 max-w-[1120]'>
            {/* ---------- APPLE LOGO ------------- */}
            <div>
                <img  src={appleImg} alt="appleLogo"  width='18' height='18'/>
            </div>
             {/* ---------- SERVICES ------------- */}
             <div className='flex flex-1 items-center justify-center gap-6 max-sm:hidden'>
                {navLists.map(ele=>
                <h2 className='text-gray hover:text-white transition-all cursor-pointer'>
                    {ele}
                </h2>)}

             </div>

             {/* ---------- SEARCH & BAG IMAGE ------------- */}
            <div className='flex gap-6'>
                <img className='' src={searchImg} alt="search_image" width={18} height={18} />
                <img className='' src={bagImg} alt="bag_img" width={18} height={18}/>
            </div>
            

            
        </header>
    </div>
  )
}
