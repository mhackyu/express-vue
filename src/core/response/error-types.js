module.exports = {
  INTERNAL_SERVER_ERROR: {
    status: 500,
    body: {
      code: -1,
      message: 'Internal server error.'
    }
  },
  NOT_FOUND: {
    status: 404,
    body: {
      code: -2,
      message: 'Not found.'
    }
  },
  UNAUTHORIZED: {
    status: 401,
    body: {
      code: -3,
      message: 'Unauthorized'
    }
  },
  INVALID_CREDENTIALS: {
    status: 401,
    body: {
      code: -4,
      message: 'Invalid email or password.'
    }
  },
  MAIL_body: {
    status: 500,
    body: {
      code: -4,
      message: 'Error sending email.'
    }
  },
  ACCOUNT_VERIFY_FAIL: {
    status: 400,
    body: {
      code: -5,
      message: 'Account verification failed.'
    }
  },
  INVALID_TOKEN: {
    status: 404,
    body: {
      code: -6,
      message: 'Invalid token.'
    }
  },
  EMAIL_EXISTS: {
    status: 200,
    body: {
      code: -7,
      message: 'Email already exists.'
    }
  },
};