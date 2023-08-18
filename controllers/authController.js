const schema = require('../model/schema');
const service_register = require('../services/service_register');
const service_login = require('../services/service_login');

    

async function register(req, res) {
    try {
        console.log(req.body);
        const { name, email, password } = req.body;
        
        const validationResult = schema.validate({ name, email, password });

        if (validationResult.error) {
            return res.status(400).json({ message: validationResult.error.details[0].message });
        }

        const result = await service_register(name, email, password);

        res.status(200).json({ message: 'Registered successful' });

    } catch (error) {
        console.log(error);
        console.error('An error occurred:', error);
        res.status(500).json({ message: 'An error occurred' });
    }
}


async function login(req, res) {
    try {
        const { email, password } = req.body;
        const { error } = schema.validate({ email, password });

        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        const result = await service_login(email, password);
        res.status(200).json({ message: 'Login successful' });

    } catch (error) {
        console.error('An error occurred:', error);
        res.status(500).json({ message: 'An error occurred' });
    }
}

module.exports = { register, login };
