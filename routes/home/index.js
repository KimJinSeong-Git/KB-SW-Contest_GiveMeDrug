"use strict";

const express = require('express');
const router = express.Router();

const ctrl = require('./home.ctrl');

router.get('/', ctrl.home);

router.get('/login', ctrl.login);

// 외부에서 사용 가능하도록 설정
module.exports = router;