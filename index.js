// require('express') : express 모듈을 가져온다
const express = require('express')
// express function을 이용해서 새로운 앱 app를 만든다.
const app = express()
// port 3000 사용한다.
const port = 3000

// '/' : root directory 에 'Hello World!' 출력
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// mongoDB 연결
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://mongoUser:mongo123@boilerplate.r2i8h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected....'))  // then : 연결이 잘되면
  .catch(err => console.log(err))

// 앱 app가 port 3000을 listen 하면 console 실행
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})