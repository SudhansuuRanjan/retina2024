import React from 'react'

const AboutUs = () => {
    return (
        <div className='flex items-center justify-center flex-col w-full py-20'>
            <div className='fancyfont  text-center lg:text-6xl md:text-6xl text-5xl'>
                <h3>
                    About Us
                </h3>
            </div>

            <div className='flex lg:flex-row flex-col gap-2 items-center justify-evenly w-full lg:pt-20 pt-12'>
                <div className='relative w-[30rem] lg:scale-100 md:scale-95 scale-75'>
                    <img className='w-[30rem]' src="/tv.png" alt="tv" />
                    <img className='absolute top-[4.5rem] left-16 w-[24rem] h-[17.5rem]' src="/gta_video.webp" alt="relative" />
                </div>

                <div className='lg:max-w-xl md:max-w-xl w-full lg:px-3 md:px-3 px-10 flex flex-col gap-5 dm-sans-light text-lg'>
                    <p>
                        Welcome to <span className="text-yellow-500">Retina 7.0!</span> This isn't just any fest—it's the biggest socio-cultural and sports festival by a medical college in India, hosted by AIIMS Bhopal! We're back for our seventh year, and we're ready to make it bigger, louder, and more unforgettable than ever.
                    </p>

                    <p>
                        From sports to quirky challenges, there's something here for everyone to enjoy, test their skills, and make memories.
                    </p>

                    <p>
                        Meet India's favourite famous singers and artists, delivering electrifying performances that'll have everyone singing along and dancing under the stars.
                    </p>

                    <p>
                        Come join us at Retina 7.0—where culture, talent, and fun collide in a celebration like no other. Let's make this one for the books!
                    </p>
                </div>
            </div>

        <div className=' bg-[url(/mario_running.webp)]  bg-repeat-x  bg-contain bg-bottom h-48 w-full'>
            </div>

        </div>
    )
}

export default AboutUs