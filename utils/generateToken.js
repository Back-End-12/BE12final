const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, 'febe15', {
    expiresIn: "3d"
  });
};

module.exports = generateToken;
