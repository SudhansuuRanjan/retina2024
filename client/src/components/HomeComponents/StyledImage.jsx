import "./StyledImage.css"

const StyledImage = ({ src }) => {
    return (
        <div className="lg:m-6 md:m-4 m-3">
            <div class="image-wrapper">
                <img src={`${src ? src : "https://picsum.photos/200/200?a=12"}`} alt="Rounded Image" class="rounded-image h-56 hover:scale-105 transition cursor-pointer rounded-lg" />
                <div class="absolute top-right"></div>
                <div class="absolute bottom-left"></div>
            </div>
        </div>
    )
}

export default StyledImage