function Url(url) {
  this.url = url;
}

Url.prototype.parseParams = function() {};

Url.prototype.params = function() {
  var k, param, paramsArray, paramsString, v, _i, _len, _ref;
  if (!(this.parameters != null)) {
    this.parameters = {};
    paramsString = this.url.split('?')[1] || "";
    if (paramsString !== "") {
      paramsArray = paramsString.split('&');
      for (_i = 0, _len = paramsArray.length; _i < _len; _i++) {
        param = paramsArray[_i];
        _ref = param.split("="), k = _ref[0], v = _ref[1];
        k = decodeURIComponent(k);
        v = v ? decodeURIComponent(v) : '';
        if (this.parameters[k]) {
          if (this.parameters[k] instanceof String || typeof this.parameters[k] === "string") {
            this.parameters[k] = [this.parameters[k], v];
          } else {
            this.parameters[k].push(v);
          }
        } else {
          this.parameters[k] = v;
        }
      }
    }
  }
  return this.parameters;
};