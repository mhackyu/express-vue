module.exports.needsAuth = (req, res, next) => {
  let user = req.session.user;
  if (!user) {
    res.redirect(`/login`);
  } else {
    req.user = req.session.user;
    next();
  }
};
