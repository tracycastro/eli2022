require('dotenv').config();

module.exports = function () {
  return {
    clientSecret: process.env.CLIENTSECRET,
    refreshToken: process.env.REFRESHTOKEN,
  };
};
