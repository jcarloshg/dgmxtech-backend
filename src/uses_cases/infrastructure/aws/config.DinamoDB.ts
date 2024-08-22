

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
// import { AWS_REGION } from "./awsKeys";

export const DynamoDBClientInitialized = new DynamoDBClient({ region: "AWS_REGION" })
// new DynamoDBClient({
// region: AWS_BUCKET_REGION,
// region: AWS_BUCKET_REGION,
// credentials: {
//     accessKeyId: AWS_ACCESS_KEY_ID,
//     secretAccessKey: AWS_SECRET_ACCESS_KEY
// }
// })