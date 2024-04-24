import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const cookieOptions = {
  maxAge: 15 * 24 * 60 * 1000,
  sameSite: "none",
  httpOnly: true,
  secure: true,
};

const connectDB = (uri) => {
  mongoose
    .connect(uri, { dbName: "Chatmingle" })
    .then((data) => console.log(`Connected to DB: ${data.connection.host}`))
    .catch((err) => {
      throw err;
    });
};

const sendToken = (res, user, code, message) => {
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

  return res
    .status(code)
    .cookie("chatmingle-token", token, cookieOptions)
    .json({
      success: true,
      message,
    });
};

//create for groupchat this fun

const emitEvent = (req,event,users,data)=>{
  console.log("emmiting event",event);
};

export { connectDB, sendToken, cookieOptions,emitEvent };
