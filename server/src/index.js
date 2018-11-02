require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const cookieParser = require('cookie-parser')

mongoose.Promise = Promise
mongoose.connect(process.env.MONGO_URL, { dbName: 'kpblog', useNewUrlParser: true }, err => {
  if (err) {
    console.log('몽고디비 연결 실패', err)
  } else {
    console.log('몽고디비 연결 성공')
  }
})

const app = express()

const postsRouter = require('./routes/posts')
const authRouter = require('./routes/auth')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser(process.env.COOKIE_SIGN_KEY))
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: process.env.COOKIE_SIGN_KEY,
  cookie: {
    maxAge: 86400000,
    httpOnly: true,
    secure: false
  }
}))

app.use('/api/posts', postsRouter)
app.use('/api/auth', authRouter)

app.listen(4000, () => {
  console.log('App listening on port 4000!');
});