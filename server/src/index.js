require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

mongoose.Promise = Promise
mongoose.connect(process.env.MONGO_URL, { dbName: 'kpblog', useNewUrlParser: true }, err => {
  if (err) {
    console.log('몽고디비 연결 실패', err)
  } else {
    console.log('몽고디비 연결 성공')
  }
})

const app = express()

const indexRouter = require('./routes')
const postsRouter = require('./routes/posts')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', indexRouter)
app.use('/api/posts', postsRouter)

app.listen(4000, () => {
  console.log('App listening on port 4000!');
});