const { uitPath, name } = resolveUitPath( __filename );
const findById          = require( uitPath );
const { expect }        = require('chai');

describe.only( `The ${ name } function`, ()=>{

  it("should return only one result for a urlId passed since its unique", done=>{
    const searchParam = 'GVED4';

    findById( searchParam, (err, result)=>{
      expect(err).deep.equal(null);
      expect(result).to.have.length(0);
      done();
    });
          
  });

} );
