import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    address:String
})

export const User=mongoose.models.User || mongoose.model('User',userSchema);


