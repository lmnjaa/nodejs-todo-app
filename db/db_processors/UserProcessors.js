const db = require('../../db/Postgresql');

class UserProcessors {
    static async GetAllUsers() {
        let query = "SELECT * FROM users";
        let result = await db.query(query, []);
        return result.rows
    }

    static async GetUserById(id) {
        let query = "SELECT * FROM users WHERE user_id = $1";
        let result = await db.query(query, [id]);
        return result.rows[0];
    }

    static async GetUserByEmail(email) {
        let query = "SELECT * FROM users WHERE email = $1";
        let result = await db.query(query, [email]);
        return result.rows;
    }

    static async GetTicketsForUserId(id) {
        let query = "SELECT * FROM tickets WHERE tickets.user_id = $1";
        let result = await db.query(query, [id]);
        return result.rows;
    }

    static async AddNewUser(first_name, last_name, username, password, date_of_birth, email, isAdmin) {
        let query = `INSERT INTO users (first_name, last_name, username, password, date_of_birth, email, isadmin)
                     VALUES ($1, $2, $3, $4, $5, $6, $7)`;
        let result = await db.query(query, [first_name, last_name, username, password, date_of_birth, email, isAdmin]);
        return result.rows;
    }
}

module.exports = UserProcessors;