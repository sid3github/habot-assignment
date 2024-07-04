import React from 'react';
import Logo from '../assets/logo_white.svg';
import Facebook from '../assets/Facebook.svg';
import Twitter from '../assets/Twitter.svg';
import Instagram from '../assets/Instagram.svg';
import LinkedIn from '../assets/LinkedIn.svg';

const Footer = () => {
  return (
    <div className='bg-[#123557] mt-[8rem] py-10'>
      <div className='w-full max-w-[1200px] mx-auto  border-y-[0.5px] border-gray-500 px-5 lg:px-0 py-5 flex items-center lg:justify-between flex-col lg:flex-row'>
        <div className='w-full lg:basis-64'>
          <img className='mt-6' src={Logo} alt='logo' />
          <p className='ml-2 mt-3 font-thin text-gray-300'>© R Singhania</p>
        </div>
        <div className='w-full py-5 lg:basis-1/2'>
          <div className='flex flex-col lg:flex-row gap-5 lg:gap-20'>
            <div>
              <span className='text-white font-extrabold text-sm'>Company</span>
              <ul className='text-gray-300 font-thin text-xs mt-2 leading-6'>
                <li className='cursor-pointer hover:underline'>About</li>
                <li className='cursor-pointer hover:underline'>FAQ</li>
              </ul>
            </div>

            <div>
              <span className='text-white font-extrabold text-sm'>Terms</span>
              <ul className='text-gray-300 font-thin text-xs mt-2 leading-6'>
                <li className='cursor-pointer hover:underline'>Data Privacy</li>
                <li className='cursor-pointer hover:underline'>Terms</li>
                <li className='cursor-pointer hover:underline'>
                  Accessibility
                </li>
              </ul>
            </div>

            <div>
              <span className='text-white font-extrabold text-sm'>Related</span>
              <ul className='text-gray-300 font-thin text-xs mt-2 leading-6'>
                <li className='cursor-pointer hover:underline'>Find Buyer</li>
                <li className='cursor-pointer hover:underline'>Feedback</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='w-full lg:basis-1/4'>
          <div className='flex flex-row lg:justify-end'>
            <img
              className='rounded cursor-pointer mr-4'
              src={LinkedIn}
              alt='linkedin'
            />
            <img
              className='rounded cursor-pointer mr-4'
              src={Twitter}
              alt='twitter'
            />
            <img
              className='rounded cursor-pointer mr-4'
              src={Facebook}
              alt='facebook'
            />
            <img
              className='rounded cursor-pointer'
              src={Instagram}
              alt='instagram'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
