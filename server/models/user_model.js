var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    id          : Number,
    username    : String, // 아이디
    password    : String, // 패스워드
    author      : String, // 이름
    permission  : Number, // 권한 (0-admin, 1-비 로그인 유저 2-로그인유저)
    created_at  : Date
})

module.exports = mongoose.model('User', userSchema);