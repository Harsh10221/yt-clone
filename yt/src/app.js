import express from "express";
import cros from "cors";
import cookieParser from "cookie-parser";




const app = express()

app.use(cros({
    // origin: 'http://localhost:5173',
    origin: process.env.CROS_ORIGIN,
    credentials : true
}))

app.use(express.json())  //accepts json
app.use(express.urlencoded({extended:true,limit:"16kb"})) //need to learn
app.use(express.static("public"))
app.use(cookieParser())

//rotues



import userRouter from "./routes/user.routes.js"

//routes declaration 

app.use("/api/v1/users",userRouter)

app.listen(8000, () => {
    console.log('Server running on http://localhost:8000');
});


export {app}
