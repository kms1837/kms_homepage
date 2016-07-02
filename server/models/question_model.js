var mongoose = require('mongoose');

var QuestionSchema= mongoose.Schema({
    id          : Number,
    username    : String,
    text        : String,
    replys      : Array,
    created_at  : Date
});

module.exports = mongoose.model('QuestionModel', QuestionSchema);