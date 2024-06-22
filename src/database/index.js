import mongoose from "mongoose";


export const dbConnection = () => {
    const url = 'mongodb://localhost:27017/userjs';
    mongoose.connect(url)
        .then(() => {
            console.log("connection successful")
        })
        .catch((err) => {
            throw new Error(err)
        })
}