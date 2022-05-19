const express = require("express")
const app = express()
const cors = require('cors')
const PORT = 4000;

const customerRouter = require("./router/customer")
const serviceRouter = require("./router/service")




const corsOptions = {
  origin: "http://localhost:4000",
  //다른 도메인 간의 쿠키 공유를 허용하는 옵션
  credentials: true
}

app.use(cors(corsOptions))

app.use(express.urlencoded({ extended: false }))
app.use("/customers", customerRouter);
app.use("/service", serviceRouter);

// const myLogger = function (req, res, next) {
//   // res.send('미들웨어')
//   console.log("미들웨어연결성공!")
//   next()
// };

// app.use(myLogger)

app.get('/', function (req, res, next) {
  res.send("서버 연동 성공")
})

app.listen(PORT, () => {
  console.log("서버연결되었음")
})