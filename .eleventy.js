const dateFilter = require('./src/filters/date-filter.js');
const secondFilter = require('./src/filters/second-filter.js');

module.exports = (config) => {
  config.addPassthroughCopy('./src/css/');
  config.addFilter('dateFilter', dateFilter);
  config.addFilter('secondFilter', secondFilter);
  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
