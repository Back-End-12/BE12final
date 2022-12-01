const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes')
const kegiatanRoutes = require('./routes/kegiatanRoutes')
const { errorHandler } = require('./middlewares/errorMiddleware')
const cors = require('cors');

const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors);

// connect to mongodb atlas database
mongoose.connect('mongodb+srv://febe12:febe12312345@cluster0.8eof8cn.mongodb.net/test', {useNewUrlParser:true})
.then(() => {
    console.log("connect to mongodb atlas");
}).catch(error => {
    console.log("Something wrong happened",error);
})

//routes
app.use(userRoutes);
app.use(kegiatanRoutes);
app.use(errorHandler);

// start server
app.listen(PORT, () => {
    console.log("Server started at PORT ",PORT);
})