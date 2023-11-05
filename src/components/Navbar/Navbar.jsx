import React from 'react'
import Link from 'next/link'

const Navbar = () => {
     return (
          <nav className="bg-main-normal w-full h-[10vh] flex justify-between items-center p-5">
               <Link href="/" className="text-tertiary-normal hover:cursor-pointer hover:scale-125 transition-all">Otak Logika</Link>
               <div className="flex justify-center items-center gap-10">
                    <Link href="/event" className="hover:cursor-pointer hover:scale-125 transition-all hover:text-secondary-normal">Event</Link>
                    <Link href="/freeclass"className="hover:cursor-pointer hover:scale-125 transition-all hover:text-secondary-normal">Free Class</Link>
                    <Link href="/webinar"className="hover:cursor-pointer hover:scale-125 transition-all hover:text-secondary-normal">Webinar</Link>
                    <Link href="/competition"className="hover:cursor-pointer hover:scale-125 transition-all hover:text-secondary-normal">Competition</Link>
               </div>
          </nav>
     )
}

export default Navbar