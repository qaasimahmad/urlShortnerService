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
  it('should return result as created if insert is successful', ()=>{

    insertSingle( sampleIndexPayload, (err, result)=>{
      expect(err).deep.equal(undefined);
      expect(result).haveOwnProperty('result').equal('created');
      done();
    });
          
  })

  it('should return error if an error actually exists', ()=>{

    insertSingle( sampleIndexPayload, (err, result)=>{
      expect(err).deep.equal(err);
      expect(result).deep.equal(undefined);
      done();

    });
  })

} );
