require('dotenv').config()

export const {
    PORT = 3000,
    SALT_ROUNDS = 10,
    JWT_SECRET_WORD = 'Este es una palabra segura en el entorno de DEV',
    NODE_ENV = 'dev',
    AWS_REGION = "",
    AWS_ACCESS_KEY_ID = "",
    AWS_SECRET_ACCESS_KEY = "",
    AWS_BUCKET_NAME = "",
    AWS_DYNAMODB_USERS_TABLE_NAME = "",
} = process.env
