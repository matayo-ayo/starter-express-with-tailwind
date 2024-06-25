const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const port = 3000

// Middlewares
const indexRoute = require('./routes/index')

// Middleware setup
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use("/files", express.static("dist"));
app.use(cookieParser());

// Routes
app.use(indexRoute)

app.listen(port, () => console.log(`Running on ${port}!`))