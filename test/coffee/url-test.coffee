define ['src/js/url'], (Url) ->
	
	describe 'Url', ->
		describe 'getParams', ->
			it 'should accept an url with params', ->
				new Url('http://test.com?test=2').getParams().should.be.deep.equal {'test': '2'}

			it 'should accept an url without params', ->
				new Url('http://test.com').getParams().should.be.deep.equal {}

			it 'should accept an url with duplicate params', ->
				new Url('http://test.com?test=2&test=3').getParams().should.be.deep.equal {'test': ['2', '3']}

			it 'should accept an url with params without value', ->
				new Url('http://test.com?test=2&test=').getParams().should.be.deep.equal {'test': ['2', '']}
				new Url('http://test.com?test').getParams().should.be.deep.equal {'test': ''}

			it 'should decode the params', ->
				new Url('http://test.com?url=http%3A%2F%2Fw3schools.com%2Fmy%20test.asp%3Fname%3Dst%C3%A5le%26car%3Dsaab')
					.getParams().should.be.deep.equal {'url': 'http://w3schools.com/my test.asp?name=ståle&car=saab'}