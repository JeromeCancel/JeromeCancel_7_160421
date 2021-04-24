const express = require('express');
const cors = require('cors');
const helmet = require("helmet");
const nocache = require("nocache");
const cookieSession = require("cookie-session");

require('dotenv').config();

const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const commentRoutes = require('./routes/comment');


const app = express();

// METHOD CALL FOR HELMET //
app.use(helmet());

// METHOD CALL FOR COOKIE-SESSION //
app.use(
    cookieSession({
      name: "session",
      secret: "s3CuR3T3",
      cookie: {
        secure: true,
        httpOnly: true,
        domain: "http://localhost:8080/",
      },
    })
);

// METHOD CALL FOR NOCACHE //
app.use(nocache());

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/', userRoutes);
app.use('/api/', postRoutes);
app.use('/api/', commentRoutes);

module.exports = app;