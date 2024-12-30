import React from 'react'
import user from '../Assets/Images/user.jpg'
function Testimonial() {
  return (
    <>
    
    
<div className="bg-white  w-full mx-auto p-8">
    <div className="flex flex-col items-center justify-center md:items-start md:flex-row">
        <a href="#" className="relative block">
            <img alt="profil" src={user} className="mx-auto object-cover rounded-full h-40 w-40 "/>
        </a>
        <div className="w-full md:w-2/3">
            <p className="text-gray-600  w-full md:w-2/3 m-auto text-left text-lg md:text-3xl">
                <span className="font-bold text-indigo-500">
                    “
                </span>
                To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
                <span className="font-bold text-indigo-500">
                    ”
                </span>
            </p>
            <div className="flex items-center justify-center mt-8">
                <span className="mr-2 text-lg font-semibold text-indigo-500">
                    Jean Miguel
                </span>
                <span className="text-xl font-light text-gray-400"> 
                    /
                </span>
                <span className="ml-2 text-gray-400 text-md">
                    User of tail-kit
                </span>
            </div>
        </div>
    </div>
</div>

    
    </>
  )
}

export default Testimonial
