'use strict';
const {
  Model
} = require('sequelize');

const {
  hashPassword
} = require('../helper/bcryptjs')


module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Job)
      User.hasMany(models.Request)
    }
  };
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Name is require'
        },
        notNull: {
          msg: 'Name is require'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Password is required"
        },
        notEmpty: {
          msg: "Password is required"
        }
      }
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Position is require'
        },
        notNull: {
          msg: 'Position is require'
        },
        isIn: {
          args: [
            ['Manager', 'Employe']
          ],
          msg: 'Field must Manager or Employe'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'Email must unique'
      },
      validate: {
        notEmpty: {
          msg: 'Email is require'
        },
        notNull: {
          msg: 'Email is require'
        },
        isEmail: {
          msg: 'Email format is require'
        },
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'PhoneNumber is require'
        },
        notNull: {
          msg: 'PhoneNumber is require'
        }
      }
    },
  }, {
    hooks: {
      beforeCreate(ins, opt) {
        ins.password = hashPassword(ins.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};