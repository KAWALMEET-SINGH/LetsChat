import express from "express";
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'
import authRouter from './routes/auth.routes.js'
import userRouter from './routes/user.routes.js'
import messageRouter from './routes/message.routes.js'
import { connectToDB } from "./DataBase/MongoConnect.js";

dotenv.config();
connectToDB();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());


app.use('/api/auth',authRouter);
app.use('/api/messages',messageRouter)
app.use('/api/users',userRouter);


app.use((err,req,res,next)=>{
    const status = err.statusCode || 500 ;
    const message = err.message || "Internal Server Error";
    return res.status(status).json({
        success : false,
        statusCode:status,
        message
    })
})
app.listen(PORT,() =>{
    console.log(`server started ${PORT}`);
    }
    );