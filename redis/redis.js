require('dotenv').config();
const redis = require('redis');
const redisPort = process.env.REDIS_PORT || 6379;
const client = redis.createClient(redisPort);

client.on('error', (err) => console.log('Redis Client Error', err));
client.connect()
    .catch((err) => console.log(`[REDIS CLINET] Error while establishing connection to reddis client. Error: ${err}`))
    .then(() => {
        console.log(`[REDIS CLIENT] Redis connection has been successfully established.`);
    })

module.exports = {
    client: client,
    getValueByKey: (key) => client.get(key)
        .catch((err) => console.log(`[REDIS] Error while getting value from redis by key: ${key} | Error : ${err}`))
        .then((value) => JSON.parse(value)),

    setValueByKey: (key, time, value) => client.setEx(key, time, JSON.stringify(value)),
};