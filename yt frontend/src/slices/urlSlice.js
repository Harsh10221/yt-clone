import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    serverUrl: null,
    localUrl: null,
    url: null
}


export const urlSlice = createSlice({
    name:"url",
    initialState,
    reducers:{
        urlServer: (state,action) =>{
            state.serverUrl = action.payload
        },
        urlLocal: (state,action)=>{
            state.localUrl = action.payload
        },
        urlUsing : (state,action) =>{
            state.url = action.payload
            // console.log("This is normal url ",ur)
            // console.log("This is normal state url  ",state.url)
        }
    }




})

export const {urlServer,urlLocal,urlUsing} = urlSlice.actions

export default urlSlice.reducer
