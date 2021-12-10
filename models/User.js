const mongoose = require('mongoose')

// userSchma schema 정의 => sql의 테이블 정의와 비슷
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength:50
    },
    email: {
        type: String,
        trim: true, //자동 trim 기능
        unique: 1 //같은 이메일 중복 못하게 
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength:50    
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: { //token 유효기간
        type: Number
    }
})

// Model이 Schema 를 감싼다
// mongoose.model('User',userSchema) => User : User라는 모델명
const User = mongoose.model('User',userSchema)

// User라는 모듈을 다른 곳에서 사용할 수 있도록 export 한다.
module.exports = { User }