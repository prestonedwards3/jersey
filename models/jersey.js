var orm = require('../config/orm.js');

var jersey = {
    selectAll: function(cb){
        orm.selectAll(function(res){
            cb(res)
        });
    },

    select: function(col, val, cb){
        orm.select(col, val, function(res){
            cb(res);
        })
    },
    insert: function(col, val, cb){
        orm.insertOne(col, val, function(res){
            cb(res);
        })
    },
    Update: function(col, val, cb){
        orm.updateOne(col, val, function(res){
            cb(res);
        })
    }
};




module.exports = jersey