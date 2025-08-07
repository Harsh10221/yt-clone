import { createSlice } from "@reduxjs/toolkit";
import { formatDistanceToNow } from 'date-fns'


const initialState = {
    // description: null,
    // duration: null,
    // likes: null,
    // createdAt: null,
    // isPublished: true,
    // thumbNail: null,
    // title: null,
    // videoFile: null,
    // views: null,
    // _id: null

    videos: null

}

export const VideoSlice = createSlice({
    name: "videosDetails",
    initialState,
    reducers: {
        addVideoData: (state, action) => {
            // const data = action.payload

            state.videos = action.payload





            // console.log("This is the data from video slice", state.videos)

        }
    }

})


export const { addVideoData } = VideoSlice.actions

export default VideoSlice.reducer