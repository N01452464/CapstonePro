import jwt from 'jsonwebtoken';


export const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).send({ message: 'Authorization token not found.' });
  }
  try {
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN);
    req.user = decodedToken;
    next();
  } catch (err) {
    return res.status(401).send({ message: 'Invalid authorization token.' });
  }
};
