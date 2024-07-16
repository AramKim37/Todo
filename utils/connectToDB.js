import mongoose from "mongoose";

const connection = {};

const connectToDB = async () => {
  try {
    if (connection.isConnected) {
      console.log("using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO_URI);
    connection.isConnected = db.connection[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export default connectToDB;
