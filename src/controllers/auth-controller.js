const { response, SUCCESS } = require('../core/response');

module.exports.login = (req, res) => {
  const user = {
    token: 'this.is.a.tok3n'
  };
  req.session.user = user;
  res.success(response(SUCCESS));
};