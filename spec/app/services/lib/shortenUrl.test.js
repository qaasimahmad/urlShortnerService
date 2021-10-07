const { uitPath, name } = resolveUitPath(__filename); // eslint-disable-line no-undef
const shortenUrl        = require(uitPath);
const { expect }        = require('chai');

describe(`The ${name} function`, () => {

  it('should return an error if the url is invalid', (done) => {
    const longUrl = 'https';

    shortenUrl(longUrl, (err, result) => {
      const expected = { status: 400, result: `url ${longUrl} is invalid!` };

      expect(err).to.deep.equal(expected);
      expect(result).to.equal(undefined);
      done();
    });
  });

  it('should return the shortened url if the url exists', (done) => {
    const longUrl = 'https://www.facebook.com';

    shortenUrl(longUrl, (err, result) => {
      const expected = result.split('/')[ 0 ];

      expect(result).to.be.a('string').and.satisfy((url) => url.startsWith(expected));
      expect(err).to.equal(null);
      done();
    });
  });
});

