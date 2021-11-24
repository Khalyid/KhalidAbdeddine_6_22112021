const express = require('express');
const router = express.Router();

const saucesCtrl = require('../controllers/sauces');

router.post('/', saucesCtrl.createSauces );
router.get('/', saucesCtrl.modifySauces);

  module.exports = router;