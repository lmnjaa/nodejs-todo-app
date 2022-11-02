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
}

module.exports = UserProcessors;