const successTypes = require('./success-types');
const errorTypes = require('./error-types');

function getKeyTypes(responseTypes) {
  return Object.keys(responseTypes).reduce((accu, curr) => {
    accu[curr] = curr;
    return accu;
  }, {});
}

function getResponse( i, message = null, data = null) {
  const types = {
    ...successTypes,
    ...errorTypes
  };
  const response = types[i];
  if (message) response.body.message = message;
  if (data) response.body.data = data;
  return response;
}

module.exports = {
  ...getKeyTypes(errorTypes),
  ...getKeyTypes(successTypes),
  response: (info, message = null, data = null) => {
    return getResponse(info, message, data);
  }
};
