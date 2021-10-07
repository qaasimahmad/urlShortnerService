const config = {
  port:         process.env.PORT,
  baseUrl:      process.env.BASE_URL,
  elasticUrl:   process.env.ELASTIC_URL,
  indexName:    'sandbox',
  documentType: 'urlData'
  
};

module.exports = config;
