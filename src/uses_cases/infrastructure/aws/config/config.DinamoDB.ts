import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
import { AWS_REGION } from "./awsKeys"

export const DynamoDBClientInitialized = new DynamoDBClient({ region: AWS_REGION })