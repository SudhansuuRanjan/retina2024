import Marquee from "react-fast-marquee";
import StyledImage from "./StyledImage";

//

const Gallery = () => {
    return (
        <div className=" bg-gradient-to-b from-black to-gray-900 w-full">
            <div className="my-32 bg-[url(/gta_man.svg)] bg-no-repeat bg-contain max-w-[100vw] overflow-hidden">
                <div className='flex items-center justify-center text-center gap-3 flex-col mb-24'>
                    <p className='lg:text-6xl md:text-6xl text-5xl font-medium fancyfont'>GALLERY</p>
                </div>

                <div className="rotate-[5deg] bg-black">
                    <Marquee speed={100} autoFill={true} className="lg:mb-12 md:mb-10 mb-6" pauseOnHover={true}>
                        <StyledImage src="https://picsum.photos/200/200?a=1" />
                        <StyledImage src="https://picsum.photos/200/200?a=2" />
                        <StyledImage src="https://picsum.photos/200/200?a=3" />
                        <StyledImage src="https://picsum.photos/200/200?a=4" />
                        <StyledImage src="https://picsum.photos/200/200?a=5" />
                        <StyledImage src="https://picsum.photos/200/200?a=6" />
                        <StyledImage src="https://picsum.photos/200/200?a=7" />
                    </Marquee>
                </div>

                <div className="bg-black">
                    <Marquee speed={100} direction="right" autoFill={true} pauseOnHover={true}>
                        <StyledImage src="https://picsum.photos/200/200?a=8" />
                        <StyledImage src="https://picsum.photos/200/200?a=9" />
                        <StyledImage src="https://picsum.photos/200/200?a=10" />
                        <StyledImage src="https://picsum.photos/200/200?a=11" />
                        <StyledImage src="https://picsum.photos/200/200?a=12" />
                        <StyledImage src="https://picsum.photos/200/200?a=13" />
                        <StyledImage src="https://picsum.photos/200/200?a=14" />
                    </Marquee>
                </div>

            </div>
        </div>
    )
}

export default Gallery