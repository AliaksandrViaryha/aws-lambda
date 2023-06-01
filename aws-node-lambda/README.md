
# Serverless Framework AWS NodeJS Example

This template demonstrates how to deploy a NodeJS function running on AWS Lambda using the traditional Serverless Framework. The deployed function does not include any event definitions as well as any kind of persistence (database). For more advanced configurations check out the [examples repo](https://github.com/serverless/examples/) which includes integrations with SQS, DynamoDB or examples of functions that are triggered in `cron`-like manner. For details about configuration of specific `events`, please refer to our [documentation](https://www.serverless.com/framework/docs/providers/aws/events/).

## Usage

### Deployment

In order to deploy the example, you need to run the following command:

```
$ serverless deploy
```

### You can chech endpoints:

endpoints:
  GET - https://bqolbkx2ud.execute-api.us-east-1.amazonaws.com/dev/posts
  GET - https://bqolbkx2ud.execute-api.us-east-1.amazonaws.com/dev/posts/{id}
  GET - https://dvqy25cju6.execute-api.us-east-1.amazonaws.com/swagger
  GET - https://dvqy25cju6.execute-api.us-east-1.amazonaws.com/swagger.json

functions:
  getAll: aws-node-lambda-dev-getAll (71 MB)
  getOne: aws-node-lambda-dev-getOne (71 MB)
  swaggerUI: aws-node-lambda-dev-swagger-ui (71 MB)
  swaggerJSON: aws-node-lambda-dev-swagger-json (71 MB)
```

### Invocation

After successful deployment, you can invoke the deployed function by using the following command:

```bash
serverless invoke --function hello
```

### Local development

You can invoke your function locally by using the following command:

```bash
serverless invoke local --function hello
```
