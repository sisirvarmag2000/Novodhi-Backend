var express = require('express');
var router = express.Router();
var product = require('../Models/Product');

router.get('/', function (req, res, next) {

    product.getAllProducts(function (err, rows) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });

});
//http://localhost:3000/product/
router.post('/', function (req, res, next) {

    product.addProduct(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }

    });
});
//http://localhost:3000/product/1
router.delete('/:id', function (req, res, next) {

    product.deleteProduct(req.params.id, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });

});
//http://localhost:3000/products/1
router.put('/:pro_id', function (req, res, next) {

    product.updateProduct(req.params.id, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });

});
module.exports = router;