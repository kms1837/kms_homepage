var mongoose = require('mongoose');

var questionSchema= mongoose.Schema({
    id          : Number,
    username    : String,
    text        : String,
    replys      : Array,
    created_at  : Date
});

module.exports = mongoose.model('QuestionModel', questionSchema);