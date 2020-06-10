const { body } = require('express-validator');

// Models
const Client = require('../models/clientModel');
const Role = require('../models/roleModel');


/**
 * Validate request
 */
exports.validate = () => {
    return [
      //  body('client_id').exists().isMongoId().custom(clientId => Client.isValid(clientId)),
        body('name').exists().custom(name => Role.isNameAlreadyExist(name)),
        body('authorizations').exists(),
    ];
}

/**
 * New client data 
 */
exports.data = (req) => {

   // const client_id = req.body.client_id;
    const name = req.body.name;
    const authorizations = req.body.authorizations;

    const role = {
        name: name,
        authorizations: authorizations,
        created_by: 1
    };

    return role;
}