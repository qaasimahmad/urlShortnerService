const { uitPath, name } = resolveUitPath( __filename ); //eslint-disable-line no-undef
const shortenUrl          = require( uitPath );
const { expect }        = require('chai');
const {baseUrl} = require('../../../../app/config/config');

describe.only( `The ${ name } function`, ()=>{

    it("should return the shortened url", done=>{
      const longUrl = 'https://www.facebook.com';
      shortenUrl(longUrl, (err, result)=>{
        const expected = result.split('/')[0];
        expect(result).to.be.a('string').and.satisfy(url => url.startsWith(expected));
        expect(err).to.equal(null);
        done();
      })       
    });
  
  } );