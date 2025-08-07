import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    user: null,
    isLoading: false,
    error: null,

}

export const loginSlice = createSlice({
    name:'login',
    initialState,
    reducers:{

        loginSuccess: (state,action) =>{
            state.isAuthenticated = true
            state.user = action.payload
            console.log("This is the data from login slice", state.user)

        },
        logout:(state) =>{
            state.isAuthenticated= false;
            state.user = null;
        }
        
    }
})

export const {loginSuccess,logout} = loginSlice.actions


export default loginSlice.reducer