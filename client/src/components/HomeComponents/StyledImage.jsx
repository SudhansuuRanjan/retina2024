import "./StyledImage.css"

const StyledImage = ({ src }) => {
    return (
        // <div className="lg:m-6 md:m-4 m-3">
        //     <div class="image-wrapper">
        //         <img src={`${src ? src : "https://picsum.photos/200/200?a=12"}`} alt="rounded-sm Image" class="rounded-sm-image h-56 hover:scale-105 transition cursor-pointer rounded-sm-lg" />
        //         <div class="absolute top-right"></div>
        //         <div class="absolute bottom-left"></div>
        //     </div>
        // </div>
        <div>
            <div className="flex gap-2 justify-between items-center p-1">
                <div className="size-2.5 rounded-sm bg-white"></div>
                <div className="size-2.5 rounded-sm bg-white"></div>
                <div className="size-2.5 rounded-sm bg-white"></div>
                <div className="size-2.5 rounded-sm bg-white"></div>
                <div className="size-2.5 rounded-sm bg-white"></div>
                <div className="size-2.5 rounded-sm bg-white"></div>
                <div className="size-2.5 rounded-sm bg-white"></div>
                <div className="size-2.5 rounded-sm bg-white"></div>
                <div className="size-2.5 rounded-sm bg-white"></div>
                <div className="size-2.5 rounded-sm bg-white"></div>
                <div className="size-2.5 rounded-sm bg-white"></div>
                <div className="size-2.5 rounded-sm bg-white"></div>
            </div>
            <img src={`${src ? src : "https://picsum.photos/200/200?a=12"}`} alt="Image" class="h-56 hover:scale-105 transition cursor-pointer my-2 mx-2" />
            <div className="flex gap-2 justify-between items-center p-1">
                <div className="size-2.5 rounded-sm bg-white"></div>
                <div className="size-2.5 rounded-sm bg-white"></div>
                <div className="size-2.5 rounded-sm bg-white"></div>
                <div className="size-2.5 rounded-sm bg-white"></div>
                <div className="size-2.5 rounded-sm bg-white"></div>
                <div className="size-2.5 rounded-sm bg-white"></div>
                <div className="size-2.5 rounded-sm bg-white"></div>
                <div className="size-2.5 rounded-sm bg-white"></div>
                <div className="size-2.5 rounded-sm bg-white"></div>
                <div className="size-2.5 rounded-sm bg-white"></div>
                <div className="size-2.5 rounded-sm bg-white"></div>
                <div className="size-2.5 rounded-sm bg-white"></div>
            </div>
        </div>

    )
}

export default StyledImage