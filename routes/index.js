const {Router} = require('express')
const indexController = require('../controllers/index')
const router = Router();

router.get('/', indexController.index)

module.exports = router