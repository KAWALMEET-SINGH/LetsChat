import jwt from "jsonwebtoken"

export const createToken = (id,res) =>{
    const token = jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn:"15d"
    });
    res.cookie("access_token",token,{ maxAge: 15*60*60*1000,
        httpOnly:true,
        sameSite:"strict"})
}