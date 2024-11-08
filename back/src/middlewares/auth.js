const { auth } = require('../config/firebase');

const authenticateUser = async (req, res, next) => {
    try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: '인증 토큰이 없습니다.' });
    }

    const token = authHeader.split('Bearer ')[1];
    const decodedToken = await auth.verifyIdToken(token);
    req.user = decodedToken;
    next();
    } catch (error) {
    console.error('인증 에러:', error);
    res.status(401).json({ error: '인증에 실패했습니다.' });
    }
};

module.exports = {
  authenticateUser
};
