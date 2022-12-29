const express = require('express');
const mongoose = require("mongoose");
const morgan = require('morgan');

require('dotenv').config();

const router = require('./app/routes');

const app = express();

app.use(morgan('tiny'));
app.use(express.json());

app.use('/api/', router);

const PORT = process.env.PORT;

(async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Could not connect to the database', error);
    }
})();