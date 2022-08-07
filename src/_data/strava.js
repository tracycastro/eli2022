const Cache = require('@11ty/eleventy-fetch');

require('dotenv').config();

module.exports = async function () {
  let url2 = 'https://www.strava.com/oauth/token';
  let json2 = await Cache(url2, {
    duration: '1h',
    type: 'json',
    fetchOptions: {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: '67876',
        client_secret: `${process.env.CLIENTSECRET}`,
        refresh_token: `${process.env.REFRESHTOKEN}`,
        grant_type: 'refresh_token',
      }),
    },
  });

  let url3 = `https://www.strava.com/api/v3/athlete/activities?access_token=${json2.access_token}`;
  let rides = await Cache(url3, {
    duration: '1h', // 1 day
    type: 'json',
  });
  console.log(rides);
  return rides;
};
