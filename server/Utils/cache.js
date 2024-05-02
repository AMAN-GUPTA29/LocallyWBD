const Redis = require('ioredis');

const redisClient = new Redis({
    host: '127.0.0.1', // Redis server address
    port: 6379,        // Redis server port
  });
  
exports.redisClient = redisClient;