const { validationResult } = require('express-validator');

const errorFormatter = ({msg, param}) => {
    return msg;
  };
 
exports.validate = (req) => {
    return validationResult(req).formatWith(errorFormatter);
}