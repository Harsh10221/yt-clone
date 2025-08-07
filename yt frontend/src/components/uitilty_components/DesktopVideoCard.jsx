import React from 'react'
import { useSelector } from 'react-redux';

function DesktopVideoCard({video}) {

  // console.log("this is video ",video)
  if(!video) return
  const { title,views,thumbNail,duration,createdAt } = video
  
  // console.log("this is video ",thumbNail)

  // const videos = useSelector((state) => state.videosDetails.videos);



// console.log("Selector videos", JSON.parse(JSON.stringify(videos)));


  // console.log("this is watchhistory",videos);

  // let title = "The container of this text has a defined width or max-width to determine how the text wraps."


  return (
    <div  >
       <div className='flex text-white  w-96  ' >
         
        <div className=' bg-[#424242] rounded-md    w-40 h-24' >
          <img className='object-contain w-full h-full ' src={thumbNail} alt="" />
        </div>


        <div>

          <div className=' px-2  w-44  text-sm font-medium font-roboto  line-clamp-2' >
           {title}
          </div>

          <div className='text-xs pt-1 px-2 text-[#a9a9a9]   ' > Learn react with durgesh
          </div>

        <div className='text-xs px-2 text-[#a9a9a9]'  >
          <span>{views} views </span>  •  <span>{createdAt}</span>
        </div>

        </div>


      </div>
    </div>
  )
}

export default DesktopVideoCard
