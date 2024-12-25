import mongoose from "mongoose";

const connectDB = ()=>{
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}

export default connectDB