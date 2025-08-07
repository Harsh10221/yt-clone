import React, { useRef, useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import ShinyText from '../animations/ShinyText';


function UploadDetails() {

    const location = useLocation()
    const video = location.state?.file;
    const navigate = useNavigate()
    const inputref = useRef(null)
    const [thumbNail, setthumnNail] = useState(null)
    const [Value, setValue] = useState("")
    const [DataSubmit, setDataSubmit] = useState(false)
    const [Alldata, setAlldata] = useState({})
    const [isloading, setisloading] = useState(false)


    const url = useSelector((state) => state.url.url)



    useEffect(() => {

        console.log("Alll final data is from useeffect ", Alldata)

        if (Object.keys(Alldata).length === 0) {
            return console.log("There is no data in that obj ");

        }

        const dataToUpload = new FormData()

        for (const key in Alldata) {
            if (Alldata[key] instanceof FileList && Alldata[key].length > 0) {
                dataToUpload.append(key, Alldata[key][0])
            } else {
                dataToUpload.append(key, Alldata[key])

            }
        }


        fetch(`${url}/storevideo`, {
            method: 'POST',
            body: dataToUpload,
            credentials: 'include'
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ')
                }
                
                return response.json()
            })
            .then((data) => {
                navigate("/home")
                console.log(data)

            })
            .catch((error) => {
                console.error("There was a problem with the fetch operaton: ", error);

            })



        //     const fetchrequest = async () =>{

        //         try {
        //             const response = await fetch(`${url}/storevideo`,{
        //                 method: 'POST',
        //                 body: dataToUpload,
        //                 credentials: 'include'

        //             })

        //             // return response

        //             console.log("The response from fetch req is ",response);

        //             if (response.ok) {
        //                 const data = await response.json();
        //                 console.log("Parsed data",data);

        //             } else {
        //                 const errorData = await response.json()
        //                 console.error("Fetch request failed with status:", response.status);
        //                 console.error("Error details:", errorData);
        //             }

        //         } catch (error) {
        //             throw error
        //         }

        //     }


        //    fetchrequest()

        // const xhr = new XMLHttpRequest()

        // xhr.withCredentials = true;

        // xhr.upload.onprogress = (event) => {
        //     if (event.lengthComputable) {
        //         const percentageCompleted = Math.round((event.loaded / event.total) * 100)

        //         console.log(`Upload progress:${percentageCompleted}%`)
        //     }

        // }

        // xhr.open('POST', `${url}/storevideo`);
        // xhr.send(dataToUpload)



    }, [Alldata])



    const handleSubmitbtn = () => {
        inputref.current.click()


    }

    const handleFileChange = (e) => {
        const imgThumnNail = e.target.files[0]
        console.log("This is thumbnail ", imgThumnNail);
        setthumnNail(imgThumnNail)
        // console.log("This is from file change input ",Alldata);

        setDataSubmit(true)


    }
    // thumbNail
    const onsubmit = (data) => {
        setAlldata(() => ({ thumbNail, ...data, video }))



        setisloading(true)
        console.log("Alll final data is only dat ", data)
        console.log("This is video  ", video)
    }

    const {
        register,
        handleSubmit,
        formState: { errors },

    } = useForm()




    // console.log("This is the video from uploadddetails", video)


    return (
        <form onSubmit={handleSubmit(onsubmit)}>
            <div className='w-screen h-screen flex justify-center items-center ' >

                {isloading ?
                    (

                        <ShinyText
                            text="Your upload was successful. We’re now processing your data—this may take a few moments" disabled={false} speed={5} className='custom-class'
                        />

                    ) :
                    (
                        <div className=' transition-opacity duration-5000 ease-in-out
                     bg-[#282828] h-5/6 w-11/12 rounded-2xl md:h-5/6 md:w-3/5 md:rounded-3xl flex flex-col  '>
                            <div className='  w-full h-16 flex border-b-[0.5px] items-center justify-between px-5 border-b-[#494949]  ' >
                                <div className='text-white font-roboto font-normal text-xl' >{Value}</div>
                            </div>

                            <div className='items-center justify-center flex w-full flex-col gap-5 flex-1' >


                                <div className='  border-[#505050] w-3/4 h-1/6 border rounded-xl flex flex-col ' >
                                    <span className='px-2 pt-2 mx-1 text-[#a1a1a1] text-sm font-semibold   ' >Title required</span>

                                    <textarea
                                        {...register("title",
                                            {
                                                required: "Title required"
                                            }
                                        )}
                                        onChange={(e) => setValue(e.target.value)}
                                        placeholder="Add a title that describes your video"
                                        className=" text-sm md:text-base px-3 py-1 bg-transparent outline-none w-full h-full resize-none text-white placeholder-[#5e5e5e]"
                                    />
                                </div>


                                <div className='  border-[#505050] w-3/4 h-1/4 border rounded-xl flex flex-col ' >
                                    <span className='px-2 pt-2 mx-1 text-[#a1a1a1] text-sm font-semibold   ' >Description</span>

                                    <textarea
                                        {...register("description",
                                            {
                                                required: "Description required"
                                            }
                                        )}
                                        placeholder="Tell viewers about your video "
                                        className=" text-sm md:text-base px-3 py-1 bg-transparent outline-none w-full h-full resize-none text-white placeholder-[#5e5e5e]"
                                    />
                                </div>

                                <input onChange={handleFileChange} ref={inputref} accept='image/*' type="file" className='hidden' />

                                {DataSubmit ?

                                    (


                                        <button type='submit' className='bg-[#d0d0d0] w-24 h-9 md:w-40 md:h-10 rounded-md  flex items-center justify-center'  >
                                            Submit
                                        </button>





                                    ) : (

                                        <button type='button' onClick={handleSubmitbtn} className='bg-[#686868] text-sm h-8 w-68 px-2 md:w-96 md:h-10 rounded-md  flex items-center justify-center   ' >
                                            <span className=' hidden md:block' >  Please upload a thumbnail image for your video </span>
                                            <span className='block md:hidden' > Upload a thumbnail for your video </span>

                                        </button>
                                    )
                                }





                                <div className='my-2 flex flex-col gap-1  text-white text-xs w-3/4 h-1/4' >
                                    <p className=' font-bold md:text-[13px] text-[11px] ' > Audience </p>
                                    <p className='font-bold md:text-[13px] text-[11px] ' >  This video is set to not 'Made for Kids' </p>
                                    <p className=' font-medium  text-[#919191] md:text-xs text-[9px] '  > Regardless of your location, you're legally required to comply with the Children's Online Privacy Protection Act (COPPA) and/or other laws. You're required to tell us whether your videos are 'Made for Kids'. What is 'Made for Kids' content? </p>
                                </div>







                            </div>



                        </div>
                    )
                }

            </div>
        </form>


    )
}

export default UploadDetails
