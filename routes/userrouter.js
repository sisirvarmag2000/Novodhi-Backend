var express = require('express');
var router = express.Router();
var user = require('../Models/User');

router.get('/', function (req, res, next) {

    user.getAllUsers(function (err, rows) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });

});
//http://localhost:3000/users1/
router.post('/', function (req, res, next) {

    user.addUser(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }

    });
});
//http://localhost:3000/users1/1
router.delete('/:id', function (req, res, next) {

    user.deleteUser(req.params.id, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });

});
//http://localhost:3000/users1/1
router.put('/:id', function (req, res, next) {

    user.updateUser(req.params.id, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });

});
module.exports = router;