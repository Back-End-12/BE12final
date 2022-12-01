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
mongoose.connect('mongodb://mongo:cGmMYVOJdA0vUeSJjcqf@containers-us-west-139.railway.app:7731', {useNewUrlParser:true})
.then(() => {
    console.log("connect to mongodb");
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