var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    id          : Number,
    name        : String,
    password    : String,
    author      : String,
    created_at  : Date
})

module.exports = mongoose.model('UsernModel', userSchema);