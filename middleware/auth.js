const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) {
    // no token
    return res.status(401).json({ msg: 'unauthorized! no token found' });
  }
  try {
    const decodedToken = jwt.verify(token, config.get('jwtSecret'));
    console.log(`decodedToken.user is as follows:`);
    console.log(decodedToken.user);
    req.user = decodedToken.user;
    next();
  } catch (err) {
    // invalid token
    res.status(401).json({ msg: 'token invalid!' });
  }
};
