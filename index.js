const express = require('express');
const config  = require('./app/config/config');
const routes  = require('./app/routes/urlShortner');
const logger  = require('./app/Libraries/logger');

const app = express();

const {
  elasticUrl, indexName,
} = config;

const { indexExists } = require('./app/Libraries/common/elasticsearch/connection');

indexExists(indexName, ()=>{

});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, Origin, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/api', routes);

app.listen(config.port);

logger.info(`Application is listening on port ${config.port}`);
