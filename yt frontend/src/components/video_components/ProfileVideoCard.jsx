import { formatDistanceToNow } from 'date-fns'
import React from 'react'
import { useNavigate } from 'react-router-dom'


function ProfileVideoCard({ video }) {

    // console.log("This is video from profile ", video)

    // if (!videodata) {
    //     { console.log("yes ser") }; 
    // }
    const navigate = useNavigate()
    const videoDetails = video.video


    // const { thumbNail, description, createdAt, title, duration, views, ownerUsername, video_id } = video

    const handleClickOnThumbNail = () => {

        navigate("/videoPlayer", { state: video })

    }

    const timeAgo = formatDistanceToNow(new Date(videoDetails.createdAt), { addSuffix: true })

    return (
        <div className='my-5 bg ' >

            <div className='flex bg text-white  md:h-36 md:w-auto  w-96  ' >

                <div onClick={handleClickOnThumbNail} className='cursor-pointer bg-[#424242] rounded-md md:w-60 md:h-32  w-40 h-24' >
                    <img className='object-contain w-full h-full ' src={videoDetails.thumbNail} alt="" />
                </div>


                <div>

                    <div className=' md:w-[500px] px-2 md:text-xl w-44  text-sm font-medium font-roboto  line-clamp-2' >
                        {videoDetails.title}
                    </div>


                    <div className='md:flex  block ' >

                        <div className='text-xs pt-1 md:pr-1 px-2 text-[#a9a9a9]   ' > {videoDetails.ownerUsername}
                        </div>

                        <span className='text-[#a9a9a9] hidden md:block' > •  </span>

                        <div className='pt-1 gap-1 flex md:block text-xs md:px-1 px-2 text-[#a9a9a9]'  >
                            <span>{videoDetails.views} views </span  >
                            <span className='block md:hidden' > •  </span>
                            <span className='block md:hidden' >{timeAgo}</span>
                        </div>

                    </div>

                    <div className='hidden md:block' >

                        <div className='w-96 line-clamp-2 h-10    text-[#a9a9a9] text-xs  pt-2 px-2 ' >
                            {videoDetails.description}

                        </div>
                    </div>





                </div>


            </div>


        </div>
    )
}

export default ProfileVideoCard
