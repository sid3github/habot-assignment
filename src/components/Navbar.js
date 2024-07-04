import React, { useState } from 'react';
import Logo from '../assets/habot_logo.svg';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <img src={Logo} alt='Logo' className='h-8 w-auto mr-4' />
            </div>
          </div>
          <div className='hidden md:flex items-center space-x-4'>
            <a
              href='#find-suppliers'
              className='text-[#6D6E71] hover:text-[#6D6E71] px-3 py-2 text-sm font-medium'
            >
              Find Suppliers
            </a>
            <a
              href='#find-service-tags'
              className='flex items-center text-[#6D6E71] hover:text-[#6D6E71] px-3 py-2 text-sm font-medium'
            >
              Find Service Tags
              <svg
                className='ml-1 h-4 w-4'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </a>
            <button className='border border-[#00732F] text-[#00732F] hover:bg-[#00732F] hover:text-white px-4 py-2 rounded-md text-sm font-bold'>
              Login / Sign Up
            </button>
          </div>
          <div className='md:hidden'>
            <button
              onClick={toggleMobileMenu}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16m-7 6h7'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <a
              href='#find-suppliers'
              className='text-[#6D6E71] hover:text-[#6D6E71] block px-3 py-2 text-base font-medium'
            >
              Find Suppliers
            </a>
            <a
              href='#find-service-tags'
              className='flex items-center text-[#6D6E71] hover:text-[#6D6E71] px-3 py-2 text-base font-medium'
            >
              Find Service Tags
              <svg
                className='ml-1 h-4 w-4'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </a>
            <button className='border border-[#00732F] text-[#00732F] hover:bg-[#00732F] hover:text-white block w-full text-left px-4 py-2 rounded-md text-base font-bold'>
              Login / Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
