import React from 'react'

function LeftSection() {
    return (
        <div className='bg-black w-[5vw] h-screen md:block hidden ' >
            <div className=' w-16 h-full flex flex-col gap-8 mx-1 my-5 items-center ' >

                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-white hover:text-blue-500 cursor-pointer transition"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 
    .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 
    1.125-1.125h2.25c.621 0 1.125.504 
    1.125 1.125V21h4.125c.621 0 
    1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                    </svg>

                    <span className='text-white text-xs' >Home</span>

                </div>


                <div>


                    <a href='https://www.youtube.com/shorts/CF2wQzcw7qY' target="_blank" rel="noopener noreferrer">
                       
                        <svg

                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 125"
                        className="w-7 h-7 text-white hover:text-blue-500 transition cursor-pointer"
                    >
                        <path
                            d="M63.49,2.71c11.59-6.04,25.94-1.64,32.04,9.83c6.1,11.47,1.65,25.66-9.94,31.7l-9.53,5.01 
                            c8.21,0.3,16.04,4.81,20.14,12.52c6.1,11.47,1.66,25.66-9.94,31.7l-50.82,26.7c-11.59,6.04-25.94,1.64-32.04-9.83 
                            c-6.1-11.47-1.65-25.66,9.94-31.7l9.53-5.01c-8.21-0.3-16.04-4.81-20.14-12.52c-6.1-11.47-1.65-25.66,9.94-31.7L63.49,2.71 
                            L63.49,2.71z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <polygon
                            points="36,42 67,61 36,80"
                            fill="currentColor"
                        />
                    </svg>

                    </a>


                   

                    <span className='text-white text-xs ' >Shorts</span>
                </div>

                <div className='flex items-center flex-col gap-2' >


                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 text-white hover:text-blue-500 transition cursor-pointer"
                    >
                        <path
                            d="M4 10H20C21.1 10 22 10.9 22 12V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20V12C2 10.9 2.9 10 4 10Z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        />
                        <polygon
                            points="10,12.73 16,16 10,19.26"
                            fill="currentColor"
                        />
                        <rect x="4" y="6" width="16" height="2" fill="currentColor" />
                        <rect x="6" y="2" width="12" height="2" fill="currentColor" />
                    </svg>

                    <span className='text-white text-xs ' >Subscription</span>

                </div>
            </div>
        </div>
    )
}

export default LeftSection
