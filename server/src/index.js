const express = require('express')

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