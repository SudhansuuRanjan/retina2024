import Marquee from "react-fast-marquee";

const Gallery = () => {
  return (
    <div className="py-32 bg-gradient-to-b from-black to-gray-900">
            <div className='flex items-center justify-center text-center gap-3 flex-col mb-24'>
                <p className='lg:text-6xl md:text-6xl text-5xl font-medium fancyfont'>GALLERY</p>
            </div>

            <Marquee speed={100} autoFill={true} className="lg:mb-12 md:mb-10 mb-6" pauseOnHover={true}>
                <div className="lg:m-6 md:m-4 m-3">
                    <img src="https://picsum.photos/200/200?a=1" className="h-56 hover:scale-105 transition cursor-pointer rounded-lg " alt="logo" />
                </div >
                <div className="lg:m-6 md:m-4 m-3">
                    <img src="https://picsum.photos/200/200?a=2" className="h-56 hover:scale-105 transition cursor-pointer rounded-lg " alt="logo" />
                </div>
                <div className="lg:m-6 md:m-4 m-3">
                    <img src="https://picsum.photos/200/200?a=3" className="h-56 hover:scale-105 transition cursor-pointer rounded-lg " alt="logo" />
                </div>
                <div className="lg:m-6 md:m-4 m-3">
                    <img src="https://picsum.photos/200/200?a=4" className="h-56 hover:scale-105 transition cursor-pointer rounded-lg " alt="logo" />
                </div>
                <div className="lg:m-6 md:m-4 m-3">
                    <img src="https://picsum.photos/200/200?a=5" className="h-56 hover:scale-105 transition cursor-pointer rounded-lg " alt="logo" />
                </div>
                <div className="lg:m-6 md:m-4 m-3">
                    <img src="https://picsum.photos/200/200?a=6" className="h-56 hover:scale-105 transition cursor-pointer rounded-lg " alt="logo" />
                </div>
                 <div className="lg:m-6 md:m-4 m-3">
                    <img src="https://picsum.photos/200/200?a=7" className="h-56 hover:scale-105 transition cursor-pointer rounded-lg " alt="logo" />
                </div>
            </Marquee>

            <Marquee speed={100} direction="right" autoFill={true} pauseOnHover={true}>
                <div className="lg:m-6 md:m-4 m-3">
                    <img src="https://picsum.photos/200/200?a=8" className="h-56 hover:scale-105 transition cursor-pointer rounded-lg " alt="logo" />
                </div >
                <div className="lg:m-6 md:m-4 m-3">
                    <img src="https://picsum.photos/200/200?a=9" className="h-56 hover:scale-105 transition cursor-pointer rounded-lg " alt="logo" />
                </div>
                <div className="lg:m-6 md:m-4 m-3">
                    <img src="https://picsum.photos/200/200?a=10" className="h-56 hover:scale-105 transition cursor-pointer rounded-lg " alt="logo" />
                </div>
                <div className="lg:m-6 md:m-4 m-3">
                    <img src="https://picsum.photos/200/200?a=11" className="h-56 hover:scale-105 transition cursor-pointer rounded-lg " alt="logo" />
                </div>
                <div className="lg:m-6 md:m-4 m-3">
                    <img src="https://picsum.photos/200/200?a=12" className="h-56 hover:scale-105 transition cursor-pointer rounded-lg " alt="logo" />
                </div>
                <div className="lg:m-6 md:m-4 m-3">
                    <img src="https://picsum.photos/200/200?a=13" className="h-56 hover:scale-105 transition cursor-pointer rounded-lg " alt="logo" />
                </div>
                 <div className="lg:m-6 md:m-4 m-3">
                    <img src="https://picsum.photos/200/200?a=14" className="h-56 hover:scale-105 transition cursor-pointer rounded-lg " alt="logo" />
                </div>
            </Marquee>

        </div>
  )
}

export default Gallery