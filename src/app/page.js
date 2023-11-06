import Image from 'next/image'

import Icon67 from '../../public/Frame67.svg'
import Icon68 from '../../public/Frame68.svg'
import Icon69 from '../../public/Frame69.svg'


export default function Home() {
	return (
		<>
			<section className="w-full h-[90vh] bg-main-dark flex justify-around items-center">
				<div>
					image
				</div>
				<div>
					<h1 className="text-8xl">
						AI helpful <br />for <span className="text-secondary-normal">everyone</span>
					</h1>
					<h3 className="mt-16">
						Our approach to developing and harnessing <span className="text-secondary-normal">artificial intelligence</span>
					</h3>
				</div>
			</section>
			<section className="w-full h-[250vh] bg-main-light p-20 flex flex-col justify-evenly gap-24">
				<div className="w-full h-[30vh] bg-main-dark flex justify-center items-center">
					Banner
				</div>
				<div className="w-full h-[80vh]  flex justify-between items-center">
					<div className="w-[60%] h-full flex flex-col justify-evenly items-center">
						<h2 className="text-7xl text-main-darker">
							Bringing the benefits of AI to everyone
						</h2>
						<h3 className="text-2xl text-main-darker text-justify mr-10">
							Google's mission has always been to organize the world's information and make it universally accessible and useful.We're excited about the transformational power of AI and the helpful new sible, to product integrations designed to make everyday things easier, and applying AI to make a difference in the lives of those who need it most-we're committed to responsible innovation and technologies that benefit all of humanity.
						</h3>

					</div>
					<div className="w-[40%] h-full grid grid-cols-2 grid-rows-3 gap-5 p-5">
						<div className="bg-slate-900 rounded-xl"></div>
						<div className="bg-slate-900 rounded-xl"></div>
						<div className="bg-slate-900 rounded-xl"></div>
						<div className="bg-slate-900 rounded-xl row-span-2"></div>
						<div className="bg-slate-900 rounded-xl"></div>
					</div>
				</div>
				<div className="w-full h-[max-content]  flex justify-around items-center">
					<div className="h-80 w-80 flex flex-col gap-10 justify-center items-center p3">
						<div className="w-[70%] h-[70%] flex justify-center items-center">
							<Image
								src={Icon67}
								alt="Gain world-class education to expand your technical knowledge">
							</Image>
						</div>

						<h3 className="text-center text-main-darker  ">Gain world-class education to expand your technical knowledge</h3>
					</div>
					<div className="h-80 w-80 flex flex-col gap-10 justify-center items-center p3">
						<div className="w-[70%] h-[70%] flex justify-center items-center">
							<Image
								src={Icon68}
								alt="Get hands-on training to acquire practical skills">
							</Image>
						</div>
						<h3 className="text-center text-main-darker ">Get hands-on training to acquire practical skills</h3>
					</div>
					<div className="h-80 w-80 flex flex-col gap-10 justify-center items-center p3">
						<div className="w-[70%] h-[70%] flex justify-center items-center">
							<Image
								src={Icon69}
								alt="Learn from a collaborative community of peers and mentors">
							</Image>
						</div>
						<h3 className="text-center text-main-darker  ">Learn from a collaborative community of peers and mentors</h3>
					</div>
				</div>
			</section>
		</>

	)
}
