const express = require('express')
const bodyParser = require('body-parser')
const rateLimiter = require('express-rate-limit')
const cookieParser = require('cookie-parser')
const app = express()
const port = 3000

// Middlewares
const indexRoute = require('./routes/index')

// Rate limiter configuration
const limiter = rateLimiter({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 1000,
    message: 'Too many requests from this device, please try again in an hour'
});


// Middleware setup
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use("/files", express.static("dist"));
app.use(cookieParser());
app.use(limiter);

// Routes
app.use(indexRoute)

app.listen(port, () => console.log(`Running on ${port}!`))