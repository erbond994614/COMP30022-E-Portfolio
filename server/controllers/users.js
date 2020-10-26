const User = require("../dbModels/users")
const bcrypt = require("bcrypt")
const mongoose = require('mongoose');

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
      let input = req.files.input;
      let file = {
        name: input.name,
        size: input.size,
        mimetype: input.mimetype,
        data: input.data.toString("base64"),
      }

      user.portfolio.downloads.push(file);
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
 * update user avatar image
 * @param {Object} req 
 * @param {Object} res 
 */
const uploadAvatar = async function(req,res) {
    const user = await User.findOne({email: req.user.email});
    if(user){
        if(req.files){
            const input = req.files.input;
            const file = {
                name:input.name,
                mimetype: input.mimetype,
                size:input.size,
                data:input.data.toString('base64')
            }
            user.avatar = file;
            user.save().then(() => {
                res.status(201).send(user)
            }).catch((err) => {
                console.log(err);
                res.status(400).send({error: "update error"})
            })
        }
    }
}
/**
 * update user info
 * @param {Object} req 
 * @param {Object} res 
 */
const updateUserInfo = async function(req,res) {
   let user = await User.findOne({email: req.user.email});
   if(user){
       let info = req.body.info;
       let aboutMe = req.body.aboutMe;
       if(info){
        user.portfolio.info = info;
       }
       if(aboutMe){
        user.portfolio.aboutMe = aboutMe
       }
       user.save().then(() => {
            res.status(201).send(user)
       }).catch((err) => {
            console.log(err);
            res.status(400).send({error: "update error"})
       })

   }
}

/**
 * upload new blog image
 * @param {Object} req 
 * @param {Object} res 
 */
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
}

/**
 * delete blog img from mongodb
 * @param {Object} req 
 * @param {Object} res
 *  
 */
const deleteBlog = async function(req,res) {
    try {
        await User.updateOne({email:req.user.email},{
            "$pull":{
                "portfolio.blogs":{
                    '_id':mongoose.Types.ObjectId(req.body.id)
                }
            }
        })
        let user = await User.findOne({email:req.user.email});
        res.status(201).send(user);    
    } catch (e) {
        console.log(e)
        res.status(400).send({error:"update error"})
    }
}

module.exports = {
    createUser,
    loginUser,
    logoutUser,
    updatePortfolio,
    getPortfolio,
    uploadProfilePicture,
    uploadAvatar,
    updateUserInfo,
    uploadBlog,
    deleteBlog,
    uploadFile
}



