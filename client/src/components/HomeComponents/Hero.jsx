import PrimaryButton from '../Buttons/PrimaryButton'

const Hero = () => {
    return (
        <div className='hero-banner h-screen w-full bg-center bg-cover'>
            <div className='relative fancyfont z-50 flex items-center justify-center flex-col lg:pt-32 md:pt-32 pt-40'>
                <h1 className='text-background text-center'>
                    Retina<br />7.0
                    <br /><span className='lg:text-4xl text-3xl dm-sans-regular'>
                        AIIMS Bhopal
                    </span>
                </h1>
            </div>

            <div className='relative flex z-50 items-center justify-center flex-col gap-6 m-auto lg:w-[28rem] md:w-[24rem] w-[80%] mt-8'>
                <PrimaryButton title='Delegate Card Registration' />
                <PrimaryButton title='Event Registration' />
            </div>
        </div>
    )
}

export default Hero;