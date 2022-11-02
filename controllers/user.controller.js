const userProcessor = require('../db/db_processors/UserProcessors');
const errorMessages = require('../error/errorMessages');
const redisClient = require('../redis/redis');
const redisKeys = require('../redis/redis-keys');

exports.getAllUsers = async (req, res) => {
    try {
        let users = await redisClient.getValueByKey(redisKeys.AllUsersKey);

        if (!users) {
            users = await userProcessor.GetAllUsers();
            redisClient.setValueByKey(redisKeys.AllUsersKey, 3600, users);
        }

        if(users) return res.status(200).json(users);

    } catch (error) {
        return res.status(500).send(errorMessages.Error500);
    }

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