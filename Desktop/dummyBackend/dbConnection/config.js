import mongoose from "mongoose";

const connectDB = async () => {
    const conn = await mongoose.connect("mongodb+srv://v:s@cluster0.pipzire.mongodb.net/?appName=Cluster0", {

    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
}
export default connectDB;