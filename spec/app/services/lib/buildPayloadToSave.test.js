const { uitPath, name }   = resolveUitPath(__filename); // eslint-disable-line no-undef
const buildPayloadAndSave = require(uitPath);
const { expect }          = require('chai');

describe.only(`The ${name} function`, () => {
  const shortUrl = 'http//:localhost:2300/api/test123';

  it('should save the payload in db and return a property result', (done) => {
    const longUrl = 'https://www.facebook.com';
    const items   = { shortUrl, longUrl };

    const expected = { shortUrl, message: 'shortened Url Created Successfully' };

    buildPayloadAndSave(items, (err, result) => {
      expect(err).deep.equal(null);
      expect(result).deep.equal(expected);
      done();
    });
  }).timeout(5000);

  it('should return an error if the url is invalid', (done) => {
    const longUrl = 'https://www.indicinia.com';
    const items   = { shortUrl, longUrl };

    buildPayloadAndSave(items, (err, result) => {
      expect(err).equal(err);
      expect(result).equal(undefined);
      done();
    });
  }).timeout(5000);
});
