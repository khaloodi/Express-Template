require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('./auth/authenticate-middleware.js');
const authRouter = require('./auth/auth-router.js');
const userRouter = require('./routers/users-router.js');

const { handleError } = require('./middleware/error-middleware.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/users', authenticate, userRouter);

server.use((err, req, res, next) => { handleError(err, req, res); });

server.get('/', (req, res) => {
    res.status(200).json({message: 'hi'});
});

module.exports = server;