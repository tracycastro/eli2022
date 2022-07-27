module.exports = (value) => {
  const dateObject = new Date(value * 1000).toISOString().substr(11, 8);
  return dateObject;
};
