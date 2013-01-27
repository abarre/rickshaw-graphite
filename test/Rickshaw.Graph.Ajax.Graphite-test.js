describe('Rickshaw.Graph.Ajax.Graphite', function() {
  var server;

  function createNewGraph (onData) {
    return new Rickshaw.Graph.Ajax.Graphite({
      element: document.querySelector('#graph'),
      dataURL: 'http://example.com/data',
      onData: onData
    });
  }

  before(function () {
    server = sinon.fakeServer.create();
    server.respondWith([200, { "Content-Type": "application/json" },
        '[{"target": "stats.engine.hits", "datapoints": [[50.5, 1359202740], [61.600000000000001, 1359202750], [35.0, 1359202760]]}]']);
  });

  beforeEach(function () { $("#graph").empty();});

  after(function () {
    server.restore();
  });

  it('should call the server with the given url', function() {
    var callback = sinon.stub().returnsArg(0);
    var graph = createNewGraph(callback);

    server.respond();
    assert(callback.calledOnce);
  });

  it('should render a svg with one line', function () {
    var graph = createNewGraph();
    server.respond();
    //one path should be created
    $("#graph svg path").length.should.eql(1);
  });
});

