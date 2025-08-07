import { number } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


function AdditionalFunction({ isLoading, likes, _id, isliked, setisliked }) {

    const video_id = _id
    // console.log("this is isliked",isliked   )



    // const [addResponseLike, setResponseLike] = useState(0)
    const [tempLike, setTempLike] = useState(likes)

    // useEffect(() => {
    //   console.log("i am runned")
    //     setResponseLike(0)

    // }, [])




    const handleLike = async () => {
        try {

            const response = await fetch('http://localhost:8000/api/v1/users/addlike', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ _id }),
                credentials: 'include'

            })

            const data = await response.json()
            // console.log("dats is ", data);



            // console.log("this is likes ",likes);

            if (data.sucess) {
                setisliked(true)
                setTempLike(tempLike + 1)
                // setResponseLike(1)

            }


            console.log("this is from additiaonl function ", data)
        } catch (error) {
            throw error
        }
    }

    const handleReomveLike = async () => {

        try {
            const response = await fetch("http://localhost:8000/api/v1/users/removelike", {
                method: "POST",
                body: JSON.stringify({ _id }),
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: 'include'
            })

            const data = await response.json()

            if (data.sucess) {
                setisliked(false)
                setTempLike(tempLike - 1)
                // console.log("this is data",data)
            }

        } catch (error) {
            console.log("Error while reomving like", error)
        }



    }


    // const like = likes
    // console.log("the lkes ",likes)

    //    const { likes } = likes 

    return (
        <div className='mt-3 ml-3 flex gap-2 overflow-x-auto scrollbar-hide ' >

            {isLoading ? (
                <div className=' w-32'>

                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                        <Skeleton height={30}   borderRadius={99} count={1} />

                    </SkeletonTheme>
                </div>
            ) : (



                <div className='text-white  flex h-8 px-3  justify-center gap-2 rounded-full  items-center bg-[#363636] ' >





                    {isliked ? (

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="white"
                            className="w-5 h-6 cursor-pointer  "
                            role="img"
                            onClick={handleReomveLike}
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6 19.5546L3 19.5546V11.7479H6V19.5546ZM2.99999 21.5546L5.99999 21.5546C7.10456 21.5546 8 20.6592 8 19.5546V11.7479C8 10.6433 7.10457 9.7479 6 9.7479H3C1.89543 9.7479 1 10.6433 1 11.7479V19.5546C1 20.6592 1.89542 21.5546 2.99999 21.5546Z"
                                fill="currentColor"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6.25 20.7499C6.25 21.1642 6.58579 21.4999 7 21.4999H18.081C19.2496 21.4999 20.2906 20.7614 20.6766 19.6584L22.7766 13.6584C23.4024 11.8704 22.0754 9.99994 20.181 9.99994H15.6541L15.7907 9.69257C16.757 7.51844 16.2845 4.97375 14.6021 3.29141L14.5303 3.21961C14.2374 2.92672 13.7626 2.92672 13.4697 3.21961L6.46967 10.2196C6.32902 10.3603 6.25 10.551 6.25 10.7499V20.7499Z"
                                fill="currentColor"
                            />
                        </svg>

                    ) : (

                        <svg
                            // height="19px"
                            // width="20px"
                            viewBox="0 0 20 19"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            onClick={handleLike}
                            className={`text-white cursor-pointer w-5 h-4 `}
                        >
                            <g
                                fill="none"
                                fillRule="evenodd"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1"
                            >
                                <g strokeWidth="2" transform="translate(-2.000000, -2.000000)">
                                    <g transform="translate(3.000000, 3.314575)">
                                        <path d="M0.571428571,6.68542457 L4,6.68542457 L4,16.6854246 L0.571428571,16.6854246 C0.255837286,16.6854246 0,16.3410282 0,15.9161938 L0,7.45465534 C0,7.02982092 0.255837286,6.68542457 0.571428571,6.68542457 Z" />
                                        <path d="M4,7.43542457 L7.29966809,1.04231764 C7.78713518,0.0977581736 8.94803678,-0.272742337 9.8925769,0.214762241 C10.0690433,0.305841656 10.2303505,0.423683717 10.370771,0.564104226 C10.9333801,1.12671336 11.2494506,1.8897751 11.2494506,2.68542457 L11.2494506,5.68542457 L16.500278,5.68542457 C16.9305244,5.68542457 17.3400569,5.87017416 17.624795,6.19272057 C17.9095331,6.51526698 18.0420596,6.94455262 17.988694,7.37147657 L16.863694,15.3714776 C16.7698634,16.1221204 16.1317626,16.6854246 15.375278,16.6854246 L4,16.6854246" />
                                    </g>
                                </g>
                            </g>
                        </svg>



                    )

                    }




                    <span className='text-xs' >{`  ${tempLike}  `}  </span>


                    <div className='w-px h-5  bg-[#9e9e9e]' ></div>


                    <svg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="text-white  h-6"
                    >
                        <title />
                        <g data-name="Layer 35" id="Layer_35">
                            <path d="M23.5,5.27H7.08a2,2,0,0,0-2,1.56L3.07,16h0A3,3,0,0,0,6,19.63h5.69V24a3,3,0,0,0,3,3h.4a2,2,0,0,0,1.66-.9L21,19.63H23.5a3,3,0,0,0,3-3V8.27A3,3,0,0,0,23.5,5.27ZM15.09,25h-.4a1,1,0,0,1-1-1V18.63a1,1,0,0,0-1-1H6a1,1,0,0,1-1-1.22L7.08,7.27H19.49V18.33Zm9.41-8.37a1,1,0,0,1-1,1h-2V7.27h2a1,1,0,0,1,1,1Z" />
                        </g>
                    </svg>



                </div>

            )

            }

            <div className='text-white flex h-8 px-3  justify-center gap-2 rounded-full  items-center bg-[#363636] ' >

                <svg
                    className="text-white mt-1 w-6 "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"

                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M16.1667 7V3.85355C16.1667 3.65829 16.3316 3.5 16.535 3.5C16.6326 3.5 16.7263 3.53725 16.7954 3.60355L21.5275 8.14645C21.7634 8.37282 21.8958 8.67986 21.8958 9C21.8958 9.32014 21.7634 9.62718 21.5275 9.85355L16.7954 14.3964C16.7263 14.4628 16.6326 14.5 16.535 14.5C16.3316 14.5 16.1667 14.3417 16.1667 14.1464V11H13.1157C8.875 11 7.3125 14.5 7.3125 14.5V12C7.3125 9.23858 9.64435 7 12.5208 7H16.1667Z" />
                </svg>

                <div>Share</div>


            </div>

            <div className='text-white flex h-8 px-3  justify-center gap-2 rounded-full  items-center bg-[#363636] ' >


                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                </svg>

                <span>Save</span>


            </div>

            <div className='text-white flex h-8 px-3   justify-center gap-2 rounded-full  items-center bg-[#363636] ' >

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>


                <span className="whitespace-nowrap" >Stop ads</span>

            </div>

            <div className='text-white flex h-8 px-3   justify-center gap-2 rounded-full  items-center bg-[#363636] ' >

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m7.848 8.25 1.536.887M7.848 8.25a3 3 0 1 1-5.196-3 3 3 0 0 1 5.196 3Zm1.536.887a2.165 2.165 0 0 1 1.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 1 1-5.196 3 3 3 0 0 1 5.196-3Zm1.536-.887a2.165 2.165 0 0 0 1.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863 2.077-1.199m0-3.328a4.323 4.323 0 0 1 2.068-1.379l5.325-1.628a4.5 4.5 0 0 1 2.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.33 4.33 0 0 0 10.607 12m3.736 0 7.794 4.5-.802.215a4.5 4.5 0 0 1-2.48-.043l-5.326-1.629a4.324 4.324 0 0 1-2.068-1.379M14.343 12l-2.882 1.664" />
                </svg>

                <span>Clip</span>

            </div>

            <div className='text-white flex h-8 px-3   justify-center gap-2 rounded-full  items-center bg-[#363636] ' >

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
                </svg>

                <span>Report</span>


            </div>





        </div>
    )
}

export default AdditionalFunction
