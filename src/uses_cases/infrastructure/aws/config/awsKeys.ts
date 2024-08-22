require('dotenv').config()

export const {

    AWS_REGION = "",
    AWS_ACCESS_KEY_ID = "",
    AWS_SECRET_ACCESS_KEY = "",

    // name tables
    AWS_DYNAMODB_USER_TABLE_NAME = "",
    AWS_DYNAMODB_TODO_TABLE_NAME = "",

    // BUCKET
    AWS_BUCKET_NAME = "",

} = process.env;