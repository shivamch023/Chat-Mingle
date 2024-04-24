import { compare } from "bcrypt";
import { User } from "../models/user.js";
import { cookieOptions, sendToken } from "../utils/faetures.js";
import { TryCatch } from "../middlewares/error.js";
import { ErrorHandler } from "../utils/utility.js";

// create a new user and save it to the database and save token in cookie
const newUser = async (req, res) => {
  const { name, username, password, bio } = req.body;

  console.log(req.body);

  const avatar = {
    public_id: "Sdfsd",
    url: "asdfd",
  };

  const user = await User.create({
    name,
    bio,
    username,
    password,
    avatar,
  });

  sendToken(res, user, 201, "User created");
};

//Login user and token in cookie

const login = TryCatch(async (req, res, next) => {
  const { username, password } = req.body;

  const user = await User.findOne({
    username,
  }).select("+password");
  console.log(user)

  if (!user) return next(new ErrorHandler("Invalid Username or Password", 404));

  const isMatch = await compare(password, user.password);

  if (!isMatch)
    return next(new ErrorHandler("Invalid Username or Password", 404));

  sendToken(res, user, 200, `Welcome Back, ${user.name}`);
});

const getMyProfile = TryCatch(async (req, res) => {
  const user = await User.findById(req.user);

  res.status(200).json({
    success: true,
    user,
  });
});

const logout = TryCatch(async (req, res) => {
  return res
    .status(200)
    .cookie("chatmingle-token", "", { ...cookieOptions, maxAge: 0 })
    .json({
      success: true,
      message: "Logged out successfully",
    });
});

// for search user ,user search kar paye

const searchUser = TryCatch(async (req, res) => {


    const {name}=req.query;

  return res
    .status(200)
    .json({
      success: true,
      message: name,
    });
});

export { newUser, login, getMyProfile, logout, searchUser };
 