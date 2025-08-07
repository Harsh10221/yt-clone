import React from 'react'
import { useSelector } from 'react-redux'



function WatchHistoryCard() {

  const videos = useSelector((state) => state.videosDetails.videos);

  

  return (
    <div>
      
    </div>
  )
}

export default WatchHistoryCard
