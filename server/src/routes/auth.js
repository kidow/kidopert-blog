const express = require('express')
const router = express.Router()

router.post('/login', (req, res) => {
  const { password } = req.body
  if (process.env.ADMIN_PASS === password) {
    req.session.logged = true
    res.json({ success: true })
  } else {
    res.status(401).send({ success: false })
  }
})

router.get('/check', (req, res) => {
  res.json({ logged: req.session.logged });
})

router.post('/logout', (req, res) => {
  req.session.destroy()
  res.status(204) // No Content
  res.redirect('/')
})

module.exports = router