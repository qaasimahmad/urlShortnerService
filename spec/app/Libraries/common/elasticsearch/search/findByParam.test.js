const { uitPath, name } = resolveUitPath(__filename); // eslint-disable-line no-undef
const findByParam       = require(uitPath);
const { expect }        = require('chai');

describe.only(`The ${name} function`, () => {
  it('should return only one result for a urlId passed since its unique', (done) => {
    const searchParam = { 'urlId.keyword': 'GVED4' };

    const expected = {
      longUrl:   'https://www.facebook.com',
      shortUrl:  'bitlyshorturl/GVED1',
      urlId:     'GVED4',
      metaData:  {},
      createdAt: '2021-10-05T22:41:43.109Z',
      updatedAt: '2021-10-05T22:41:43.109Z',
    };

    findByParam(searchParam, (err, result) => {
      expect(result).to.deep.include(expected);
      expect(result).to.have.length(1);
      expect(err).equal(null);
      done();
    });
  });
});


