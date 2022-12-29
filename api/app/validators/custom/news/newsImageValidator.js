module.exports = function  newsImageValidator(req, res, next){
    if (req.file.size > 5000000) {
        return res.status(400).send({message:'Image must be less than 5 MB in size'});
    }
    if (req.fileValidationError) {
        return res.status(400).send({message:'File should be an image type'});
    }
    next();
}