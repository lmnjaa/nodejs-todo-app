require('dotenv').config();
const userProcessors = require('../db/db_processors/UserProcessors');
const responseMessages = require('../messages/responseMessages');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    const { email, password } = req.query;

    if (!(email || password)) return res.status(422).send(responseMessages.Error422);

    const user = await userProcessors.GetUserByEmail(email);

    if (!user.length !== 0 && (await bcryptjs.compare(password, user[0].password))) {
        const token = jwt.sign(
            { email: email },
            process.env.TOKEN_KEY,
            { expiresIn: "2h" }
        )

        res.cookie(process.env.JWT_NAME, token, { httpOnly: false, secure: false, maxAge: 360000});
        return res.status(200).send(responseMessages.LoggedIn);
    }

    return res.status(400).send(responseMessages.InvalidCredentials);

};

exports.register = async (req, res) => {

}