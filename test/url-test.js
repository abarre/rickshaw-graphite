describe('Url', function() {
  describe('params', function() {
    it('should accept an url with params', function() {
      new Url('http://test.com?test=2').params().should.be.deep.equal({
        'test': '2'
      });
    });
    it('should accept an url without params', function() {
      new Url('http://test.com').params().should.be.deep.equal({});
    });
    it('should accept an url with duplicate params', function() {
      new Url('http://test.com?test=2&test=3').params().should.be.deep.equal({
        'test': ['2', '3']
      });
    });
    it('should accept an url with params without value', function() {
      new Url('http://test.com?test=2&test=').params().should.be.deep.equal({
        'test': ['2', '']
      });
      new Url('http://test.com?test').params().should.be.deep.equal({
        'test': ''
      });
    });
    it('should decode the params', function() {
      new Url('http://test.com?url=http%3A%2F%2Fw3schools.com%2Fmy%20test.asp%3Fname%3Dst%C3%A5le%26car%3Dsaab').params().should.be.deep.equal({
        'url': 'http://w3schools.com/my test.asp?name=ståle&car=saab'
      });
    });
  });
});
