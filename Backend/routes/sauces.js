const express = require('express');
const router = express.Router();



const auth = require('../middleware/auth');
const saucesCtrl = require('../controllers/sauces');

router.post('/', auth, saucesCtrl.createSauces);
router.put('/:id', auth, saucesCtrl.modifySauces);
router.delete('/:id', auth, saucesCtrl.deleteSauces);
router.get('/:id', auth, saucesCtrl.getOneSauces);
router.get('/', auth, saucesCtrl.getAllSauces);


module.exports = router;