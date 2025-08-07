import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function VideoCard({ video,user,data }) {
    if (!video) return null
        //   {console.log(" running",video) }


        const videoDetails = video.video
        // console.log("this is video data",video)

        const storeVideoDetails = useSelector( (state)=>state.videosDetails.videos )
        // const videoDetails = storeVideoDetails
        // console.log("this is redux details ",videoDetails)
        // const userDetails = user

    // const { thumbNail, title, likes,createdAt,views,videoFile ,_id, duration } = videoDetails

    // console.log( " i am ttile ",videoDetails.thumNail )





    // console.log("this is data",data);
    
  

    const navigate = useNavigate()
    const [time, settime] = useState("")



    useEffect(() => {

        const formatDuration = (Time) => {

            const hours = Math.floor(Time / 3600)
            const minutes = Math.floor((Time % 3600) / 60)
            const seconds = Math.floor(Time % 60)

            const paddedMinutes = String(minutes).padStart(2, '0')
            const paddedSeconds = String(seconds).padStart(2, '0')

            if (hours > 0) {
                // const paddedHours = String(hours).padStart(2,'0')
                settime(`${hours}:${paddedMinutes}:${paddedSeconds}`)

            } else {
                settime(`${minutes}:${paddedSeconds}`)


            }

        }

        formatDuration(videoDetails.duration)

    }, [])


    const handleVideo = () =>{

        navigate("/videoPlayer", {state:video})

    }

    // settime(final)
    // console.log(final);

    // stucking in infinite loop 



    // function VideoCard(props) {
    // Manually get the 'video' property from the 'props' object
    // const video = props.video; 



    return (
        <div className=' p-3 py-5  ' >
            {/* 320px x 192px */}
            <div onClick={handleVideo} className='cursor-pointer  relative w-auto h-44   bg-[#3d3d3db7] md:w-80 md:h-48 rounded-lg' >


                <img className="w-full h-full object-contain" src={videoDetails.thumbNail} alt="img.png" />


                {/* <video className="w-full h-full object-contain" autoPlay src="https://res.cloudinary.com/mytube2132/video/upload/v1753213066/zq9o57msyizaejvdur7x.mp4"></video> */}
                <div className=' rounded-md  flex items-center justify-center font-roboto text-xs   bg-[#a0a0a020] text-white h-5  w-10 absolute right-3 bottom-2  ' >{time}</div>
            </div>


            <div className=' flex h-10  mt-2 md:mt-3  w-full  md:max-h-20  ' >

                <div className='h-10 md:h-11 w-12 ml-2 md:ml-0 mr-2 overflow-hidden  bg-blue-900 rounded-full ' >
                    <img className='object-cover w-full h-full ' src={user.avatar} alt="" />
                </div>

                <div className='w-full px-1 pr-2 md:pr-3 h-10    ' >

                    <div className=' line-clamp-2 w-full   text-white  font-semibold text-sm md:h-auto  ' > {videoDetails.title}
                        
                    </div>
                    <div className='text-[#7a7a7a] mt-1  font-semibold text-xs   ' > <span> {user.username} </span> <span> • </span> <span>{videoDetails.views} views </span> <span> • </span>  <span> {videoDetails.createdAt} </span>   </div>
                </div>
            </div>


        </div>
    )
}

export default VideoCard
