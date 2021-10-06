const { uitPath, name }   = resolveUitPath(__filename); // eslint-disable-line no-undef
const buildPayloadAndSave = require(uitPath);
const { expect }          = require('chai');

describe.only(`The ${name} function`, () => {
  const shortUrl = 'http:localhost:2300/api/test123';
  const longUrl  = 'https://www.facebook.com';

  it('should save the payload in db and return a property result', (done) => {
    const items = { shortUrl, longUrl };

    const expected = { shortUrl, message: 'shortened Url Created Successfully' };

    buildPayloadAndSave(items, (err, result) => {
      expect(err).deep.equal(null);
      expect(result).deep.equal(expected);
      done();
    });
  });
});
