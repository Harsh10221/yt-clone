import React from 'react'
import DesktopVideoCard from '../uitilty_components/DesktopVideoCard'
import { useSelector } from 'react-redux';

function DesktopVidoHolder() {

  const videos = useSelector((state) => state.videosDetails.videos);


  // if(!videos) return

  console.log("i am from desckpt hokder time ",videos)


  return (
    <div className=' gap-4 flex-col flex justify-start py-10 overflow-y-auto   h-full w-96' >


      {videos?.map((video) => {
       
        return <DesktopVideoCard key={video?.video._id} video={video.video} />
      })

      }






    </div>
  )
}

export default DesktopVidoHolder
