const express = require('express');
const router = express.Router();

const saucesCtrl = require('../controllers/sauces');
const auth = require('../middleware/auth');

router.post('/', auth, saucesCtrl.createSauces );
router.get('/', auth, saucesCtrl.modifySauces);

  module.exports = router;