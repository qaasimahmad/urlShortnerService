const { uitPath, name }                                      = resolveUitPath(__filename); // eslint-disable-line no-undef
const insertSingle                                           = require(uitPath);
const { expect }                                             = require('chai');
const { validSampleIndexPayload, invalidSampleIndexPayload } = require('../../../../../commons/sampleIndexPayLoad');
const { indexName }                                          = require('../../../../../../app/config/config');

const { indexExists } = require('../../../../../../app/Libraries/common/elasticsearch/connection');

indexExists(indexName, ()=>{});

describe(`The ${name} function`, () => {
  it("should return data with property 'result' on succcessful indexing ", (done) => {
    insertSingle(validSampleIndexPayload, (err, result) => {
      expect(err).deep.equal(null);
      expect(result).haveOwnProperty('result');
      done();
    });
  });

  it('should return error on unsucccessful indexing ', (done) => {
    insertSingle(invalidSampleIndexPayload, (err) => {
      expect(err).deep.equal(err);
      done();
    });
  });
});

