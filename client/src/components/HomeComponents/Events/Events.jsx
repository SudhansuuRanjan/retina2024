import React, { useState, useEffect } from 'react';
import './ParallaxStars.css';
import { FaPlay, FaPause, FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Events = () => {
    // Generate random stars
    const generateBoxShadows = (count) => {
        let boxShadow = '';
        for (let i = 0; i < count; i++) {
            const x = Math.floor(Math.random() * 2000);
            const y = Math.floor(Math.random() * 2000);
            boxShadow += `${x}px ${y}px #FFF, `;
        }
        return boxShadow.slice(0, -2); // Remove last comma and space
    };

    const events = [
        {
            title: 'Event 1',
            date: '15th January 2025',
            time: '10:00 AM',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl ultricies lacinia. Nullam nec purus nec nisl ultricies lacinia.',
            imgurl: 'https://picsum.photos/200/300?a=1'
        },
        {
            title: 'Event 2',
            date: '16th January 2025',
            time: '10:00 AM',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl ultricies lacinia. Nullam nec purus nec nisl ultricies lacinia.',
            imgurl: 'https://picsum.photos/200/300?a=2'
        },
        {
            title: 'Event 3',
            date: '17th January 2025',
            time: '10:00 AM',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl ultricies lacinia. Nullam nec purus nec nisl ultricies lacinia.',
            imgurl: 'https://picsum.photos/200/300?a=3'
        },
        {
            title: 'Event 4',
            date: '18th January 2025',
            time: '10:00 AM',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl ultricies lacinia. Nullam nec purus nec nisl ultricies lacinia.',
            imgurl: 'https://picsum.photos/200/300?a=4'
        },
        {
            title: 'Event 5',
            date: '19th January 2025',
            time: '10:00 AM',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl ultricies lacinia. Nullam nec purus nec nisl ultricies lacinia.',
            imgurl: 'https://picsum.photos/200/300?a=5'
        },
        {
            title: 'Event 6',
            date: '20th January 2025',
            time: '10:00 AM',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl ultricies lacinia. Nullam nec purus nec nisl ultricies lacinia.',
            imgurl: 'https://picsum.photos/200/300?a=6'
        },
    ]

    return (
        <div className="stars-container">
            <div id="stars" style={{ boxShadow: generateBoxShadows(700) }}></div>
            <div id="stars2" style={{ boxShadow: generateBoxShadows(200) }}></div>
            <div id="stars3" style={{ boxShadow: generateBoxShadows(100) }}></div>

            <EventSlider events={events} />

        </div>
    );
};

export default Events;


const EventSlider = ({ events }) => {
    const [cardIndex, setCardIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    // Auto play

    useEffect(() => {
        if (isPlaying) {
            const interval = setInterval(() => {
                if (cardIndex === 5) setCardIndex(0);
                else setCardIndex(cardIndex + 1);
            }, 2000);

            return () => clearInterval(interval);
        }
    }, [isPlaying, cardIndex]);

    return (
        <div id="event_container" className='lg:px-24 md:px-16 px-10 w-full py-20'>
            <div className='fancyfont lg:text-6xl md:text-6xl text-5xl'>
                <h3>
                    Retina 2024
                </h3>
                <p className=' text-yellow-500'>
                    Events
                </p>
            </div>

            <div className='my-12 lg:w-[85vw] w-[90vw] overflow-scroll scroll-container m-auto'>
                <div className='flex lg:ml-[20rem] md:ml-[10rem] ml-0'>
                    {
                        events.map((event, index) => (
                            <EventCard isActive={index == cardIndex} key={index} title={event.title} date={event.date} time={event.time} description={event.description} imgurl={event.imgurl} style={{ translate: `${-100 * cardIndex}%` }} />
                        ))
                    }
                </div>
            </div>

            <div className='flex justify-between'>
                <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className='rounded-full border border-white text-yellow-500 lg:size-16 size-14 flex items-center justify-center'>
                    {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
                </button>

                <div>
                    <button onClick={() => {
                        if (cardIndex === 0) return;
                        else setCardIndex(cardIndex - 1);

                    }} className=' text-yellow-500 px-5 py-3 border border-white active:bg-white active:text-black'>
                        <FaArrowLeft size={24} />
                    </button>
                    <button onClick={() => {
                        if (cardIndex === 5) setCardIndex(0);
                        else setCardIndex(cardIndex + 1);
                    }} className='text-yellow-500 px-5 py-3 border border-white active:bg-white active:text-black'>
                        <FaArrowRight size={24} />
                    </button>
                </div>
            </div>


        </div>
    )
}


const EventCard = ({ title, imgurl, url, style, isActive }) => {
    return (
        <div style={style} className={`img-slider-slide ${isActive ? "brightness-110 scale-110" : "brightness-50"}`}>
            <div className='relative w-[15rem] mx-10 hover:scale-105 transition cursor-pointer'>
                <div className="corner-cut-image">
                    <img src={imgurl} alt={title} className={`w-[15rem]`} />
                </div>

                <div className='absolute flex justify-between py-3 px-3 bottom-5 w-full bg-gray-900 bg-opacity-25 backdrop-blur'>
                    <h4 className='text-white fancyfont text-4xl'>
                        {title}
                    </h4>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="font-bold" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"></path></svg>
                </div>
            </div>
        </div>
    );
}