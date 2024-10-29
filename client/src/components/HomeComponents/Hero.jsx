import React from 'react'
import PrimaryButton from '../Buttons/PrimaryButton'

const Hero = () => {
    return (
        <div className='bg-[url("/banner.webp")]  h-screen w-full bg-center bg-cover'>
            <div className='fancyfont flex items-center justify-center flex-col pt-32'>
                <h1 className='text-background text-center'>
                    Retina<br />7.0
                    <br /><span className='lg:text-4xl text-3xl font-sans'>
                        AIIMS Bhopal
                    </span>
                </h1>
            </div>

            <div className='flex items-center justify-center flex-col gap-6 m-auto lg:w-[28rem] md:w-[24rem] w-[80%] mt-8'>
                <PrimaryButton title='Delegate Card Registration' />
                <PrimaryButton title='Event Registration' />
            </div>
        </div>
    )
}

export default Hero;