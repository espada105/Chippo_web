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

// 로그인
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Firebase Admin SDK로 사용자 확인
      const userRecord = await admin.auth().getUserByEmail(email);
      
      // 커스텀 토큰 생성
      const token = await admin.auth().createCustomToken(userRecord.uid);
      
      res.json({ token });
    } catch (error) {
      console.error('로그인 에러:', error);
      res.status(401).json({ 
        message: '로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.' 
      });
    }
  });
  
  module.exports = router;

module.exports = router; 