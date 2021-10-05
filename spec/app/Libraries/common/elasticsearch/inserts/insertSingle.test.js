const { uitPath, name }                                    = resolveUitPath( __filename );
const insertSingle                                         = require( uitPath );
const { expect }                                           = require('chai');
const {elasticsearch:{indexName}}                          = require('../../../../../../app/config/config')
const deleteIndex                                          = require('../../../../../commons/dbInitializer');
const {validSampleIndexPayload, invalidSampleIndexPayload} = require('../../../../../commons/sampleIndexPayLoad');

beforeEach( () =>{
  deleteIndex(indexName, ()=>{});
})

describe.only( `The ${ name } function`, ()=>{
  it("should return data with property 'result' on succcessful indexing ", done=>{

    insertSingle( validSampleIndexPayload, (err, result)=>{
      expect(err).deep.equal(null);
      expect(result).haveOwnProperty('result');
      done();
    });
          
  })

  it("should return error on unsucccessful indexing ", done=>{

    insertSingle( invalidSampleIndexPayload, (err)=>{
      expect(err).deep.equal(err);
      done();
    });
          
  })

} );
