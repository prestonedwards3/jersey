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
    insert: function(val, cb){
        orm.insertOne(val, function(res){
            cb(res);
        })
    },
    update: function(val2, cb){
        orm.updateOne(val2, function(res){
            cb(res);
        })
    },
    delete: function(val, cb){
        orm.deleteOne(val, function(res){
            cb(res);
            console.log(val);
        })
    }
};




module.exports = jersey