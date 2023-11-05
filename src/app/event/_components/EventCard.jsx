'use client'

import React ,{useState, useEffect} from 'react'
import { useRouter } from 'next/navigation'


const EventCard = ({title}) => {

     const router = useRouter()
     const [path, setPath] = useState(null)

     useEffect(()=>{
          setPath(title)
     },[])

     const cardClickHandler =()=>{
          router.push(`/event/${path}`)
     }

     return (
          <div className="text-main-darker shadow-2xl h-96 rounded-xl p-5 hover:scale-105 hover:cursor-pointer transition-all"
               onClick={cardClickHandler}>
               <div className="bg-main-dark w-full rounded-xl h-[60%]"></div>
               <div className="w-full h-[30%] flex  flex-col justify-center gap-3">
                    <h2>{title}</h2>
                    <h3>Class desciption We're excited about the transformational power of AI and the helpful new ways it can be applied</h3>
               </div>
               <div className="w-full h-[10%] flex justify-between items-center text-main-darker">
                    <h3>Duration</h3>
                    <h3>Date/Time</h3>
               </div>
          </div>
     )
}

export default EventCard