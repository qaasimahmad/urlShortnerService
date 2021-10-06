const { uitPath, name } = resolveUitPath(__filename); // eslint-disable-line no-undef
const findByParam       = require(uitPath);
const { expect }        = require('chai');

describe.only(`The ${name} function`, () => {
  it('should return the longUrl that matches the urlId passed', (done) => {
    const searchParam = 'test123';
    const expected    = 'https://www.facebook.com';

    findByParam(searchParam, (err, result) => {
      expect(err).to.equal(null);
      expect(result).to.be.a('string').and.equal(expected);
      done();
    });
  });
});
