const request = require('request');
const fs = require('fs');

const base_url = process.env.API_MINI_HOST;

module.exports = (app) => {
  const concat = {};

  concat.concat_texts = async () => {
    await do_request(
      `${base_url}/text/3`,
      await do_request(
        `${base_url}/text/2`,
        await do_request(`${base_url}/text/1`)
      )
    );
  };

  do_request = async (url) => {
    await request.get(url, (error, response) => {
      const filePath = './file/concat.text';
      fs.appendFileSync(filePath, response.body);
    });
  };

  return concat;
};
