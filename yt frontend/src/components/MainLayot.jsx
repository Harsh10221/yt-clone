import React from 'react'
import Nav from './Nav'
import Body from './main/Body'
import { Outlet } from 'react-router-dom'
import LeftSection from './main/LeftSection'

function MainLayot() {
  return (
    <div className='h-screen flex flex-col' >
       <Nav />
       {/* <div className='flex flex-1  overflow-hidden' > */}
       <div className='flex flex-1  overflow-hidden' >

          <LeftSection />
            <Outlet />
       </div>
          


    </div>
  )
}

export default MainLayot
