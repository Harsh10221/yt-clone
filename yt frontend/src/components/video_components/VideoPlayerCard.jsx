import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import AdditionalFunction from './AdditionalFunction';
import VideoCard from './VideoCard';

import DesktopVidoHolder from './DesktopVidoHolder';
import CommentHolder from './CommentHolder';
import { data } from 'react-router-dom';
import { transformValue } from 'framer-motion';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


function VideoPlayerCard({ video }) {

    // console.log("this is video ",video);


    const videoDetails = video.video
    const _id = videoDetails._id
    const owner_id = videoDetails.owner
    const userDetails = video.user


    // console.log("this is video ",videoDetails);




    const [time, settime] = useState("00:00")
    const videoRef = useRef(null)
    const videoBarRef = useRef(null)
    const [isplaying, setIsPlaying] = useState(true)
    const [isLoading, setIsLoading] = useState(true)
    const [isMute, setIsMute] = useState(true)
    const [progress, setProgress] = useState(0)
    const [isvisible, setIsvisible] = useState(true)
    const [isDescriptionvisible, setIsDescriptionvisible] = useState(false)
    const [fullTimeDisplay, setFullTimeDisplay] = useState("00:00")
    const [isliked, setisliked] = useState(false)
    const [isSubscribe, setisSubscribe] = useState(false)






    const formatTime = (tiemInSeconds) => {

        if (isNaN(tiemInSeconds)) return "0:00";

        const time = Math.floor(tiemInSeconds)
        const hours = Math.floor(time / 3600)
        const minutes = Math.floor((time % 3600) / 60)
        const seconds = Math.floor(time % 60)

        const paddedMinutes = String(minutes).padStart(2, "0")
        const paddedSeconds = String(seconds).padStart(2, "0")



        if (hours > 0) {
            return `${hours}:${paddedMinutes}:${paddedSeconds}`
        } else {
            return `${paddedMinutes}:${paddedSeconds}`

        }

    }

    const handleDescpriction = () => {
        setIsDescriptionvisible(prev => !prev)
        console.log(" i am clicked ")

    }


    const handleMouseEnter = () => {
        setIsvisible(true)
    }

    const handleMouseLeave = () => {
        setIsvisible(false)
    }

    const handlePlayPause = () => {
        if (isplaying) {
            // console.log("state",isplaying);
            videoRef.current.pause()



        } else {
            videoRef.current.play()

        }
        setIsPlaying(!isplaying)
    }

    const handleaudio = () => {
        if (isMute) {
            videoRef.current.muted = true
        } else {
            videoRef.current.muted = false
        }


        setIsMute((prev) => !prev)

    }


    useEffect(() => {
        const runActions = async () => {



            try {
                const [
                    updateViewResponse,
                    historyResponse,
                    likeResponse,
                    subscribeResponse

                ] = await Promise.all([
                    axios.post('http://localhost:8000/api/v1/users/updateview', { _id }, { withCredentials: true }),
                    axios.post('http://localhost:8000/api/v1/users/add-video-in-history', { _id }, { withCredentials: true }),
                    axios.post('http://localhost:8000/api/v1/users/checkliked', { _id }, { withCredentials: true }),
                    axios.post('http://localhost:8000/api/v1/users/check-subscribe', { owner_id }, { withCredentials: true })

                ])

                if (likeResponse.data.sucess && subscribeResponse.data.sucess) {
                    setIsLoading(false)
                    // console.log("like", likeResponse.data.sucess)
                    // console.log("sub", subscribeResponse.data.sucess)
                }


                likeResponse.data.data ? setisliked(true) : setisliked(false)
                subscribeResponse.data.data ? setisSubscribe(true) : setisSubscribe(false)



            } catch (error) {
                console.error("An error occurred during one of the API calls", error);
            }
        }

        runActions()

    }, [])


    useEffect(() => {

        const video = videoRef.current;

        const handleLoadedMetadata = () => {

            setFullTimeDisplay(formatTime(video.duration));
        }


        video.addEventListener("loadedmetadata", handleLoadedMetadata)
        handlePlayPause()
        return () => {
            video.removeEventListener("loadedmetadata", handleLoadedMetadata)
        }
    }, [])





    useEffect(() => {
        const video = videoRef.current


        const handleTimeUpdate = () => {

            // console.log("I am running")

            const displayCurTime = (video.currentTime / video.duration) * 100



            setProgress(displayCurTime)
            // console.log("This is time of clicking in percentage ", displayCurTime);

            // settime(video.currentTime)
            settime(formatTime(video.currentTime))
            if (video.currentTime == video.duration) {
                setIsPlaying(false)
                video.restart

            }
            // console.log(video.duration)
            // console.log(video.currentTime)



        }


        video.addEventListener("timeupdate", handleTimeUpdate)





        return () => {

        }
    }, [])


    useEffect(() => {
        const dragcontrol = videoBarRef.current
        const video = videoRef.current



        const whereClickedOnBar = (e) => {

            const rect = dragcontrol.getBoundingClientRect();

            const clickPositionInBar = e.clientX - rect.left;
            const width = rect.width;
            const percentage = clickPositionInBar / width;

            const curtime = percentage * video.duration;
            video.currentTime = curtime;

            // console.log("This is time", clickPositionInBar);

        }


        dragcontrol.addEventListener("click", whereClickedOnBar)


    }, [])







    const handleSubscribe = async () => {

        try {
            const response = await fetch("http://localhost:8000/api/v1/users/subscribe", {
                method: "POST",
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ owner_id })
                //  body: _id
            })

            const responseData = await response.json()

            //  console.log(response) 
            // console.log(responseData)

            setisSubscribe(true)

        } catch (error) {
            console.error("There is a error while subscribe", error)
        }

    }

    const handleUnSubscribe = async () => {

        try {
            const response = await fetch("http://localhost:8000/api/v1/users/unsubscribe", {
                method: "POST",
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ owner_id })
                //  body: _id
            })

            const responseData = await response.json()

            //  console.log(response) 
            console.log(responseData)

            setisSubscribe(false)

        } catch (error) {
            console.error("There is a error while unsubscribing", error)
        }

    }






    return (
        <div className='md:flex ' >
            <div className='md:w-9/12 flex  ' >


                <div className=' md:w-full overflow-y-auto scrollbar-hide    h-screen ' >
                    {/* 320px x 192px */}
                    <div onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} className=' md:h-4/6 md:w-auto md:mt-10 md:mx-10 md:rounded-xl relative w-auto h-44   bg-[#3d3d3db7]  ' >


                        {/* <img className="w-full h-full object-contain" src={testVideo.thumbNail} alt="img.png" /> */}

                        <div className="absolute md:right-1/2 md:top-1/2 z-10 bottom-20 right-44 ">
                            <button onClick={handlePlayPause} >

                                {isplaying ?


                                    (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className={`w-6 h-6 md:w-10 md:h-10 ${isvisible ? "block" : "hidden"} `}>
                                        <path d="M8 5v14l11-7z" />
                                    </svg>)

                                    :


                                    (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className={`w-6 h-6 md:w-10 md:h-10  ${isvisible ? "block" : "hidden"} `}>
                                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                                    </svg>)

                                }
                            </button>






                        </div>

                        <div className={`${isvisible ? "block" : "hidden"} text-white w-4  `}  >


                            <div ref={videoBarRef} className="md:ml-2.5 ml-1  absolute w-[98%] z-10 md:rounded-full  md:bottom-10 bottom-8  h-0.5 bg-white/30 cursor-pointer">

                                <div className='h-full  bg-red-600' style={{ width: `${progress}%` }}   >

                                </div>
                            </div>


                        </div>

                        <video ref={videoRef} onClick={handlePlayPause} className="  w-full h-full object-contain" src={videoDetails.videoFile}></video>

                        <div className='flex items-center  absolute left-3 bottom-1.5 gap-2 md:gap-3  ' >




                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                className={`${isvisible ? "block" : "hidden"} text-white md:w-6 w-4 cursor-pointer `}
                                role="img"
                            >
                                <path
                                    d="M3.62645 4.34964C3.39358 4.4834 3.25 4.73145 3.25 5V19C3.25 19.2685 3.39358 19.5166 3.62645 19.6504C3.85932 19.7841 4.14594 19.7831 4.3779 19.6478L16.3779 12.6478C16.6083 12.5134 16.75 12.2668 16.75 12C16.75 11.7332 16.6083 11.4866 16.3779 11.3522L4.3779 4.35217C4.14594 4.21685 3.85932 4.21589 3.62645 4.34964Z"
                                    fill="currentColor"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M20.75 19.75V4.25H18.75V19.75H20.75Z"
                                    fill="currentColor"
                                />
                            </svg>

                            {isMute ?



                                (



                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        onClick={handleaudio}
                                        className={`${isvisible ? "block" : "hidden"} text-white md:w-6 w-4 cursor-pointer `}
                                    >
                                        <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06Z" />
                                        <path d="M18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
                                        <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
                                    </svg>
                                ) : (



                                    <svg onClick={handleaudio} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`${isvisible ? "block" : "hidden"} text-white w-4  md:w-6 cursor-pointer `}>
                                        <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM17.78 9.22a.75.75 0 1 0-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06L20.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-1.72 1.72-1.72-1.72Z" />
                                    </svg>
                                )
                            }

                            <div className={` rounded-md md:text-sm  flex items-center justify-center font-roboto text-xs    text-white h-5  w-20 md:w-24  ${isvisible ? "block" : "hidden"} `} >{time} / {fullTimeDisplay}</div>
                        </div>


                    </div>

                    <div className='  md:mx-10 md:mt-0 flex flex-col h-10  mt-2 md:w-auto w-auto  md:h-20  ' >
                        <div  >

                            <div onClick={handleDescpriction} className=' md:w-full md:text-xl md:px-0 md:p-2  text-white px-3 h-auto  font-semibold text-sm   ' >
                                {videoDetails.title}
                                {isDescriptionvisible ?
                                    (
                                        <div className="p-3 rounded-lg mt-3 mb-3 w-full  bg-[#373737] transition-opacity duration-700 text-xs pt-2 text-[#ffffff] " >


                                            {videoDetails.description}
                                        </div>


                                    ) :
                                    (

                                        null
                                    )
                                }


                            </div>

                            <div className='text-[#7a7a7a] md:px-0 px-3 pt-1 font-semibold text-xs space-x-1  ' > <span>{videoDetails.views} views </span>   <span> {videoDetails.createdAt} </span>   </div>

                            <div className='flex md:flex-row flex-col' >

                                <div className='flex  items-center   ' >

                                    <div className='md:ml-0 h-10 w-10  ml-3 mt-3 mr-3 overflow-hidden  bg-blue-900 rounded-full ' >
                                        <img className='object-cover w-full h-full ' src={userDetails.avatar  || videoDetails.ownerAvatar } alt="" />
                                    </div>

                                    <div className='flex items-center mt-2 ' >

                                        <span className='text-white font-semibold text-sm' >{userDetails.username}</span>
                                        <span className='text-[#7a7a7a] px-3 mt-1 md:mt-0.5 font-semibold text-xs' >{videoDetails.subscriberCount}</span>


                                        {/* <button onClick={handleSubscribe} className={` ${isSubscribe ? "bg-[#363636] text-white  " : "bg-white"}  text-black rounded-full p-1  px-2 ml-3 text-sm font-medium`} > {isSubscribe ? "Unsubscribe" : "Subscribe"} </button> */}


                                        {isLoading ? (
                                            <div className=' w-32'>

                                                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                                                    <Skeleton height={30} borderRadius={99} count={1} />

                                                </SkeletonTheme>
                                            </div>
                                        ) : (




                                            isSubscribe ?

                                                (

                                                    <button onClick={handleUnSubscribe} className={`   rounded-full p-1 bg-[#363636] text-white  px-2 ml-3 text-sm font-medium`} > Unsubscribe </button>

                                                ) : (

                                                    <button onClick={handleSubscribe} className={`  text-black rounded-full p-1 bg-white  px-2 ml-3 text-sm font-medium`} > Subscribe </button>
                                                )



                                        )

                                        }




                                    </div>

                                </div>

                                <div className='contents md:block' >
                                    <AdditionalFunction isLoading={isLoading} likes={videoDetails.likes} _id={_id} isliked={isliked} setisliked={setisliked} />
                                </div>

                            </div>


                            {/* <div className='block ' >
                                <AdditionalFunction likes={videoDetails.likes} _id={_id} isliked={isliked} setisliked={setisliked} />
                            </div> */}





                        </div>





                        <div className='relative ' >
                            <CommentHolder />

                        </div>






                        {/* full working */}
                        <div className='block md:hidden' >

                            <VideoCard />
                            <VideoCard />
                            <VideoCard />

                        </div>
                    </div>

                </div>

            </div>
            <div className='  hidden md:block' >
                <DesktopVidoHolder />

            </div>
        </div>
    )
}

export default VideoPlayerCard
