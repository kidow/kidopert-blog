
const express = require('express')
const router = express.Router()
const Post = require('../models/post')
const { ObjectId } = require('mongoose').Types
const Joi = require('joi')

router.get('/', async (req, res, next) => {
  try {
    const posts = await Post
      .find()
      .sort({ _id: -1 })
      .limit(10)
      .exec()
    res.send(posts);
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
  if (!ObjectId.isValid(id)) {
    res.status(400)
    res.send({ message: '400 Bad Request' })
  }
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