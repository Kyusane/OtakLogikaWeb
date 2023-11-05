'use client'

import React from 'react'

const page = ({params}) => {
     return (
          <div className="w-full h-screen flex justify-center items-center bg-main-light text-main-darker">     
               <h1>{decodeURIComponent(params.event)}</h1>
          </div>
     )
}

export default page