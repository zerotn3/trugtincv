/**
 * This is comment for demo
 */

const express = require('express')
const router = express.Router()
const HomeController = require('../controllers/HomeController')
const R = require('../config/urls')


router.get(R.ROOT, HomeController.getIndexView)
router.get(R.PROJECT1, HomeController.getProject1)
router.get(R.MYCV, HomeController.getMycv)

module.exports = router
