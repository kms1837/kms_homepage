var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    id          : Number,
    name        : String,
    password    : String,
    another     : String,
    created_at  : Date
})

module.exports = mongoose.model('UsernModel', userSchema);