const express = require('express');
const router = express.Router();
const { authenticateUser } = require('../middlewares/auth');

// 공개 라우트
router.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

// 보호된 라우트 예시
router.get('/protected', authenticateUser, (req, res) => {
    res.json({ message: '인증된 사용자입니다.', user: req.user });
});

module.exports = router;
