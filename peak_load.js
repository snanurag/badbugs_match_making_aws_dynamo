var AWS = require('aws-sdk');
AWS.config.update({ region: 'eu-west-1' });

var lambda = new AWS.Lambda({ region: 'eu-west-1' });

const startTime = new Date().getTime()
// create variable to hold data returned by the Lambda function
for (i = 0; i < 60; i++) {
  
  // lambdas[i] = new AWS.Lambda({ region: 'eu-west-1' });
  var pullParams = {
    FunctionName: 'search',
    InvocationType: 'RequestResponse',
    LogType: 'None',
    Payload: "{\"id\": \"test_"+i+ "\",\"age\": 1}"
  };
  lambda.invoke(pullParams, function (error, data) {
    if (error) {
      console.log(error);
    } else {
      pullResults = JSON.parse(data.Payload);
      const endTime = new Date().getTime()
      console.log("Data "+i+" : ")
      console.log(data.Payload)
      console.log("Total time : "+(endTime - startTime))
    }
  });
}
