const axios = require("axios");
const fs = require("fs");

const base_url = process.env.API_MINI_HOST;

module.exports = (app) => {
  const concat = {};

  concat.concat_texts = () => {
    new Promise((resolve, reject) => resolve('Done'))
      .then(() => {
        do_request(`${base_url}/text/1`);
        delay(5000)
      })
      .then(() => {
        do_request(`${base_url}/text/2`)
        delay(5000)
      })
      .then(() => {
        do_request(`${base_url}/text/3`)
        delay(5000)
      })
      .catch((error) => {
        console.log(error)
      })
  };

  do_request = async (url) => {
    await axios
      .get(url)
      .then((response) => {
        const filePath = "./file/concat.text";
        fs.appendFileSync(filePath, response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  delay = (time) => {
    return new Promise(resolve =>
      setTimeout(resolve, time)
    )
  }

  return concat;
};
