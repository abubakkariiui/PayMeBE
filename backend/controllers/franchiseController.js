import asyncHandler from "express-async-handler";
import Franchise from "../models/franchiseModel.js";
import generateToken from "../utils/generateToken.js";

//@description     Auth the user
//@route           POST /api/users/login
//@access          Public
const authFranchise = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await Franchise.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

//@description     Register new user
//@route           POST /api/users/
//@access          Public
const registerFranchise = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  const userExists = await Franchise.findOne({ email });

  if (userExists) {
    res.status(404);
    throw new Error("User already exists");
  }

  const user = await Franchise.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

// @desc    GET user profile
// @route   GET /api/users/profile
// @access  Private
const updateFranchiseProfile = asyncHandler(async (req, res) => {
  const user = await Franchise.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.pic = req.body.pic || user.pic;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      pic: updatedUser.pic,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

const getAllFranchise = asyncHandler(async (req, res) => {
  const users = await Franchise.find();
  res.json(users);
});

export {
  authFranchise,
  updateFranchiseProfile,
  registerFranchise,
  getAllFranchise,
};
