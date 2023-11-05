import React from 'react'
import Link from 'next/link'

const Footer = () => {
     return (
          <footer className="h-[30vh] flex flex-col justify-center items-center bg-main-normal p-10">
               <div className="w-full h-[70%] flex justify-between">
                    <div className="flex gap-20">
                         <Link href="/" className="text-tertiary-normal hover:cursor-pointer hover:scale-125 transition-all">Otak Logika</Link>
                         <Link href="/event" className="hover:cursor-pointer hover:scale-125 transition-all hover:text-secondary-normal">Event</Link>
                         <Link href="/freeclass" className="hover:cursor-pointer hover:scale-125 transition-all hover:text-secondary-normal">Free Class</Link>
                         <Link href="/webinar" className="hover:cursor-pointer hover:scale-125 transition-all hover:text-secondary-normal">Webinar</Link>
                         <Link href="/competition" className="hover:cursor-pointer hover:scale-125 transition-all hover:text-secondary-normal">Competition</Link>
                    </div>
                    <div className="">
                         <h2>Download App</h2>
                    </div>
               </div>
               <div className=" w-full h-[40%] border-t-2 border-slate-300 pt-3 flex gap-10">
                    <h2>Follow Us</h2>
                    <h2>IG</h2>
                    <h2>FB</h2>
                    <h2>Link</h2>
               </div>
          </footer>
     )
}

export default Footer