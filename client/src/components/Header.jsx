import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center my-24'>
      {/* Badge */}
      <div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500 mb-6'>
        <p>Best text to image generator</p>
        <img src={assets.star_icon} alt="star" />
      </div>

      {/* Main Heading */}
      <h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto text-center text-black'>
        Turn text to <span className='text-blue-600'>image</span>, in seconds.
      </h1>

      {/* Subtitle */}
      <p className='text-center text-xl text-gray-600 mt-6 max-w-[600px] mx-auto'>
        Unleash your creativity with AI. Turn your imagination into visual art in seconds - just type, and watch the magic happen.
      </p>

      {/* Generate Button */}
      <button className='sm:text-lg text-white bg-black rounded-full py-3 px-8 mt-8 hover:bg-gray-800 transition flex items-center gap-2'>
        <span>Generate Images</span>
        <img src={assets.star_icon} alt="star" className='w-5 h-5' />
      </button>

      {/* Generated Images Row */}
      <div className='flex gap-3 mt-16 flex-wrap justify-center'>
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <img 
            key={index}
            src={assets.sample_img_1} 
            alt={`generated-${index}`} 
            className='rounded-lg border border-gray-200 hover:scale-105 transition w-24 h-24 sm:w-32 sm:h-32 object-cover'
          />
        ))}
      </div>

      {/* Generated Text */}
      <div className='flex items-center gap-2 mt-6'>
        <img src={assets.hand_icon} alt="hand" className='w-6 h-6' />
        <p className='text-gray-600'>Generated images from Imagify</p>
      </div>
    </div>
  )
}

export default Header
