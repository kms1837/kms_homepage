var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    id          : Number,
    name        : String, // 아이디
    password    : String, // 패스워드
    author      : String, // 이름
    permission  : String, // 권한 (1-admin, 0-유저)
    created_at  : Date
})

module.exports = mongoose.model('UsernModel', userSchema);