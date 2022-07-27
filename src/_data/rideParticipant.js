const participantFetch = require('@11ty/eleventy-fetch');

module.exports = async function () {
  try {
    let participant = await participantFetch(
      'https://mssociety.donordrive.com/api/1.3/participants/195426',
      {
        duration: '1m', // 1 minute
        type: 'json', // also supports "text" or "buffer"
      }
    );

    return {
      goal: participant.fundraisingGoal,
      donations: participant.sumDonations,
    };
  } catch (e) {
    console.log('Failed getting DonorDrive Info, returning 0');
    return {
      goal: 0,
    };
  }
};
