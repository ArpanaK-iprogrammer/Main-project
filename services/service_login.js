const connection = require('../config/dbconnect');

const service_login = async (email, password) => {
    try {
        const selectQuery = 'SELECT * FROM credentials WHERE email = ?';
        const selectValues = [email];

        connection.query(selectQuery, selectValues, (error, rows) => {
            if (error) {
                console.error('Error querying database:', error);
                throw error;
            }

            if (rows.length === 0) {
                throw new Error('User not found');
            }

            if (rows[0].password === password) {
                console.log('User logged in successfully');
                return 'User logged in successfully';
            } else {
                throw new Error('Invalid password');
            }
        });
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

module.exports = service_login;