import React from 'react'

const PrimaryButton = ({ title, ...rest }) => {
    return (
        <button className='w-full dm-sans-regular bg-white transition-all shadow hover:bg-gray-200 font-semibold text-black rounded-[20px] md:py-4 py-3.5 md:px-7 px-5'>
            {
                title
            }
        </button>
    )
}

export default PrimaryButton