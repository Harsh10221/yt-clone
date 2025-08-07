import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'


function RegisterForm() {
  
  const navigate = useNavigate()


  const [step, setSetp] = useState(1)

  const url = useSelector((state)=> state.url.url)


  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm()






  const finalSubmit = async (data) => {

    console.log("The step is  ,", step);


    if (!(step == 3)) {

      setSetp(step + 1)
      return
    }


    data.fullName = data.firstname + " " + data.lastname




    delete data.firstname
    delete data.lastname
    delete data.confirmpassword

    try {
      const dataToUpload = new FormData();

      for (const key in data) {
        if (data[key] instanceof FileList && data[key].length > 0) {
          dataToUpload.append(key, data[key][0]); // Append the file
        } else {
          dataToUpload.append(key, data[key]); // Append the text value
        }
      }

      //headers what is that 


      const response = await fetch(`${url}/register`, {
      method: 'POST',
      body: dataToUpload

      })
      // console.log(response)


if (response.ok) {

      console.log("SUccess redirecting before  ");
      setTimeout(() => {
        navigate("/login")
        console.log("SUccess redirecting ");
        
      }, 2000);
      console.log("SUccess after settimeout ");
      

    }


      
    } catch (error) {
      throw error
    }



  }


  //backend code

  const passwordValue = watch("password")

  return (



    <div className="bg-[#0f0f0f] min-h-screen flex items-center justify-center">
      <div className="bg-[#222222] h-auto p-8 rounded-xl flex items-center justify-center w-96">
        <form onSubmit={handleSubmit(finalSubmit)}>
          <div className="flex items-center justify-center flex-col gap-8">
            <span className="text-white text-3xl">Register </span>

            {/* --- Step 1: User Details --- */}
            {step === 1 && (
              <div className="flex items-center justify-center flex-col gap-4">
                <div className='flex gap-3'>
                  <input type="text" {...register("firstname", { required: "First name is required", pattern: { value: /^[A-Za-z]+$/, message: "Letters only" } })} placeholder="First name" className="w-28 p-2 rounded-md text-white bg-[#3a3a3a]" />
                  <input type="text" {...register("lastname", { required: "Last name is required", pattern: { value: /^[A-Za-z]+$/, message: "Letters only" } })} placeholder="Last name" className="w-28 p-2 rounded-md text-white bg-[#3a3a3a]" />
                </div>
                <input type="text" {...register("username", { required: "Username is required", pattern: { value: /^[a-z0-9]+$/, message: "Only lowercase letters are allowed", } })} placeholder="Username" className="w-60 p-2 rounded-md text-white bg-[#3a3a3a]" />
                <input type="email" {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })} placeholder="Email" className="w-60 p-2 rounded-md text-white bg-[#3a3a3a]" />
                <button type="submit" className="text-white px-3 my-1 bg-[#3ea6ff] p-2 rounded-lg w-60">Next</button>
              </div>
            )}

            {/* --- Step 2: File Uploads --- */}
            {step === 2 && (
              <div className='gap-4 flex items-center justify-center flex-col'>
                <div className="w-60">
                  <label className="block text-gray-400 mb-1 text-sm">Avatar</label>
                  <input type="file" {...register("avatar", { required: "Avatar is required" })} className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200" />
                </div>
                <div className="w-60">
                  <label className="block text-gray-400 mb-1 text-sm">Cover Image (Optional)</label>
                  <input type="file" {...register("coverImage")} className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200" />
                </div>
                <button type="submit" className="text-white px-3 my-1 bg-[#3ea6ff] p-2 rounded-lg w-60">Next</button>
              </div>
            )}

            {/* --- Step 3: Password --- */}
            {step === 3 && (
              <div className='flex flex-col items-center justify-center gap-4'>
                <input type="password" {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })} placeholder="Password" className="w-60 p-2 rounded-md text-white bg-[#3a3a3a]" />
                <input type="password" {...register("confirmpassword", { required: "Please confirm password", validate: value => value === passwordValue || "Passwords do not match" })} placeholder="Confirm password" className="w-60 p-2 rounded-md text-white bg-[#3a3a3a]" />
                <button type='submit' className="text-white px-3 my-1 bg-[#cd3e3e] p-2 rounded-lg w-60">Complete Registration</button>
              </div>
            )}

            {/* A single place to display the first error found */}
            <div className="text-red-500 text-xs text-center h-4">
              <p>
                {Object.values(errors)[0]?.message}
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>


  )
}

// username
// email
// fullname
// avatar
// coverimage
// password

// it it ok to use the confirm pass login i used 


export default RegisterForm
