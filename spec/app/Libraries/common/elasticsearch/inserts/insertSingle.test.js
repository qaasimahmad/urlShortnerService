const { uitPath, name }           = resolveUitPath( __filename );
const insertSingle                = require( uitPath );
const { expect }                  = require('chai');
const {elasticsearch:{indexName}} = require('../../../../../../app/config/config')
const deleteIndex                 = require('../../../../../commons/dbInitializer');
const sampleIndexPayload          = require('../../../../../commons/sampleIndexPayLoad');

beforeEach( () =>{
  deleteIndex(indexName, ()=>{});
})

describe.only( `The ${ name } function`, ()=>{
  it("should return data with property 'result' on succcessful indexing ", ()=>{

    insertSingle( sampleIndexPayload, (err, result)=>{
      expect(err).deep.equal(undefined);
      expect(result).haveOwnProperty('result').equal('created');
      done();
    });
          
  })

  it("should return error if an error occurs", ()=>{

    insertSingle( sampleIndexPayload, (err, result)=>{
      expect(err).deep.equal(err);
      expect(result).deep.equal(undefined);
      done();

    });
  })

} );
