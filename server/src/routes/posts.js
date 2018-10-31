const express = require('express')
const router = express.Router()

let postId = 1

const posts = [
  {
    id: 1,
    title: '제목',
    body: '내용'
  }
]

router.get('/', (req, res) => {
  res.send(posts)
})

router.post('/', (req, res) => {
  const { title, body } = req.body
  postId += 1
  const post = { id: postId, title, body }
  posts.push(post)
  res.json(posts);
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  const post = posts.find(p => p.id.toString() === id)
  if (!post) {
    res.status = 404
    res.send({ message: '포스트가 존재하지 않습니다.' });
    return
  }
  res.json(post)
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  const index = posts.findIndex(p => p.id.toString() === id)
  if (index === -1) {
    res.status = 404
    res.send({ message: '포스트가 존재하지 않습니다.' });
    return
  }
  posts.splice(index, 1)
  res.status = 204
})

router.put('/:id', (req, res) => {
  const { id } = req.params
  const index = posts.findIndex(p => p.id.toString() === id)
  if (index === -1) {
    res.status = 404
    res.send({ message: '포스트가 존재하지 않습니다.' });
    return
  }
  posts[index] = {
    id,
    ...req.body
  }
  res.send(posts[index]);
})

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const index = posts.findIndex(p => p.id.toString() === id)
  if (index === -1) {
    res.status = 404
    res.send({ message: '포스트가 존재하지 않습니다.' })
    return
  }
  posts[index] = {
    ...posts[index],
    ...req.body
  }
  res.send(posts[index]);
})

module.exports = router