// require('express') : express 모듈을 가져온다
const express = require('express')
// express function을 이용해서 새로운 앱 app를 만든다.
const app = express()
// port 3000 사용한다.
const port = 3000

// '/' : root directory 에 'Hello World!' 출력
app.get('/', (req, res) => {
  res.send('Hello World! ~~  ')
})

// mongoDB config 파일 불러오기
const config = require('./config/key');

// mongoDB 연결
const mongoose = require('mongoose')
// mongoose.connect('mongodb+srv://mongoUser:mongo123@boilerplate.r2i8h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
//   useNewUrlParser: true, useUnifiedTopology: true
// }).then(() => console.log('MongoDB Connected....'))  // then : 연결이 잘되면
//   .catch(err => console.log(err))

// config 를 적용하면 아래와 같이 URI를 가릴수 있다
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected....'))  // then : 연결이 잘되면
  .catch(err => console.log(err))

// 회원가입
const { User } = require("./models/User");
const bodyParser = require('body-parser');
// bodyParser Option 주기
app.use(bodyParser.urlencoded({extended: true}));
// application/x-www-form-urlencoded 데이터를 분석해서 가져오는 옵션
app.use(bodyParser.json());
// application/json 타입의 데이터를 분석해서 가져오는 옵션

app.post('/register', (req, res) => {
  // 회원가입할때 필요한 정보들을 Client에서 가져오면
  // 그것들을 데이터 베이스에 넣어준다.
  const user = new User(req.body)
  // save는 mongoDB save 함수를 이용해서 로그인 하는 User를 DB에 저장
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
  })
})

// 앱 app가 port 3000을 listen 하면 console 실행
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})