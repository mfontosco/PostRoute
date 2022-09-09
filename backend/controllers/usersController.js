import User from "../model/UserModel.js";
import generateToken from "../Utils/generateToken.js";
//@descr:all users
//routes:GET/api/v1/user
//access:admin only
const getUsers = async (req, res) => {
  res.send("get all users");
};

//@descr: create user
//routes:post/api/v1/user/register
//access:admin only
const createUser = async (req, res) => {
  const { email, password } = req.body;
  const userExist = await User.find({ email: email });
  if (userExist.length > 0) {
    throw Error("User exists");
    return;
  }
  try {
    const user = await User.create({
      email,
      password,
    });
    res.json({
      status: "success",
      user: {
        _id: user._id,
        email: user.email,
       
      },
    });
  } catch (err) {
    console.log(err);
    res.json({
      status: "fail",
      error: err.message,
    });
  }
};
//@descr:all users
//routes:post/api/v1/user/login
//access:user login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    //check that email exist
    const user = await User.findOne({ email: email });
    if (!user) {
      res.status(402);
      throw new Error("User does not exist,pls register");
    }
    if (user && (await user.passwordMatched(password))) {
      res.status(200).json({
        status: "success",
        user: {
          _id: user._id,
          email: user.email,
          token:await generateToken(user._id)
        },
      });
    } else {
      res.status(402);
      throw new Error("incorrect password")
    }
    console.log(user);
  } catch (err) {
    console.log(err);
    res.status(402).json({
      status: "failed",
      err: err.message,
    });
  }
};

export { getUsers, createUser, loginUser };
