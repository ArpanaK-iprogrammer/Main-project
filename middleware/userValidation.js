const schema = require('../model/schema');

function validateRegistration(req, res, next) {
    
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
}

function validateLogin(req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
}

module.exports = {validateRegistration,validateLogin,};