const DonorDriveFetch = require('@11ty/eleventy-fetch');

module.exports = async function () {
  try {
    let json = await DonorDriveFetch(
      'https://mssociety.donordrive.com/api/1.3/participants/195426/donors',
      {
        duration: '1m', // 1 minute
        type: 'json', // also supports "text" or "buffer"
      }
    );
    return json;
  } catch (e) {
    console.log('Failed getting DonorDrive Info, returning 0');
    return {
      json: 0,
    };
  }
};
