import mongoose from "mongoose";

let conected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if (conected) {
    console.log("MongoDB is connected ");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    conected = true;
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

export default connectDB;
