const { body, check} = require('express-validator');

// Client model
const Client = require('../models/clientModel');

/**
 * Validate request 
 */
exports.validate = () => {

    return [ 
        body('name').exists(),
        body('authorizations').exists()
       ]; 
}

/**
 * Existing role's updated data
 */
exports.data = (role, req) => {

    const updated_name = req.body.name;
    const updated_authorizations = req.body.authorizations;

    role.name = updated_name;
    role.authorizations = updated_authorizations;
    role.updated_at = Date.now();
    role.updated_by = 1;

    return role;
}