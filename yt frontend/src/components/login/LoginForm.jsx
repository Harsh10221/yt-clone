import { useForm } from "react-hook-form";
import EncryptText from "../animations/EncryptText";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../../slices/loginSlice";
import { useNavigate } from "react-router-dom";


function LoginForm() {


  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [apiError, setapiError] = useState("")
  const [btnanimation, setbtnanimation] = useState(false)
  const [isLoggedIn, setisLoggedIn] = useState(false)

  const dispatch = useDispatch();


  const url = useSelector((state) => state.url.url)

  const onSubmit = async (data) => {

    setbtnanimation(true)

    setapiError("")

    setEmail(data.email)
    setPass(data.password)
    //  http://localhost:8000/api/v1/users/login
    // https://yt-backend-y337.onrender.com
    try {
      const response = await fetch(`${url}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include'
      })


      const responseData = await response.json();

      console.log("This is data", responseData.data.user);
      if (!response.ok) {
        throw new Error(responseData.message || 'Login failed')
      }

      //dispatch to redux
      dispatch(loginSuccess(responseData.data.user))


      console.log("Login successful:", responseData.statusCode);
      setisLoggedIn(true)


    } catch (error) {
      console.error("An error occurred:", error);
    }



  };




  const animation = () => {
    console.log("");

  }



  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  // This function runs only when the form is valid



  // Here, you would send the 'data' to your backend API
  // e.g., fetch('/api/login', { method: 'POST', body: JSON.stringify(data) })


  return (
    <>
      {isLoggedIn ? (
        <div className="bg-[#0f0f0f] min-h-screen flex items-center justify-center">
          <h1 className="text-white text-3xl">Welcome! Login Successful. <br /> conguralation you are the first to come here Thank you
          </h1>
          <button onClick={() => navigate("/home")} className="text-white" > click me </button>
        </div>
      ) : (
        <div className="bg-[#0f0f0f] min-h-screen flex items-center justify-center ">
          <div className="bg-[#222222] h-96 w-80 rounded-xl flex items-center justify-center " >
            <div className="flex items-center justify-center flex-col gap-10 ">
              <span className="text-white text-3xl" >Login</span>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex items-center justify-center flex-col gap-5" >








                  {email === "" ? (

                    <input type="text" {...register("email")} placeholder="Email" className="w-52  p-2 rounded-md	text-white	bg-[#3a3a3a] " />

                  ) : (

                    <div className="overflow-hidden w-52 h-10  p-2 rounded-md	text-white	bg-[#3a3a3a] "  >
                      <EncryptText
                        targetText={email}
                        onComplete={animation}
                      />
                    </div>
                  )}

                  {/* <input  type="text" {...register("email") } placeholder="Email"  className="  p-2 rounded-md	text-white	bg-[#3a3a3a] "  /> */}


                  {/* <div className="w-full h-10  p-2 rounded-md	text-white	bg-[#3a3a3a] "  >

<EncryptText
targetText={email}
onComplete={animation}
/>
</div> */}

                  {pass === "" ? (
                    <input type="text" {...register("password")} placeholder="Password" className="w-52 p-2 rounded-md	text-white	bg-[#3a3a3a] " />

                  ) : (

                    <div className="overflow-hidden w-52 h-10  p-2 rounded-md	text-white	bg-[#3a3a3a] "  >
                      <EncryptText
                        targetText={pass}
                        onComplete={animation}
                      />
                    </div>

                  )


                  }

                  <button type="submit" className={`text-white px-3 bg-[#cd3e3e] p-2 rounded-lg ${btnanimation && "h-10"} `}  > 
                    {btnanimation ?
                    (
                      <span> Encrypting </span> 
                      
                    ) : (
                      
                      <span className="text-green"  > Login </span>
                    )

                    
                    }
                    </button>
                </div>
              </form>




            </div>
          </div>

        </div>
      )}



    </>







  );
}

export default LoginForm