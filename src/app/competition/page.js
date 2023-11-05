import React from 'react'

const page = () => {
     return (
          <>
               <section className="w-full h-[90vh] bg-main-dark flex flex-col justify-evenly items-center">
                    <div>
                         <h1 className="text-8xl text-center">
                              Our <span className="text-secondary-normal">Competition AI helpful</span><br />  for everyone
                         </h1>
                         <h3 className="mt-16 text-center">
                              Our approach to developing and harnessing <span className="text-secondary-normal">artificial intelligence</span>
                         </h3>
                    </div>
                    <div>
                         <form>
                              <input type="text" className=" focus:outline-main-normal text-main-darker p-5 w-[50vw] rounded-xl" placeholder="Search Competition" />
                         </form>
                    </div>
               </section>
          </>
     )
}

export default page