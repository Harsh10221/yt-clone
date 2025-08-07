
import { useState } from 'react'
import CommentCard from '../uitilty_components/CommentCard'

function CommentHolder() {

  const [isCmtVisible, setIsCmtVisible] = useState(false)

  const handleComment = (event) => {
  console.log("you clicked me bro ",isCmtVisible)
  event.stopPropagation();
  setIsCmtVisible(prev => !prev)
    

  }


  return (
    <div className='md:p-0 md:pt-5   p-3 ' >
      <div onClick={handleComment} className='    bg-[#292929] md:h-24 h-20 rounded-lg ' >

        {isCmtVisible ?
          (

            <div className="z-10 absolute top-3 left-0 w-full md:w-full h-auto bg-[#303030] shadow-lg animate-sideDown animate-slideUp">
              <div className='border-b border-b-[#474747] ' >



                <div className='flex justify-center' >
                  <div  className='w-12 rounded-lg mt-3 h-1 bg-[#595656]  ' ></div>
                </div>

                <div className='text-white flex justify-between p-3 ' >
                  <div className='font-medium font-roboto' >Comments</div>
                  <div>

                    <svg  onClick={handleComment} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="  size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>

                  </div>


                </div>
              </div>

              <CommentCard />
              <CommentCard />
              <CommentCard />


            </div>
          )
          :
          (
            
            <div className='chimp' >

              <CommentCard />
            </div>
          )

        }



      </div>
    </div>
  )
}

export default CommentHolder



