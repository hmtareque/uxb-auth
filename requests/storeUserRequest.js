const { check, body } = require('express-validator');
const bcrypt = require('bcryptjs');

// User model
const User = require('../models/user');
const Role = require('../models/role');

/**
 * Validate request
 */
exports.validate = () => {

    return [
      //  body('client').exists().isMongoId().custom(clientId => Client.isValid(clientId)),
        body('role_id').exists().isMongoId().custom(role_id => Role.isValid(role_id)),
        body('title').optional(),
        body('first_name').exists(),
        body('last_name').exists(),
        check('email').exists().isEmail().custom(email => User.isEmailAlreadyExist(email)),
        body('password').exists().isLength({ min: 6 })
    ];
}

/**
 * New user data 
 */
exports.data = (req) => {

    const role_id = req.body.role_id;
    const title = req.body.title;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const password = req.body.password;

    var hash = bcrypt.hashSync(password, 8);

    const user = {
        role_id: role_id,
        title: title,
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: hash,
        created_by: 1
    };

    return user;
}