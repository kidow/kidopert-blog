const mongoose = require('mongoose')

const Post = new mongoose.Schema({
  title: String,
  body: String,
  tags: [String],
  createdAt: {
    type: Date,
    default: new Date()
  }
})

module.exports = mongoose.model('Post', Post) 
// 첫 번째 파라미터는 스키마 이름, 두 번째 파라미터는 스키마 객체