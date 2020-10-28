var db = require('../dbConnection'); //reference of dbconnection.js file

var Product = {

    getAllProducts: function (callback) {

        return db.query('select * from product_tbl', callback);
    },
    addProduct: function (product_tbl, callback) {
        return db.query('insert into product_tbl values(?,?,?,?,?,?,?)', [product_tbl.pro_id, product_tbl.pro_name, product_tbl.pro_price, product_tbl.pro_desc, product_tbl.pro_qty, product_tbl.pro_mfg, product_tbl.pro_img], callback);
    },
    deleteProduct: function (pro_id, callback) {
        return db.query('delete from product_tbl where pro_id=?', [pro_id], callback);
    },
    updateProduct: function (pro_id, product_tbl, callback) {
        return db.query('update product_tbl set pro_name=?, pro_price=?, pro_desc=?, pro_qty=?, pro_mfg=?, pro_img=? where pro_id=?', [product_tbl.pro_name, product_tbl.pro_price, product_tbl.pro_desc, product_tbl.pro_qty, product_tbl.pro_mfg, product_tbl.pro_img, pro_id], callback);
    }

};

module.exports = Product;