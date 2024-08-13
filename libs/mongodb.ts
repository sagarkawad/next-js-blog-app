import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL as string);
    console.log("Connected to Mongo");
  } catch (err) {
    console.log(err);
  }
};

export default connectMongoDB;
