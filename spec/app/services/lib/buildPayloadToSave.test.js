const { uitPath, name } = resolveUitPath( __filename ); //eslint-disable-line no-undef
const isExistsLongUrl          = require( uitPath );
const { expect }        = require('chai');
const buildPayloadAndSave = require('../../../../app/services/lib/buildPayloadToSave');

describe.only( `The ${ name } function`, ()=>{

    it("should save the payload in db and return a property result", done=>{
      const items = {shortUrl: 'http:localhost:2300/test123', longUrl: 'https://www.facebook.com'};
        
      buildPayloadAndSave( items, (err, result)=>{
        expect(err).deep.equal(null);
        expect(result).haveOwnProperty('result');
        done();
      });
            
    });
  
  } );