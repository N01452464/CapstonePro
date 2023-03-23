const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  const token = req.header('token');
  if (!token) {
    return res.status(401).send('Access Denied');
  }

  try {
    const accessToken = process.env.ACCESS_TOKEN || 'default_secret_key';
    const verifyToken = jwt.verify(token, accessToken);
    req.user = verifyToken;
    next();
  } catch(err) {
    res.status(400).send('Invalid token');
  }
}
