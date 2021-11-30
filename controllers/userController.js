const model = require('./../models/index')
const bcrypt = require('bcrypt')
const config = require('./../config/index')

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

exports.login = (req, res, next) => {
    try {
          
    } catch (error) {
        
    }
}