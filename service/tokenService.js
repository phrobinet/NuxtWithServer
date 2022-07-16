import jwt from 'jsonwebtoken';

const tokenVerify = (req, res, next) => {
  const token = req.header('troov-token');
  if (!token) return res.status(401).send('Access denied. No token provided.');

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send('Invalid token.');
  }
}

const generateAccessToken = (user, statusCode, res) => {
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
    expiresIn: '1h'
  });

  const optionsCookie = {
    expires: new Date(
      Date.now() +  24 * 60 * 60 * 1000
    ),
    httpOnly: true
  };

  res.send({ id: user._id, name: user.name }).cookie('troov-token', token, optionsCookie).status(statusCode);
}

export { tokenVerify, generateAccessToken };