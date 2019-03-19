const router = require('express').Router();
const pageController = require('../controllers/page-controller');
const mw = require('./middlewares/authentication');

router.get('/', mw.needsAuth, pageController.index);
router.get('/login', pageController.login);
router.get('/admin', mw.needsAuth, pageController.admin);
router.get('/page-two', mw.needsAuth, pageController.pageTwo);

module.exports = router;