

const StyledImage = ({ src }) => {
    return (
        // <div className="lg:m-6 md:m-4 m-3">
        //     <div className="image-wrapper">
        //         <img src={`${src ? src : "https://picsum.photos/200/200?a=12"}`} alt="rounded-sm Image" className="rounded-sm-image h-56 hover:scale-105 transition cursor-pointer rounded-sm-lg" />
        //         <div className="absolute top-right"></div>
        //         <div className="absolute bottom-left"></div>
        //     </div>
        // </div>
        <div>
            <div className="flex gap-2 justify-between items-center p-1">
                <div className="lg:size-2.5 md:size-2.5 size-1.5 rounded-sm bg-white"></div>
                <div className="lg:size-2.5 md:size-2.5 size-1.5 rounded-sm bg-white"></div>
                <div className="lg:size-2.5 md:size-2.5 size-1.5 rounded-sm bg-white"></div>
                <div className="lg:size-2.5 md:size-2.5 size-1.5 rounded-sm bg-white"></div>
                <div className="lg:size-2.5 md:size-2.5 size-1.5 rounded-sm bg-white"></div>
                <div className="lg:size-2.5 md:size-2.5 size-1.5 rounded-sm bg-white"></div>
                <div className="lg:size-2.5 md:size-2.5 size-1.5 rounded-sm bg-white"></div>
                <div className="lg:size-2.5 md:size-2.5 size-1.5 rounded-sm bg-white"></div>
                <div className="lg:size-2.5 md:size-2.5 size-1.5 rounded-sm bg-white"></div>
                <div className="lg:size-2.5 md:size-2.5 size-1.5 rounded-sm bg-white"></div>
                <div className="lg:size-2.5 md:size-2.5 size-1.5 rounded-sm bg-white"></div>
                <div className="lg:size-2.5 md:size-2.5 size-1.5 rounded-sm bg-white"></div>
            </div>
            <img src={`${src ? src : "https://picsum.photos/200/200?a=12"}`} alt="Image" className="lg:h-56 md:h-52 h-44 hover:scale-105 transition cursor-pointer my-2 mx-2" />
            <div className="flex gap-2 justify-between items-center p-1">
                <div className="lg:size-2.5 md:size-2.5 size-1.5 rounded-sm bg-white"></div>
                <div className="lg:size-2.5 md:size-2.5 size-1.5 rounded-sm bg-white"></div>
                <div className="lg:size-2.5 md:size-2.5 size-1.5 rounded-sm bg-white"></div>
                <div className="lg:size-2.5 md:size-2.5 size-1.5 rounded-sm bg-white"></div>
                <div className="lg:size-2.5 md:size-2.5 size-1.5 rounded-sm bg-white"></div>
                <div className="lg:size-2.5 md:size-2.5 size-1.5 rounded-sm bg-white"></div>
                <div className="lg:size-2.5 md:size-2.5 size-1.5 rounded-sm bg-white"></div>
                <div className="lg:size-2.5 md:size-2.5 size-1.5 rounded-sm bg-white"></div>
                <div className="lg:size-2.5 md:size-2.5 size-1.5 rounded-sm bg-white"></div>
                <div className="lg:size-2.5 md:size-2.5 size-1.5 rounded-sm bg-white"></div>
                <div className="lg:size-2.5 md:size-2.5 size-1.5 rounded-sm bg-white"></div>
                <div className="lg:size-2.5 md:size-2.5 size-1.5 rounded-sm bg-white"></div>
            </div>
        </div>

    )
}

export default StyledImage