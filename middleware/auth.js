const auth = (req, res, next) => {
  const isloggedIn = true;
  if (isloggedIn) {
    next();
  }else {
    res.status(401).json({
      status: 'error',
      message: 'Unauthorized access. Please log in.',
    });
  }
}
module.exports = auth;