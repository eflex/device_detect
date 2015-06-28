## Simple Device Detector
  Simple Device Detector that returns the device, os, and browser of a visitor base of the user-agent header.

## Quick Start

  Installation:

```bash
$ npm install --save eflex/device_detect
```


```javascript
var detector = require("device_detect");
var device = detector(this.get('user-agent'))
this.body = device;

// output: {device: "iPad", os: "iOS", browser: "Chrome"}
```
