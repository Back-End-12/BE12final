const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes')
const kegiatanRoutes = require('./routes/kegiatanRoutes')
const { errorHandler } = require('./middlewares/errorMiddleware')
const cors = require('cors');

const app = express();
// require('dotenv').config();

// const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// connect to mongodb
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

//routes
app.use(userRoutes);
app.use(kegiatanRoutes);
app.use(errorHandler);

// start server
app.listen(process.env.PORT||5173, function () {
    console.log(`listen on port ${process.env.PORT || 5173}`);
});
