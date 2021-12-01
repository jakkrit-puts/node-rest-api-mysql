const model = require('./../models/index');
const bcrypt = require('bcrypt');
const config = require('./../config/index');
const jwt = require('jsonwebtoken');

exports.register = async (req, res, next) => {
    try {

    const { first_name, last_name, username, password, role } = req.body;
    const hashPassword = await bcrypt.hash(password, Number(config.SALT))

    // check username
    const existUsername = await model.User.findOne({
        where: { username: username },
    });
  
      if (existUsername) {
        const error = new Error("Username already exists");
        error.statusCode = 400;
        throw error;
      }
  
    const user = await model.User.create({
        first_name: first_name,
        last_name: last_name,
        username: username,
        password: hashPassword,
        role: role,
    })

    console.log(user);

    res.status(200).json({
        message: 'create data successfully!',
        data: user,
    })
        
    } catch (error) {
       next(error)
    }
}

exports.login = async (req, res, next) => {
    try {

    const { username, password } = req.body

    const user = await model.User.findOne({
        where: { username: username },
    });

    if(!user){
        const error = new Error("User Not Found!");
        error.statusCode  = 404;
        throw error;
    }

    const isValid = await user.checkPassword(password, user.password);
    if (!isValid) {
      const error = new Error("Invalid password!");
      error.statusCode = 401;
      throw error;
    }

    const token = await user.createToken(user.id, user.role);
    const expires_in = jwt.decode(token);

    return res.status(200).json({
      access_token: token,
      expires_in: expires_in.exp,
      token_type: "Bearer",
    });

    } catch (error) {
        next(error)
    }
}

exports.profile = (req, res, next) => {
  try {
     res.status(200).json({
        message: "get data successfully!",
        data: req.user
     });
  } catch (error) {
    next(error)
  }
}