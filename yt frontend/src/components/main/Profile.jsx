import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useSelector } from 'react-redux';
import DesktopVideoCard from '../uitilty_components/DesktopVideoCard';
import ProfileVideoCard from '../video_components/ProfileVideoCard';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'




function Profile() {

  const [data, setdata] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const arr = [1, 2, 3, 4, 5]
  // const 



  useEffect(() => {

    const getWatchHistory = async () => {

      try {
        const response = await fetch('http://localhost:8000/api/v1/users/get-watched-history', {
          method: "GET",
          credentials: 'include'
        })
        // console.log("This is response", response)
        const data = await response.json()

        if (response.ok) {
          setIsLoading(false)
        }

        // console.log("This is watch history data ", data.data)

        setdata(data.data)

      } catch (error) {
        console.error("The erro is ", error)
      }

    }

    getWatchHistory()


  }, [])


  const user = useSelector((state) => state.login.user);


  return (
    <>

      {/* {
        data?.map((item) => {
          {
            // if (item._id == item._id) {
              console.log("this is date", item._id)

            // }
            item.document.map((one_video) => {
              console.log("THis is video data", one_video)
            })
          }
        })
      } */}

      {/* use this data to show the results by the day  */}

      <div className='  w-full flex flex-col p-4'>

        <div className=' flex flex-col items-center gap-3  md:flex-row md:gap-6'>


          <img src={user?.avatar} className='bg-blue-500 rounded-full w-12 h-12 md:w-28 md:h-28 shrink-0'></img>

          <span className='text-white font-semibold  block md:hidden text-base'>@{user?.username}</span>


          <div className='text-center flex flex-col gap-1 md:text-left'>

            <span className='text-white font-bold text-2xl md:text-4xl'>{user?.fullName}</span>


            <span className='text-slate-400 text-base hidden md:block '>@{user?.username}</span>
            <span className='text-slate-400 text-base'>{user?.email}</span>

            <div className='flex gap-3 my-3 ' >
              <div className='bg-[#333333] flex gap-2  p-1.5 px-4  rounded-2xl ' >

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M17 17C15.6193 17 14.5 15.8807 14.5 14.5C14.5 13.1193 15.6193 12 17 12C18.3807 12 19.5 13.1193 19.5 14.5C19.5 15.8807 18.3807 17 17 17ZM17 17C19.4853 17 21.5 19.0147 21.5 21.5M17 17C14.5147 17 12.5 19.0147 12.5 21.5"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 7.5C5.61929 7.5 4.5 6.38071 4.5 5C4.5 3.61929 5.61929 2.5 7 2.5C8.38071 2.5 9.5 3.61929 9.5 5C9.5 6.38071 8.38071 7.5 7 7.5ZM7 7.5C9.48528 7.5 11.5 9.51472 11.5 12M7 7.5C4.51472 7.5 2.5 9.51472 2.5 12"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.5 15.5C3.5 18.2643 5.73571 20.5 8.5 20.5L8 18.5"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.5 8.5C18.5 5.73571 16.2643 3.5 13.5 3.5L14 5.5"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>



                <button className=' text-white' > Switch account </button>
              </div>


              <div className='bg-[#333333] flex gap-2  p-1.5 px-4  rounded-2xl ' >


                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                >
                  <path
                    d="M15 17.625C14.9264 19.4769 13.3831 21.0494 11.3156 20.9988C10.8346 20.987 10.2401 20.8194 9.05112 20.484C6.18961 19.6768 3.70555 18.3203 3.10956 15.2815C3 14.723 3 14.0944 3 12.8373L3 11.1627C3 9.90561 3 9.27705 3.10956 8.71846C3.70555 5.67965 6.18961 4.32316 9.05112 3.51603C10.2401 3.18064 10.8346 3.01295 11.3156 3.00119C13.3831 2.95061 14.9264 4.52307 15 6.37501"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M21 12H10M21 12C21 11.2998 19.0057 9.99153 18.5 9.5M21 12C21 12.7002 19.0057 14.0085 18.5 14.5"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>



                <button className=' text-white' > Logout </button>
              </div>







            </div>

          </div>
        </div>

        <div className='  h-full md:mt-10 '>
          <span className='   text-white  text-xl font-bold'>History</span>

          {isLoading ?
            (

              arr.map((item) => (



                < div key={item} className='w-full mt-4 ' >
                  <h2 className='text-white' >{item}</h2>
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <div className='flex gap-2 ' >

                      <Skeleton height={100} width={150} borderRadius={8} count={1} />
                      <div className='flex flex-col mt-2' >
                        <Skeleton height={25} width={150} borderRadius={3} count={1} />
                        <Skeleton height={25} width={100} borderRadius={3} count={1} />
                        <Skeleton height={25} width={150} borderRadius={3} count={1} />

                      </div>


                    </div>


                  </SkeletonTheme>


                </div>
              ))
            ) :

            (



              <div className=' scrollbar-hide h-full overflow-y-auto ' >

                {/* {data?.map((video) => {

                return <ProfileVideoCard key={video._id} video={video} />

              })

              } */}


                {/* {
                  data?.map((item) => {

                    {
                      <div>

                      <h1 className='text-white' >Hello</h1>
                    
                      </div>
                   
                      
                      return (item?.videos?.map((video) => {
                      
                        return <ProfileVideoCard key={video.video._id} video={video} />

                      }))


                    }

                  })
                } */}

                {
                  data?.map((item) => {

                    return <div className='text-white  ' >
                      <h2 className='font-bold' >{item._id }</h2>
                      

                      {
                        item.videos?.map((video) => {
                          return <ProfileVideoCard key={video.video._id} video={video} />

                        })}
                    </div>

                  })
                }


              </div>

            )

          }


        </div>

      </div >

    </>
  )
}

export default Profile