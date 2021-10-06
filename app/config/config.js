let config = {
  port:          process.env.PORT,
  baseUrl:       process.env.BASE_URL,
  elasticsearch: {
    host:         process.env.ES_HOST,
    userName:     process.env.ES_USERNAME, 
    password:     process.env.ES_PASSWORD,
    indexName:    'sandbox',
    documentType: 'urlData'
  }
};

module.exports = config;