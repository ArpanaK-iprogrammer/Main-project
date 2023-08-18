const connection = require('../config/dbconnect');

const service_register = async (name, email, password) => {
    try {
        const insertQuery = 'INSERT INTO credentials (name, email, password) VALUES (?, ?, ?)';
        const insertValues = [name, email, password];

        const queryPromise = new Promise((resolve, reject) => {
            connection.query(insertQuery, insertValues, (error, result) => {
                if (error) {
                    console.error('Database error:', error);
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });

        const result = await queryPromise;

        if (result.affectedRows === 1) {
            console.log('User registered successfully');
            return 'User registered successfully'
        } else {
            console.error('Error inserting user');
            throw new Error('User registration failed');
        }
   
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
};

module.exports = service_register;