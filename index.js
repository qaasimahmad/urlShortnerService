const express = require('express');
const config = require('./app/config/config');
const routes = require('./app/routes/user_account');
const logger = require('./app/Libraries/logger');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, Origin, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/api', routes);

app.listen(config.init_port);

logger.info(`Application is listening on port ${config.init_port}`);
