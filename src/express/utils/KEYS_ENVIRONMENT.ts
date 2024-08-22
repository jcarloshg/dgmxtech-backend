require('dotenv').config()

export const {
    PORT = 3000,
    SALT_ROUNDS = 10,
    JWT_SECRET_WORD = 'Este es una palabra segura en el entorno de DEV',
    NODE_ENV = 'dev',
} = process.env
