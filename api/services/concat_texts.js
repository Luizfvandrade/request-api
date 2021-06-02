const axios = require("axios");
const fs = require("fs");

const base_url = process.env.API_MINI_HOST;

module.exports = () => {
  const concat = {};

  concat.concat_texts = async () => {
    await do_request(`${base_url}/text/1`);
    await do_request(`${base_url}/text/2`);
    await do_request(`${base_url}/text/3`);
  };
  
  do_request = async (url) => {
    const filePath = "./file/concat.text";
    const res = await axios.get(url)
    fs.appendFileSync(filePath, res.data)
  };

  return concat;
};
