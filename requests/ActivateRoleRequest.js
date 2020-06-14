const { body } = require('express-validator');

/**
 * Validate request 
 */
exports.validate = () => {

    return [ 
            body('active').exists()
       ]; 
}