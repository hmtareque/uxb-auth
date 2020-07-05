const { body } = require('express-validator');

// Models
const Role = require('../../models/role');


/**
 * Validate request
 */
exports.validate = () => {
    return [
        body('name').exists().custom(name => Role.isNameAlreadyExist(name)),
        body('authorizations').isArray().exists(),
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