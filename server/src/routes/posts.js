
const express = require('express')
const router = express.Router()
const Post = require('../models/post')
const { ObjectId } = require('mongoose').Types

const checkObjectId = (req, res, next) => {
  const { id } = req.query
  if(!ObjectId.isValid(id)) {
    res.status(400)
    return null
  }
  return next()
}

router.get('/', async (req, res, next) => {
  const page = parseInt(req.query.page || 1, 10)
  const { tag } = req.query
  const query = tag ? { tags: tag } : {}
  if (page < 1) {
    res.status(400)
    return
  }
  try {
    const posts = await Post
      .find(query)
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .lean()
      .exec()
    const postCount = await Post.countDocuments().exec() // 마지막 페이지 알려주기
    const limitBodyLength = post => ({
      ...post,
      body: post.body.length < 200 ? post.body : `${post.body.slice(0, 200)}...`
    })
    res.set('Last-Page', Math.ceil(postCount / 10))
    res.send(posts.map(limitBodyLength));
  } catch (err) {
    res.status(500)
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  const { title, body, tags } = req.body
  const post = new Post({
    title, body, tags
  })
  try {
    await post.save()
    res.send(post);
  } catch (err) {
    res.status(500)
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  const { id } = req.params
  if (!ObjectId.isValid(id)) {
    res.status(400)
    res.send({ message: '400 Bad Request' })
  }
  try {
    const post = await Post.findById(id).exec()
    if (!post) {
      res.status(404)
      res.send({ message: '404 Not Found' });
    }
    res.send(post);
  } catch (err) {
    res.status(500)
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params
  try {
    await Post.findByIdAndRemove(id).exec()
    res.status(204)
  } catch (err) {
    res.status(500)
    next(err)
  }
})

router.patch('/:id', async (req, res, next) => {
  const { id } = req.params
  if (!ObjectId.isValid(id)) {
    res.status(400)
    res.send({ message: '400 Bad Request' })
  }
  try {
    const post = await Post.findByIdAndUpdate(id, req.body, {
      new: true
      // 이 값을 설정해야 업데이트된 객체를 반환한다.
      // 설정하지 않으면 업데이트 전의 객체를 반환한다.
    }).exec()
    if (!post) {
      res.status(404)
      res.send({ message: '404 Not Found' });
    }
    res.send(post);
  } catch (err) {
    res.status(500)
    next(err)
  }
})

module.exports = router