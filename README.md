1. Install aws cli on your local `pip3 install awscli`
2. Run `aws configure`
3. Create access key and secret in your aws console at `IAM ->Users-> <user> -> Security credentials` and feed it to cli. It will finally create .aws/credentials file.
4. Install nodejs at local
5. Install aws-sdk using `npm install aws-sdk`
6. Run peak load test using `node peak.js`
7. Run consistent load test using `node consistent_load.js`