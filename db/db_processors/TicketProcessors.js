const db = require('../../db/Postgresql');

class TicketProcessors {
    static async GetAllTickets() {
        let query = "SELECT * FROM tickets";
        let result = await db.query(query, []);      
        return result.rows
    }

    static async GetTicketById(id) {
        let query = "SELECT * FROM tickets WHERE ticket_id = $1";
        let result = await db.query(query, [id]);
        return result.rows[0];
    }
}

module.exports = TicketProcessors;