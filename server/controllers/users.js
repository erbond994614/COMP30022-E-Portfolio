const User = require("../dbModels/users");
const bcrypt = require("bcrypt");

//Add a new user to the database
const createUser = async function (req, res) {
  try {
    const user = new User(req.body);
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (error) {
    if (error.code == 11000) {
      res.status(400).send({ error: "email already exists" });
    } else {
      res.status(400).send({ error: "Bad Request" });
    }
  }
};

//login user and retrieve their page
const loginUser = async function (req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(400).send({ error: "Email does not exist" });
    } else if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = await user.generateAuthToken();
      res.status(201).send({
        user,
        token,
      });
    } else {
      res.status(400).send({ error: "Incorrect Email or Password" });
    }
  } catch {
    res.status(400).send({ error: "An unexpected error occured" });
  }
};

const logoutUser = async function (req, res) {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.status(201).send();
  } catch (error) {
    res.status(400).send({ error: "an unknown error occured" });
  }
};

const updatePortfolio = async function (req, res) {
  const user = await User.findOne({ email: req.user.email });
  if (user) {
    user.portfolio = req.body;
    try {
      await user.save();
      res.status(201).send(user);
    } catch {
      res.status(400).send({ error: "Bad Request" });
    }
  } else {
    res.status(400).send({ error: "User does not exist" });
  }
};

const getPortfolio = async function (req, res) {
  const user = await User.findOne({ _id: req.params.userId });
  if (user) {
    res.status(201).send(user.portfolio);
  } else {
    res.status(400).send({ error: "Unable to find user" });
  }
};

const uploadProfilePicture = async function (req, res) {
  const user = await User.findOne({ email: req.user.email });
  if (user) {
    if (req.files) {
      const input = req.files.input;
      const file = {
        name: input.name,
        mimetype: input.mimetype,
        size: input.size,
        data: input.data.toString("base64"),
      };
      user.portfolio.profilePicture = file;
      await user.save();
      res.status(201).send(user);
    } else {
      res.status(400).send({ error: "no file found" });
    }
  } else {
    res.status(400).send({ error: "unable to find user" });
  }
};

const uploadFile = async function (req, res) {
  const user = await User.findOne({ email: req.user.email });
  if (user) {
    if (req.files) {
      let file = req.files.input;
      let fileSchema = {};
      fileSchema.name = file.name;
      fileSchema.size = file.size;
      fileSchema.mimetype = file.mimetype;
      fileSchema.data = file.data.toString("base64");

      user.portfolio.downloads.push(fileSchema);
      await user.save();
      res.status(200).send(user);
    } else {
      res.status(400).send({ error: "no file found " });
    }
  } else {
    res.status(400).send({ error: "unable to find user" });
  }
};

module.exports = {
  createUser,
  loginUser,
  logoutUser,
  updatePortfolio,
  getPortfolio,
  uploadProfilePicture,
  uploadFile,
};
