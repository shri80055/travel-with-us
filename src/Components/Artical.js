import React from 'react'

function Artical(props) {
    const {ArticalImg, ArticalTitle, ArticalDiscription} = props;
  return (
   <>
   
                <div class="w-full m-3 max-w-lg overflow-hidden rounded-lg shadow-lg sm:flex">
                   <div class="w-full sm:w-1/3">
                     <img class="object-cover w-full h-60" src={ArticalImg} />
                   </div>
                   <div class="flex-1 px-6 py-4">
                     <h4 class="mb-3 arthedline">{ArticalTitle}</h4>
                     <p class="font-semibold font-serif italic text-sm mb-2">{ArticalDiscription}</p>
                     <button className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        More Details
                    </button>
                   </div>
                   
                 </div>
   
   </>
  )
}

export default Artical
