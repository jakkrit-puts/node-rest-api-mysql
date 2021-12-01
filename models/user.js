'use strict';
const {
  Model
} = require('sequelize');

const config = require("./../config/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  // เข้ารหัส Password
  User.encryptPassword = async function(password) {
    const salt = await bcrypt.genSalt(Number(config.SALT));
    const hashPassword = await bcrypt.hash(password, salt);
    return hashPassword;
 }

  // เช็ค Password
  User.prototype.checkPassword = async (password, hashPassword) => {
    const isValid = await bcrypt.compare(password, hashPassword);
    return isValid;
  };

  // สร้าง Token
  User.prototype.createToken = async (id, role) => {
    const token = await jwt.sign(
      {
        id: id,
        role: role,
      },
      config.JWT_KEY,
      { expiresIn: config.JWT_EXP }
    );

    return token;
  };
  
  return User;

 
};