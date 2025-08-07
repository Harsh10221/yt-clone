import React, { useMemo, useState } from 'react'
import { useEffect } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

import 'react-loading-skeleton/dist/skeleton.css';

import { formatDistanceToNow } from 'date-fns'
import { useDispatch, useSelector } from 'react-redux'
import VideoCard from '../video_components/VideoCard'
import { useQuery } from '@tanstack/react-query'
import { addVideoData } from '../../slices/videoSlice'
import { convertOffsetToTimes, transform } from 'framer-motion'
import LoadingSkeleton from '../uitilty_components/LoadingSkeleton';



const fetchVideos = async (url) => {
  const response = await fetch(`${url}/getvideos`, {
    method: 'POST',
    credentials: 'include'
  })

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  return await response.json()

}




function RightSection() {

  const [videoTransformedData, setvideoTransformedData] = useState(null)
  const url = useSelector((state) => state.url.url)
  const dispatch = useDispatch()



  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['videos', url],
    queryFn: () => fetchVideos(url),
  })


  useEffect(() => {

    const transformedData = data?.data?.map((obj) => {
      if (obj.video.createdAt.includes("ago")) {
        return
      }

      const timeAgo = formatDistanceToNow(new Date(obj.video.createdAt), { addSuffix: true })

      return {
        ...obj,
        video: {
          ...obj.video,
          createdAt: timeAgo
        }
      }

    })

    dispatch(addVideoData(transformedData))
    setvideoTransformedData(transformedData)




  }, [data])

  // const transformedData = useMemo(() => {

  //   return data?.data?.map((obj) => {
  //     if (obj.video.createdAt.includes("ago")) {
  //       return
  //     }

  //     return {
  //       ...obj, video:{
  //         ...obj.video,
  //         createdAt: formatDistanceToNow(new Date(obj.video.createdAt), { addSuffix: true })
  //       }
  //     }
      

    
  //   })


  // })
  
  
  
  if (isLoading) {
    // console.log("this is iserror",isError)
    // console.log("this is error",error)
    // console.log("this is isloading",isLoading)
    // console.log("this is data",data)

    return <div className='overflow-y-auto scrollbar-hide h-full w-full            md:flex-1 md:overflow-scroll  md:grid mgrid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   ' >

      <LoadingSkeleton />
      <LoadingSkeleton />
      <LoadingSkeleton />
      <LoadingSkeleton />
      <LoadingSkeleton />
      <LoadingSkeleton />
      <LoadingSkeleton />
      <LoadingSkeleton />
      <LoadingSkeleton />
      <LoadingSkeleton />
      <LoadingSkeleton />
      <LoadingSkeleton />

    </div>
  }



  return (
    <div className=' flex-1 overflow-scroll scrollbar-hide  h-full md:grid mgrid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  ' >

      {videoTransformedData?.map((video) => (
        // console.log("This is from rightsection ", video),
        <VideoCard key={video._id} data={data?.data} user={video.user} video={video} />

      ))

      }


    </div>
  )
}

export default RightSection
