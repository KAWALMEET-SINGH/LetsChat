import express from "express";

const app = express();


app.get('/',(req,res)=>{
    res.json("new project started")
})

app.listen(3000,() =>{
    console.log("server started");
    }
    );