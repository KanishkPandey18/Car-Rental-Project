import jwt from "jsonwebtoken"
import User from "../models/User.js";

export const protect = async(req,res,next)=>{
    const token = req.headers.authorization ;
    if(!token){
        res.json({success : false , message : "Authorization failed"})
    }
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const userId = decoded.userId;
        if(!userId){
        res.json({success : false , message : "Authorization failed 2"})
        }

        req.user = await User.findById(userId).select("-password");
        next();
    } catch (error) {
        res.json({success : false , message : error.message})
    }
}