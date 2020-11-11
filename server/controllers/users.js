const User = require("../dbModels/users")
const bcrypt = require("bcrypt")
const {createEmailSc,sendEmail}  = require('./email');
const SecurityCodeStore = require('../dbModels/securityCodeStore');

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
  if (!req.files.input.mimetype.includes('image')) {
    res.status(400).send({error: 'Unsupported File Type'})
    return
  }
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

const uploadBlogFile = async function (req, res) {
  const user = await User.findOne({ email: req.user.email });
  if (user) {
    if (req.files) {
      let input = req.files.input;
      let file = {
        name: input.name,
        size: input.size,
        mimetype: input.mimetype,
        data: input.data.toString("base64"),
      }

      user.portfolio.blog.push({file: file, text: ""});
      await user.save();
      res.status(201).send(user);
    } else {
      res.status(400).send({ error: "no file found " });
    }
  }else {
    res.status(400).send({ error: "update error" });
  }
}

/**
 * upload new blog image
 * @param {Object} req 
 * @param {Object} res 
 *
const uploadBlog = async function(req,res) {
    let user = await User.findOne({email:req.user.email});
    if(user && req.files){
        const input = req.files.input;
            const file = {
                name:input.name,
                mimetype: input.mimetype,
                size:input.size,
                data:input.data.toString('base64')
            }
        user.portfolio.blogs.push(file);
        user.save().then(() => {
            res.status(201).send(user)
        }).catch((err) => {
            console.log(err);
            res.status(400).send({error: "update error"})
       })
    }
}*/

/**
 * get security code from user email to reset password
 * @param {Object} req 
 * @param {Object} res 
 */
const forgetPassword = async (req,res) => {
  console.log(req.body);
  const {email} = req.body;
  let user = await User.findOne({email:email});
  if(user){
    let code = await createEmailSc(email);
    await sendEmail(code,email);
  }
  res.status(201).send();
}

/**
 * reset password from security code 
 * @param {Object} req 
 * @param {Object} res 
 */
const resetPassword = async(req,res) => {
  const {email,password,code} = req.body;
  let log = await SecurityCodeStore.findOne({email:email,scode:code});
  if(log){
    let user = await User.findOne({email:email});
    user.password = password;
    await user.save();
    res.status(201).send();
  }else {
    res.status(400).send({error:"code error"})
  }
}

/**
 * upload certifacate
 * @param {Object} req 
 * @param {Object} res 
 */
const uploadCertificate = async (req,res) => {
  let user = await User.findOne({email:req.user.email});
  if(user && req.files){
    const input = req.files.input;
    const file = {
      name:input.name,
      size:input.size,
      data:input.data.toString('base64')
    }
    user.portfolio.certificates.push(file);
    user.save().then(() => {
      res.status(201).send(user)
    }).catch((err) => {
      console.log(err);
      res.status(400).send({error: "update error"})
    })
  }
}

module.exports = {
    createUser,
    loginUser,
    logoutUser,
    updatePortfolio,
    getPortfolio,
    uploadProfilePicture,
    uploadBlogFile,
    //uploadBlog,
    forgetPassword,
    resetPassword,
    uploadCertificate,
}
