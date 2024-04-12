const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, {
    expiresIn: "3d",
  });
};

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    const name = user.name;
    const surname = user.surname;
    const role = user.role;
    const { _id } = jwt.verify(token, process.env.SECRET);
    res.status(200).json({ email, name, surname, token, _id, role });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//signup user
const signupUser = async (req, res) => {
  const { email, password, name, surname, gender, dob, role } = req.body;
  try {
    const user = await User.signup(
      email,
      password,
      name,
      surname,
      gender,
      dob,
      role
    );
    const token = createToken(user._id);
    const { _id } = jwt.verify(token, process.env.SECRET);
    res.status(200).json({ email, name, surname, token, _id, role });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signupUser, loginUser };
