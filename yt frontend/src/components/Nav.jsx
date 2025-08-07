import React from 'react'
import { HugeiconsIcon } from '@hugeicons/react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { Menu01Icon } from '@hugeicons-pro/core-stroke-standard';

function Nav() {

  const navigate = useNavigate()
  const userDetails = useSelector((state) => state.login.user)
  // console.log("This is infro from the nav bar", userDetails);


  return (
    <div className='pt-1 flex bg-black h-12 gap-1 items-center md:h-12 '>



   <svg
  className="w-7 h-7 mx-3"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
>
  <path
    d="M4 5L20 5"
    stroke="#ffffff"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M4 12L20 12"
    stroke="#ffffff"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M4 19L20 19"
    stroke="#ffffff"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>


      <div onClick={() => navigate("/home")} className=" cursor-pointer gap-1  flex  items-center text-white  ">
        <svg
  viewBox="0 0 24 24"
  className="w-7 h-7"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M12 3.25C9.52631 3.25 7.17304 3.40962 5.04751 3.69767C2.78476 4.0043 1.25 5.99235 1.25 8.19868V15.8013C1.25 18.0076 2.78476 19.9957 5.04751 20.3023C7.17304 20.5904 9.52631 20.75 12 20.75C14.4737 20.75 16.827 20.5904 18.9525 20.3023C21.2152 19.9957 22.75 18.0076 22.75 15.8013V8.19869C22.75 5.99235 21.2152 4.0043 18.9525 3.69767C16.827 3.40962 14.4737 3.25 12 3.25ZM10.3859 8.35688C10.1542 8.21786 9.86561 8.21422 9.63048 8.34735C9.39534 8.48048 9.25 8.7298 9.25 9V15C9.25 15.2702 9.39534 15.5195 9.63048 15.6526C9.86561 15.7858 10.1542 15.7821 10.3859 15.6431L15.3859 12.6431C15.6118 12.5076 15.75 12.2634 15.75 12C15.75 11.7366 15.6118 11.4924 15.3859 11.3569L10.3859 8.35688Z"
    fill="#ff0000"
  />
</svg>


        <div>Youtube</div>


      </div>


      {/* <div className=" mx-72 w-[45%] h-[80%] flex justify-end  border border-gray-800 rounded-full "> */}

      <div className=" md:mx-72 md:w-[45%] md:h-[80%] md:flex md:justify-end md:border md:border-gray-800 rounded-full ">


        <input
          type="text"
          placeholder="  Search"
          className=" hidden  md:block md:bg-transparent md:outline-none md:px-4 md:w-full text-white placeholder-gray-500"
        />


        <div className='  md:bg-[rgba(255,255,255,0.2)] md:h-full md:w-[10%] rounded-full flex items-center justify-center ' >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" strokeWidth={1.5}
            stroke="currentColor" className="w-8 h-6 mx-2 text-white">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>


        </div>

      </div>



      <div className='flex gap-2 md:gap-5 md:mr-3 items-center '>

        <div
          onClick={() => navigate("/upload")}
          className='bg-[rgba(255,255,255,0.2)] cursor-pointer flex items-center justify-center w-24 h-8 gap-1 md:w-28 md:h-9 rounded-full '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" strokeWidth={1.5}
            stroke="currentColor" className="w-7 text-white">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <span className='text-white text-center mb-1 ' >Create</span>
        </div>
        <div className="bg-black  md:block ">

          <svg xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-white">
            <path strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
          </svg>


        </div>
        <div onClick={() => navigate("/profile")} className="cursor-pointer size-6 text-white bg-black  ">

        {/* <svg
            onClick={() => navigate("/profile")}

            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="cursor-pointer size-6 text-white">
            <path strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg> */}
        <img className='rounded-full' src={userDetails?.avatar} alt="user_image" />




      </div>

    </div>
    </div >


  )
}

export default Nav
