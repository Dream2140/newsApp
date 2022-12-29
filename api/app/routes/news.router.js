const express = require('express');
const multer = require("multer");

const whitelist = [
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/webp'
]

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '_' + Date.now() + '.jpg');
    }
});
const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb)=>{
        if (!whitelist.includes(file.mimetype)) {
            req.fileValidationError = "Forbidden file extension";
            cb(null, false, req.fileValidationError);
        }
        cb(null, true)
    },
    limits: {
        fileSize: 5000000
    }
});

const router = express();

const newsController = require('../controllers/news.controller');

const createNewsValidator = require('../validators/news/createNewsValidator');

router.post('/update-from-cybersport/', newsController.getAllNewsFromCybersport);

router.post('/post-news/', upload.single('image'),createNewsValidator, newsController.createNews  );

module.exports = router;