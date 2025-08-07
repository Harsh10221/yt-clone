import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import RotatingText from '../animations/RotatingText'

// videofile
// thumbNail
// title
// description
// duration
// views
// isPublished
// owner


function UploadFiles() {

    const navigate = useNavigate()
    const inputRef = useRef(null)
    const [isDragOver, setIsDragOver] = useState(false)
    const [Draging, setDraging] = useState(false)
    const [uploadProgress, setuploadProgress] = useState(0)
    const [Loading, setLoading] = useState(false)
    const [Video, setVideo] = useState(null)


    const url = useSelector((state) => state.url.url)

    const {
        register,
        handleSubmit,
        formState: { errors }


    } = useForm()



    const xhr = new XMLHttpRequest();



    const videoSubmit = async (file) => {

        // const formData = new FormData();
        // formData.append('video', file)


        // xhr.upload.onprogress = (event) => {
        //     if (event.lengthComputable) {
        //         const percentage = Math.round((event.loaded / event.total) * 100);
        //         setuploadProgress(percentage)
        //     }
        // }

        // xhr.onload = () => {
        //     console.log("Upload complete", xhr.responseText)
        // };

        // xhr.onerror = () => {
        //     console.error("Upolad failed")
        // }

        // xhr.open('POST', `${url}storevideo`);
        // xhr.withCredentials = true
        // xhr.send(formData)
        
        // console.log("This is from video submit formdata ",formData);
        console.log("This is from video submit video ",file);
        
        // sending to fast 
        //if the file send fail one time then cannot upload file again witout refresh
        navigate("/details" , {state:{file}} )

    }

    const handleFileSubmit = (e) => {

        const file = e.target.files[0]
        // setVideo(file)

        
        // console.log("The file is ", file);
        // console.log("The file type is  ", typeof file);

        videoSubmit(file)
    }

    const handleBtnClicked = () => {
        inputRef.current.click()

        // console.log(register)

    }

    const handleDragOver = (event) => {
        event.preventDefault()
        setDraging(true)


        console.log("The file type is  ");
    }

    const handleDragLeave = (event) => {
        event.preventDefault()
        const relatedTarget = event.relatedTarget

        if (relatedTarget && event.currentTarget.contains(relatedTarget)) {
            return;
        }
        setDraging(false)


    }

    const handleDrop = (event) => {
        event.preventDefault()
        const file = event.dataTransfer.files[0]
        // console.log(file);
        setDraging(false)
        // setVideo(file)

        videoSubmit(file)

    }



    return (
        <form onSubmit={handleSubmit(onsubmit)} >



            <div className='w-screen h-screen flex flex-col justify-center items-center ' >

                <div className='bg-[#282828] h-4/5 w-3/4 md:h-5/6 md:w-3/5 md:rounded-3xl rounded-2xl   '>
                    <div className='  w-full md:h-16 h-12 flex border-b-[0.5px] items-center justify-between px-5 border-b-[#494949]  ' >
                        <div className='text-white font-roboto font-normal text-base  md:text-xl' >Upload videos</div>

                        <div className='flex gap-4  '  >

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" cursor-help  text-white md:size-6 size-5 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                            </svg>


                            <svg onClick={() => navigate("/home")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" cursor-pointer  text-white md:size-6 size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>

                        </div>

                    </div>

                    <div className='  w-full h-4/5 gap-7 flex flex-col items-center justify-center ' >


                        <div onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}

                            className={`bg-[#3b3b3b] w-40 h-40 rounded-full flex items-center justify-center ${Draging ? "shadow-[0px_0px_50px_2px_rgba(0,0,255,0.5)]" : ""
                                } `} >

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="  text-[#898989] w-20 h-20">
                                <path d="M9.25 13.25a.75.75 0 0 0 1.5 0V4.636l2.955 3.129a.75.75 0 0 0 1.09-1.03l-4.25-4.5a.75.75 0 0 0-1.09 0l-4.25 4.5a.75.75 0 1 0 1.09 1.03L9.25 4.636v8.614Z" />
                                <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />

                            </svg>

                        </div>


                        <div className='text-center'  >
                            <span className='text-white text-sm md:text-base ' >Drag and drop video files to upload </span> <br />

                            <span className='text-[#717070] text-xs md:text-base  '  >Your videos will be private until you publish them.  </span>

                        </div>



                        <input
                            type="file"
                            accept='video/*'
                            ref={inputRef}
                            onChange={handleFileSubmit}
                            className='hidden'
                        // {...register("file")}

                        />



                        <button type='button' onClick={handleBtnClicked} className='bg-white font-medium text-sm p-2 px-3 font-roboto  rounded-3xl' > Select files </button>



                    </div>
                    <div className='  font-roboto text-center text-[7px] md:text-xs' >
                        <span className='text-[#717070] md:mt-20 px-5 block md:inline  ' > By submitting your videos to MyTube, you acknowledge that you agree to MyTube's Terms of Service and Community Guidelines.</span><br />
                        <span className='text-[#717070]  px-5 md:px-0 hidden md:inline  md:mt-20 ' >Please make sure that you do not violate others' copyright or privacy rights. Learn more</span>

                    </div>


                </div>
            </div>


        </form>
    )
}

export default UploadFiles
