import { useState } from 'react'
import Nav from './components/Nav'
import { useDispatch } from 'react-redux'
import { urlUsing } from './slices/urlSlice'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';



import './App.css'
import Body from './components/main/Body'
import LoginForm from './components/login/LoginForm'
import RegisterForm from './components/login/RegisterForm'
import MainLayot from './components/MainLayot'

import 'react-loading-skeleton/dist/skeleton.css';
//pages


// import Profile from '../src/components/main/Profile'


import { Link, Route,Routes,Outlet } from 'react-router-dom'
import RightSection from './components/main/RightSection'
import UploadFiles from './components/uitilty_components/UploadFiles'
import UploadDetails from './components/uitilty_components/UploadDetails'
import ShinyText from './components/animations/ShinyText'
import VideoPlayer from './components/main/VideoPlayer';
import WatchHistoryCard from './components/video_components/WatchHistoryCard';
import Profile from './components/main/Profile';

function App() {
  const [count, setCount] = useState(0)


  const dispatch = useDispatch()
   
  const url = "http://localhost:8000/api/v1/users"
  // const url = "https://yt-backend-y337.onrender.com/api/v1/users"
  
  dispatch(urlUsing(url))

  return (
    <div className='bg-black w-full h-screen' >
   
       <Routes>
        {/* main route  */}
        <Route path='/' element={<LoginForm/>}  />
        {/* <Route path='/' element={<VideoPlayer/>}  /> */}

        {/* <Route path='/' element={<VideoCard/>}  /> */}

        {/* <Route path='/' element={<UploadFiles/>}  /> */}


      {/* stand alone routes */}
        <Route path='/register' element={<RegisterForm/>}  />
        <Route path='/login' element={<LoginForm/>}  />
        <Route path='/upload' element={<UploadFiles/>}  />
        <Route path='/details' element={<UploadDetails/>}  />

        <Route path='/videoplayer' element={<VideoPlayer/>}  />
        {/* <Route path='/videoplayer11' element={<WatchHistoryCard/>}  /> */}

        
        


        <Route element={<MainLayot/>} >

        <Route path='/home' element={<RightSection/>}  />

        <Route path='/profile' element={<Profile/>}  />
        


        </Route>


       </Routes>


<ReactQueryDevtools initialIsOpen={false} />
    </div>
  )
}

export default App
