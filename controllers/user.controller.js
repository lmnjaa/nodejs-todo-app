const userProcessor = require('../db/db_processors/UserProcessors');
const errorMessages = require('../error/errorMessages');

exports.getAllUsers = async (req, res) => {
    const response = await userProcessor.GetAllUsers();
    if (response) return res.status(200).json(response);

    return res.status(404).send(errorMessages.NoContent);
};

exports.getUserById = async (req, res) => {
    const { id } = req.params;
    const response = await userProcessor.GetUserById(id);

    if (response) return res.status(200).json(response);
    return res.status(404).send(errorMessages.NoContent);
}

exports.getTicketsFromUserByUserId = async (req, res) => {
    const { ticketId } = req.params;
    const response = await userProcessor.GetTicketsForUserId(ticketId);

    if (response) return res.status(200).json(response);
    return res.status(404).send(errorMessages.NoContent);
}