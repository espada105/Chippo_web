const express = require('express');
const router = express.Router();
const { auth } = require('../config/firebase');
const admin = require('firebase-admin');
// 회원가입
router.post('/signup', async (req, res) => {
    try {
    const { email, password } = req.body;
    
    // Firebase Auth를 사용하여 새 사용자 생성
    const userRecord = await auth.createUser({
        email,
        password,
    });

    res.status(201).json({
        message: '회원가입 성공',
        uid: userRecord.uid
    });
    } catch (error) {
    console.error('회원가입 에러:', error);
    res.status(400).json({
        error: '회원가입 실패',
        message: error.message
    });
    }
});
