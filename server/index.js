import express from "express";
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import authRouter from './routes/auth.routes.js'
import userRouter from './routes/user.routes.js'

dotenv.config();

mongoose.connect(process.env.DBURI).then(() => {
    console.log('Connected To DB ');
}).catch((e) => {
    console.log(e);
});

const app = express();
const PORT = process.env.PORT;

app.use('/api/auth',authRouter);
app.use('/api/user',userRouter);

app.listen(PORT,() =>{
    console.log(`server started ${PORT}`);
    }
    );