const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('홈');
})

router.get('/about/:name?', (req, res) => {
  const { name } = req.params
  name ? res.send(`${name}의 소개`) : res.send('소개')
})

module.exports = router