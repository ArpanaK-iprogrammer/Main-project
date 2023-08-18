const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string()
    .min(3).max(50),
    email: Joi.string().
    email(),
    password: Joi.string().
    min(6),
});

module.exports = schema;