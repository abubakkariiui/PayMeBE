import asyncHandler from "express-async-handler";
import Agent from "../models/agentModel.js";
import generateToken from "../utils/generateToken.js";

//@description     Auth the user
//@route           POST /api/users/login
//@access          Public
const authAgent = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await Agent.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: user.address,
      city: user.city,
      postalCode: user.postalCode,
      cnic: user.cnic,
      pic: user.pic,
      amount: user.amount,
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
const registerAgent = asyncHandler(async (req, res) => {
  const { name, email, password, pic, phone, address, cnic,postalCode, city , amount } = req.body;

  const userExists = await Agent.findOne({ email });

  if (userExists) {
    res.status(404);
    throw new Error("Agent already exists");
  }

  const user = await Agent.create({
    name,
    email,
    password,
    pic,
    phone,
    address,
    cnic,
    amount,
    postalCode,
    city
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: user.address,
      cnic: user.cnic,
      city: user.city,
      postalCode: user.postalCode,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Agent not found");
  }
});

// @desc    GET user profile
// @route   GET /api/users/profile
// @access  Private
const updateAgentProfile = asyncHandler(async (req, res) => {
  const user = await Agent.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.pic = req.body.pic || user.pic;
    user.phone = req.body.phone || user.phone;
    user.address = req.body.address || user.address;
    user.cnic = req.body.cnic || user.cnic;
    user.city = req.body.city || user.city;
    user.amount = req.body.amount || user.amount,
    user.postalCode = req.body.postalCode || user.postalCode;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      pic: updatedUser.pic,
      phone: updatedUser.phone,
      address: updatedUser.address,
      cnic: updatedUser.cnic,
      city: updatedUser.city,
      amount:updatedUser.amount,
      postalCode: updatedUser.postalCode,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

export { authAgent, updateAgentProfile, registerAgent };
