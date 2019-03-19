module.exports.index = (req, res) => {
  res.render('index');
};

module.exports.login = (req, res) => {
  res.render('login');
};

module.exports.admin = (req, res) => {
  res.render('admin');
};

module.exports.pageTwo = (req, res) => {
  res.render('page-two');
};
