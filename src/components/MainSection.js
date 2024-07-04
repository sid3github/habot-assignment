import React from 'react';
import rightArrow from '../assets/right_arrow.svg';
import videoBox from '../assets/video_section.svg';
import work1 from '../assets/work_1.svg';
import work2 from '../assets/work_2.svg';
import work3 from '../assets/work_3.svg';
import work4 from '../assets/work_4.svg';
import work5 from '../assets/work_5.svg';
import work6 from '../assets/work_6.svg';

const MainSection = () => {
  return (
    <>
      {/* sign up section */}

      <div className='flex flex-col items-center justify-center min-h-full py-16 max-w-7xl mx-auto sm:px-4 lg:px-6'>
        <div className='flex flex-col lg:flex-row lg:justify-between items-center w-full'>
          <div className='flex flex-col items-center lg:items-start text-center lg:text-left w-full p-4'>
            <h1 className='text-3xl md:text-4xl font-extrabold'>
              Ready to dive into HABOT?
            </h1>
            <p className='max-w-md text-base my-10 font-light'>
              Signing up with HABOT opens the door to a world of new
              opportunities and potential for business growth. Gain access to a
              vibrant community of like-minded individuals, unlock valuable
              resources, and take the first step towards realizing your
              entrepreneurial dreams.
            </p>
            <button className='flex items-center justify-around bg-[#00732F] hover:bg-green-800 h-[54px] w-[317px] text-white px-6 py-2 rounded mb-6'>
              <span>Sign up Today!</span>
              <img className='w-8 h-4' src={rightArrow} alt='right arrow' />
            </button>
          </div>

          <div className='flex flex-wrap justify-center lg:justify-end gap-4 p-4'>
            <div className='flex justify-center items-center border border-[#E7760D] text-[#3E3E3E] px-4 py-2 h-16 w-64 rounded text-center'>
              <p>Abu Dhabi</p>
            </div>
            <div className='flex justify-center items-center border border-[#E7760D] text-[#3E3E3E] px-4 py-2 h-16 w-64 rounded text-center'>
              <p>Dubai</p>
            </div>
            <div className='flex justify-center items-center border border-[#E7760D] text-[#3E3E3E] px-4 py-2 h-16 w-64 rounded text-center'>
              <p>Sharjah & Ajman</p>
            </div>
            <div className='flex justify-center items-center border border-[#E7760D] text-[#3E3E3E] px-4 py-2 h-16 w-64 rounded text-center'>
              <p>Fujairah</p>
            </div>
            <div className='flex justify-center items-center border border-[#E7760D] text-[#3E3E3E] px-4 py-2 h-16 w-64 rounded text-center'>
              <p>Ras Al Khaimah</p>
            </div>
            <div className='flex justify-center items-center border border-[#E7760D] text-[#3E3E3E] px-4 py-2 h-16 w-64 rounded text-center'>
              <p>Umm Al Quwain</p>
            </div>
          </div>
        </div>
      </div>

      {/* video section */}

      <div className='flex flex-col items-center justify-center min-h-[623px] rounded w-full max-w-[1200px] mx-auto bg-[#072F57] py-4 px-4 lg:px-8'>
        <div className='flex flex-col lg:flex-row lg:justify-between items-center w-full'>
          <div className='w-full lg:w-1/2 p-4'>
            <img
              src={videoBox}
              alt='Video Thumbnail'
              className='rounded lg:object-cover w-full h-[200px] sm:h-[300px] md:h-[350px] lg:w-[640px] lg:h-[350px]'
            />
          </div>
          <div className='flex flex-col w-full lg:w-1/2 p-4 lg:px-[4rem] h-auto lg:h-[350px] text-white'>
            <div className='flex flex-col lg:flex-row justify-between mb-9'>
              <span className='text-2xl font-bold text-[#EB7150] pb-3 lg:pb-0 text-center'>
                Buyer
                <hr className='mt-3 w-full lg:w-48 border-2 border-[#EB7150]' />
              </span>
              <span className='text-2xl font-bold lg:mt-0 text-center'>
                Supplier
              </span>
            </div>
            <ul className='space-y-4 leading-7 md:leading-[39px]'>
              <li className='flex items-start'>
                <svg
                  className='w-6 h-6 text-green-500 mr-2 mt-1'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
                <span>Post your requirements.</span>
              </li>
              <li className='flex items-start'>
                <svg
                  className='w-6 h-6 text-green-500 mr-2 mt-1'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
                <span>Sit back for multiple suppliers to contact you.</span>
              </li>
              <li className='flex items-start'>
                <svg
                  className='w-6 h-6 text-green-500 mr-2 mt-1'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
                <span>
                  Choose among the suppliers based on the ratings and reviews.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* fluid verified section */}

      <div className='flex flex-col md:flex-row items-center justify-around p-4 md:p-8 h-56 my-8 md:my-24 bg-[#E8FBFF]'>
        <div className='font-bold sm:text-center text-3xl md:text-4xl mb-4 md:mb-0 md:mr-4'>
          Let Suppliers
          <span className='ml-2 border-b-4 border-[#EB7150]'>Find You</span>
        </div>
        <button className='bg-[#EB7150] hover:bg-orange-700 text-white font-bold py-2 px-10 rounded'>
          Get Verified
        </button>
      </div>

      {/* works section */}

      <div class='w-full max-w-[1200px] mx-auto py-8'>
        <div className='w-[70%] mx-auto'>
          <h1 class='text-4xl font-extrabold text-center mb-8'>
            How it works?
          </h1>

          <p class='text-center mb-16 text-lg md:text-base'>
            Buyers post their needs and review top suppliers, while suppliers
            complete profiles, connect with potential buyers, and build
            successful business relationships, sharing valuable feedback.
          </p>
        </div>

        <div class='grid grid-cols-1  lg:grid-cols-3 mx-auto max-w-7xl'>
          <div class='flex flex-col items-center justify-center text-center bg-[#E8FBFF] p-6'>
            <img src={work1} alt='work 1' class='w-16 h-16 mb-4' />
            <h3 class='text-lg font-semibold mb-2 w-[250px]'>
              Select Your Role and Sign Up
            </h3>
            <p class='text-sm text-center'></p>
          </div>

          <div class='flex flex-col items-center justify-center text-center p-6'>
            <img src={work2} alt='work 2' class='w-16 h-16 mb-4' />
            <h3 class='text-lg font-semibold mb-2 w-[250px]'>
              Buyers Post Your Requirements
            </h3>
            <p class='text-sm text-center'></p>
          </div>

          <div class='flex flex-col items-center justify-center text-center bg-[#E8FBFF] p-6'>
            <img src={work3} alt='work 3' class='w-16 h-16 mb-4' />
            <h3 class='text-lg font-semibold mb-2 w-[250px]'>
              Review, Select, and Contact the Best Suppliers
            </h3>
            <p class='text-sm text-center'></p>
          </div>

          <div class='flex flex-col items-center justify-center text-center p-6'>
            <img src={work4} alt='work 4' class='w-16 h-16 mb-4' />
            <h3 class='text-lg font-semibold mb-2 w-[250px]'>
              Suppliers Complete your profile and get notified for opportunities
            </h3>
            <p class='text-sm text-center'></p>
          </div>

          <div class='flex flex-col items-center justify-center text-center bg-[#E8FBFF] p-6'>
            <img src={work5} alt='work 5' class='w-16 h-16 mb-4' />
            <h3 class='text-lg font-semibold mb-2 w-[250px]'>
              Contact to Buyers and Share your Quote for the service
            </h3>
            <p class='text-sm text-center'></p>
          </div>

          <div class='flex flex-col items-center justify-center text-center p-6'>
            <img src={work6} alt='work 6' class='w-16 h-16 mb-4' />
            <h3 class='text-lg font-semibold mb-2 w-[250px]'>
              Both the Parties can Connect and Make Business Leave a Feedback
            </h3>
            <p class='text-sm text-center'></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
