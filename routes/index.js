const express = require('express');
const router = express.Router();

const auth = require('./auth.route');
const role_base = require('./role.route');

router.get('/', (req, res) => {
  res.status(200).json({
    message: "Welcome to kuyliner apps"
  });
});

router.use(auth);
router.use(role_base);

module.exports = router;