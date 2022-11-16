// API key
const API_KEY = "pk.eyJ1IjoiamF4d2lsMjQiLCJhIjoiY2w3Z2ZlN3E4MDFnNTNvb2MweWwyemd6YiJ9.2HK6jLy9i0DRAtk5OcIjeQ"

// Connecting to S3
var AWS = require('aws-sdk');
AWS.config.update(
  {
    accessKeyId: "",
    secretAccessKey: "",
  }
);
var s3 = new AWS.S3();
s3.getObject(
  { Bucket: "gwufphearingaids", Key: "my-picture.jpg" },
  function (error, data) {
    if (error != null) {
      alert("Failed to retrieve an object: " + error);
    } else {
      alert("Loaded " + data.ContentLength + " bytes");
      // do something with data.Body
    }
  }
);