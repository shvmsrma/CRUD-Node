const Mentor = require('../models/mentor.model');

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.mentor_create = function (req, res) {
    let mentor = new Mentor(
        {
            name: req.body.name,
            phone: req.body.phone,
            task : req.body.task
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Mentor Created successfully')
    })
};


exports.mentor_details = function (req, res) {
    Product.findById(req.params.id, function (err, mentor) {
        if (err) return next(err);
        res.send(mentor);
    })
};

exports.mentor_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Mentor udpated.');
    });
};

exports.mentor_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};