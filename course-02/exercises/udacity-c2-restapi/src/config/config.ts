
export const config = {
  "dev": {
    "username": process.env.POSTGRES_USERNAME_DEV,
    "password": process.env.POSTGRES_PASSWORD_DEV,
    "database": "cloudcourse",
    "host": "rds-postgres-dev.cuiuucc3xidk.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "us-east-1",
    "aws_profile": "default",
    "aws_media_bucket": "s3-egfwd-dev"
  },
  "jwt": {
    "secret": process.env.JWT_SECRET_DEV
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "cloudcourse",
    "host": "",
    "dialect": "postgres"
  }
}
