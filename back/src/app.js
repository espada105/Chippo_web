const cors = require('cors');
const { auth } = require('./config/firebase');
const firebaseConfig = require('./config/firebaseConfig');
const serviceAccount = require('../serviceAccountKey.json');
const admin = require('firebase-admin');
// 미들웨어 설정
app.use(cors());
app.use(express.json());
// Firebase 설정 제공
app.get('/firebase-config', (req, res) => {
  res.json(firebaseConfig);
// 테스트 라우트
app.get('/test', (req, res) => {
  console.log('테스트 요청 받음!');
  res.json({ message: '서버 테스트 성공!' });
});
