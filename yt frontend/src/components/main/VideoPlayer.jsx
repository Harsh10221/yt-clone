import React from 'react'
import { useLocation } from 'react-router-dom'
import Nav from '../Nav'
import VideoCard from '../video_components/VideoCard'
import VideoPlayerCard from '../video_components/VideoPlayerCard'


function VideoPlayer() {

  const location = useLocation()
  const video = location.state

  return (
    <div className='bg-[#1a1a1a]' >
      <Nav/>
      <VideoPlayerCard video={video} />        
    </div>
  )
}

export default VideoPlayer
