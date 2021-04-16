const express = require('express');
const cors = require('cors');

require('dotenv').config();

const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/', userRoutes);
app.use('/api/', postRoutes);

module.exports = app;