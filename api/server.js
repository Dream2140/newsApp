require('dotenv').config({path: "../.env"});

const express = require('express');
const mongoose = require("mongoose");
const morgan = require('morgan');
const cors = require('cors');

const cookieParser = require('cookie-parser');
const errorMiddleware = require('./app/middlewares/error.middleware');
const router = require('./app/routes');
const imageRouter = require('./app/routes/images.router')

const app = express();

app.use(morgan('tiny'));
app.use(express.json());
app.use(cookieParser());
app.use(cors(
    {
        origin: ['http://localhost:3001', 'http://localhost:3000'],
        credentials: true
    }
));

app.use('/api/', router);

app.use('/uploads/', imageRouter);

app.use(errorMiddleware);





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
        console.error(error);
    }
})();