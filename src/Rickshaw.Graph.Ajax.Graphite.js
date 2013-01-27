Rickshaw.Graph.Ajax.Graphite = Rickshaw.Class.create(Rickshaw.Graph.Ajax, {
  initialize: function($super, args) {
    this.onRickshawData = args.onData || function (d) {return d;};
    args.onData = this.onGraphiteData;
    $super(args);
  },

  onGraphiteData: function onGraphiteData (data) {
    if (data.length === 0) {
      this.onError(this);
    }

    var series = [],
        seriePoints;

    data.forEach( function (metric) {
      seriePoints = [];
      metric.datapoints.forEach( function (point) {
        seriePoints.push({y : point[0], x: point[1]});
      });
      series.push({
        "name" : metric.target,
        "data" : seriePoints,
        "color" : 'blue'
      });
    });
    return this.onRickshawData(series);
  }
});