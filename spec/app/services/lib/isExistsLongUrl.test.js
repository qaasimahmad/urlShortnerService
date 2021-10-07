const { uitPath, name } = resolveUitPath(__filename); // eslint-disable-line no-undef
const isExistsLongUrl   = require(uitPath);
const { expect }        = require('chai');

describe(`The ${name} function`, () => {
  it('should return result from search', (done) => {
    const searchParam = 'https://www.facebook.com';
    const expected    = {
      longUrl:   'https://www.facebook.com',
      shortUrl:  'bitlyshorturl/GVED1',
      urlId:     'GVED4',
      metaData:  {},
      createdAt: '2021-10-05T22:41:43.109Z',
      updatedAt: '2021-10-05T22:41:43.109Z',
    };

    isExistsLongUrl(searchParam, (err, result) => {
      expect(err).equal(null);
      expect(result).to.deep.include(expected);
      expect(result).to.have.length(2);
      done();
    });
  });

  it('should return error if an invalid url is passed', (done) => {
    const searchParam = 'https://www.facebook.coms';

    isExistsLongUrl(searchParam, (err, result) => {
      expect(err).to.equal(err);
      expect(result).to.have.length(0);
      done();
    });
  });
});
