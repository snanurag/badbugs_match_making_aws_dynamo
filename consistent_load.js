var AWS = require('aws-sdk');
AWS.config.update({ region: 'eu-west-1' });

var lambda = new AWS.Lambda({ region: 'eu-west-1' });

setInterval(request, 1000)
function request(){
    const startTime = new Date().getTime()
    // create variable to hold data returned by the Lambda function
    for (i = 0; i < 2; i++) {
      
      // lambdas[i] = new AWS.Lambda({ region: 'eu-west-1' });
      var pullParams = {
        FunctionName: 'search',
        InvocationType: 'RequestResponse',
        LogType: 'None',
        Payload: "{\"id\": \"test_"+startTime+"_"+i+ "\",\"age\": 1}"
      };
      lambda.invoke(pullParams, function (error, data) {
        if (error) {
          console.log(error);
        } else {
          const d = JSON.parse(data.Payload);
          console.log("Data : ")
          console.log(d)
          console.log("Total time : "+new Date().getSeconds()+" "+new Date().getMilliseconds())
        }
      });
    }
}

