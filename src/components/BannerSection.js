import React from 'react';
import Banner from '../assets/banner.svg';
import placeholder from '../assets/placeholder.svg';
import suitcase from '../assets/suitcase.svg';

const BannerSection = () => {
  return (
    <div
      className='relative bg-center h-[593px]'
      style={{
        backgroundImage: `url(${Banner})`,
      }}
    >
      <div className='absolute inset-0 bg-black opacity-10'></div>
      <div className='relative z-10 flex flex-col items-center justify-center h-full text-white px-4'>
        <h1 className='text-center text-3xl md:text-5xl leading-[2.5rem] md:leading-[4rem] mb-6'>
          <span className='font-extrabold'>Are You a Supplier?</span>
          <br />
          <span className='font-thin'>Explore Matching Opportunities.</span>
        </h1>
        <div className='w-full flex justify-center flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mt-6'>
          <div className='relative'>
            <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
              <img src={suitcase} alt='suitcase' />
            </span>
            <input
              type='text'
              placeholder='Search your required service here'
              className='pl-10 p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 h-14 w-full lg:w-[400px]'
            />
          </div>
          <div className='relative'>
            <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
              <img src={placeholder} alt='placeholder' />
            </span>
            <input
              type='text'
              placeholder='Search your desired location here'
              className='pl-10 p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 h-14 w-full lg:w-[400px]'
            />
          </div>
          <button className='p-3 bg-[#00732F] hover:bg-green-800 rounded-md lg:w-[118px]'>
            Search
          </button>
        </div>
        <p className='text-white text-lg mt-10'>
          <span className='mr-3 font-bold'>Are you a buyer?</span>
          <a href='#more-info' className='underline font-thin'>
            Click here if you are looking to post a requirements
          </a>
        </p>
      </div>
    </div>
  );
};

export default BannerSection;
