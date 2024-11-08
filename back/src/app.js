const express = require('express');
const cors = require('cors');
const { auth } = require('./config/firebase');
const firebaseConfig = require('./config/firebaseConfig');
const serviceAccount = require('../serviceAccountKey.json');
const app = express();
const admin = require('firebase-admin');
// 미들웨어 설정
app.use(cors());
app.use(express.json());

// Firebase 설정 제공
app.get('/firebase-config', (req, res) => {
  res.json(firebaseConfig);
});

// 테스트 라우트
app.get('/test', (req, res) => {
  console.log('테스트 요청 받음!');
  res.json({ message: '서버 테스트 성공!' });
});

// 회원가입 라우트
app.post('/auth/signup', async (req, res) => {
  try {
    console.log('회원가입 요청 받음:', req.body);
    const { email, password } = req.body;
    
    // 이메일 중복 체크
    try {
      const userExists = await auth.getUserByEmail(email);
      if (userExists) {
        return res.status(400).json({
          error: '회원가입 실패',
          message: '이미 등록된 이메일 주소입니다.'
        });
      }
    } catch (error) {
      // 사용자를 찾을 수 없는 경우 (정상적인 경우)
      if (error.code === 'auth/user-not-found') {
        // 새 사용자 생성 진행
        const userRecord = await auth.createUser({
          email,
          password,
          emailVerified: false,
          disabled: false
        });

        console.log('사용자 생성 성공:', userRecord.uid);
        
        return res.status(201).json({
          message: '회원가입 성공',
          uid: userRecord.uid,
          email: userRecord.email
        });
      }
    }
    
  } catch (error) {
    console.error('회원가입 에러:', error);
    let errorMessage = '회원가입 처리 중 오류가 발생했습니다.';
    
    // Firebase 에러 메시지 한글화
    if (error.code === 'auth/email-already-exists') {
      errorMessage = '이미 등록된 이메일 주소입니다.';
    } else if (error.code === 'auth/invalid-email') {
      errorMessage = '유효하지 않은 이메일 주소입니다.';
    } else if (error.code === 'auth/invalid-password') {
      errorMessage = '비밀번호는 6자 이상이어야 합니다.';
    }
    
    res.status(400).json({ 
      error: '회원가입 실패', 
      message: errorMessage 
    });
  }
});





app.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Firebase Admin SDK로 사용자 확인
    const userRecord = await admin.auth().getUserByEmail(email);
    
    // 커스텀 토큰 생성
    const token = await admin.auth().createCustomToken(userRecord.uid);
    
    res.json({ 
      success: true,
      token,
      message: '로그인 성공'
    });

  } catch (error) {
    console.error('로그인 에러:', error);
    res.status(401).json({ 
      success: false,
      message: '로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.'
    });
  }
});





const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`서버가 포트 ${PORT}에서 실행중입니다.`);
  console.log(`테스트 URL: http://localhost:${PORT}/test`);
});

// 에러 핸들링 추가
app.use((err, req, res, next) => {
  console.error('서버 에러:', err);
  res.status(500).json({ error: '서버 에러 발생' });
}); 