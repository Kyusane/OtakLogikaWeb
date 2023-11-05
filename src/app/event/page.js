"use client"

import React ,{useRef} from 'react'
import dynamic from 'next/dynamic'


const EventCard = dynamic(()=>import("./_components/EventCard"))

const page = () => {

     const searchRef = useRef()

     const data =[
          {
               title : "Learn AI From Home"
          },
          {
               title : "Learn Machine Learning From Home"
          },
          {
               title : "Learn Cyber Security From Home"
          },
          {
               title : "What's Internet"
          },
          {
               title : "Pyhton for AI"
          },
          {
               title : "Pyhton for ML"
          },
     ]

     

     return (
          <>
               <section className="w-full h-[90vh] bg-main-dark flex flex-col justify-evenly items-center">
                    <div>
                         <h1 className="text-8xl text-center">
                              Our <span className="text-secondary-normal">Event AI helpful</span><br />  for everyone
                         </h1>
                         <h3 className="mt-16 text-center">
                              Our approach to developing and harnessing <span className="text-secondary-normal">artificial intelligence</span>
                         </h3>
                    </div>
                    <div>
                         <form>
                              <input type="text"  className="focus:outline-main-normal text-main-dark p-5 w-[50vw] rounded-xl" placeholder="Search Event" ref={searchRef} />
                         </form>
                    </div>
               </section>
               <section className="w-full h-[max-content] bg-main-light p-20 grid grid-cols-2 justify-evenly gap-14">
                    {
                         data.map(card => <EventCard title={card.title} key ={card.title}/>)
                    }
               </section>
          </>
     )
}

export default page