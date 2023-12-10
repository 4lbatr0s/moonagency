import mongoose from "mongoose";

const connect = async () => {
  try {
    console.log(process.env.NEXT_PUBLIC_MONGO)
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGO);
  } catch (error) {
    throw new Error(`Connection failed! :${error}`);
  }
};

export default connect;