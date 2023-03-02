const express = require('express');
const path = require("path");

const router = express();

router.get('/:filename', (req, res) => {
    const filename = req.params.filename;
    res.sendFile(path.join(__dirname, "../../") + `uploads/${filename}`);
});

module.exports = router;