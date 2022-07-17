import jwt from 'jsonwebtoken';

const tokenVerify = (req, res, next) => {

  const token = req.cookies['troov-token'];
  if (!token) return res.status(401).send('Access denied. No token provided.');

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    console.log('err:', err)
    res.status(400).send('Invalid token.');
  }
}

const generateAccessToken = (user, statusCode, res) => {
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, { expiresIn: '1h' });

  const optionsCookie = {
    expires: new Date(
      Date.now() +  24 * 60 * 60 * 1000
    ),
    httpOnly: true
  };
  
  res.cookie('troov-token', {token: token, user: user}, optionsCookie).send({ id: user._id, name: user.name }).status(statusCode);
  return
}

export { tokenVerify, generateAccessToken };