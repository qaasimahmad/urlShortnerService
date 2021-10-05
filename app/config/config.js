let config = {
  port:          process.env.PORT,
  elasticsearch: {
    host:         process.env.ES_HOST,
    userName:     process.env.ES_USERNAME, 
    password:     process.env.ES_PASSWORD,
    indexName:    'sandbox',
    documentType: 'urlData'
  }
};

module.exports = config;