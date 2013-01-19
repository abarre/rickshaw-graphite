// Configure RequireJS
require.config({
  baseUrl:'',
  urlArgs: "v="+(new Date()).getTime()
});

// Require libraries
require(['require', 'vendor/chai', 'vendor/mocha'], function(require,chai){

  // Chai
  assert = chai.assert;
  should = chai.should();
  expect = chai.expect;

  // Mocha
  mocha.setup('bdd');

  // Require base tests before starting
  require(['test/js/url-test'], function(url){
    // Start runner
    mocha.run();
  });

});
