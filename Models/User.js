var db = require('../dbConnection'); //reference of dbconnection.js file

var User = {

    getAllUsers: function (callback) {

        return db.query('select * from user_tbl', callback);
    },
    addUser: function (user_tbl, callback) {
        return db.query('insert into user_tbl values(?,?,?,?)', [user_tbl.user_email, user_tbl.user_name, user_tbl.user_password, user_tbl.user_mobile_no], callback);
    },
    deleteUser: function (user_email, callback) {
        return db.query('delete from user_tbl where user_email=?', [user_email], callback);
    },
    updateUser: function (user_email, user_tbl, callback) {
        return db.query('update user_tbl set user_name=?, user_password=?, user_mobile_no=? where user_email=?', [user_tbl.user_name, user_tbl.user_password, user_tbl.user_mobile_no, user_email], callback);
    }

};

module.exports = User;