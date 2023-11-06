'use client'

import React from 'react'

const page = ({ params }) => {
     return (
          <div className="w-full h-[max-content] grid grid-cols-3 justify-center items-start bg-main-light text-main-darker gap-14 p-20">
               {/* <h1>{decodeURIComponent(params.event)}</h1> */}
               <div className="col-span-2 w-full h-full flex flex-col gap-5">
                    <section className="w-full h-[max-content] bg-main-light leading-10">
                         <div className="w-full h-60 rounded-xl bg-main-normal mb-8"></div>
                         <h2 className="text-2xl font-bold">{decodeURIComponent(params.event)}</h2>
                         <h3>90 Minutes</h3>
                         <h3>19 Oct 2023 | 19.00 WIB</h3>
                         <h3>Online Zoom</h3>
                    </section>
                    <section className="w-full h-[max-content] bg-main-light">
                         <h2 className="text-2xl font-bold">Deskripsi Event</h2>
                         <h3>Class desciption We're excited about the transformational power of AI and the helpful new ways it can be applied</h3>
                         <ul className="p-5 list-disc ml-10">
                              <li>Class description</li>
                              <li>Class description</li>
                              <li>Class description</li>
                              <li>Class description</li>
                              <li>Class description</li>
                              <li>Class description</li>
                         </ul>
                         <h3>Class desciption We're excited about the transformational power of AI and the helpful new ways it can be applied</h3>
                    </section>
                    <section className="w-full h-[max-content] ">
                         <h2 className="text-2xl font-bold">Speaker Profile</h2>
                         <div className="w-full h-full flex justify-start items-center gap-10 p-5">
                              <div className="w-20 h-20 rounded-full bg-main-normal "></div>
                              <div>
                                   <h2>John Back</h2>
                                   <ul>
                                        <li>Senior Develop at sspedia</li>
                                        <li>Senior Develop at sspedia</li>
                                   </ul>
                              </div>
                         </div>
                    </section>

               </div>
               <div className="  bg-main-normal-light w-full h-[max-content] p-10 shadow-2xl rounded-2xl">
                    <h2 className="text-6xl font-bold text-center">Mau Ikutan?</h2>
                    <h3 className="mt-5">Dapatkan benefit berikut</h3>
                    <ul className="mt-5 list-disc ml-14">
                         <li>Download Material</li>
                         <li>E-certificate</li>
                         <li>Belajar GRATIS</li>
                         <li>Circle baru</li>
                    </ul>
                    <button className="w-full h-14 bg-main-normal rounded-2xl mt-10 text-main-light font-bold hover:scale-105 transition-all hover:bg-main-normal-hover hover:text-main-light-hover">Daftar Disini</button>
                    <div className="mt-10 w-full text-center">
                         <h2>Share Event</h2>
                         <div className="flex justify-center items-center gap-10 mt-5">
                              <h2>IG</h2>
                              <h2>FB</h2>
                              <h2>Link</h2>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default page