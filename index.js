"use strict";

var patterns = require("./patterns");

function matchThis(toTest, pattern) {
  for (var key in pattern) {
    var p = new RegExp(pattern[key], "i");
    // console.log(p, toTest, p.test(toTest))
    if (p.test(toTest)) return key;
  }
  return null;
}

/*
  var userAgent = this.get("user-agent");
  var device = require("device_detect")(userAgent);
  output:
  {
    deviceType: "iPad",
    os: "iOS",
    browser: "Chrome"
  }
*/
module.exports = function(userAgent) {

  var device = matchThis(userAgent, patterns.device) || "Desktop";
  var os = matchThis(userAgent, patterns.os) || "Others";
  var browser = matchThis(userAgent, patterns.browsers) || "Others";

  return {
    device: device,
    os: os,
    browser: browser
  }

}
