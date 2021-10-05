const { uitPath, name } = resolveUitPath( __filename );
const findById          = require( uitPath );
const { expect }        = require('chai');

describe.only( `The ${ name } function`, ()=>{

  it('should return only one result for a urlId passed since its unique', ()=>{
    const searchParam = 'GVED1';

    findById( searchParam, (err, result)=>{
      expect(err).deep.equal(undefined);
      expect(result).to.have.length(1);
      done();
    });
          
  });

  it('must contain longUrl, shortUrl,  and the urlId ', ()=>{

    const searchParam = 'GVED1';
    findById( searchParam, (err, result)=>{
      expect(err).deep.equal(undefined);
      expect(result).to.have.members(['longUrl','shortUrl', 'urlId']);
      done();
    });

  });

} );
