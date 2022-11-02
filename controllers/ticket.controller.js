const ticketProcessors = require('../db/db_processors/TicketProcessors');
const responseMessages = require('../messages/responseMessages');

exports.getAllTickets = async (req, res) => {
    const response = await ticketProcessors.GetAllTickets();
    if (response) return res.status(200).json(response);

    return res.status(404).send(responseMessages.NoContent);
};

exports.getTicketById = async (req, res) => {
    const { id } = req.params;
    const response = await ticketProcessors.GetTicketById(id);

    if (response) return res.status(200).json(response);
    return res.status(404).send(responseMessages.NoContent);
}