const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const consign = require('consign')
require('dotenv').config()


module.exports = () => {
  const app = express();

  app.set('port', process.env.API_PORT || config.get('server.port'));

  app.use(bodyParser.json());
  
  consign({ cwd: 'api' })
    .then('services')
    .then('controllers')
    .then('routes')
    .into(app)

  return app;
};