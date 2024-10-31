import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='dm-sans-regular pt-20 bg-gradient-to-b from-black via-gray-900  to-black w-full'>
            <div className='flex lg:flex-row md:flex-row flex-col items-end lg:px-10 md:px-5 px-10 lg:gap-3 md:gap-2 gap-10'>
                <div className='lg:max-w-lg md:max-w-md w-full'>
                    <h5 className='font-semibold lg:text-6xl md:text-5xl text-4xl'>
                        Largest <span className='text-yellow-500'>Fest</span> of Central India.
                    </h5>
                    <div className='flex gap-4 my-10'>
                        <div className='h-10 w-10 rounded-full flex justify-center items-center bg-white hover:bg-opacity-25 cursor-pointer bg-opacity-15 transition' href="">
                            <FaFacebook size={26} />
                        </div>
                        <div className='h-10 w-10 rounded-full flex justify-center items-center bg-white hover:bg-opacity-25 cursor-pointer bg-opacity-15 transition' href="">
                            <FaInstagram size={26} />
                        </div>
                        <div className='h-10 w-10 rounded-full flex justify-center items-center bg-white hover:bg-opacity-25 cursor-pointer bg-opacity-15 transition' href="">
                            <FaTwitter size={26} />
                        </div>

                        <div className='h-10 w-10 rounded-full flex justify-center items-center bg-white hover:bg-opacity-25 cursor-pointer bg-opacity-15 transition' href="">
                            <FaYoutube size={26} />
                        </div>
                    </div>
                </div>

                <div className='lg:max-w-lg md:max-w-md w-full'>
                    <h5 className='text-base font-semibold flex items-center gap-2'><div className='size-2 rounded-full bg-yellow-400'></div> Quick Links</h5>
                    <div className='w-full flex flex-wrap gap-2 font-light mt-5'>
                        <div className='bg-gray-400 hover:bg-opacity-25 cursor-pointer w-fit rounded-full bg-opacity-15 py-2 px-6'>
                            Home
                        </div>

                        <div className='bg-gray-400 hover:bg-opacity-25 cursor-pointer w-fit rounded-full bg-opacity-15 py-2 px-6'>
                            Events
                        </div>

                        <div className='bg-gray-400 hover:bg-opacity-25 cursor-pointer w-fit rounded-full bg-opacity-15 py-2 px-6'>
                            Schedule
                        </div>

                        <div className='bg-gray-400 hover:bg-opacity-25 cursor-pointer w-fit rounded-full bg-opacity-15 py-2 px-6'>
                            Gallery
                        </div>

                        <div className='bg-gray-400 hover:bg-opacity-25 cursor-pointer w-fit rounded-full bg-opacity-15 py-2 px-6'>
                            Delegate Registartion
                        </div>


                        <div className='bg-gray-400 hover:bg-opacity-25 cursor-pointer w-fit rounded-full bg-opacity-15 py-2 px-6'>
                            Privacy Policy
                        </div>

                        <div className='bg-gray-400 hover:bg-opacity-25 cursor-pointer w-fit rounded-full bg-opacity-15 py-2 px-6'>
                            Terms of Service
                        </div>

                        <div className='bg-gray-400 hover:bg-opacity-25 cursor-pointer w-fit rounded-full bg-opacity-15 py-2 px-6'>
                            Refund Policy
                        </div>
                    </div>
                </div>

                <div className='lg:max-w-md md:max-w-md w-full'>
                    <h5 className='text-base font-semibold flex items-center gap-2'><div className='size-2 rounded-full bg-yellow-400'></div> Contact</h5>
                    <div className='w-full flex flex-col gap-3 font-medium mt-5'>
                        <div className='text-gray-500 hover:text-gray-400 cursor-pointer'>
                            contact@retinaaiims.com
                        </div>

                        <div className='text-gray-500 hover:text-gray-400 cursor-pointer'>
                            +91 (667) 243-9152
                        </div>

                        <div className='text-gray-500 hover:text-gray-400 cursor-pointer'>
                            Saket Nagar, Habib Ganj, Bhopal, India
                        </div>
                    </div>
                </div>

            </div>

            <div className='lg:mt-[-0.5rem] md:mt-0 mt-5 pb-5'>
                <div className='relative fancyfont  z-50 flex items-center justify-center flex-col'>
                    <h1 className='text-center text-footer-bg lg:text-[16rem] md:text-[10rem] text-[5rem]'>
                        Retina <span className=''> 7.0</span>
                    </h1>
                </div>
                {/* <img className='w-full px-10 py-20' src="/retina_lg.svg" alt="logo" /> */}
            </div>

            <div className='px-10 py-10'>
                <div className='flex lg:flex-row md:flex-row flex-col items-center justify-between gap-2 text-gray-500'>
                    <p className='text-sm'>
                        © 2024 AIIMS Bhopal. All rights reserved.
                    </p>
                    <p className='text-sm'>
                        Developed & Maintained by <a className='text-yellow-500 hover:text-gray-400' href=" ">EventBase.</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer