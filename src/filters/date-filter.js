const moment = require('moment');

module.exports = (value) => {
  const dateObject = moment(value);
  return `${dateObject.format('MMMM Do, YYYY h:mma')}`;
};
