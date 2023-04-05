

const jwt = require('jsonwebtoken');

function isAdmin(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Authorization token not found.' });
  }
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (decodedToken.role !== 'admin') {
      return res.status(403).json({ message: 'You are not authorized to perform this operation.' });
    }
    req.user = decodedToken;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid authorization token.' });
  }
}

module.exports = { isAdmin };
